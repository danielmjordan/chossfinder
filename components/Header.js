import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style ={styles.title}>Route Finder</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#93A8AC'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4C5760'
  }
});
