import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Card from '../shared/card';
import RoutePicker from '../shared/routePicker';
import GradePicker from '../shared/gradePicker';
import globalStyles from '../styles/globalStyles';
import MOUNTAIN_PROJECT_API_KEY from '../private/keys';

export default function Home ({ navigation }) {
  const [ routeResults, setRoutes ] = useState({});
  const [ position, setPosition ] = useState({
    lat: 39.7284,
    lon: 107.6881
  });
  const [ difficulty, setDifficulty ] = useState({
    min: 5.12,
    max: 5.14
  })

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${position.lat}&lon=-${position.lon}&maxDistance=10&minDiff=${difficulty.min}&maxDiff=${difficulty.max}&key=${MOUNTAIN_PROJECT_API_KEY}`);
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
    <View>
      <Card>
        <Button
          title="Get Routes for Current Location"
          onPress={pressHandler}
        />
      </Card>
      <Card>
        <Button
          title="Search for Routes"
          onPress={() => console.log("navigate to search screen")}
        />
      </Card>
      <Card>
        <RoutePicker position={position} setPosition={setPosition}/>
      </Card>
      <Card>
        <GradePicker difficulty={difficulty} setDifficulty={setDifficulty} />
      </Card>
    </View>
  );
}



