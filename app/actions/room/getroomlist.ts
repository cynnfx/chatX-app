import { getRoomListRequest } from '../../services/http-requests';
import {
  GET_ROOMLIST_SUCCESS,
  GET_ROOMLIST_ERROR,
} from '../../constants/action-types';

const errPayload = (): Record<string, unknown> => {
  return {
    type: GET_ROOMLIST_ERROR,
    payload: { message: 'Error' },
  };
};

const getRoomsSuccess = (res: string): Record<string, unknown> => {
  let rooms;
  try {
    if (res.status !== 200) return errPayload();
    rooms = res.data.data.chatRooms;
  } catch (e) {
    return errPayload;
  }
  return {
    type: GET_ROOMLIST_SUCCESS,
    payload: { rooms },
  };
};

const getRoomList = (token: string) => (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
): Record<string, unknown> => {
  return getRoomListRequest(token)
    .then(res => dispatch(getRoomsSuccess(res)))
    .catch(() => dispatch({ type: 'default' }));
};

export default getRoomList;
