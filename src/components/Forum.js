import React, { Component } from "react";
import {View, TextInput, Button, Text} from 'react-native'
import axios from 'axios'
export default class Forum extends Component {

comment(text,gameId){
    
}

  render() {
    return (
        <View>
            <View style={{backgroundColor:"#FFF", marginBottom: 10}}>
                <Text style={{backgroundColor: "#CCC", width:300, margin: 10, padding:10, fontSize:15}}>Melhor Jogo Do Ano</Text>
                <Text style={{backgroundColor: "#CCC", width:300, margin: 10, padding:10, fontSize:15}}>Otimos Graficos</Text>
                <Text style={{backgroundColor: "#CCC", width:300, margin: 10, padding:10, fontSize:15}}>Jogabilidade Perfeita</Text>
                <Text style={{backgroundColor: "#CCC", width:300, margin: 10, padding:10, fontSize:15}}>Graficos maravilhosos</Text>
                <Text style={{backgroundColor: "#CCC", width:300, margin: 10, padding:10, fontSize:15}}>Melhor historia</Text>
                <Text style={{backgroundColor: "#CCC", width:300, margin: 10, padding:10, fontSize:15}}>Gostei dos personagens</Text>
                <Text style={{backgroundColor: "#CCC", width:300, margin: 10, padding:10, fontSize:15}}>Tá barato</Text>
                <Text style={{backgroundColor: "#CCC", width:300, margin: 10, padding:10, fontSize:15}}>Melhor Jogo Do Ano</Text>
            </View>
            <View style={{flexDirection:'row', marginBottom: 10}}>
                    <TextInput style={{backgroundColor: "#FFF", width:210, paddingLeft:10, marginRight:3}} placeholder={"Type Your Comment..."}/>
                    <Button title={"Comment"} onPress={()=>{}}/>
            </View>
        </View>
    );
  }
}