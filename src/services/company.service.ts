import { axios } from './apiConfig';
import { ServiceEndpoints } from '../utils/constants';

export const getCompanies = async () => {
  return axios
    .get(ServiceEndpoints.GET_COMPANIES)
    .then(({ data }) => {
      return Promise.resolve(data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const getGeolocation = async (userId: number, entrepriseId: number) => {
  return axios
    .get(
      `/api/v1/linguere/recrutement/react/geolocalisation/editeur/${userId}/entreprise/${entrepriseId}`,
    )
    .then(({ data }) => {
      console.log(
        `/api/v1/linguere/recrutement/react/geolocalisation/editeur/${userId}/entreprise/${entrepriseId}`,
      );
      return Promise.resolve(data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
