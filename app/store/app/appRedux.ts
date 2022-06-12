import {createReducer, createActions} from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  startupRequest: null,
  startupSuccess: null,
  getUsersRequest: ['resolve', 'reject'],
  createPostRequest: ['payload', 'resolve', 'reject'],
  getPostsRequest: ['resolve', 'reject'],
  getPhotosRequest: ['resolve', 'reject'],
});

export const appTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  user: {},
  isReady: false,
  isShowTabBar: true,
};

/* ------------- Reducers ------------- */

export const getUsersRequest = (state: any) => {
  return {...state};
};

export const startupRequest = (state: any) => {
  return {...state, isReady: false};
};
export const startupSuccess = (state: any) => {
  return {...state, isReady: true};
};
export const createPostRequest = (state: any) => {
  return {...state};
};
export const getPostsRequest = (state: any) => {
  return {...state};
};
export const getPhotosRequest = (state: any) => {
  return {...state};
};
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_USERS_REQUEST]: getUsersRequest,
  [Types.STARTUP_SUCCESS]: startupSuccess,
  [Types.CREATE_POST_REQUEST]: createPostRequest,
  [Types.GET_POSTS_REQUEST]: getPostsRequest,
  [Types.GET_PHOTOS_REQUEST]: getPhotosRequest,
});
