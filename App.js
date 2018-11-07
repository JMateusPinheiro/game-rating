import { createStackNavigator } from 'react-navigation';

import HomePage from './src/screens/HomePage';


export default createStackNavigator({
  'Home':{
    screen: HomePage
  }
},{
  navigationOptions:{
    title: 'Game Rating',
    headerStyle:{

    },
    headerTitleStyle:{

    }
  }
})

// export default HomePage