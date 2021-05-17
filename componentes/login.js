import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableHighlight, Image, Button} from 'react-native';

export default props=>{
    return(
        <SafeAreaView>
            <View style={estilos.bloco}>
                <Image
                    source={require('../img/logo.png')}
                    style={estilos.img}
                />
                    <View style={estilos.bloco}>
                        
                        <TextInput 
                            style={estilos.txt}
                            autoFocus={false}
                            placeholder="Seu email cadastrado"
                        ></TextInput> 
                    </View>

                    <View style={estilos.bloco}>
                        
                        <TextInput 
                            style={estilos.txt}
                            autoFocus={false}
                            placeholder="Sua senha"
                            
                        ></TextInput> 
                    </View>

                    <View style={estilos.bloco}>
                        <Button
                            title='Entrar'
                            onPress={()=>navigation.navigate('Atividades')}
                        />
                    </View>                                                                      
            </View>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },    

bloco:{
    marginBottom:20,
    padding:15,
  },

  txt:{
    width:'100%',
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    borderRadius:10,
  },

  btnLogar:{
    backgroundColor: '#f57804',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    textAlign:'center',
    color:'#fff',
    borderRadius:15,
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
    marginTop:100,
  },
})