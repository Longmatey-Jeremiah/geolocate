import React, { useEffect } from 'react';
import { Box, HStack, Icon, Text } from 'native-base';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '../../store';
import { Region } from 'react-native-maps';
import Map from './Map';

type Company = {
  id: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
};

const initialRegion: Region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const companies: Company[] = [
  {
    id: '1',
    name: 'Company A',
    description: 'Description of Company A',
    latitude: 37.78825,
    longitude: -122.4324,
  },
  {
    id: '2',
    name: 'Company B',
    description: 'Description of Company B',
    latitude: 37.78845,
    longitude: -122.4358,
  },
];

export const MapScreen = () => {
  useEffect(() => {
    const fetchGeolocation = async () => {
      // setIsLoading(true);
      try {
        // const response = await getGeolocation(userId, entrepriseId);
        // console.log('Geolocation:', JSON.stringify(response));
        // setCompanies(response._embedded.entrepriseDTOModelList);
        // setIsLoading(false);
      } catch (error) {
        console.log('Error', error);
        // setIsLoading(false);
      }
    };

    fetchGeolocation();
  }, []);

  return <Map />;
};
