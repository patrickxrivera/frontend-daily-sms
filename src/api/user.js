import axios from 'axios';
import { registerUserSuccess } from 'redux/auth/dispatch';
import { handleUserError, request } from './helpers';
import {
  REGISTER_USER_ENDPOINT,
  VERIFY_USER_ENDPOINT,
  SIGN_IN_USER_ENDPOINT
} from 'utils/endpoints';

const post = (endpoint) => (requestData) =>
  axios
    .post(endpoint, requestData)
    .then(({ data }) => data)
    .catch(handleUserError);

export const verifyUser = (verificationCode, userId) => {
  const endpoint = `${VERIFY_USER_ENDPOINT}/${userId}`;

  return request('post', endpoint, verificationCode, handleUserError);
};

export const registerUser = post(REGISTER_USER_ENDPOINT);

export const signInUser = post(SIGN_IN_USER_ENDPOINT);
