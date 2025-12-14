import MockAdapter from 'axios-mock-adapter';

import { mockUsers } from './models';

export const setupUserMocks = (mock: MockAdapter): void => {
  // [GET] /users
  mock.onGet('/users').reply(200, {
    data: mockUsers,
    totalCount: mockUsers.length,
  });

  // [GET] /users/{id}
  mock.onGet(/\/users\/\d+/).reply((config) => {
    const id = config.url?.split('/').pop() || '0';
    const user = mockUsers.find((u) => u.id === id);

    if (user) {
      return [200, { data: user }];
    } else {
      return [404, { message: 'User not found' }];
    }
  });
};
