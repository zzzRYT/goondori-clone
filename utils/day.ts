/**
 * 날짜를 UTC 기준으로 변환
 *
 * @param date
 * @returns
 */
export function toUTCDate(date: Date): Date {
  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
}

/**
 *  두 날짜 사이 일수 계산
 *
 * @param startDate
 * @param endDate
 * @returns
 */
export function getDayDifference(startDate: Date, endDate: Date): number {
  const oneDay = 1000 * 60 * 60 * 24; // milliseconds in one day
  const diffInTime = endDate.getTime() - startDate.getTime();
  return Math.round(diffInTime / oneDay);
}

/**
 * 현재 날짜로 부터 얼마나 떨어졌는지 일수 계산
 *
 * @param targetDate
 * @returns string
 */
export function getDaysFromToday(targetDate: Date): string {
  const today = toUTCDate(new Date());
  const target = toUTCDate(targetDate);
  if (today > target) {
    return `D+${getDayDifference(target, today)}`;
  }
  return `D-${getDayDifference(today, target)}`;
}

/**
 * 날짜를 'YYYY년 MM월 DD일' 형식의 문자열로 포맷팅
 *
 * @param date
 * @returns
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}년 ${month}월 ${day}일`;
}

/**
 * 문자열을 Date 객체로 파싱 (형식: 'YYYY-MM-DD')
 *
 * @param dateString
 * @returns
 */
export function parseDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}
