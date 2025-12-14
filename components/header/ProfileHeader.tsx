import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function ProfileHeader() {
  const router = useRouter();

  const handlerBack = () => {
    router.back();
  };

  return (
    <View className="flex flex-row justify-between p-4 border-b border-gray-200">
      <View className="flex flex-row items-center gap-2">
        <FontAwesome
          onPress={handlerBack}
          name="arrow-left"
          size={30}
          color="black"
        />
      </View>
      <View className="flex flex-row gap-4">
        <FontAwesome name="pencil" size={30} color="black" />
        <FontAwesome name="cog" size={30} color="black" />
        <FontAwesome name="ellipsis-v" size={30} color="black" />
      </View>
    </View>
  );
}
