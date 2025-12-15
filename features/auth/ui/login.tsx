import { useContext, useState } from 'react';

import {
  Alert,
  Button,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import AUTH_API from '@/api/auth';
import { AuthContext } from '@/lib/config/authProvider';

export default function LoginForm() {
  const authState = useContext(AuthContext);
  const [loginInfo, setLoginInfo] = useState({ uid: '', password: '' });

  const onChangeInput = (name: 'uid' | 'password', value: string) => {
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlerSubmit = async () => {
    try {
      await AUTH_API.login(loginInfo.uid, loginInfo.password);
      authState.logIn();
    } catch {
      Alert.alert('로그인 실패', '아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <View className="border-2 border-gray-500 rounded-lg w-full p-4">
      <View className="flex flex-col gap-4 py-4">
        <TextInput
          placeholder="아이디"
          value={loginInfo.uid}
          className="w-full border-b-2 border-green-500 pb-2"
          onChange={(e) => onChangeInput('uid', e.nativeEvent.text)}
        />
        <TextInput
          placeholder="비밀번호"
          value={loginInfo.password}
          className="w-full border-b-2 border-green-500 pb-2"
          onChange={(e) => onChangeInput('password', e.nativeEvent.text)}
          secureTextEntry
        />
      </View>
      <TouchableHighlight className="p-2 bg-green-500 color-white rounded-xl w-full">
        <Button title="로그인" onPress={handlerSubmit} color="#ffffff" />
      </TouchableHighlight>
    </View>
  );
}
