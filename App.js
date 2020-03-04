import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './routes/homeStack';
import globalStyles from './styles/globalStyles';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Navigator />
    </View>
  );
};

