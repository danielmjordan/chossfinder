import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Navigator from './routes/homeStack';
import Search from './screens/search';
import globalStyles from './styles/globalStyles';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Navigator />
    </View>
  );
};
