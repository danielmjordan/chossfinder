import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Navigator from './routes/homeStack';
import Search from './screens/search';
import globalStyles from './styles/globalStyles';

export default function App() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ location, setLocation ] = useState({})

  useEffect(() => {
    const getLocation = async () => {
      const results = await navigator.geolocation.getCurrentPosition((data) => {
        const { latitude, longitude} = data.coords;
        setLocation({ lat: latitude, lon: longitude });
        setIsLoading(false);
      });
    }
    getLocation();
  }, [])

  if (isLoading) {
    return (
      <View style={globalStyles.loading}>
        <ActivityIndicator size='large' color='#fff'/>
      </View>
    );
  } else {
    return (
      <View style={globalStyles.container}>
        <Navigator location={{location}}/>
      </View>
    );
  }
};

