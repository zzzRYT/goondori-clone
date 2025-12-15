import { useContext } from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { Button, Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthContext } from '@/lib/config/authProvider';

export default function LoginScreen() {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="w-full">
        <FontAwesome
          name="arrow-left"
          size={24}
          color="black"
          className="pl-5"
          onPress={handleBack}
        />
      </View>
      <View className="flex-1 flex justify-center items-center w-full">
        <View className="flex-1 flex flex-col justify-center items-center gap-3">
          <View>
            <FontAwesome name="info" size={50} color="black" />
          </View>
          <View className="flex flex-col justify-center items-center gap-2">
            <Text>당신의 군생활 파트너</Text>
            <Text className="text-3xl font-bold text-green-500">군돌이</Text>
          </View>
        </View>
        <View className="flex-1 p-3 w-full">
          <TouchableHighlight className="p-2 bg-green-500 color-white rounded-xl w-full">
            <Button
              title="로그인"
              onPress={() => authContext.logIn()}
              color="#ffffff"
            />
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}
