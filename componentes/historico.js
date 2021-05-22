import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, ActivityIndicator, StyleSheet, Image} from 'react-native'
import { FontAwesome5, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Historico from './bdatividades';


export default function(){
    
    const [icone, setIcone]=useState(true)

    
    const [historico, setHistorico] = React
    .useState(Historico.getHistorico());
    
    return(
        <View>
                <FlatList
                    data={historico}
                    keyExtractor={({id}, index)=>id}
                    renderItem={({item})=>(
                        <View style={style.container}>
                            <View style={{flexDirection:'row'}}>
                          

                                <FontAwesome5 name={"running"} size={24} color="black" style={{paddingRight:5}} />
                                <Text style={style.txtTitulo}>{item.atividade}</Text>
                            </View>
                                <View style={style.box}>
                                    <View>
                                        <Text>Data</Text>
                                        <Text style={style.txtInfor}>{item.data}</Text>
                                    </View>

                                    <View>
                                        <Text>Distância</Text>
                                        <Text style={style.txtInfor}>{item.distancia} km</Text>
                                    </View>
                                    
                                    <View>
                                        <Text>Tempo</Text>
                                        <Text style={style.txtInfor}>{item.tempo}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Image
                                        source={require('../img/printmapa.png')}
                                        style={style.imagem}
                                    />
                                </View>
                                <View style={style.acoes}>
                                        <MaterialCommunityIcons name="arm-flex-outline" size={24} color="black" />
                                        <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                                        <Feather name="share-2" size={24} color="black" />
                                </View>
                        </View>
                        
                        )}
                        />
                    
                
        </View>
    )
}

const style = StyleSheet.create({

    container:{
        marginBottom:20,
        borderBottomWidth:0.9,
        borderBottomColor:"#cfcfcf",
        paddingLeft:15,
        paddingRight:15,
        alignContent: 'center',
    },

    box:{
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:5,
        justifyContent:'space-between',
    },

    acoes:{
        backgroundColor:"#cfcfcf",
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:5,
        justifyContent:'space-between',

    },
   
    txtTitulo:{
        fontSize:20,
        fontWeight:'bold',
    },

    txtInfor:{
        fontSize:17,
        color:"#363636",
    },
    
    imagem:{
        width:"100%",
        resizeMode: 'contain',
        margin:0,

    },
})