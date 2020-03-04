import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import Card from '../shared/card';
import RoutePicker from '../shared/routePicker';
import GradePicker from '../shared/gradePicker';
import globalStyles from '../styles/globalStyles';
import MOUNTAIN_PROJECT_API_KEY from '../private/keys';

export default function Home ({ navigation }) {
  const [ routeResults, setRoutes ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);
  const [ location, setLocation ] = useState('');
  const [ difficulty, setDifficulty ] = useState({
    min: 5.12,
    max: 5.14
  })

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
        `https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${location.lat}&lon=${location.lon}&maxDistance=10&maxResults=100&minDiff=${difficulty.min}&maxDiff=${difficulty.max}&key=${MOUNTAIN_PROJECT_API_KEY}`
      );
      const results = await res.json();
      setRoutes(results);
      setIsLoading(false);
  };

  const pressHandler = () => {
    navigation.navigate('Routes', routeResults);
  };

  if (isLoading) {
    return (
      <View style={globalStyles.loading}>
        <ActivityIndicator size='large' color='#fff'/>
      </View>
    );
  } else {
    return (
      <View>
        <Card>
          <Button
            title={'Get Routes for Current Location'}
            onPress={pressHandler}
          />
        </Card>
        <Card>
          <Button
            title={"Search for Routes"}
            onPress={() => console.log("navigate to search screen")}
          />
        </Card>
        {/* <Card>
          <RoutePicker location={location} setPosition={setLocation}/>
        </Card>
        <Card>
          <GradePicker difficulty={difficulty} setDifficulty={setDifficulty} />
        </Card> */}
      </View>
    );
  }
}
