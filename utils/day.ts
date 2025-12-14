/**
 * 날짜 문자열을 UTC 자정 Date 객체로 변환
 *
 * @param dateString 'YYYY-MM-DD'
 * @returns
 */
function parseUTCDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  // 월은 0부터 시작하므로 month - 1
  return new Date(Date.UTC(year, month - 1, day));
}

/**
 *  두 날짜 사이 일수 계산 (UTC 기준)
 *
 * @param startDate 'YYYY-MM-DD'
 * @param endDate 'YYYY-MM-DD'
 * @returns
 */
export function getDayDifference(startDate: string, endDate: string): number {
  const oneDay = 1000 * 60 * 60 * 24;
  const start = parseUTCDate(startDate);
  const end = parseUTCDate(endDate);

  const diffInTime = end.getTime() - start.getTime();
  // 시간 차이를 기반으로 날짜 차이를 계산할 때, DST 등을 고려하여 round 사용
  return Math.round(diffInTime / oneDay);
}

/**
 * 현재 날짜로 부터 얼마나 떨어졌는지 일수 계산
 *
 * @param targetDate 'YYYY-MM-DD'
 * @returns string
 */
export function getDaysFromToday(targetDate: string): string {
  const today = new Date();
  // 현재 날짜를 UTC 자정으로 표준화
  const todayUTCString = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  )
    .toISOString()
    .split('T')[0];

  const diff = getDayDifference(todayUTCString, targetDate);

  if (diff < 0) {
    // 목표 날짜가 오늘보다 과거일 경우
    return `D+${-diff}`;
  }
  // 목표 날짜가 오늘이거나 미래일 경우
  return `D-${diff}`;
}

/**
 * 날짜를 'YYYY년 MM월 DD일' 형식의 문자열로 포맷팅
 *
 * @param date
 * @returns
 */
export function formatDate(date: string): string {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}년 ${month}월 ${day}일`;
}
