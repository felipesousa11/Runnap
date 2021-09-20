import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image, Pic} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import firebase from '../../firebaseConfig';
import { Select } from './select';

export default function Cadastrofull ({ navigation }){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }


    const user_id = firebase.auth().currentUser.uid

  const [nome,setNome]= useState('')
  const [sexo,setSexo]= useState('')
  const [altura,setAltura]= useState('')
  const [peso,setPeso]= useState('')
  const [idade, setIdade]= useState ('')
  const [imc, setImc]= useState ('')
  
  
  const onChangeNome = (txtNome) => {
      setNome(txtNome)
  }

  const onChangeSexo = (txtSexo) => {
    setSexo(txtSexo)
}

const onChangeAltura = (txtAltura) => {
    setAltura(txtAltura)
}

  const onChangePeso = (txtPeso) => {
    setPeso(txtPeso)
}

const onChangeIdade = (txtIdade) => {
    setIdade(txtIdade)
}

function editar () {
    try{
        var user = firebase.auth().currentUser;
        currentUser.updateProfile({
            altura: altura,
            nome: nome,
            peso: peso,
            idade: idade,
            sexo: sexo,
            imc: (peso/(Math.pow(altura,2)))*1000,
            user_id:user_id,
        })
    }catch (error){
        alert(error)
    }
    finally{
        navigation.navigate('Feed')
        //var user = userCredential.user;
    }
}




  ///////////////////////////////////
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };
  
  
      return(
              
            <View style={styles.container}>
                <View style={styles.bloco}>
                <Image
                        source={require('../../assets/logotipo.png')}
                        style={styles.img}
                    />
                    <TextInput 
                        style={styles.txt}
                        placeholder="Nome"
                        onChangeText={txtNome => onChangeNome(txtNome)} 
                        value={nome}
                    ></TextInput> 
                </View>

                <View>
                    <Select/>
                </View>

                <View style={styles.bloco}>
                    <TextInput 
                        style={styles.txt}
                        placeholder="Sua altura"
                        keyboardType="numeric"
                        onChangeText={txtAltura => onChangeAltura(txtAltura)} 
                        value={altura}
                    ></TextInput> 
                </View>

                <View style={styles.bloco}>
                    <TextInput 
                        style={styles.txt}
                        placeholder="Seu peso"
                        keyboardType="numeric"
                        onChangeText={txtPeso => onChangePeso(txtPeso)} 
                        value={peso}
                    ></TextInput> 
                </View>

                <View style={styles.bloco}>
                    <TextInput 
                        style={styles.txt}
                        placeholder="Sua idade"
                        keyboardType="numeric"
                        onChangeText={txtIdade => onChangeIdade(txtIdade)} 
                        value={idade}
                    ></TextInput> 
                </View>

                <View style={styles.bloco}>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={() => {editar()}}
                    >
                        <Text style={{color:'#ffffff'}}>Salvar</Text>
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