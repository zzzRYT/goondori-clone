import DisplayAd from '@/features/ad/DisplayAd';
import DateCalculatorSection from '@/features/date-calculator/DateCalculator';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="m-2 p-2">
      <DisplayAd />
      <DateCalculatorSection />
    </View>
  );
}
