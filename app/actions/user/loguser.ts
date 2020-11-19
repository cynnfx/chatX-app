import loginRequest from '../../services/http-requests';
import loguserError from './loguser-error';
import loguserRequest from './loguser-request';
import loguserSuccess from './loguser-success';

const logUser = () => (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
): Record<string, unknown> => {
  dispatch(loguserRequest());
  return loginRequest()
    .then(token => dispatch(loguserSuccess(token)))
    .catch(() => dispatch(loguserError()));
};

export default logUser;
