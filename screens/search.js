import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from '../shared/card';
import globalStyles from '../styles/globalStyles';

export default function Search() {
  return (
    <View>
      <TouchableOpacity>
        <Card>
          <Text>Search Screen</Text>
        </Card>
      </TouchableOpacity>
    </View>
  )
}



