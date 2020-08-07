import { getToken } from './localStorage';

const BASE_URL = 'https://wall-backend.herokuapp.com/api/v1/';

export const getEndpoint = (url) => `${BASE_URL}${url}`;

export const getHeaders = () => {
  const auth = getToken();

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (auth) {
    headers.Authorization = auth;
  }

  return headers;
};
