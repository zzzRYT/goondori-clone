import HomeHeader from '@/components/header/HomeHeader';
import DisplayAd from '@/features/ad/DisplayAd';
import DateCalculatorSection from '@/features/date-calculator/ui/DateCalculator';
import { View } from 'react-native';

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
