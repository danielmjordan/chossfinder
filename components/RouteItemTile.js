import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RouteItemTile({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.id)}>
      <Text style={styles.text}>{item.name}, {item.rating}, {item.type}, {item.location[3]}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#dcdce3',
    fontSize: 14
  }
});
