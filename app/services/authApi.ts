import api from './baseApi';

async function loginRequest(params: any) {
  return api.post('api/sessions', params);
}

async function register(params: any) {
  return api.post('/api/users', params);
}

export default {
  loginRequest,
  register,
};
