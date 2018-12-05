import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Header2 = (props) => (
    <View>
        <Text>{props.title.toUpperCase()}</Text>
    </View>
);

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


export default Header2;