import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native'

import Header2 from '../components/Header2';
import Forum from '../components/Forum';

export default class GameDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Header2 title={navigation.getParam('name').toUpperCase()}/>
        };
      };

    render(){
        const {name, description, categories, criticalNote, year, imageURL} = this.props.navigation.state.params
        return(
            <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:imageURL}}/>
                <View style={styles.title}>
                    <View>
                        <Text style={styles.name}>{name.toUpperCase()}</Text>
                    </View>
                    <Text style={styles.note}>{criticalNote}</Text>
                </View>
                <Text style={styles.desc}>{description}</Text>
                <Forum/>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    image:{
        width:380, 
        height:200, 
        resizeMode:'cover'
    },
    title:{
        alignContent:'space-around',
        flexDirection: 'row',
    },
    name:{
        fontSize: 25,
        color: 'orange',
        marginTop: 10,
        padding: 10,
        backgroundColor:"#222",
    },
    note:{
        backgroundColor: 'orange',
        marginTop: 10,
        padding: 10,
        textAlign: 'center',
        fontSize: 25
    },
    desc:{
        fontSize: 10,
        color: 'orange',
        padding: 10,
        marginTop: 10,
        textAlign: 'center',
    },
    categories: {
        fontSize: 10,
        color:'orange'
    }
})