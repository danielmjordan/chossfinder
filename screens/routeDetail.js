import React from 'react';
import {
  StyleSheet, Text, View, Image, Button, Linking, TouchableOpacity, ScrollView
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Map from '../shared/map';
import Card from '../shared/card';
import Stars from '../shared/stars';
import globalStyles from '../styles/globalStyles';

export default function RouteDetail({ navigation }) {
  const link = navigation.getParam('url');
  const imageLink = navigation.getParam('imgMedium');
  const location = navigation.getParam('location');
  const lat = navigation.getParam('latitude');
  const lon = navigation.getParam('longitude');
  const name = navigation.getParam('name');
  const grade = navigation.getParam('rating');
  const starCount = navigation.getParam('stars')
  const starVotes = navigation.getParam('starVotes')

  return (
    <ScrollView>
      <Card>
        <View>
          <View style={styles.title}>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View>
            <Text style={styles.bodyText}>
                Grade: {grade}
            </Text>
            <Text style={styles.bodyText}>
                Route Type: {navigation.getParam('type')}
            </Text>
            <View style={styles.stars}>
              <Stars stars={starCount} size={15} votes={starVotes}/>
            </View>
          </View>
          <View style={styles.image}>
            <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(link)}>
              <Image
                style={{width: 275, height: 275}}
                source={{uri: imageLink}}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.loc}>
            {location.slice(0, 3).map((el, i) => (
                  <Text style={styles.bodyText} key={i}>{el}</Text>
                )
              )}
          </View> */}
          <View>
            <Button
              title={'View on Mountain Project'}
              onPress={() => WebBrowser.openBrowserAsync(link)}
            />
          </View>
        </View>
        <Map lat={lat} lon={lon} name={name} grade={grade} />
      </Card>
    </ScrollView>
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
    fontStyle: 'italic',
    color: '#4C5760',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#d3d3d3',
    padding: 3,
  },
  bodyText: {
    paddingTop: 5,
    color: '#4C5760',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  stars: {
    display: 'flex',
    justifyContent: 'center',
    // alignSelf: 'center',
  }
})

