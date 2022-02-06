import React from 'react';

import '@utils/ignore-warning';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from '@redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@utils/navigation-utilities';
import { AppStack } from '@navigations/stack';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <AppStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
