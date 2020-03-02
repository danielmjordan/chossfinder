import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './routes/homeStack';
import Search from './screens/search';
import globalStyles from './styles/globalStyles';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
      results: [],
    };
  }

  getCurrentLocation = async () => {
    console.log('location is: ');
  };

  render() {
    return (
      <View style={globalStyles.container}>
          <Navigator />
      </View>
    );
  }
}

export default App;

