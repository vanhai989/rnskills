import axios from 'axios';
import { useDispatch } from 'react-redux';
import appConfigs from '../../config/appConfigs';
import authActions, { authTypes } from '../store/auth/authRedux';

/** ================================ */
let store = '';
const api = axios.create({
  baseURL: appConfigs.END_POINT,
  timeout: 30000,
  headers: {'Content-Type': 'application/json'},
});

api.interceptors.response.use(
  (response: any) => response.data,
  (error: any) => {
    console.log('error--', error);
    
    if (error?.response?.status === 401) {
      let token = '';
      const authTokenState = store.getState()?.auth?.token;
      if (authTokenState) {
        token = authTokenState;
      }
      if (token) {
        store.dispatch(authActions.updateExpiredToken(true));
        return Promise.reject({message: ''});
      } else {
        return Promise.reject({
          message: error.response.data.message,
          code: error.response.status,
        });
      }
    }
    if (error?.response?.status === 403) {
      const dispatch = useDispatch();
      dispatch(authActions.logoutSuccessRequest());
    }
    if (error.response) {
      return Promise.reject({
        message: error.response.data.message,
        code: error.response.status,
      });
    }
    if (error.request) {
      return Promise.reject({message: 'No response was received'});
    }
    return Promise.reject({message: error.message});
  },
);

export function setAuthorizationToken(token: string) {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export function deleteAuthorizationToken() {
  delete api.defaults.headers.common.Authorization;
}

export function setStore(storeCurrent) {
  store = storeCurrent;
}

export default api;
