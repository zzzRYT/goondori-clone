// src/api/mocks/index.js
import MockAdapter from 'axios-mock-adapter';

import { setupUserMocks } from './userHandlers';

/**
 * 모든 도메인의 Mock 핸들러를 등록하는 함수
 * @param {MockAdapter} mock - MockAdapter 인스턴스
 */
export const setupAllMocks = (mock: MockAdapter) => {
  setupUserMocks(mock);

  mock.onAny().passThrough();
};
