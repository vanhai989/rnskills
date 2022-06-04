import {persistStore} from 'redux-persist';
import appActions from '../store/app/appRedux';

const updateReducers = (store: any) => {
  const startup = () => store.dispatch(appActions.startupRequest());
  persistStore(store, null, startup);
};

export default updateReducers;
