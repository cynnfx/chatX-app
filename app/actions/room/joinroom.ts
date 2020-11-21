import { getRoomRequest } from '../../services/http-requests';
import { GET_ROOM_SUCCESS, GET_ROOM_ERROR } from '../../constants/action-types';

const errPayload = (): Record<string, unknown> => {
  return {
    type: GET_ROOM_ERROR,
    payload: { message: 'Error' },
  };
};

const joinSuccess = (res: string): Record<string, unknown> => {
  // console.log(res);
  let roomId;
  try {
    if (res.status !== 200) return errPayload();
    roomId = res.data.data.game_id;
  } catch (e) {
    return errPayload;
  }
  return {
    type: GET_ROOM_SUCCESS,
    payload: { roomId },
  };
};

const joinRoom = (roomId: string, token: string, roomName: string) => (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
): Record<string, unknown> => {
  return getRoomRequest(roomId, 0, token, roomName)
    .then(res => dispatch(joinSuccess(res)))
    .catch(() => dispatch({ type: 'default' }));
};

export default joinRoom;
