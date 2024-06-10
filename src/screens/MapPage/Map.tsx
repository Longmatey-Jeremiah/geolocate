import React, { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Platform, StyleSheet, View } from 'react-native';
import coordinates from './coordinates.json';
import { Box, Text } from 'native-base';

export default function Map() {
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [region, setRegion] = useState({
    latitude: 7.30966,
    longitude: -5.41266,
    latitudeDelta: 2.8,
    longitudeDelta: 5.621,
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region} provider={PROVIDER_GOOGLE}>
        {coordinates.map((item, index) => {
          return (
            <Marker
              key={index}
              coordinate={{ latitude: item.latitude, longitude: item.longitude }}
              title={index.toString()}
              description="Hello world"
              onPress={() => setSelectedCompany(item)}
            />
          );
        })}
      </MapView>
      {selectedCompany && (
        <Box style={styles.infoBox}>
          <Text style={styles.companyName}>Name</Text>
          <Text>Description</Text>
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
