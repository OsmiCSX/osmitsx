import api from '@config/api';
import { ActionDispatch } from '@constants/type';
import { types, UserResult } from '@constants/user';

export const getUser = () => {
  return (dispatch: (arg: ActionDispatch) => ActionDispatch) => {
    dispatch({ type: types.GET_USER_REQUEST });
    api
      .getUser()
      .then(res => {
        const data: UserResult = res.data;
        dispatch({ type: types.GET_USER_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: types.GET_USER_FAILURE, payload: err });
      });
  };
};
