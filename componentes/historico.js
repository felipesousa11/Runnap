import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, SafeAreaView, StyleSheet, Image} from 'react-native'
import { FontAwesome5, FontAwesome, Feather, MaterialCommunityIcons, TouchableHighlight } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Historico from './bdatividades';



export default function(){
       
    const [historico, setHistorico] = React
    .useState(Historico.getHistorico());

    const [detalhes, setDetalhes]=>(){
        
    } 
    return(
        <SafeAreaView>
                <FlatList
                    data={historico}
                    keyExtractor={({id}, index)=>id}
                    renderItem={({item})=>(
                        <View style={style.container}>
                            <View style={{flexDirection:'row',paddingLeft:15,paddingRight:15,}}>
                                <FontAwesome5 name={"running"} size={24} color="black" style={{paddingRight:5}} />
                                <Text style={style.txtTitulo}>{item.atividade}</Text>
                            </View>
                                <View style={style.box}>
                                    <View>
                                        <Text style={{fontSize:12, textAlign:'center'}}>Data</Text>
                                        <Text style={style.txtInfor}>{item.data}</Text>
                                    </View>

                                    <View>
                                        <Text style={{fontSize:12, textAlign:'center'}}>Distância</Text>
                                        <Text style={style.txtInfor}>{item.distancia} km</Text>
                                    </View>
                                    
                                    <View>
                                        <Text style={{fontSize:12, textAlign:'center'}}>Tempo</Text>
                                        <Text style={style.txtInfor}>{item.tempo}</Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableHighlight>
                                    <Image
                                        source={require('../img/printmapa.png')}
                                        style={style.imagem}
                                    />
                                    </TouchableHighlight>
                                </View>
                                <View style={style.acoes}>
                                        <MaterialCommunityIcons name="arm-flex-outline" size={24} color="black" />
                                        <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                                        <Feather name="share-2" size={24} color="black" />
                                </View>
                        </View>
                        
                        )}
                        />
                    
                
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    body:{
        backgroundColor:"#fff",
    },
    container:{
        marginBottom:25,
        alignContent: 'center',
    },

    box:{
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        justifyContent:'space-between',
    },

    acoes:{
        backgroundColor:"#EBEAEA",
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
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
        marginTop:-110,
        marginBottom:-115,

    },
})