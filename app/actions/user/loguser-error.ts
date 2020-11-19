import { LOGUSER_ERROR } from '../../constants/action-types';

const errPayload = {
  type: LOGUSER_ERROR,
  payload: { message: 'Error' },
};

const loguserError = (): Record<string, unknown> => {
  return errPayload;
};

export default loguserError;
