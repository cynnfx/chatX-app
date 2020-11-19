import { REGUSER_REQUEST } from '../../constants/action-types';

const reguserRequest = (): Record<string, unknown> => ({
  type: REGUSER_REQUEST,
  payload: { isLoading: true },
});

export default reguserRequest;
