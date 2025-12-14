import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

import { GetUserDto } from '@/api/user/type';

export default function ProfileCard({
  name,
  imageUrl,
  isRepresentative,
}: GetUserDto) {
  return (
    <>
      <View className="flex flex-row gap-4">
        <View className="bg-gray-200 rounded-full p-1 w-24 h-24 flex justify-center items-center">
          <Image
            source={
              imageUrl
                ? { uri: imageUrl }
                : require('@/assets/images/react-logo.png')
            }
            className="w-full h-full"
            contentFit="cover"
          />
        </View>
        <View className="flex flex-row flex-1 relative">
          <View className="flex flex-col gap-2 justify-center items-start">
            <View className="flex flex-row gap-1">
              <Text className="p-1 text-white">민간인</Text>
              {isRepresentative && (
                <View className="bg-green-500 rounded-sm p-1">
                  <Text className="text-white font-bold">대표</Text>
                </View>
              )}
            </View>
            <View className="w-full">
              <Text className="text-white font-bold text-3xl">{name}</Text>
            </View>
          </View>
          <Link
            href="/modal"
            onPress={(e) => {
              e.stopPropagation();
            }}
            className="absolute right-0 top-0 p-2"
          >
            <FontAwesome name="ellipsis-v" size={16} color="white" />
          </Link>
        </View>
      </View>
    </>
  );
}
