import '@/global.css';
import { Stack } from 'expo-router';
import mobileAds from 'react-native-google-mobile-ads';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  mobileAds()
    .initialize()
    .then((adapterStatuses) => {
      // Initialization complete!
    });

  return (
    <SafeAreaView className="flex-1">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="profile/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </SafeAreaView>
  );
}
