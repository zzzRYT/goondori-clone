import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

export default function DateCalculatorSection() {
  return (
    <View className="my-4">
      {/* 헤더 */}
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold">전역일 계산기</Text>
        <View className="flex flex-row gap-2">
          <Text>편집하기</Text>
          <FontAwesome name="edit" size={16} color="black" />
        </View>
      </View>
      {/* 계산기 + 프로필 section */}
      <View className="p-4 rounded-lg bg-blue-600 w-full">
        {/* 프로필 영역 */}
        <View className="flex flex-row gap-4">
          <View className="bg-gray-200 rounded-full p-1 w-24 h-24 flex justify-center items-center">
            <Image
              source={require('@/assets/images/react-logo.png')}
              className="w-full h-full"
              contentFit="cover"
            />
          </View>
          <View className="flex flex-row flex-1 relative">
            <View className="flex flex-col gap-2 justify-center items-start">
              <View className="flex flex-row gap-1">
                <Text className="p-1 text-white">민간인</Text>
                <View className="bg-green-500 rounded-sm p-1">
                  <Text className="text-white font-bold">대표</Text>
                </View>
              </View>
              <View className="w-full">
                <Text className="text-white font-bold text-3xl">
                  군돌이 4433
                </Text>
              </View>
            </View>
            <View className="absolute right-0 top-0">
              <FontAwesome name="cog" size={16} color="white" />
            </View>
          </View>
        </View>
        {/* 계산기 영역 */}
        <View className="mt-4">
          <View className="flex flex-row justify-between">
            <View className="flex flex-row gap-2 items-end">
              <Text className="text-white text-xl font-bold">전역</Text>
              <Text className="text-white align-bottom">2022년 09월 01일</Text>
            </View>
            <View>
              <Text className="text-white text-xl font-bold">D-123</Text>
            </View>
          </View>
          <View className=" bg-white rounded-lg flex justify-center relative h-10 mt-2 overflow-hidden">
            <View className="absolute top-0 left-0 h-full bg-gray-200 w-[80.39229855%]" />
            <Text className="text-black font-bold z-2 pl-4">80.39229855%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
