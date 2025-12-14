import { View } from 'react-native';

import HomeHeader from '@/components/header/HomeHeader';
import DisplayAd from '@/features/ad/DisplayAd';
import DateCalculatorSection from '@/features/date-calculator/ui/DateCalculatorCard';

export default function HomeScreen() {
  return (
    <View className="bg-white w-full h-full">
      <HomeHeader />
      <View className="m-2 p-2">
        <DisplayAd />
        <DateCalculatorSection />
      </View>
    </View>
  );
}
