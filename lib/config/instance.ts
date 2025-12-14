import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const instance = axios.create({
  baseURL: 'https://api.example.com',
});

if (__DEV__) {
  console.log('[Mock] axios-mock-adapter가 활성화되었습니다.');
}

// MockAdapter 인스턴스 생성
const mock = new MockAdapter(instance, {
  // 실제 네트워크 지연을 시뮬레이션하기 위해 딜레이를 설정합니다. (선택 사항)
  delayResponse: 1000,
});

// =========================================================
// 👇 여기에 모킹 핸들러를 정의합니다.
// =========================================================

// [GET] /users 요청을 가로채서 목업 데이터를 응답합니다.
mock.onGet('/users').reply(200, {
  // 실제 응답과 동일한 형태의 데이터를 반환
  data: [
    { id: 1, name: '김군돌', email: 'goondol@mock.com' },
    { id: 2, name: '이마스터', email: 'master@mock.com' },
  ],
  totalCount: 2,
});

// [POST] /login 요청을 가로채서 성공 응답을 보냅니다.
mock.onPost('/login').reply(200, {
  token: 'mock-jwt-token-12345',
  userId: 1,
});

// [POST] /posts/{id} 요청을 가로채서 에러를 발생시킵니다.
mock.onPost(/\/posts\/\d+/).reply(403, {
  message: '권한이 없습니다.',
});

// 3. Mock으로 처리하지 않은 모든 요청은 실제 네트워크로 통과시킵니다.
// 이 부분이 중요합니다. 예를 들어, Metro의 내부 요청 등은 무시해야 합니다.
mock.onAny().passThrough();

export default instance;
