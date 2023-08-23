import axios from 'axios';
const baseURL = 'https://2e37f8f0-5969-467c-84a7-1916f824f9dd.mock.pstmn.io';

const axiosInstance = axios.create({baseURL});

// axiosInstance.interceptors.response.use(

// )

export const apiHelper = axiosInstance;
export {baseURL};
