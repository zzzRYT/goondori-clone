import { View } from 'react-native';
import AdMobBanner from './AdMobBanner';

export default function DisplayAd() {
  return (
    <View className="rounded-lg bg-gray-200 w-full p-2 flex items-center">
      <AdMobBanner />
    </View>
  );
}
