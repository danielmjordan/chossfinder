import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import RouteItemTile from './components/RouteItemTile';
import Data from './exampleData.js';

export default function App() {
  const [routes, getData] = useState(Data.routes)
  const [location, getLocation] = useState('lat=40.03&lon=-105.25')

  const pressHandler = (id) => {
    console.log(id)
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={routes}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <RouteItemTile
              item={item}
              keyExtractor={item.id}
              pressHandler={pressHandler}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  listItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#4C5760'
  }
});
