import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity, Image} from 'react-native';
import { Entypo,MaterialCommunityIcons,FontAwesome5,Ionicons } from '@expo/vector-icons';
import firebase from '../../firebaseConfig';
import * as ImagePicker from 'expo-image-picker';




export default function Perfil ({ navigation }){

  const [email,setEmail]= useState('')
  const [senha,setSenha]= useState('')
  const [mostrar,setMostrar]= useState(true)

  function login(){
    firebase.auth().signInWithEmailAndPassword(email, senha)
  .then((userCredential) => {
        navigation.navigate('Home')
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode, errorMessage);
  });
  }

  function logout(){
    firebase.auth().signOut().then(() => {
        navigation.navigate('Login')
      }).catch((error) => {
        alert('falha')
    });
}

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            navigation.navigate('Perfil')
        } else {
          console.log('não logado')
        }
      });
  },[])

  const user_id = firebase.auth().currentUser.uid
  const [data, setData] = useState('');

 
      useEffect(() =>{
          let ref = firebase.firestore().collection('perfil').where("user_id", "==", user_id).onSnapshot(querySnapshot =>{
          const data = []
              querySnapshot.forEach(doc =>{
                  data.push({
                      ...doc.data(),
                         key:doc.id
              })
          })
          setData(data)
      })
          return () => ref()
      }, [])
  
      return(
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/perfil.jpg')}
                    />
                        <Text style={styles.nome}>Nome e Sobrenome</Text>
                    <TouchableOpacity 
                        style={styles.editperfil}
                        onPress={() => navigation.navigate('Edit')}>
                        <Text>Editar perfil</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.box}>
                    <View style={{backgroundColor:'#D6B483', borderRadius:10,}}>
                        <Text  style={styles.categoria}>Dados pessoais</Text>
                            <View style={styles.linha}>
                                <View>
                                    <Text style={styles.titulo}>95 kg</Text>
                                    <Text style={styles.subtitulo}>Peso</Text>
                                </View>
                                <View>
                                    <Text style={styles.titulo}>178 cm</Text>
                                    <Text style={styles.subtitulo}>Altura</Text>
                                </View>
                                <View>
                                    <Text style={styles.titulo}>35,6</Text>
                                    <Text style={styles.subtitulo}>IMC</Text>
                                </View>
                            </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={{backgroundColor:'#83D6C7',borderRadius:10,}}>
                        <Text style={styles.categoria}>Corrida</Text>
                            <View style={styles.linha}>
                                <View>
                                    <Text style={styles.titulo}>15,6 km</Text>
                                    <Text style={styles.subtitulo}>Distancia total</Text>
                                </View>
                                <View>
                                    <Text style={styles.titulo}>00:54:58</Text>
                                    <Text style={styles.subtitulo}>Duração Total</Text>
                                </View>
                                <View>
                                    <Text style={styles.titulo}>08</Text>
                                    <Text style={styles.subtitulo}>Atividades</Text>
                                </View>
                            </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={{backgroundColor:'#839FD6', borderRadius:10,}}>
                        <Text  style={styles.categoria}>Caminhada</Text>
                            <View style={styles.linha}>
                                <View>
                                    <Text style={styles.titulo}>28,6 km</Text>
                                    <Text style={styles.subtitulo}>Distancia total</Text>
                                </View>
                                <View>
                                    <Text style={styles.titulo}>01:21:58</Text>
                                    <Text style={styles.subtitulo}>Duração Total</Text>
                                </View>
                                <View>
                                    <Text style={styles.titulo}>05</Text>
                                    <Text style={styles.subtitulo}>Atividades</Text>
                                </View>
                            </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={{backgroundColor:'#B183D6',borderRadius:10,}}>
                        <Text  style={styles.categoria}>Bicileta</Text>
                            <View style={styles.linha}>
                                <View>
                                    <Text style={styles.titulo}>35,6 km</Text>
                                    <Text style={styles.subtitulo}>Distancia total</Text>
                                </View>
                                <View>
                                    <Text style={styles.titulo}>01:54:58</Text>
                                    <Text style={styles.subtitulo}>Duração Total</Text>
                                </View>
                                <View>
                                    <Text style={styles.titulo}>02</Text>
                                    <Text style={styles.subtitulo}>Atividades</Text>
                                </View>
                            </View>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={{backgroundColor:'#D6839C',borderRadius:10,}}>
                        <Text  style={styles.categoria}>Outras Atividades</Text>
                            <View style={styles.linha}>
                                <View>
                                    <Text style={styles.titulo}>11</Text>
                                    <Text style={styles.subtitulo}>Atividades</Text>
                                </View>
                                <View>
                                    <Text style={styles.titulo}>00:54:58</Text>
                                    <Text style={styles.subtitulo}>Duração Total</Text>
                                </View>
                            </View>
                    </View>
                </View>

                <View>
                    <TouchableOpacity 
                        onPress={() => {logout()}}
                    >
                        <Text>SAIR</Text>
                    </TouchableOpacity>
                </View>

            </View>
         
    );
}

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },   
    
    header:{
        width:'100%',
        height:200,
        alignItems:'center'
    },

    box:{
        width:'95%',
        justifyContent:'space-between',
        borderRadius:10,
        marginBottom:5,
        borderWidth:1
    },

    bloco:{
        marginBottom:10,
        padding:10,
        width:"80%",
        justifyContent:"center",
        alignItems:'center'
    },

    titulo:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center'
        
    },

    categoria:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        paddingLeft:5
    },

    subtitulo:{
        fontSize:14,
        color:'#fff',
        textAlign:'center',
        paddingBottom:5,
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
        width:'100%',
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
        width:100,
        height:100,
        resizeMode:'cover',
        borderWidth:1,
        borderColor:'orange',
        borderRadius:50,
        margin:10
        
        
    },
    icone:{
        width:"15%",
        //height:45,
       // marginTop:-30,
        //marginLeft:200,
        paddingRight:5,
        padding:10,

    },

    logo:{
        fontSize:50,
        margin:10,
        color:'#FF8C00'
    },

    linha:{
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:20,
        paddingLeft:5,
        paddingRight:5
       

    },

    txtinfor:{
        fontSize:20, 
        fontWeight:'bold',
        textAlign:'left'
    },

    

    boxperfil:{
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'#fff', 
    marginBottom:10,
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 3
    },

    nome:{
        fontSize:20, 
        fontWeight:'bold',
    },

    editperfil:{
        marginTop:5,
        marginBottom:5,
        borderWidth:1,
        borderColor:'red',
        borderRadius:5,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
        
    }

    
})
