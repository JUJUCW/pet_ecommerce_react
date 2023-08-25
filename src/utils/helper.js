import axios from 'axios';
const baseURL = 'https://41e14b7b-809a-458f-a940-99deb3f1fe3b.mock.pstmn.io';

const axiosInstance = axios.create({baseURL});

// axiosInstance.interceptors.response.use(

// )

export const apiHelper = axiosInstance;
export {baseURL};
