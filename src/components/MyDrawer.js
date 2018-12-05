import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import {View, Image, Button, StyleSheet} from 'react-native';
import SideBar from './Header';

export default class MyDrawer extends Component {
  closeControlPanel = () => {
    this.drawer.close()
  };
  openControlPanel = () => {
    this.drawer.open()
  };
  render () {
    return (
      <Drawer
        ref={(ref) => this.drawer = ref}
        content={<SideBar />}
        type={'overlay'}
        >
        <View style={styles.container}>
            <Image style={styles.logo}
              source={require('../../assets/logo.png')}
            />
            {/* <Button ext="Drawer" onPress={this.openControlPanel()}/> */}
        </View>
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  logo:{
      height: 40,
      width: 350,
      resizeMode: 'center',
  },
  button:{
      width: 100,
      alignItems:'center',
      justifyContent: 'center'
  }
});