import { Text, View } from 'react-native';

interface MainProgressProps {
  percent: number;
}

export default function MainProgress({ percent }: MainProgressProps) {
  return (
    <View className=" bg-white rounded-lg flex justify-center relative h-10 mt-2 overflow-hidden">
      <View
        className="absolute top-0 left-0 h-full bg-gray-200"
        style={{ width: `${percent}%` }}
      />
      <Text className="text-black font-bold z-2 pl-4">{percent}%</Text>
    </View>
  );
}
