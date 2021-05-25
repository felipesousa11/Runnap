import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, Modal, StyleSheet, Image, SafeAreaView} from 'react-native'
import { FontAwesome5, FontAwesome, Feather,Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Historico from './bdatividades';



export default function(){
       
    const [historico, setHistorico] = React
    .useState(Historico.getHistorico());
    
    return(
        <SafeAreaView>
            <Modal
                animationType="slide"
            >
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Fontisto name="map" size={24} color="black" />
                    <FontAwesome5 name="poll-h" size={24} color="black" />
                </View>
                    
                <View>
                    <Image
                        source={require('../img/printmapa.png')}
                        style={style.imagem}
                    />
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <View>
                        <Text style={style.infortxt}>Duração</Text>
                        <Text style={style.infornum}>00:28:51</Text>
                    </View>

                    <View>
                        <Text style={style.infortxt}>Distância</Text>
                        <Text style={style.infornum}>9,42 km</Text>
                    </View>
                </View>

                
                    <View style={style.infor}>
                        <FontAwesome5 name="canadian-maple-leaf" size={24} color="black" />
                        <Text style={style.infortxt}>Ritmo médio</Text>
                        <Text style={style.infornum}>08:51 min/km</Text>
                    </View>

                    <View style={style.infor}>
                        <FontAwesome5 name="canadian-maple-leaf" size={24} color="black" />
                        <Text style={style.infortxt}>Vel. média</Text>
                        <Text style={style.infornum}>8,2 km/h</Text>
                    </View>

                    <View style={style.infor}>
                        <FontAwesome5 name="canadian-maple-leaf" size={24} color="black" />
                        <Text style={style.infortxt}>Vel. máxima</Text>
                        <Text style={style.infornum}>10,5 km/h</Text>
                    </View>

                    <View style={style.infor}>
                        <FontAwesome5 name="canadian-maple-leaf" size={24} color="black" />
                        <Text style={style.infortxt}>Ganho de elev.</Text>
                        <Text style={style.infornum}>20 m</Text>
                    </View>

                    <View style={style.infor}>
                        <FontAwesome5 name="canadian-maple-leaf" size={24} color="black" />
                        <Text style={style.infortxt}>Perda de elev.</Text>
                        <Text style={style.infornum}>26 m</Text>
                    </View>

                    <View style={style.infor}>
                        <FontAwesome5 name="canadian-maple-leaf" size={24} color="black" />
                        <Text style={style.infortxt}>Hora de início</Text>
                        <Text style={style.infornum}>17:29</Text>
                    </View>
            </Modal>


                
        </SafeAreaView>


    )
}

const style = StyleSheet.create({   
    imagem:{
        width:"100%",
        resizeMode: 'contain',
        marginTop:-110,
        marginBottom:-115,
},

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
    fontWeight:'bold',
    fontSize:18,
    textAlign:"center",
},
})