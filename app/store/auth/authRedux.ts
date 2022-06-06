import {createReducer, createActions} from 'reduxsauce';
import {setAuthorizationToken} from '../../services/baseApi';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  loginRequest: ['payload', 'resolve', 'reject'],
  loginRequestSuccess: ['payload'],
  updateExpiredToken: ['isExpired'],
  register: ['payload', 'resolve', 'reject'],
  logoutRequest: ['resolve', 'reject'],
  logoutSuccessRequest: null,
});

export const authTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  token: '',
  user: {},
  refreshToken: '',
  authError: {},
  tokenExpiration: '',
  isFistTime: true,
  isAgreeTerm: false,
  isExpiredToken: false,
  systemConfig: {},
  moduleSubscription: {},
  isValidatePayrollPasscode: false,
};

/* ------------- Reducers ------------- */

export const loginRequest = (state: any) => {
  return {...state};
};

export const loginRequestSuccess = (state: any, action: any) => {
  const token = action.payload?.accessToken;
  const refreshToken = action.payload?.refreshToken;
  setAuthorizationToken(token);
  return {...state, token: token, refreshToken: refreshToken};
};

export const updateExpiredToken = (state: any, {isExpired}: any) => {
  return {...state, isExpiredToken: isExpired};
};

export const register = (state: any) => {
  return {...state};
};

export const logoutRequest = (state: any) => {
  return {...state};
};

const logoutSuccessRequest = (state: any) => {
  return {...state, token: '', refreshToken: ''};
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_REQUEST_SUCCESS]: loginRequestSuccess,
  [Types.UPDATE_EXPIRED_TOKEN]: updateExpiredToken,
  [Types.REGISTER]: register,
  [Types.LOGOUT_REQUEST]: logoutRequest,
  [Types.LOGOUT_SUCCESS_REQUEST]: logoutSuccessRequest,
});
