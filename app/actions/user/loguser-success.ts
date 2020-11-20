import { LOGUSER_SUCCESS } from '../../constants/action-types';
import loguserError from './loguser-error';

const loguserSuccess = (
  email: Record<string, unknown>,
  pass: Record<string, unknown>,
  res: Record<string, unknown>,
): Record<string, unknown> => {
  let token;
  let name;
  try {
    if (res.status !== 200) return errPayload;
    token = res.data.Authorization;
    name = res.data.user.username;
  } catch (e) {
    return loguserError();
  }
  return {
    type: LOGUSER_SUCCESS,
    payload: { name, email, token, pass },
  };
};

export default loguserSuccess;
