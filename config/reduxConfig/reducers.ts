import {combineReducers} from 'redux';
import {PersistedState} from 'redux-persist';
import {reducer as authReducer} from '../../app/store/auth/authRedux';
import {reducer as appReducer} from '../../app/store/app/appRedux';
import videoCallReducer from '../../app/store/videoCall/reducer';

const reducers = combineReducers({
  auth: authReducer,
  app: appReducer,
  videoCall: videoCallReducer,
});
export default reducers;

export type RootState = ReturnType<typeof reducers> & PersistedState;
