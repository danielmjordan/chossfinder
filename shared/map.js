import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map ({ lat, lon, name, grade }) {
  return (
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showUserLocation={true}
        followUserLocation={true}
      >
        <MapView.Marker
            coordinate={{latitude: lat,
            longitude: lon}}
            title={name}
            description={grade}
         />
      </MapView>
  )
};

const styles = StyleSheet.create({
  map: {
    height: 400,
    marginTop: 5,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})