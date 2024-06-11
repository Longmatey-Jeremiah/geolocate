import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Platform, StyleSheet, View } from 'react-native';
import coordinates from './coordinates.json';
import { Box, Text } from 'native-base';
import { useSelector } from 'react-redux';

export default function Map() {
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const companies = useSelector((state) => state?.company.companies);
  const company = useSelector((state) => state?.company.selectedCompany);
  const mapRef = useRef<MapView>(null);
  const [region, setRegion] = useState({
    latitude: 7.30966,
    longitude: -5.41266,
    latitudeDelta: 2.8,
    longitudeDelta: 5.621,
  });

  useEffect(() => {
    const setCompany = () => {
      if (company !== '') {
        setSelectedCompany(company);
      }
    };

    setCompany();
  }, []);

  const onChange = (company: any) => {
    setSelectedCompany(company);
    if (mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: company.latitude,
          longitude: company.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        },
        1000,
      );
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region} provider={PROVIDER_GOOGLE}>
        {companies.map((company, index) => {
          return (
            <Marker
              key={index}
              coordinate={{ latitude: company.latitude, longitude: company.longitude }}
              title={company.nom}
              description={company.phone.toString()}
              onPress={() => onChange(company)}
            />
          );
        })}
      </MapView>
      {selectedCompany && (
        <Box style={styles.infoBox}>
          <Text style={styles.companyName}>{selectedCompany.nom}</Text>
          <Text>Phone: {selectedCompany.phone}</Text>
          <Text>Latitude: {selectedCompany.latitude}</Text>
          <Text>Longitude: {selectedCompany.longitude}</Text>
        </Box>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    borderRadius: 2,
    margin: 1,
    backgroundColor: 'white',
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
