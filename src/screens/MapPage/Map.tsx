import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { Button } from 'native-base';

export default function Map() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access Location was denied');
    }

    let location = await Location.getCurrentPositionAsync();

    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    console.log('My Coordinates', location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} title="My Location" />
      </MapView>
      <Button onPress={userLocation} mt={2}>
        Get Location
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    padding: 2,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
