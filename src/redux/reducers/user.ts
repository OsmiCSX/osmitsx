import { types, UserStateType, GetUserDispatch } from '@constants/user';

const initialState: UserStateType = {
  loading: false,
  error: null,
  data: null,
};

const user = (state = initialState, action: GetUserDispatch): UserStateType => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default user;
