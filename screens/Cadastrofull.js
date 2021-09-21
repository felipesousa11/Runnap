import React, {useState, useEffect} from 'react';
import { Text, View,TextInput, TouchableOpacity, Image, Platform, Alert} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import firebase from '../firebaseConfig';
import {styles} from '../assets/style/Style';
import * as ImagePicker from 'expo-image-picker';
//import Constants from 'expo-constants';
//import Axios from "axios";
import * as Permissions from 'expo-permissions'




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
  const [image, setImage]= useState ('')
  
  
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

const onChangeFoto = (Foto) => {
    setFoto(Foto)
}

function cadastrofull () {
    try{
        firebase.firestore().collection('user').add({
            nome: nome,
            altura: altura,
            peso: peso,
            idade: idade,
            imc: peso/(altura*altura),
            image: image,
            user_id:user_id,
        });
    
        navigation.navigate('Restrito')
        
    }catch (error){
        alert(error)
    }
  
}

  ///////////////////////////////////
  //const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
    });

    if (!result.cancelled) {
      this.uploadImage(result.uri)
      .then(() => {
          Alert.alert("Sucesso");
      })
      .catch((error) => {
          Alert.alert(error);
      });
    }
  }

  uploadImage = async (uri, imageName) => {
      const response = await fetch (uri);
      const blob = await response.blob();

      var ref = firebase.storage().ref().child(`user/${auth.currentUser.uid}/Perfil`);
      return ref.put(blob);
  }

  
  
  
      return(
              
            <View style={styles.container}>
                <View style={styles.bloco}>
                    <TextInput 
                        style={styles.txt}
                        placeholder="Nome"
                        onChangeText={txtNome => onChangeNome(txtNome)} 
                        value={nome}
                    ></TextInput> 
                </View>


                <View style={styles.bloco}>
                <RNPickerSelect
                    style={styles.txt}
                    onValueChange={(value) => onChangeSexo(value)}
                    items={[
                        { label: 'Feminino', value: 'Feminino' },
                        { label: 'Masculino', value: 'Masculino' },
                    ]}
                />
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
                        onPress={pickImage}
                    >
                        <Text style={{color:'#ffffff'}}>Foto</Text>
                      
                    </TouchableOpacity>
                </View>

                <View style={styles.bloco}>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={() => {cadastrofull()}}
                    >
                        <Text style={{color:'#ffffff'}}>Salvar</Text>
                    </TouchableOpacity>
                </View>

               
            </View>
        
    );
}

