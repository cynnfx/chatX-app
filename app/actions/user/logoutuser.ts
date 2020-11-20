import { logoutRequest } from '../../services/http-requests';
import { LOGOUTUSER } from '../../constants/action-types';

const logoutUser = (token: string) => (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
): Record<string, unknown> => {
  logoutRequest(token);
  return dispatch({
    type: LOGOUTUSER,
    payload: { message: 'Logout' },
  });
};

export default logoutUser;
