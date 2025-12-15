import { useRouter } from 'expo-router';
import { Button, Text, TouchableHighlight, View } from 'react-native';

export default function TutorialScreen() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/(auth)/login');
  };

  return (
    <View className="flex flex-col w-full h-full">
      <View className="flex-1 bg-gray-300 p-3 flex items-center justify-center">
        <Text className="text-2xl font-bold mb-2">군대 날짜 계산기</Text>
        <Text className="text-base text-gray-600">
          군 입대일과 전역일을 손쉽게 계산해보세요!
        </Text>
      </View>
      <View className="mb-10">
        <TouchableHighlight className="p-2 bg-green-500 color-white rounded-xl m-4">
          <Button title="시작하기" onPress={handleStart} color="#ffffff" />
        </TouchableHighlight>
      </View>
    </View>
  );
}
