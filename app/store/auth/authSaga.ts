// @ts-nocheck

import {takeLatest, put, all, call} from 'redux-saga/effects';
import authActions, {authTypes} from './authRedux';
import {get} from 'lodash';
import {authApi} from '../../services';

function* loginRequest({payload, resolve, reject}: any) {
  try {
    const data = yield call(authApi.loginRequest, payload);
    yield put(authActions.loginRequestSuccess(data));

    resolve && resolve(data);
  } catch (error) {
    if (reject) {
      reject();
    }
    const errorMessage = get(error, ['message'], 'unknown');
    if (errorMessage) {
    }
  }
}

function* registerRequest({payload, resolve, reject}: any) {
  try {
    const data = yield call(authApi.register, payload);
    resolve && resolve(data);
  } catch (error) {
    if (reject) {
      reject();
    }
    const errorMessage = get(error, ['message'], 'unknown');
    if (errorMessage) {
    }
  }
}

function* logoutRequest({resolve, reject}: any) {
  try {
    yield call(authApi.logout);
    yield put(authActions.logoutSuccessRequest());
  } catch (error) {
    if (reject) {
      reject();
    }
    const errorMessage = get(error, ['message'], 'unknown');
    if (errorMessage) {
    }
  }
}

export default function* watcherSaga() {
  yield all([yield takeLatest(authTypes.LOGIN_REQUEST, loginRequest)]);
  yield all([yield takeLatest(authTypes.REGISTER, registerRequest)]);
  yield all([yield takeLatest(authTypes.LOGOUT_REQUEST, logoutRequest)]);
}
