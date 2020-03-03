import React from 'react';
import { Picker } from 'react-native';

export default function RoutePicker({ navigation, difficulty, setDifficulty }) {
  return (
    <Picker
      selectedValue={difficulty}
      onValueChange={(itemValue, itemIndex) => {
        setDifficulty(itemValue);
        console.log(difficulty);
      }}
    >
      <Picker.Item
        label="5.9"
        value={5.9}
      />
      <Picker.Item
        label="5.10"
        value={5.10}
      />
      <Picker.Item
        label="5.11"
        value={5.11}
      />
      <Picker.Item
        label="5.12"
        value={5.12}
      />
      <Picker.Item
        label="5.13"
        value={5.13}
      />
      <Picker.Item
        label="5.14"
        value={5.14}
      />
    </Picker>
  )
}