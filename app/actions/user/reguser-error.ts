import { REGUSER_ERROR } from '../../constants/action-types';

const reguserError = (): Record<string, unknown> => {
  return {
    type: REGUSER_ERROR,
    payload: { message: 'Error' },
  };
};

export default reguserError;
