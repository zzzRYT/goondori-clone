import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeHeader() {
  return (
    <View className="flex flex-row justify-between p-4 border-b border-gray-200">
      <View className="flex flex-row items-center gap-2">
        <Text>
          <FontAwesome name="yelp" size={30} color="black" />
        </Text>
        <Text className="text-xl font-bold">군돌이</Text>
      </View>
      <Link href="/setting">
        <FontAwesome name="cog" size={30} color="black" />
      </Link>
    </View>
  );
}
