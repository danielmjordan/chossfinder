import React from 'react';
import { Picker } from 'react-native';

export default function RoutePicker({ navigation, position, setPosition }) {
  return (
      <Picker
        selectedValue={position}
        onValueChange={(itemValue, itemIndex) => {
          setPosition(itemValue);
          console.log(position);
        }}
      >
        <Picker.Item
          label="Rifle Mountain Park"
          value={{ lat: 39.7284, lon: 107.6881 }}
        />
        <Picker.Item
          label="Rocky Mountain National Park"
          value={{ lat: 40.3428, lon: 105.6836 }}
        />
        <Picker.Item label="Indian Creek" value={{ lat: 38.0258, lon: 109.54 }} />
        <Picker.Item label="Yosemite" value={{ lat: 37.8651, lon: 119.5383 }} />
        <Picker.Item
          label="Smith Rock State Park"
          value={{ lat: 44.3682, lon: 121.1406 }}
        />
      </Picker>
  )
}