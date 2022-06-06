import api from './baseApi';

async function loginRequest(params: any) {
  return api.post('api/sessions', params);
}

async function register(params: any) {
  return api.post('/api/users', params);
}

async function logout(params: any) {
  return api.delete('/api/sessions', params);
}

export default {
  loginRequest,
  register,
  logout,
};
