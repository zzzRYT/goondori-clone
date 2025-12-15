import client from '../apiClient';

import { GetUserDto, UserWithIdDto } from './type';

const USER_API = {
  getList: async (): Promise<GetUserDto> => {
    const response = await client.get('/users');
    return response.data;
  },
  getDetail: async (id: string): Promise<UserWithIdDto> => {
    const response = await client.get(`/users/${id}`);
    return response.data;
  },
};

export default USER_API;
