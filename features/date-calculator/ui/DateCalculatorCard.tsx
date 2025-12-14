import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

import { Profile } from '@/features/profile/type';
import ProfileCard from '@/features/profile/ui/Card';

import MilitaryCalculator from './Calculator';

const mockSelectedUser: Profile = {
  id: '12344',
  name: '홍길동',
  militaryBranch: '육군',
  militaryType: '병사',
  imageUrl: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4',
  enlistmentDate: new Date('2025-10-15T00:00:00.000Z'),
  dischargeDate: new Date('2027-08-09T00:00:00.000Z'),
  isRepresentative: true,
};

export default function DateCalculatorSection() {
  return (
    <View className="my-4">
      {/* 헤더 */}
      <View className="flex flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold">전역일 계산기</Text>
        <View className="flex flex-row gap-2">
          <Text>편집하기</Text>
          <FontAwesome name="arrow-right" size={16} color="black" />
        </View>
      </View>
      {/* 계산기 + 프로필 section */}
      <Link
        href={{
          pathname: `/profile/[id]`,
          params: { id: '12344' },
        }}
      >
        <View className="p-4 rounded-lg bg-blue-600 w-full">
          <ProfileCard {...mockSelectedUser} />
          <MilitaryCalculator {...mockSelectedUser} />
        </View>
      </Link>
    </View>
  );
}
