import Header from '@/components/layout/Header';
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
      <Header />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ title: 'index', headerShown: false }}
        />
      </Stack>
    </SafeAreaView>
  );
}
