import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';
import MOUNTAIN_PROJECT_API_KEY from '../private/keys';

export default function Home ({ navigation }) {
  const [ routeResults, setRoutes ] = useState({});
  const lat = 44.3682;
  const lon = 121.1406;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${lat}&lon=-${lon}&maxDistance=10&maxResults=20&minDiff=5.12&maxDiff=5.15&key=${MOUNTAIN_PROJECT_API_KEY}`);
        const results = await res.json();
        setRoutes(results);
      } catch (err) {
        return err;
      }
    })();
  }, []);

  const pressHandler = () => {
    navigation.navigate('Routes', routeResults);
  }

  return (
    <View style={globalStyles.container}>
      <Button title="Get Routes for Current Location" onPress={pressHandler} />
      {/* <Button title="Search for Routes" onPress={() => console.log('navigate to search screen')}/> */}
    </View>
  )
}



