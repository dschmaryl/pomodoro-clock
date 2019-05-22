import React from 'react';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { reducer } from './reducer';

const store = createStore(
  persistReducer({ key: 'pomodoro-clock', storage }, reducer)
);

const persistor = persistStore(store);

export const ReduxProvider = ({ children }: { children: any }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);
