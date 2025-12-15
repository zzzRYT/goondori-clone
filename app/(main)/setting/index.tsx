import { useContext } from 'react';

import { Button, TouchableHighlight, View } from 'react-native';

import SettingHeader from '@/components/header/SettingHeader';
import { AuthContext } from '@/lib/config/authProvider';

export default function SettingScreen() {
  const authState = useContext(AuthContext);

  return (
    <View>
      <SettingHeader />
      <View className="w-full p-4">
        <TouchableHighlight className="w-full bg-red-400 rounded-lg">
          <Button title="로그아웃" onPress={authState.logOut} />
        </TouchableHighlight>
      </View>
    </View>
  );
}
