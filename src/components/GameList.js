import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';

import { setGames } from '../actions/gameActions'
import {setLoading} from '../actions/loadingActions'

class GameList extends React.Component {
    componentWillMount(){
        this.props.dispatchLoading(true)
        axios
          .get('http://192.168.1.12:8080/game/')
          .then(response => {
            console.log(response.data.find(x => x.id === '5c0720d3eac5b7273c2b5976'));
            this.props.dispatchGames(response.data);
            this.props.dispatchLoading(false)
          }).catch(err => {
            console.log(err);
          })
    }

    gameDetail(game){
        this.props.navigation.navigate('GameDetail', game)
    }
    
    render (){
        if(!this.props.loading){
            return (
            <View>
                <FlatList
                    data={this.props.games}
                    renderItem={({item}) =>(
                    <TouchableOpacity onPress={() => this.gameDetail(item)}>
                        <View style={styles.card}>
                            <View><Image style={styles.avatar} source={{uri:item.imageURL}}/></View>
                            <Text style={styles.cardText}>
                                {item.name.toUpperCase()}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        )}
        else{
            return (
                <View>
                    <ActivityIndicator size="large" color="orange" />
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    card:{
        flex: 1,
        backgroundColor: '#444',
        height: 100,
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
        margin: 10,
    }
})


const mapDispatchToProps = dispatch =>{
    return {
      dispatchGames: games => dispatch(setGames(games)),
      dispatchLoading: loading => dispatch(setLoading(loading))
    }
}
const mapStateToProps = state =>{
    const {loading,games} = state
    return {loading, games}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList);