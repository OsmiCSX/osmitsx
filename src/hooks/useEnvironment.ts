import React, { useCallback } from 'react';
import { Api } from '@services/api';
import { Environment } from '@config/environment';

interface EnvironmentContext {
  api: Api;
}

export const useEnvironment = () => {
  const createEnvironment = useCallback(() => {
    const env = new Environment();
    const runSetup = async () => {
      await env.setup();
    };
    runSetup();
    return env;
  }, []);

  return {
    createEnvironment,
  };
};

export const EnvironmentProvider = React.createContext<EnvironmentContext>({
  api: new Api(),
});
