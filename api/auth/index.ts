import client from '../apiClient';

import { AuthDto } from './type';

const AUTH_API = {
  login: async (username: string, password: string): Promise<AuthDto> => {
    const response = await client.post('/auth', { username, password });
    return response.data;
  },
  logout: async () => {
    const response = await client.post('/logout');
    return response.data;
  },
};

export default AUTH_API;
