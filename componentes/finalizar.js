import React, {useState} from 'react';
import { StyleSheet, Text, View,ImageBackground, TextInput, SafeAreaView, TouchableOpacity, Image, Button} from 'react-native';
import { FontAwesome5, AntDesign,Entypo } from '@expo/vector-icons';

export default function Finalizar ({ navigation }){

 
      return(
                        
            <View style={styles.container}>

                <View >
                    <TextInput 
                        style={styles.inputtxt}
                        autoFocus={false}
                        placeholder="Renomear a atividade"
                    ></TextInput> 
                </View>

                
                <View style={styles.blocoicone}>
                    <TouchableOpacity>
                        <FontAwesome5 style={styles.icone} name = "smile-beam" size = {40} color = "black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <AntDesign style={styles.icone} name="meh" size={40} color="black" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <AntDesign style={styles.icone} name="frowno" size={40} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Entypo style={styles.icone} name="emoji-sad" size={40} color="black" />
                    </TouchableOpacity>
                                        
                </View>

                
                <View>
                    <Text style={styles.txt}>Percepção de esforço</Text>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Historico')}
                    >
                        <Text style={styles.salvar}>Salvar</Text>
                    </TouchableOpacity>

                </View>


            </View>
        
    );
}

const styles = StyleSheet.create({


    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
    },    

    blocoicone:{
        flexDirection:'row',
        alignContent:'space-around',
        paddingTop:15,
    },

    icone:{
        padding:10
    },

    salvar:{
        color:'#fff',
        backgroundColor:'orange',
        paddingBottom:10,
        paddingTop:10,
        borderRadius:10,
        justifyContent:'center',
        textAlign:'center',
        width:300,
        fontSize:20,
    },

    inputtxt:{
        width:300,
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
    },

    txt:{
        textAlign:'left',
       // paddingTop:10,
        paddingBottom:20,
    },


})

