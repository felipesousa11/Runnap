import React,{useState}  from 'react';
import { SafeAreaView,Text,View,TouchableOpacity,TextInput } from 'react-native';
import {styles} from '../../assets/style/Style';
import { MaterialCommunityIcons,Feather,AntDesign,Ionicons, Entypo } from '@expo/vector-icons';
import firebase from '../../firebaseConfig';



export default function editPerfil({navigation, route}){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }

    const user_id = firebase.auth().currentUser.uid
    const [nomeedit,setNomeedit]= useState(route.params.nome)
    const idedit= route.params.id;

    function editarPerfil(nome,id){
        firebase.firestore().collection("user").doc(id).update({
            nome: nomeedit
        })
    }

    return(
        <View style={[styles.container, styles.containertop]}>
            <View style={styles.topo}>
                <Text style={styles.titledit}>Editar Perfil</Text>
            </View>
            <View style={{paddingTop:10}}> 
                <Text>Preencher com seus dados os campos a seguir para editar seu cadastro!</Text>
            </View>
            <View style={{paddingTop:20}}>
                <TextInput 
                    style={styles.txtedit}
                    placeholder="Nome"
                    onChangeText={setNomeedit}value={nomeedit}
                ></TextInput> 
            </View>
            <View style={{paddingTop:20}}>
                <TouchableOpacity
                    style={styles.btnedit}
                    onPress={()=>editarPerfil(nomeedit,user_id)}
                >
                    <Text>Salvar</Text>
                </TouchableOpacity>
            </View>
        
        </View>
        
    )
}
