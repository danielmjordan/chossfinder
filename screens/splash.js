import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Splash () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        CHOSS-FINDER
      </Text>
      <Text style={styles.sub}>
        Find Some Choss Near You
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93A8AC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#4C5760',
    fontSize: 40,
    fontWeight: 'bold'
  },
  sub: {
    fontSize: 16,
    color: '#4C5760',
  }
})