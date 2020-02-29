import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style ={styles.title}>Route Finder</Text>
      <View style={styles.buttons}>
        <Ionicons name="ios-home" size={30} color='#4C5760'/>
        {/* <Ionicons name="ios-search" iconStyle='margin: 10' size={30} color='#4C5760'/> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#93A8AC',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4C5760'
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  button: {
    padding: 10,
    fontSize: 20,
    color: '#4C5760'
  }
});
