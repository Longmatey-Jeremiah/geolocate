import { axios } from './apiConfig';
import { ServiceEndpoints } from '../utils/constants';

export const login = async (email: string, password: string) => {
  return axios
    .post(ServiceEndpoints.LOGIN, {
      email: email,
      password: password,
    })
    .then(({ data }) => {
      return Promise.resolve(data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const getRefreshToken = async (refreshToken: string) => {
  return axios
    .post(ServiceEndpoints.REFRESH, {
      refresh: refreshToken,
    })
    .then(({ data }) => {
      return Promise.resolve(data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
