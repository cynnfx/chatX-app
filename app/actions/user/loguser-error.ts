import { LOGUSER_ERROR } from '../../constants/action-types';

const loguserError = (): Record<string, unknown> => {
  return {
    type: LOGUSER_ERROR,
    payload: { message: 'Error' },
  };
};

export default loguserError;
