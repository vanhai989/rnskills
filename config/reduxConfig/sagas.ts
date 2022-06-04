import {all} from 'redux-saga/effects';

import authSaga from '../../app/store/auth/authSaga';
import appSaga from '../../app/store/app/appSaga';

export default function* root() {
  yield all([authSaga(), appSaga()]);
}
