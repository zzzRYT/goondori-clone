import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { setupAllMocks } from './mocks'; // 👈 모든 핸들러를 가져옵니다.

// 1. 기본 Axios 인스턴스 생성
const client = axios.create({
  baseURL: 'https://api.mygoondoriclone.com',
  timeout: 10000,
});

// 2. 개발 환경에서만 Mock 적용
if (__DEV__) {
  //   console.log('[Mock] axios-mock-adapter가 활성화되었습니다.');

  // MockAdapter 인스턴스 생성
  const mock = new MockAdapter(client, {
    delayResponse: 1000,
  });

  // 💡 분리된 모든 핸들러를 등록합니다.
  setupAllMocks(mock);

  // **참고: mock.onAny().passThrough()는 setupAllMocks 함수 안에 포함되어 있습니다.**
}

export default client;
