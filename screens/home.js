import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import Card from '../shared/card';
import Map from '../shared/map';
import globalStyles from '../styles/globalStyles';
import MOUNTAIN_PROJECT_API_KEY from '../private/keys';

export default function Home ({ navigation }) {
  const [ routeResults, setRoutes ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);
  const [ location, setLocation ] = useState('');
  const [ difficulty, setDifficulty ] = useState({
    min: 5.9,
    max: 5.14
  });

  useEffect(() => {
    if (!location) {
      getLocation();
    } else {
      getRoutes();
    }
  }, [location]);

  const getLocation = async () => {
    const results = await navigator.geolocation.getCurrentPosition((data) => {
      const { latitude, longitude} = data.coords;
      setLocation({ lat: latitude, lon: longitude });
    });
  }

  const getRoutes = async () => {
      const res = await fetch(
        `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${location.lat}&lon=${location.lon}&maxDistance=100&maxResults=500&minDiff=${difficulty.min}&maxDiff=${difficulty.max}&key=${MOUNTAIN_PROJECT_API_KEY}`
      );
      const results = await res.json();
      setRoutes(results);
      setIsLoading(false);
  };

  const pressHandler = (screen) => {
    navigation.navigate(screen, routeResults);
  };

  if (isLoading) {
    return (
      <View style={globalStyles.loading}>
        <ActivityIndicator size='large' color='#fff'/>
      </View>
    );
  } else {
    return (
      <View style={globalStyles.container}>
        <Card>
          <TouchableOpacity onPress={() => pressHandler('Routes')}>
            <Text style={styles.text}>Get Routes for Current Location</Text>
          </TouchableOpacity>
        </Card>
        <Card>
          <TouchableOpacity onPress={() => pressHandler('Search')}>
            <Text style={styles.text}>Search For Routes</Text>
          </TouchableOpacity>
        </Card>
          <Map lat={location.lat} lon={location.lon} name={'Your location'}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#4C5760',
  }
});
