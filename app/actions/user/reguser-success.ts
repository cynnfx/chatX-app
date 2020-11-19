import { REGUSER_SUCCESS } from '../../constants/action-types';
import reguserError from './reguser-error';

const reguserSuccess = (
  name: string,
  email: string,
  pass: string,
  res: Record<string, unknown>,
): Record<string, unknown> => {
  let token;
  try {
    if (res.status !== 201) return errPayload;
    token = res.data.Authorization;
  } catch (e) {
    return reguserError();
  }
  return {
    type: REGUSER_SUCCESS,
    payload: { name, email, token, pass },
  };
};

export default reguserSuccess;
