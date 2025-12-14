import client from '../apiClient';

const USER_API = {
  getList: async () => {
    const response = await client.get('/users');
    return response.data;
  },
  getDetail: async (id: string) => {
    const response = await client.get(`/users/${id}`);
    return response.data;
  },
};

export default USER_API;
