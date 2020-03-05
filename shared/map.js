import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map ({ lat, lon }) {
  return (
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <Marker
          coordinate={marker.latlng}
          title={marker.title}
          description={marker.description}
        /> */}
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