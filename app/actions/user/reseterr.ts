import { RESET_ERR } from '../../constants/action-types';

const logoutUser = () => (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
): Record<string, unknown> => {
  return dispatch({
    type: RESET_ERR,
    payload: {},
  });
};

export default logoutUser;
