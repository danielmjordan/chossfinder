import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import { Ionicons } from '@expo/vector-icons';

export default function Stars ({ stars, size, votes }) {
    return (
      <View>
        <StarRating
          disabled={true}
          emptyStar={"ios-star-outline"}
          fullStar={"ios-star"}
          halfStar={"ios-star-half"}
          iconSet={"Ionicons"}
          halfStarEnabled={true}
          maxStars={5}
          rating={stars}
          starSize={size}
          fullStarColor	={'#4C5760'}
          containerStyle={styles.container}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // alignSelf: 'center',
    paddingTop: 5,
    marginLeft: 5,
    flexGrow: 1,
    padding: 1,
  }
});