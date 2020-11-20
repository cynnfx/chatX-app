import axios from 'axios';
import config from '../config';

export const loginRequest = (
  email: string,
  password: string,
): Record<string, unknown> =>
  axios
    .post(`${config.API_URL}auth/login`, { email, password })
    .then(res => res)
    .catch(err => err);

export const logoutRequest = (token: string): Record<string, unknown> =>
  axios
    .post(`${config.API_URL}/auth/logout`, {
      token,
    })
    .then(res => res)
    .catch(err => err);

export const registerRequest = (
  name: string,
  email: string,
  password: string,
): Record<string, unknown> =>
  axios
    .post(`${config.API_URL}user/subscribe`, {
      email,
      username: name,
      password,
    })
    .then(res => res)
    .catch(err => err);

export const getRoomRequest = (
  roomId: string,
  lastUpdate: string,
  token: string,
): Record<string, unknown> =>
  axios
    .get(
      `${config.API_URL}/chat/get?game_id=${roomId}&last_update=${lastUpdate}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      },
    )
    .then(res => res)
    .catch(err => err);
