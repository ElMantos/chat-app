import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';

import middleware from './middleware';

import user from './user';
import chat from './chat';

const rootReducer = combineReducers({
  [user.constants.NAME]: user.reducer,
  [chat.constants.NAME]: chat.reducer,
});

const persistConfig = {
  key: user.constants.NAME,
  storage,
  blacklist: [chat.constants.NAME],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));

export default {
  persistor: persistStore(store),
  store,
};
