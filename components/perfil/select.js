import React from 'react';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


export const Select = () => {
    return (
        <RNPickerSelect
            style={styles.txt}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Feminino', value: 'Feminino' },
                { label: 'Masculino', value: 'Masculino' },
            ]}
        />
    );
};

const styles = StyleSheet.create({

    conteudo:{
      display:"flex",
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      backgroundColor:"#FF8C00",
    },

    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
       
    },    

    bloco:{
        marginBottom:10,
        padding:10,
        width:"80%",
        justifyContent:"center",
        alignItems:'center'
    },

    cadastro:{
        paddingBottom:10,
        color:"#F33329",
    },

    txt:{
        width:'100%',
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
    },

    botao:{
        backgroundColor:"#F33329",
        width:'90%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    },

    txtBtn:{
        textAlign:'center',
        color:'#fff',
        fontSize:15,
        textTransform:'uppercase'
    },

    img:{
        width:'100%',
        resizeMode:'contain',
        
    },
    icone:{
        width:"15%",
        //height:45,
        marginTop:-30,
        marginLeft:200,
        paddingRight:5

    },

    logo:{
        fontSize:50,
        margin:10,
        color:'#FF8C00'
    }
})