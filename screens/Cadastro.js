import React, {useState, useEffect} from 'react';
import { Text, View,TextInput, TouchableOpacity, Image} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import firebase from '../firebaseConfig';
import {styles} from '../assets/style/Style';




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
    //Signed in
let user = userCredential.user;
    navigation.navigate('Cadastrofull')
})
.catch((error) => {
var errorCode = error.code;
var errorMessage = error.message;
alert(errorCode, errorMessage);
// ..
});
}

useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            navigation.navigate('Cadastrofull')
        } else {
          console.log('não logado')
        }
      });
  },[])
  
      return(
              
            <View style={styles.container}>
                <View style={styles.bloco}>
                <Image
                        source={require('../assets/logotipo.png')}
                        style={styles.img}
                    />
                    
                    <TextInput 
                        style={styles.txt}
                        placeholder="Seu email"
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

