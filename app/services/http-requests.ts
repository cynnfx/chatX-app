import axios from 'axios';
import config from '../config';

const loginRequest = (
  email: string,
  password: string,
): Record<string, unknown> =>
  axios
    .post(`${config.API_URL}auth/login`, { email, password })
    .then(res => res)
    .catch(err => err);
// email: 'txt@txt.fr',
// password: 'azerty',

export default loginRequest;
