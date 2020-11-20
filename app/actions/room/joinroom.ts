import { getRoomRequest } from '../../services/http-requests';
import { GET_ROOM_SUCCESS, GET_ROOM_ERROR } from '../../constants/action-types';

const errPayload = {
  type: GET_ROOM_ERROR,
  payload: { message: 'Error' },
};

const joinSuccess = (res: string): Record<string, unknown> => {
  let roomId;
  try {
    if (res.status !== 200) return errPayload;
    roomId = res.data.game_id;
  } catch (e) {
    return errPayload;
  }
  return {
    type: GET_ROOM_SUCCESS,
    payload: { roomId },
  };
};

const joinRoom = (roomId: string, token: string) => (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
): Record<string, unknown> => {
  return getRoomRequest(roomId, 0, token)
    .then(res => dispatch(joinSuccess(res)))
    .catch(() => dispatch(errPayload()));
};

export default joinRoom;
