import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Stars from '../shared/stars';
import Card from '../shared/card';
import globalStyles from '../styles/globalStyles';

const Routes = ({ navigation }) => {
  const results = navigation.getParam('routes');
  const routeResults = results.sort((a, b) => b.stars - a.stars);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={routeResults}
        renderItem={({ item }) => {
          if (item.imgSqSmall) {
            return (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('RouteDetail', item)}>
                  <Card keyExtractor={item.id.toString()}>
                    <View style={styles.container}>
                      <View>
                        <Image
                          style={{ height: 70, width: 70, borderRadius: 3 }}
                          source={{uri: item.imgSqSmall}}
                        >
                        </Image>
                      </View>
                      <View style={styles.textParent}>
                        <View style={styles.title}>
                          <Text style={styles.title}>
                            {item.name}
                          </Text>
                          <View style={styles.starParent}>
                            <Stars stars={item.stars} size={12}/>
                          </View>
                        </View>
                        <Text style={styles.subTitle}>
                        {item.rating}, {item.type}
                        </Text>
                        <Text style={styles.subTitle}>{item.location[3]}</Text>
                      </View>
                    </View>
                  </Card>
                </TouchableOpacity>
              </View>
            );
          } else {
            return null;
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
    flexDirection: 'row',
    textAlign: 'right',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: 5,
    color: '#4C5760',
  },
  subTitle: {
    flexDirection: 'row',
    paddingTop: 3,
    textAlign: 'left',
    alignItems: 'center',
    marginLeft: 10,
    color: '#4C5760',
  },
  textParent: {
    flexGrow: 2,
  },
});

export default Routes;
