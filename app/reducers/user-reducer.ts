import UserT from '../types';
import {
  LOGUSER_ERROR,
  LOGUSER_REQUEST,
  LOGUSER_SUCCESS,
} from '../constants/action-types';

const initialState = {
  userInfo: {
    email: '',
    pass: '',
    token: '',
  },
  isAuth: false,
  isLoading: false,
  error: false,
};

export const getUserSelector = (
  state: Record<string, unknown>,
): Record<string, unknown> => ({
  ...state.user,
});

const userReducer = (
  state: UserT = initialState,
  action: Record<string, unknown>,
): UserT => {
  switch (action.type) {
    case LOGUSER_SUCCESS: {
      return {
        isAuth: true,
        isLoading: false,
        error: false,
        userInfo: {
          email: action.payload.email,
          pass: action.payload.pass,
          token: action.payload.token,
        },
      };
    }
    case LOGUSER_REQUEST: {
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        error: false,
      };
    }
    case LOGUSER_ERROR: {
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: true,
        userInfo: {
          email: '',
          pass: '',
          token: '',
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
