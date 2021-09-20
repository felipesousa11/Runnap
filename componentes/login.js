import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import firebase from './firebaseConfig';
import Home from './home'

export default function Login ({ navigation }){

  const [email,setEmail]= useState('')
  const [senha,setSenha]= useState('')
  const [mostrar,setMostrar]= useState(true)


  function login(){
    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            navigation.navigate('Home');
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('email ou senha incorretos!!',errorCode, errorMessage);
  });
  }

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user.uid)
        } else {
          console.log('não logado')
        }
      });
  },[])
      return(
        <View style={styles.conteudo}>
                
            <View style={styles.container}>

                <View style={styles.bloco}>

                    <Image
                        source={require('../img/logo.png')}
                        style={styles.img}
                    />

                    <TextInput 
                        style={styles.txt}
                        autoFocus={false}
                        autoCorrect={false}
                        placeholder="Seu email cadastrado"
                        onChangeText={email => setEmail(email)} 
                        value={email}
                        keyboardType="email-address"
                    ></TextInput> 
                </View>
                
                <View style={styles.bloco}>
                    <TextInput 
                        style={styles.txt}
                        autoFocus={false}
                        autoCorrect={false}
                        placeholder="Sua senha"
                        secureTextEntry={mostrar}
                        onChangeText={senha => setSenha(senha)} 
                        value={senha}
                    ></TextInput> 
                    <TouchableOpacity 
                        style={styles.icone}
                        //trocando o valor da constante para aparecer a senha
                        onPress={()=>setMostrar(!mostrar)}
                    >
                       {mostrar?
                            <Feather name="eye-off" size={24} color="black" />
                            :
                            <Ionicons name="eye" color="black" size={24}/>
                            

                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.bloco}>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={() => {login()}}
                    >
                        <Text style={{color:'#fff'}}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Cadastro')}
                    >
                        <Text style={styles.cadastro}>Cadastrar</Text>
                    </TouchableOpacity>

                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.cadastro}>Home</Text>
                    </TouchableOpacity>

                </View>
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
        marginBottom:10,
        padding:10,
        width:"80%",
        justifyContent:"center",
        alignItems:'center'
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
        backgroundColor:"rgb(101, 37, 131)",
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
        marginTop:100,
    },
    icone:{
        width:"15%",
        //height:45,
        marginTop:-30,
        marginLeft:200,
        paddingRight:5

    },
})