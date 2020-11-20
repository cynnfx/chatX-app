import { loginRequest } from '../../services/http-requests';
import loguserError from './loguser-error';
import loguserRequest from './loguser-request';
import loguserSuccess from './loguser-success';

const logUser = (email: string, password: string) => (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
): Record<string, unknown> => {
  dispatch(loguserRequest());
  return loginRequest(email, password)
    .then(res => dispatch(loguserSuccess(email, password, res)))
    .catch(() => dispatch(loguserError()));
};

export default logUser;
