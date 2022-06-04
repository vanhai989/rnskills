import api from './baseApi';

async function getUsers(params: any) {
  return api.get('api/sessions', params);
}

export default {
  getUsers,
};
