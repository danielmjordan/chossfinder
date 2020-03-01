import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import globalStyles from '../styles/globalStyles';

export default function RouteDetail({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.text}>{navigation.getParam('name')}</Text>
      <Text style={styles.text}>{navigation.getParam('rating')}</Text>
      <Text style={styles.text}>{navigation.getParam('type')}</Text>
      <Text style={styles.text}>Stars: {navigation.getParam('stars')}</Text>
      <Text style={styles.text}>{navigation.getParam('starVotes')} Star Votes</Text>
      <Text style={styles.text}>{navigation.getParam('location')}</Text>
      <Text style={styles.text}>{navigation.getParam('url')}</Text>
      <Image style={{width: 100, height: 100}} source={{uri: navigation.getParam('imgMedium')}}/>
    </View>
  )
};

const styles = StyleSheet.create({
  image: {

  },
  text: {
    fontSize: 14,
  }
})

