import { LOGUSER_SUCCESS, LOGUSER_ERROR } from '../../constants/action-types';

const errPayload = {
  type: LOGUSER_ERROR,
  payload: { message: 'Error' },
};

const loguserSuccess = (
  res: Record<string, unknown>,
): Record<string, unknown> => {
  let token;
  try {
    if (res.status !== 200) return errPayload;
    token = res.data.Authorization;
  } catch (e) {
    return errPayload;
  }
  return {
    type: LOGUSER_SUCCESS,
    payload: { token },
  };
};

export default loguserSuccess;
