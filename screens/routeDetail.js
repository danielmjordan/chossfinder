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
        <View style={styles.parent}>
          <View style={styles.title}>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View style={styles.subTitle}>
            <View>
              <Stars stars={starCount} size={15} votes={starVotes} />
            </View>
            <Text style={styles.text}>Grade: {grade} </Text>
            <Text style={styles.text}>Type: {navigation.getParam("type")}</Text>
          </View>
          <View style={styles.image}>
            <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(link)}>
              <Image
                style={{ width: 325, height: 325 }}
                source={{ uri: imageLink }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Map lat={lat} lon={lon} name={name} location={location.join(', ')}/>
        <View>
          <Button
            title={"View on Mountain Project"}
            onPress={() => WebBrowser.openBrowserAsync(link)}
          />
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderBottomWidth: 3,
    borderBottomColor: '#d3d3d3',
    padding: 3,
  },
  image: {
    alignItems: 'center',
    padding: 5,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#4C5760',
    alignItems: 'center',
    padding: 3,
  },
  text: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#4C5760',
    fontSize: 14,
  }
})

