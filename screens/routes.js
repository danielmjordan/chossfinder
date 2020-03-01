import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';
import Data from '../exampleData'

const Routes = ({ navigation }) => {
  const [routes, getData] = useState(Data.routes);
  const [location, getLocation] = useState("lat=40.03&lon=-105.25");

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={routes}
        renderItem={({ item }) => (
          <View style={globalStyles.listItem} keyExtractor={item.id}>
            <TouchableOpacity onPress={() => navigation.navigate('RouteDetail', item)}>
              <Text style={styles.text}>{item.name}, {item.rating}, {item.type}, {item.location[3]}</Text>
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
