import { useEffect, useState } from 'react';

import { Text, View } from 'react-native';

import MainProgress from '@/components/progress/MainProgress';
import { Profile } from '@/features/profile/type';
import { formatDate, getDaysFromToday } from '@/utils/day';

export default function MilitaryCalculator({
  enlistmentDate,
  dischargeDate,
}: Profile) {
  const endDate = formatDate(dischargeDate);

  const useCurrentTime = (interval = 100) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      // 1. 타이머 설정: 1초마다 새로운 Date 객체로 상태 업데이트
      const timerId = setInterval(() => {
        setCurrentTime(new Date());
      }, interval);

      // 2. 클린업(Clean-up) 함수: 컴포넌트가 화면에서 사라질 때 타이머를 해제
      return () => {
        clearInterval(timerId);
      };
    }, [interval]); // interval이 변경될 때만 다시 실행

    return currentTime;
  };

  const currentTime = useCurrentTime();
  const totalServiceDays =
    (dischargeDate.getTime() - enlistmentDate.getTime()) /
    (1000 * 60 * 60 * 24);
  const elapsedServiceDays =
    (currentTime.getTime() - enlistmentDate.getTime()) / (1000 * 60 * 60 * 24);
  const percent = Math.min((elapsedServiceDays / totalServiceDays) * 100, 100);

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
