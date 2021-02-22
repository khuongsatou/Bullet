import Settings from './Settings';
import {getToken} from '@Configs';
const axios = require('axios');
// const oauth = require('axios-oauth-client');
export const handleAuthenOauth2 = async (username = '', password = '') => {
  // Get Token Body
  // const getOwnerCredentials = oauth.client(axios.create(), {
  //   url: Settings.API_URL + '/o/token/',
  //   grant_type: 'password',
  //   client_id: Settings.CLIENT_ID,
  //   client_secret: Settings.CLIENT_SECRET,
  //   username: username,
  //   password: password,
  //   scope: Settings.SCOPE,
  // });
  // // Wait body response object
  // const result = await getOwnerCredentials(); //{ "access_token": "...", "expires_in": 900, ... }
  const result = '';
  return result;
};

const instance = axios.create({
  baseURL: Settings.API_URL,
});

instance.interceptors.request.use(
  async (config) => {
    // const token = await getToken();
    // if (token) {
    //   config.headers.Authorization = 'Bearer ' + token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
