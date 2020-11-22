import UserT from '../types';
import {
  LOGUSER_ERROR,
  LOGUSER_REQUEST,
  LOGUSER_SUCCESS,
  LOGOUTUSER,
  REGUSER_ERROR,
  REGUSER_REQUEST,
  REGUSER_SUCCESS,
  GET_ROOM_SUCCESS,
  GET_ROOM_ERROR,
  GET_ROOMLIST_SUCCESS,
  GET_ROOMLIST_ERROR,
  RESET_ERR,
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
  rooms: [],
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
        rooms: [],
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
        rooms: [],
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
        error: 'err_login',
        rooms: [],
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
        rooms: [],
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
        rooms: [],
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
        rooms: [],
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
        error: 'err_register',
        rooms: [],
      };
    }
    case RESET_ERR: {
      return {
        ...state,
        error: false,
      };
    }
    case GET_ROOM_SUCCESS: {
      return {
        ...state,
      };
    }
    case GET_ROOM_ERROR: {
      return {
        ...state,
      };
    }
    case GET_ROOMLIST_SUCCESS: {
      // console.log('REDUUUUUUUUUUUUUUUX');
      // console.log(action.payload.rooms);
      return {
        ...state,
        rooms: action.payload.rooms,
      };
    }
    case GET_ROOMLIST_ERROR: {
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
