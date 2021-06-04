import React, { Component, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import {AntDesign, FontAwesome,MaterialCommunityIcons} from '@expo/vector-icons';


export default class FabButton  extends Component{
    
    

    animation = new Animated.Value(0);

    toggleMenu = () =>{
        const toValue = this.open ? 0 : 1
        Animated.spring(this.animation,{
            toValue,
            friction:6,
        }).start();

        this.open = !this.open;
    }
        render(){

            const pause ={
                transform:[
                    {scale: this.animation},
                    {
                        translateX: this.animation.interpolate({
                            inputRange:[0,1],
                            outputRange:[0, -80]
                        })
                    }
                ]
            }
        
            const parar ={
                transform:[
                    {scale: this.animation},
                    {
                        translateX: this.animation.interpolate({
                            inputRange:[0,1],
                            outputRange:[0, 80]
                        })
                    }
                ]
            }
           

            

        return(
            <View style={styles.botao}>

                    <TouchableOpacity>
                        <Animated.View style={{pause}}> 
                            <FontAwesome name="pause-circle" size={90} color="orange" />
                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.toggleMenu}>
                        <Animated.View >
                            <AntDesign name="play" size={90} color="green" />
                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Animated.View style={{parar}}>
                            <MaterialCommunityIcons name="stop-circle" size={90} color="red" />
                        </Animated.View>
                        </TouchableOpacity>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        position:'absolute',
    },
    botao:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        position:'absolute',
        padding:20,
        alignItems:'center',
        marginTop:500,
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