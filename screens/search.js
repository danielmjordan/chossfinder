import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import GradePicker from '../shared/gradePicker';
import RoutePicker from '../shared/routePicker';
import Card from '../shared/card';
import globalStyles from '../styles/globalStyles';

export default function Search({ navigation }) {

  const pressHandler = (screen) => {
    navigation.navigate(screen)
  }

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.text}>Filter By Difficulty</Text>
      </Card>
      <Card>
        <GradePicker />
      </Card>
      <Card>
        <Text style={styles.text}>Filter By Area</Text>
      </Card>
      <Card>
        <RoutePicker />
      </Card>
      <Card>
        <Button title={'Go!'} onPress={() => pressHandler('Routes')}/>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C5760',
  }
})
