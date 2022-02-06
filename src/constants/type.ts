import { UserResult } from './user';

export type ActionDispatch = {
  type: string;
  payload?: UserResult;
};
