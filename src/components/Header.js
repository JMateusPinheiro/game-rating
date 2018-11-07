import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        marginTop: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        resizeMode: 'center',
    },
    title:{
        fontSize: 20
    }
});

const Header = (props) => (
    <View style={style.container}>
        <Image style={style.logo}
          source={require('../../assets/Game-Rating-Logo.png')}
        />
    </View>
);

export default Header;