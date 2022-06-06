import api from './baseApi';

async function getUsers(params: any) {
  return api.get('api/sessions', params);
}

async function createPost(params: any) {
  return api.get('api/posts', params);
}

export default {
  getUsers,
  createPost,
};
