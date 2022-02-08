import { useCallback } from 'react';
import { Api } from '@services/api';
import { UserApi } from '@services/api/user-api';
import { GeneralApiProblem } from '@services/api/api-problem';
import { atom, useAtom } from 'jotai';
import { UserResult } from './types';

/**
 * Initial state
 */
const _fetching = atom<boolean>(false);
const _data = atom<UserResult | null>(null);
const _error = atom<GeneralApiProblem>("");

/**
 * Create custom hooks
 */
export const useUsers = (api: Api) => {
  const [fetching, setFetching] = useAtom(_fetching);
  const [data, setData] = useAtom(_data);
  const [error, setError] = useAtom(_error);

  const getUsers = useCallback(async () => {
    setFetching(true);

    const userApi = new UserApi(api);
    const result = await userApi.getUsers();

    if (result.kind === 'ok') {
      setData(result.data);
      setFetching(false);
    } else {
      __DEV__ && console.tron.log(result.kind);
      setError(result.kind);
      setFetching(false);
    }
  }, [api]);

  return {
    fetching,
    data,
    error,
    getUsers,
  };
};
