import axios from 'axios';
import config from '../config';

const loginRequest = (): Record<string, unknown> =>
  axios
    .post(`${config.API_URL}auth/login`, {
      email: 'txt@txt.fr',
      password: 'azerty',
    })
    .then(res => res)
    .catch(err => err);

export default loginRequest;
