import React from 'react';
import {
  StyleSheet, Text, View, Image, Button, Linking, TouchableOpacity, ScrollView
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Map from '../shared/map';
import Card from '../shared/card';
import globalStyles from '../styles/globalStyles';

export default function RouteDetail({ navigation }) {
  const link = navigation.getParam('url');
  const imageLink = navigation.getParam('imgMedium');
  const location = navigation.getParam('location');
  const lat = navigation.getParam('latitude');
  const lon = navigation.getParam('longitude');

  return (
    <ScrollView>
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
          </View>
          <View style={styles.image}>
            <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(link)}>
              <Image
                style={{width: 275, height: 275}}
                source={{uri: imageLink}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.loc}>
            {location.slice(0, 3).map((el, i) => (
                  <Text style={styles.body} key={i}>{el}</Text>
                )
              )}
          </View>
          <View>
            <Button
              title={'View on Mountain Project'}
              onPress={() => WebBrowser.openBrowserAsync(link)}
            />
          </View>
        </View>
        <Map lat={lat} lon={lon}/>
      </Card>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  // loc: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  // },
  image: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#4C5760',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#d3d3d3',
    padding: 3,
  },
  body: {
    paddingTop: 5,
    color: '#4C5760',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

