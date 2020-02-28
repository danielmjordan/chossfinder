import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RouteTile from './components/RouteTile';
import Data from './assets/exampleData.js';

export default function App() {
  const [data, getData] = useState(Data.routes)
  console.log(data)
  return (
    <View style={styles.container}>
      <Text>List goes here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
