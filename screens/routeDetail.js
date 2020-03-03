import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Card from '../shared/card';
import globalStyles from '../styles/globalStyles';

export default function RouteDetail({ navigation }) {
  const link = navigation.getParam('url');
  const imageLink = navigation.getParam('imgMedium')
  return (
    <Card>
      <View>
        <View style={styles.title}>
          <Text style={styles.title}>{navigation.getParam('name')}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.body}>
              Grade: {navigation.getParam('rating')}
          </Text>
          <Text style={styles.body}>
              Route Type: {navigation.getParam('type')}
          </Text>
          <Text style={styles.body}>
            {navigation.getParam('stars')} Stars out of
            {' '}{navigation.getParam('starVotes')} votes
          </Text>
          <Text style={styles.body}>
            Location: {navigation.getParam('location')}
          </Text>
        </View>
        <View style={styles.image}>
          <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(link)}>
            <Image
              style={{width: 275, height: 275}}
              source={{uri: imageLink}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Button
            title={'View on Mountain Project'}
            onPress={() => WebBrowser.openBrowserAsync(link)}
          />
        </View>
      </View>
    </Card>
  )
};

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4C5760',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#d3d3d3',
    padding: 5,
  },
  body: {
    paddingTop: 5,
    color: '#4C5760',
    fontSize: 14,
    fontWeight: 'bold'
  }
})

