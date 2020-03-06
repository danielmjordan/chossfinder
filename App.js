import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Navigator from './routes/homeStack';
import Splash from './screens/splash';
import globalStyles from './styles/globalStyles';

export default function App() {

  const [isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
       setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Splash />
    );
  } else {
    return (
      <View style={globalStyles.container}>
        <Navigator />
      </View>
    );
  }
};
