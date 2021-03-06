import api from './baseApi';

async function getUsers(params: any) {
  return api.get('api/sessions', params);
}

async function createPost(params: any) {
  return api.post('api/posts', params);
}

async function getPosts() {
  return api.get('api/posts');
}

async function getPhotos() {
  return api.get('api/photos');
}

export default {
  getUsers,
  createPost,
  getPosts,
  getPhotos,
};
