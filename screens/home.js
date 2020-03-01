import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function Home ({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Routes');
  }

  return (
    <View style={globalStyles.container}>
      <Button title="Get Route List" onPress={pressHandler} />
    </View>
  )
}



