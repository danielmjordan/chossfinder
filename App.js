import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RouteList from './components/RouteTile';
import Data from './exampleData.js';

export default function App() {
  const [data, getData] = useState(Data.routes)
  const [location, getLocation] = useState('lat=40.03&lon=-105.25')

  return (
    <View style={styles.container}>
      {data.map((route, ind) => {
        return (
          <View style={styles.listItem} key={route.id}>
            <Text>{route.name}, {route.rating}, {route.type}, {route.location[0]}</Text>
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  listItem: {
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  }
});
