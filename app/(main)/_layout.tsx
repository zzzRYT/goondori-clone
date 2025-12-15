import { useContext } from 'react';

import { Redirect, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AuthContext } from '@/lib/config/authProvider';

export default function MainLayout() {
  const authState = useContext(AuthContext);

  if (!authState.isReady) {
    return null;
  }

  if (!authState.isLoggedIn) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <SafeAreaView className="flex-1">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="profile/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="setting" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: 'modal', headerShown: false }}
        />
      </Stack>
    </SafeAreaView>
  );
}
