import axios from 'axios';
import { BASE_URL } from '../constants/global';

export const getReadWriteKey = async () => {
  const resp = await axios.get(`${BASE_URL}/user/plugin/keys/`);
  console.log(resp);
  return resp.data;
};

export const getUserDetails = async (read_key) => {
  const resp = await axios.get(`${BASE_URL}/user/plugin/access-token?read_key=${read_key}`);
  return resp.data;
};
