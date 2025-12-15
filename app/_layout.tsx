import '@/global.css';
import { Stack } from 'expo-router';

import { AuthProvider } from '@/lib/config/authProvider';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(main)"
          options={{ headerShown: false, animation: 'none' }}
        />
        <Stack.Screen
          name="(auth)"
          options={{ headerShown: false, animation: 'none' }}
        />
      </Stack>
    </AuthProvider>
  );
}
