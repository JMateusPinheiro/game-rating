import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { capitalizeFirstLetter } from '../util'

const GameListItem = props => {
    const {people} = props
    const {first,last} = people.name
    const {thumbnail} = people.picture
    return(
        <TouchableOpacity onPress={()=> 0}>
            <View style={styles.card}>
                <Image style={styles.avatar} source={{uri:thumbnail}}/>
                <Text style={styles.cardText}>
                    {`${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
        flex: 4,
        color: 'orange',
        paddingLeft: 20,
    },
    avatar:{
        aspectRatio: 1,
        flex: 1,
        marginLeft: 20,
        borderRadius: 60
    }
})

export default GameListItem