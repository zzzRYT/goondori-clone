import { useContext } from 'react';

import { Redirect, Stack } from 'expo-router';

import { AuthContext } from '@/lib/config/authProvider';

export default function AuthLayout() {
  const authState = useContext(AuthContext);

  if (authState.isLoggedIn) {
    return <Redirect href="/(main)/(tabs)" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}
