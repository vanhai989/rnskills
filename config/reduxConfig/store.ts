import '../ReactotronConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';
import rehydration from '../../app/services/rehydration';
import {setStore} from '../../app/services/baseApi';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  console.log = Reactotron.log;
  // console.warn = Reactotron.warn;
  // console.error = Reactotron.error;
} else {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'dashborad'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store: any = null;
if (__DEV__) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    persistedReducer,
    {},
    composeEnhancers(
      applyMiddleware(...middlewares),
      Reactotron.createEnhancer(),
    ),
  );
} else {
  store = createStore(persistedReducer, applyMiddleware(...middlewares));
}

rehydration(store);
setStore(store);
sagaMiddleware.run(rootSaga);

export default store;
