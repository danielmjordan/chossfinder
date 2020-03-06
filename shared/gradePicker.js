import React from 'react';
import { Picker } from 'react-native';

export default function RoutePicker({ difficulty, setDifficulty }) {
  return (
    <Picker
      selectedValue={difficulty}
      onValueChange={(itemValue, itemIndex) => {
        // setDifficulty(itemValue);
        console.log(itemValue);
      }}
    >
      <Picker.Item
        label="5.9"
        value={{ min: 5.9, max: 5.9}}
      />
      <Picker.Item
        label="5.10"
        value={{ min: 5.10, max: 5.10}}
      />
      <Picker.Item
        label="5.11"
        value={{ min: 5.11, max: 5.11}}
      />
      <Picker.Item
        label="5.12"
        value={{ min: 5.12, max: 5.12}}
      />
      <Picker.Item
        label="5.13"
        value={{ min: 5.13, max: 5.13}}
      />
      <Picker.Item
        label="5.14"
        value={{ min: 5.14, max: 5.14}}
      />
    </Picker>
  )
}