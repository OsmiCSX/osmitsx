import { GeneralApiProblem } from './api-problem';
import { UserResult } from '@stores/user/types';

export type GetUsersResult =
  | { kind: 'ok'; data: UserResult }
  | GeneralApiProblem;
