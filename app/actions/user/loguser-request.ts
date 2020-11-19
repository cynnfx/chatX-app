import { LOGUSER_REQUEST } from '../../constants/action-types';

const loguserRequest = (): Record<string, unknown> => ({
  type: LOGUSER_REQUEST,
  payload: { isLoading: true },
});

export default loguserRequest;
