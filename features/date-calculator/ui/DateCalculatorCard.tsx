import { useEffect, useState } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

import USER_API from '@/api/user';
import { GetUserDto } from '@/api/user/type';
import ProfileCard from '@/features/profile/ui/Card';

import MilitaryCalculator from './Calculator';

export default function DateCalculatorSection() {
  const [userList, setUserList] = useState<GetUserDto[]>([]);

  const getUserList = async () => {
    try {
      const users = await USER_API.getList();
      console.log('users', users);
      setUserList(users.data);
    } catch (error) {
      console.error('Failed to fetch user list:', error);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

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
      <FlatList
        data={userList}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-4" />}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: `/profile/[id]`,
              params: { id: item.id },
            }}
          >
            <View className="p-4 rounded-lg bg-blue-600 w-80">
              <ProfileCard {...item} />
              <MilitaryCalculator {...item} />
            </View>
          </Link>
        )}
      />
    </View>
  );
}
