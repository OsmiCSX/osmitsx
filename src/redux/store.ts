import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let middleware = [thunkMiddleware];

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
