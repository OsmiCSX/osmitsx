import api from '@config/api';
import { types, UserResult } from '@constants/user';
import { AppDispatch } from '@redux/store';

export const getUser = () => {
  return (dispatch: AppDispatch) => {
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
