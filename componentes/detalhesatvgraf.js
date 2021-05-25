import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, ActivityIndicator, StyleSheet, Image, SafeAreaView} from 'react-native'
import { FontAwesome5, FontAwesome, Feather,Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Historico from './bdatividades';


export default function(){
       
    const [historico, setHistorico] = React
    .useState(Historico.getHistorico());


    return(
        <SafeAreaView>
            <View style={style.infor}>
                <Fontisto name="map" size={24} color="black" />
                <FontAwesome5 name="poll-h" size={24} color="black" />
            </View>
                
           <View style={style.infor}>
               <Text>KM</Text>
               <Text>Ritmo</Text>
               <Fontisto name="map" size={24} color="green" />
               <Fontisto name="map" size={24} color="red" />
           </View>

           <View style={style.infor}>
               <Text>1,0</Text>
               <Text style={style.infornum}>06:28</Text>
               <Text>12 m</Text>
               <Text>21 m</Text>
           </View>

           <View style={style.infor}>
               <Text>2,0</Text>
               <Text>07:28</Text>
               <Text>20 m</Text>
               <Text>21 m</Text>
           </View>

           <View style={style.infor}>
               <Text>3,0</Text>
               <Text>05:28</Text>
               <Text>0 m</Text>
               <Text>21 m</Text>
           </View>

           <View style={style.infor}>
               <Text>4,0</Text>
               <Text>06:15</Text>
               <Text>10 m</Text>
               <Text>15 m</Text>
           </View>


                
        </SafeAreaView>


    )
}

const style = StyleSheet.create({   
   
infor:{
    flexDirection:'row',
    color:"#00cd66",
    padding:15,
    justifyContent:'space-between',
},

infortxt:{
    color:"#363636",
    paddingLeft:10, 
    fontSize:18,
     
},

infornum:{
    backgroundColor:"#63b8ff",
    fontSize:18,
    textAlign:"center",
    width:160,
},
})