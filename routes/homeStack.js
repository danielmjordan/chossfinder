import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Routes from '../screens/routes';
import RouteDetail from '../screens/routeDetail';
import Splash from '../screens/splash'
import Search from '../screens/search';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Choss Finder'
    }
  },
  Routes: {
    screen: Routes,
    navigationOptions: {
      title: 'Routes Near You'
    }
  },
  RouteDetail: {
    screen: RouteDetail,
    navigationOptions: {
      title: 'Route Detail'
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search for Routes'
    }
  }
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#93A8AC', height: 80 },
    headerTintColor: '#4C5760',
    headerTitleStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  }
});

export default createAppContainer(HomeStack);