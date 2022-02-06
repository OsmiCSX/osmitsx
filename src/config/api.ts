import Config from 'react-native-config';
import axios from 'axios';

const api = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds
});

const getUser = () => api.get('/');

export default {
  getUser,
};
