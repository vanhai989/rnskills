// @ts-nocheck
import {takeLatest, put, all, call, delay, select} from 'redux-saga/effects';
import appActions, {appTypes} from './appRedux';
import {get} from 'lodash';
import {appApi} from '../../services';
import authActions from '../auth/authRedux';
import {setAuthorizationToken} from '../../services/baseApi';

function* getUsersRequest({resolve, reject}: any) {
  try {
    const data = yield call(appApi.getUsers);
    console.log('data', data);

    resolve && resolve(privacyData);
  } catch (error) {
    if (reject) {
      reject();
    }
    const errorMessage = get(error, ['message'], 'unknown');
    if (errorMessage) {
    }
  }
}

function* startupRequest() {
  yield delay(500);
  try {
    const token = yield select((state: any) => state?.auth?.token || {});
    if (token) {
      setAuthorizationToken(token);
      yield put(authActions.updateExpiredToken(true));
    }
    yield put(appActions.startupSuccess());
  } catch (error) {
    yield put(appActions.startupSuccess());
  }
}

export default function* watcherSaga() {
  yield all([yield takeLatest(appTypes.GET_USERS_REQUEST, getUsersRequest)]);
  yield all([yield takeLatest(appTypes.STARTUP_REQUEST, startupRequest)]);
}
