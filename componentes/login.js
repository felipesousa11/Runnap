import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableHighlight, Image, Button} from 'react-native';

export default props=>{

  const [hidePass, setHidePass] = useState(true);
      return(
        <SafeAreaView style={styles.conteudo}>
            <View style={styles.container}>
                <View style={styles.bloco}>

                    <Image
                        source={require('../img/logo.png')}
                        style={styles.img}
                    />

                    <TextInput 
                        style={styles.txt}
                        autoFocus={false}
                        placeholder="Seu email cadastrado"
                    ></TextInput> 
                </View>
                
                <View style={styles.bloco}>
                    <TextInput 
                        style={styles.txt}
                        autoFocus={false}
                        placeholder="Sua senha"
                        secureTextEntry={hidePass}
                    ></TextInput> 
                </View>

                <View style={styles.bloco}>
                    <Button
                        title='Entrar'
                        style={styles.botao}
                        onPress={()=>navigation.navigate('historico')}
                    />
                </View>

                <View>
                    <TouchableHighlight>
                        <Text style={styles.cadastro}>Cadastrar</Text>
                    </TouchableHighlight>

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    conteudo:{
      display:"flex",
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      backgroundColor:"rgb(101, 37, 131)",
    },

    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width:'80%',
        borderRadius:5,
        margin:20
      },    

bloco:{
    marginBottom:20,
    padding:15,
    width:"80%",
  },

  cadastro:{
    paddingBottom:10,
    color:"rgb(101, 37, 131)",
  },

  txt:{
    width:'100%',
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    borderRadius:10,
  },

  botao:{
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
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