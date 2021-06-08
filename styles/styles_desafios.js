import React from 'react'
import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:25
    },
    
    header:{
        flexDirection:'row',
        padding:10,
    },

    titleText:{
        flex:1,
        fontSize:22,
        fontWeight:'bold'
    },

    headerbutton:{
        textAlign:'center',
        justifyContent:'center',
        fontSize:18,
    },

    item:{
        //paddingBottom:25,
      
    },

    itemText:{
        padding:5,
        fontSize:20,
        fontWeight:'500',
        marginTop:-68,
        backgroundColor:'rgba(0,0,0,0.5)',
        color:'white',
        justifyContent:'center',
    },

    content:{
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#fff',
              
    },

    text:{
        fontSize:16,
    },

    txtinfor:{
        fontSize:20,
        color:'red',
    },


    separator:{
        height:0.5,
        backgroundColor:'#cfcfcf',
        width:'100%',

    },

    box:{
        flex:1,
        flexDirection:'row',
       
    },

    linha:{
        flex:0.5,
        alignItems:'center',
        paddingBottom:10,
        paddingTop:10,
    },

    img:{
        height:250,
        width:'100%',
        resizeMode:'contain',
        paddingBottom:-70,
        paddingTop:-70,
        //marginBottom:-100,
        //marginTop:-160,
    }

});

export default styles;