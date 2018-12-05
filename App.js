import { createStackNavigator, DrawerNavigator } from 'react-navigation';
import React from 'react';

import HomeScreen from './src/screens/HomeScreen';
import GameDetailScreen from './src/screens/GameDetailScreen';
import MyDrawer from './src/components/MyDrawer';


export default createStackNavigator({
  'Home':{screen: HomeScreen},
  'GameDetail':{screen: GameDetailScreen,}
},{
  navigationOptions:{
    headerTitle: <MyDrawer/>,
    headerStyle:{

    },
    headerTitleStyle:{

    }
  }
})
