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

function* createPostRequest({payload, resolve, failed}) {
  try {
    const data = yield call(appApi.createPost, payload);
    if (resolve) {
      yield resolve(data);
    }
  } catch (error) {
    if (failed) {
      yield failed();
    }
  }
}

function* getPostRequest({resolve, failed}) {
  try {
    const data = yield call(appApi.getPosts);
    if (resolve) {
      yield resolve(data);
    }
  } catch (error) {
    if (failed) {
      yield failed();
    }
  }
}

function* getPhotosRequest({resolve, failed}) {
  try {
    const data = yield call(appApi.getPhotos);
    if (resolve) {
      yield resolve(data);
    }
  } catch (error) {
    if (failed) {
      yield failed();
    }
  }
}

export default function* watcherSaga() {
  yield all([yield takeLatest(appTypes.GET_USERS_REQUEST, getUsersRequest)]);
  yield all([yield takeLatest(appTypes.STARTUP_REQUEST, startupRequest)]);
  yield all([
    yield takeLatest(appTypes.CREATE_POST_REQUEST, createPostRequest),
  ]);
  yield all([yield takeLatest(appTypes.GET_POSTS_REQUEST, getPostRequest)]);
  yield all([yield takeLatest(appTypes.GET_PHOTOS_REQUEST, getPhotosRequest)]);
}
