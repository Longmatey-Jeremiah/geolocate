import Axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { API_DOMAIN, ServiceEndpoints } from '../utils';
import useStore from '../store';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL || API_DOMAIN,
  responseType: 'json',
  timeout: 30000,
};

const axios = Axios.create(config);

const url_exceptions = [ServiceEndpoints.LOGIN];
// Request Interceptor
axios.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  // Modify URL to HTTPS if it's HTTP
  if (config.url?.startsWith('http://')) {
    config.url = config.url.replace(/^http:\/\//i, 'https://');
  }

  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  if (!url_exceptions.includes(config.url || '')) {
    config.headers.Authorization = `Bearer ${useStore.getState()?.auth?.accessToken}`;
    config.headers.Accept = 'application/json';
  }
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // handleAPIError(error, true)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export { axios };
