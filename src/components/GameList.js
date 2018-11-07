import React from 'react'
import { View, StyleSheet } from 'react-native'

import GameListItem from './GameListItem'

const GameList = props => {
    const { peoples } = props
    const items = peoples.map(people => {
        return (
            <GameListItem people={people} key={people.login.uuid}/>
        );
    })
    return (
        <View style={styles.container}>
            {items}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000',
    },
    card:{
        backgroundColor: '#444',
        height: 60,
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
    },
    cardText:{
        color: 'orange'
    }
})


export default GameList;