import UserT from '../types';
import {
  LOGUSER_ERROR,
  LOGUSER_REQUEST,
  LOGUSER_SUCCESS,
  LOGOUTUSER,
  REGUSER_ERROR,
  REGUSER_REQUEST,
  REGUSER_SUCCESS,
} from '../constants/action-types';

const initialState = {
  userInfo: {
    name: '',
    email: '',
    pass: '',
    token: '',
  },
  isAuth: false,
  isLoading: false,
  error: false,
  roomsId: [],
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
        userInfo: {
          name: action.payload.name,
          email: action.payload.email,
          pass: action.payload.pass,
          token: action.payload.token,
        },
        isAuth: true,
        isLoading: false,
        error: false,
        roomsId: [],
      };
    }
    case LOGUSER_REQUEST: {
      return {
        ...state,
        userInfo: {
          name: '',
          email: '',
          pass: '',
          token: '',
        },
        isAuth: false,
        isLoading: true,
        error: false,
        roomsId: [],
      };
    }
    case LOGUSER_ERROR: {
      return {
        ...state,
        userInfo: {
          name: '',
          email: '',
          pass: '',
          token: '',
        },
        isAuth: false,
        isLoading: false,
        error: true,
        roomsId: [],
      };
    }
    case LOGOUTUSER: {
      return {
        ...state,
        userInfo: {
          name: '',
          email: '',
          pass: '',
          token: '',
        },
        isAuth: false,
        isLoading: false,
        error: true,
        roomsId: [],
      };
    }
    case REGUSER_SUCCESS: {
      return {
        userInfo: {
          name: action.payload.name,
          email: action.payload.email,
          pass: action.payload.pass,
          token: action.payload.token,
        },
        isAuth: true,
        isLoading: false,
        error: false,
        roomsId: [],
      };
    }
    case REGUSER_REQUEST: {
      return {
        ...state,
        userInfo: {
          name: '',
          email: '',
          pass: '',
          token: '',
        },
        isAuth: false,
        isLoading: true,
        error: false,
        roomsId: [],
      };
    }
    case REGUSER_ERROR: {
      return {
        ...state,
        userInfo: {
          name: '',
          email: '',
          pass: '',
          token: '',
        },
        isAuth: false,
        isLoading: false,
        error: true,
        roomsId: [],
      };
    }
    case GET_ROOM_SUCCESS: {
      return {
        ...state,
        roomsId: [...state.roomId, action.payload.roomId],
      };
    }
    case GET_ROOM_ERROR: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
