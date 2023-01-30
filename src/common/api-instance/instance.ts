import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://blog-platform-for-guild.vercel.app/',
  headers: {
    Authorization: 'Basic YWRtaW46cXdlcnR5',
  },
});
