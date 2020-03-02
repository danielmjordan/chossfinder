import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Card from '../shared/card';
import globalStyles from '../styles/globalStyles';

export default function RouteDetail({ navigation }) {
  const link = navigation.getParam('url');
  return (
    <Card>
      <View>
        <Text>{navigation.getParam('name')}</Text>
        <Text>{navigation.getParam('rating')}</Text>
        <Text>{navigation.getParam('type')}</Text>
        <Text>Stars: {navigation.getParam('stars')}</Text>
        <Text>{navigation.getParam('starVotes')} Star Votes</Text>
        <Text>{navigation.getParam('location')}</Text>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: navigation.getParam('imgMedium')}}
          />
        </View>
        <View>
          <Button
            title={'Open route in Mountain Project'}
            onPress={() => WebBrowser.openBrowserAsync(link)}
          />
        </View>
      </View>
    </Card>
  )
};

const styles = StyleSheet.create({
  image: {

  },
  text: {
    fontSize: 14,
  }
})

