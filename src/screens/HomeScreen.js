import React ,{Component} from 'react';
import { View, StyleSheet } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import devToolsEnhancer from 'remote-redux-devtools';

import GameList from '../components/GameList';
import combineReducers from '../reducers'

const store = createStore(combineReducers,devToolsEnhancer())

export default class HomePage extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <GameList navigation={this.props.navigation}/>
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container:{
      backgroundColor: '#000',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
})