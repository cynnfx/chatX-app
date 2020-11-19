import { registerRequest } from '../../services/http-requests';
import reguserError from './reguser-error';
import reguserRequest from './reguser-request';
import reguserSuccess from './reguser-success';

const regUser = (name: string, email: string, password: string) => (
  dispatch: Dispatch<IGetAllAssets | ISetAllAssets>,
): Record<string, unknown> => {
  dispatch(reguserRequest());
  return registerRequest(name, email, password)
    .then(token => dispatch(reguserSuccess(name, email, password, token)))
    .catch(() => dispatch(reguserError()));
};

export default regUser;
