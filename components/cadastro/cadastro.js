import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image, Pic} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import firebase from '../../firebaseConfig';



export default function Cadastro ({ navigation }){

  const [email,setEmail]= useState('')
  const [senha,setSenha]= useState('')
  const [mostrar,setMostrar]= useState(true)

  const onChangeEmail = (txtEmail) => {
      setEmail(txtEmail)
  }

  const onChangeSenha = (txtSenha) => {
    setSenha(txtSenha)
}
 
  function cadastrar(){
    firebase.auth().createUserWithEmailAndPassword(email, senha)
.then((userCredential) => {
    navigation.navigate('Home')
var user = userCredential.user;
// ...
})
.catch((error) => {
var errorCode = error.code;
var errorMessage = error.message;
alert(errorCode, errorMessage);
// ..
});
}
  
      return(
              
            <View style={styles.container}>
                <View style={styles.bloco}>
                <Image
                        source={require('../../assets/logotipo.png')}
                        style={styles.img}
                    />
                    
                    <TextInput 
                        style={styles.txt}
                        placeholder="Seu email cadastrado"
                        onChangeText={txtEmail => onChangeEmail(txtEmail)} 
                        value={email}
                        keyboardType="email-address"
                    ></TextInput> 
                </View>
                
                <View style={styles.bloco}>
                    <TextInput 
                        style={styles.txt}
                        placeholder="Sua senha"
                        secureTextEntry={mostrar}
                        onChangeText={txtSenha => onChangeSenha(txtSenha)} 
                        value={senha}
                    ></TextInput> 
                    <TouchableOpacity 
                        style={styles.icone}
                        //trocando o valor da constante para aparecer a senha
                        onPress={()=>setMostrar(!mostrar)}
                    >
                       {mostrar?
                            <Feather name="eye-off" size={24} color="#C9CFDF" />
                            :
                            <Ionicons name="eye" color="#C9CFDF" size={24}/>
                            

                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.bloco}>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={() => {cadastrar()}}
                    >
                        <Text style={{color:'#ffffff'}}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

               
            </View>
        
    );
}

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