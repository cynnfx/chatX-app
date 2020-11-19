import { REGUSER_SUCCESS, REGUSER_ERROR } from '../../constants/action-types';

const errPayload = {
  type: REGUSER_ERROR,
  payload: { message: 'Error' },
};

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
    return errPayload;
  }
  return {
    type: REGUSER_SUCCESS,
    payload: { name, email, token, pass },
  };
};

export default reguserSuccess;
