import { useEffect, useState } from 'react';

import { Text, View } from 'react-native';

import { GetUserDto } from '@/api/user/type';
import MainProgress from '@/components/progress/MainProgress';
import {
  formatDate,
  getDayDifference,
  getDaysFromToday,
  getPreciseDayDifference,
} from '@/utils/day';

export default function MilitaryCalculator({
  enlistmentDate,
  dischargeDate,
}: GetUserDto) {
  const endDate = formatDate(dischargeDate);

  const useCurrentTime = (interval = 100) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const timerId = setInterval(() => {
        setCurrentTime(new Date());
      }, interval);

      return () => {
        clearInterval(timerId);
      };
    }, [interval]);

    return currentTime;
  };

  const currentTime = useCurrentTime();

  const totalServiceDays = getDayDifference(enlistmentDate, dischargeDate);
  const elapsedServiceDays = getPreciseDayDifference(
    enlistmentDate,
    currentTime
  );
  const percent =
    totalServiceDays > 0
      ? Math.min((elapsedServiceDays / totalServiceDays) * 100, 100)
      : 0;

  return (
    <View className="mt-4">
      <View className="flex flex-row justify-between">
        <View className="flex flex-row gap-2 items-end">
          <Text className="text-white text-xl font-bold">전역</Text>
          <Text className="text-white align-bottom">{endDate}</Text>
        </View>
        <View>
          <Text className="text-white text-xl font-bold">
            {getDaysFromToday(dischargeDate)}
          </Text>
        </View>
      </View>
      <MainProgress percent={percent.toFixed(8)} />
    </View>
  );
}
