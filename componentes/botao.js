import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, SafeAreaView,Animated, TouchableHighlight, Image} from 'react-native';
import {Antdesign, Entypo} from '@expo/vector-icons';


export default class FabButton  extends Component{
   
        render(){
        return(
            <View style={estilos.container, this.props.style} >
                <View style={{flexDirection:'row'}}>
                    
                <TouchableWithoutFeedback>
                        <Animated.View style={[estilos.botao, estilos.menu, estilos.submenu]}>
                            <Text>PAUSAR</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    
                    <TouchableWithoutFeedback>
                        <Animated.View style={[estilos.botao, estilos.submenu]}>
                            <Text>CONTINUAR</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.toggleMenu}>
                        <Animated.View style={[estilos.botao, estilos.menu]}>
                            <Text>INICIAR</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>

            </View>
        );
    }
}

const estilos = StyleSheet.create({
    container:{
        alignItems:'center',
        position:'absolute',
    },
    botao:{
        //position:'absolute',
        width: 100,
        height: 60,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        shadowRadius:10,
        shadowColor:'#f57804',
        shadowOpacity: 0.3,
        shadowOffset:{
            height:10,
        }
    },

    menu:{
        backgroundColor:"#00cd66",
        padding:15,
        borderRadius:20,
    },

    submenu:{
        backgroundColor:"#63b8ff",
        padding:15,
        borderRadius:20,
    },
    submenu2:{
        backgroundColor:"#ff3030",
        padding:15,
        borderRadius:20,
    }

});