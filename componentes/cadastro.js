import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView,TouchableOpacity} from 'react-native';
import { Ionicons, Feather  } from '@expo/vector-icons';
import firebase from './firebaseConfig';
import RNPickerSelect from 'react-native-picker-select';
import * as ImagePicker from 'react-native-image-picker';
import * as Permissions from 'expo-permissions';



export default function Cadastro ({ navigation }){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }
    
    const user_id = firebase.auth().currentUser.uid
    const [email, setEmail]= useState('')
    const [senha, setSenha]= useState('')
    const [mostrar, setMostrar]= useState(true)
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
    
        navigation.navigate('Home')
        
    }catch (error){
        alert(error)
    }
  
}
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
        mediaTypes: ImagePicker.mediaTypesOptinos.All(),
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.cancelled) {
      this.uploadImage(result.uri, "test-image")
      .then(() => {
          Alert.alert("Sucesso");
      })
      .catch((error) => {
          Alert.alert(error);
      });
    }
  }
    function cadastrar(){
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            alert('Cadastrado com sucesso')
            let user = userCredential.user;
            navigation.navigate('Home');
        
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
        
                <View style={estilos.conteudo}>
                    <View style={estilos.container}> 
                        <View style={estilos.bloco}>
                                
                                <View style={estilos.bloco}>
                                    <TextInput 
                                        style={estilos.txt}
                                        placeholder="Nome"
                                        onChangeText={txtNome => onChangeNome(txtNome)} 
                                        value={nome}
                                    ></TextInput> 
                                </View>
                                <View style={estilos.bloco}>
                                    <TextInput 
                                        style={estilos.txt}
                                        autoFocus={false}
                                        placeholder="Email"
                                        autoCorrect={false}
                                        onChangeText={email => setEmail(email)} 
                                        value={email}
                                        keyboardType="email-address"
                                    ></TextInput> 
                                </View>
                              
                                <View style={estilos.bloco}>
                                    <TextInput 
                                        style={estilos.txtsenha}
                                        autoFocus={false}
                                        placeholder="Cadastrar Senha"
                                        secureTextEntry={mostrar}
                                        autoCorrect={false}
                                        onChangeText={senha => setSenha(senha)} 
                                        value={senha}
                                    ></TextInput>

                                    <TouchableOpacity 
                                        style={estilos.icone}
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
                                <View style={estilos.bloco}>
                                    <Text>Sexo:</Text>
                                    <RNPickerSelect
                                        style={estilos.txt}
                                        onValueChange={(value) => onChangeSexo(value)}
                                        items={[
                                            { label: 'Feminino', value: 'Feminino' },
                                            { label: 'Masculino', value: 'Masculino' },
                                        ]}
                                    />
                                </View>
                                <View style={estilos.bloco}>
                                    <TextInput 
                                        style={estilos.txt}
                                        placeholder="Sua altura"
                                        keyboardType="numeric"
                                        onChangeText={txtAltura => onChangeAltura(txtAltura)} 
                                        value={altura}
                                    ></TextInput> 
                                </View>
                                <View style={estilos.bloco}>
                                    <TextInput 
                                        style={estilos.txt}
                                        placeholder="Seu peso"
                                        keyboardType="numeric"
                                        onChangeText={txtPeso => onChangePeso(txtPeso)} 
                                        value={peso}
                                    ></TextInput> 
                                </View>

                                <View style={estilos.bloco}>
                                    <TextInput 
                                        style={estilos.txt}
                                        placeholder="Sua idade"
                                        keyboardType="numeric"
                                        onChangeText={txtIdade => onChangeIdade(txtIdade)} 
                                        value={idade}
                                    ></TextInput> 
                                </View>
                                <View style={estilos.bloco}>
                                    <TouchableOpacity 
                                        style={estilos.botao}
                                        onPress={pickImage}
                                    >
                                        <Text style={{color:'#000'}}>Foto</Text>
                                    
                                    </TouchableOpacity>
                                </View>
                                

                                <View style={estilos.bloco}>
                                    <TouchableOpacity
                                        style={estilos.btnLogar}
                                        onPress={() => {cadastrar()}}
                                    >
                                        <Text style={{color:'#fff'}}>Cadastrar</Text>
                                    </TouchableOpacity>
                                </View>                                                                      
                        </View>
                    </View>
                </View>    
           
    )
}

const estilos = StyleSheet.create({

    conteudo:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"rgb(101, 37, 131)",
    },
    container: {
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
        width:"100%",
        justifyContent:"center",
        alignItems:'center'
    },

    txt:{
        width:'100%',
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
    },
    txtsenha:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
    },
    img:{
        width:'50%',
        height:150,
        resizeMode:'contain',
        marginBottom:-40,
        marginTop:-35
    },

    btnLogar:{
        backgroundColor: "rgb(101, 37, 131)",
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        color:'#fff',
        borderRadius:7,
    },


    img:{
        width:'100%',
        resizeMode:'cover',
        marginTop:170,
        marginBottom:150,
        borderColor:'black',
        borderWidth:1,
        borderRadius:40,
    },
    icone:{
        width:"15%",
        //height:45,
        marginBottom:-10,
        marginTop:-30,
        marginLeft:230,
        paddingRight:5,
        
    },
})