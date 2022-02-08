import React, { useEffect } from 'react';
import '@utils/ignore-warning';
import { EnvironmentProvider, useEnvironment } from '@hooks/useEnvironment';
import { loadString } from '@utils/storage';
import { setI18nConfig } from '@locales';
import NetworkLogger from 'react-native-network-logger';
import Config from 'react-native-config';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@utils/navigation-utilities';
import { AppStack } from '@navigations/stack';

const App = () => {
  const { createEnvironment } = useEnvironment();

  useEffect(() => {
    loadString('language').then(lang => {
      const language = lang || 'id';
      setI18nConfig(language, false);
    });
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <EnvironmentProvider.Provider value={createEnvironment()}>
        <AppStack />
        {Config.SHOW_NETWORK_LOGGER && <NetworkLogger />}
      </EnvironmentProvider.Provider>
    </NavigationContainer>
  );
};

export default App;
