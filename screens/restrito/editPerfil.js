import React,{useState}  from 'react';
import { SafeAreaView,Text,View,TouchableOpacity,TextInput } from 'react-native';
import {styles} from '../../assets/style/Style';
import { MaterialCommunityIcons,Feather,AntDesign,Ionicons, Entypo } from '@expo/vector-icons';
import firebase from '../../firebaseConfig';
import UserService from '../../service/UserService';




export default function editPerfil({navigation, route}){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }

    const user_id = firebase.auth().currentUser.uid
    const [nome,setNome]= useState(route.params.nome)
    const idedit= route.params.id;

    const editar = () =>{
        atualizarNome ()
    }

    function editarPerfil(nome,id){
        firebase.firestore().collection("user").doc(id).update({
            displayname: nome
        })
        navigation.navigate("Perfil")
    }

    

    return(
        <View style={[styles.container, styles.containertop]}>
            <View style={styles.topo}>
                <Text style={styles.titledit}>Editar Perfil</Text>
            </View>
            <View style={{padding:15}}> 
                <Text>Preencher com seus dados os campos a seguir para editar seu cadastro!</Text>
            </View>
            <View style={{paddingTop:20}}>
                <TextInput 
                    style={styles.txtedit}
                    placeholder="Nome"
                    onChangeText={txtNome => onChangeNome(txtNome)} 
                    value={nome}
                ></TextInput> 
            </View>
            <View style={{paddingTop:20}}>
                <TouchableOpacity
                    style={styles.btnedit}
                    onPress={()=> editar(nome)}
                    value={nome}
                >
                    <Text>Salvar</Text>
                </TouchableOpacity>
            </View>
        
        </View>
        
    )
}
