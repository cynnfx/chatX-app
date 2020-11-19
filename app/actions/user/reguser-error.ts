import { REGUSER_ERROR } from '../../constants/action-types';

const errPayload = {
  type: REGUSER_ERROR,
  payload: { message: 'Error' },
};

const reguserError = (): Record<string, unknown> => {
  return errPayload;
};

export default reguserError;
