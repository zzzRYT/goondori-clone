import MockAdapter from 'axios-mock-adapter';

export const setupAuthMocks = (mock: MockAdapter): void => {
  // [POST] /auth
  mock.onPost('/auth').reply((config) => {
    const { username, password } = JSON.parse(config.data);

    if (username === 'admin' && password === '1234') {
      return [200, { message: 'Login successful', token: 'mock-jwt-token' }];
    } else {
      return [401, { message: 'Invalid username or password' }];
    }
  });

  // [POST] /logout
  mock.onPost('/logout').reply(200, { message: 'Logout successful' });
};
