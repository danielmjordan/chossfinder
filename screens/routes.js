import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Card from '../shared/card';
import globalStyles from '../styles/globalStyles';

const Routes = ({ navigation }) => {
  const routeResults = navigation.getParam('routes');

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={routeResults}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('RouteDetail', item)}>
              <Card keyExtractor={item.id.toString()}>
                <Text>{item.name}, {item.rating}, {item.type}, {item.location[3]}</Text>
              </Card>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#dcdce3',
    fontSize: 14,
  }
});

export default Routes;
