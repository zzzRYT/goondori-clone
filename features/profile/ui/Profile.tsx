import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import MainProgress from '@/components/progress/MainProgress';
import DisplayAd from '@/features/ad/DisplayAd';

function ItemDetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex flex-row gap-2 items-center w-full">
      <Text className="text-gray-600">{label}</Text>
      <Text className="text-gray-600">{value}</Text>
    </View>
  );
}

function ItemDetailCol({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex flex-col gap-2 items-center">
      <Text>{label}</Text>
      <Text className="text-gray-600">{value}</Text>
    </View>
  );
}

interface ProfileDetailProps {
  id: string;
}

export default function ProfileDetail({ id }: ProfileDetailProps) {
  return (
    <>
      {/* 광고 영역 */}
      <View className="m-2 p-2">
        <DisplayAd />
      </View>
      {/* 프로필 상세 영역 */}
      <View>
        <View className="flex flex-row w-full">
          <View className="flex-1 flex justify-center items-center">
            <View className="w-36 h-36 bg-gray-600 rounded-full overflow-hidden ">
              <Image source={require('@/assets/images/react-logo.png')} />
            </View>
          </View>
          <View className="flex flex-col justify-center items-start gap-2 flex-1">
            <Text className="text-xl">민간인</Text>
            <Text className="text-3xl font-bold">군돌이 {id}</Text>
            <View className="flex flex-col gap-1">
              <ItemDetailRow label="입대" value="2021.03.02" />
              <ItemDetailRow label="전역" value="2022.09.01" />
            </View>
          </View>
        </View>
      </View>
      {/* progress 영역*/}
      <View className="bg-blue-600 py-6 px-4 my-4">
        <Text className="font-bold text-white">복무 진행률</Text>
        <MainProgress percent={'65.4321'} />
        <View className="flex flex-row w-full gap-4 mt-4">
          <View className="flex-1">
            <Text className="text-white">다음 승급</Text>
            <MainProgress percent={'30.1234'} />
          </View>
          <View className="flex-1">
            <Text className="text-white">다음 휴가</Text>
            <MainProgress percent={'80.5678'} />
          </View>
        </View>
      </View>
      {/* 추가 정보 영역 */}
      <View className="p-4">
        <View className="flex flex-col justify-center items-center gap-4  w-full px-10">
          <View className="flex flex-row gap-3 justify-between w-full">
            <ItemDetailCol label="549" value="전체 복무일" />
            <ItemDetailCol label="549" value="현재 복무일" />
            <ItemDetailCol label="0" value="남은 복무일" />
          </View>
          <View className="flex flex-row gap-3 justify-between w-full">
            <ItemDetailCol label="0" value="계급 진급일" />
            <ItemDetailCol label="0" value="남은 일과일" />
            <ItemDetailCol label="-" value="다음 휴가일" />
          </View>
        </View>
      </View>
      <View className="w-full flex flex-row justify-center items-center border-t-2 border-gray-300 p-4 gap-2">
        <Text>자세히 보기</Text>
        <FontAwesome name="arrow-right" size={16} color="black" />
      </View>
    </>
  );
}
