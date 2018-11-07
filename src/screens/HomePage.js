import React from 'react';
import { View } from 'react-native';
import axios from 'axios'

import Header from '../components/Header';
import GameList from '../components/GameList';

export default class HomePage extends React.Component {
  
  constructor(props){
    super(props);

    this.state={
      peoples: []
    }
  }
  
  componentDidMount(){
    axios
      .get('https://randomuser.me/api/?nat=br&results=10')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        })
      });
  }

  render() {
    return (
      <View>
        <GameList peoples={this.state.peoples}/>
      </View>
    );
  }
}