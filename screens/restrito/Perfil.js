import React ,{useState,useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { Entypo, FontAwesome,Fontisto,Feather,AntDesign,Ionicons } from '@expo/vector-icons';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';
import firebase from '../../firebaseConfig';
import UserService from '../../service/UserService';

export default function Perfil ({ navigation }){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }
    
    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');
    const [imagem, setImagem]= useState (null);

    
    async function loadUserProfile(){
        const user = await UserService.getUserProfile(user_id, true);
        setData([user]);    
        setImagem(user.imagem);
    }

    useEffect(() =>{
        loadUserProfile();        
    }, [])

    function logout(){
        UserService.logout(()=>{
            navigation.navigate('Login')
        })
    }

    function update (){
        firebase.firestore().collection('user').doc(user_id).update({
            nome,
            altura,
            peso,
            idade,
            user_id: user_id
            });
    }

   

    return(    
        <View style={[styles.container, styles.containertop]}>
            <View style={styles.topo}>
                <TouchableOpacity style={styles.buttonNews}>
                    <Ionicons name="ios-notifications-circle" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Perfil</Text>
            <TouchableOpacity style={styles.buttonMenu}  onPress={() => {logout()}}>
                <AntDesign name="logout" size={24} color="black" />
            </TouchableOpacity>
        </View>

        

            <FlatList
                    data={data}
                    renderItem={({item})=>(

            <View>

                <View style={{paddingTop:10,paddingBottom:10}}>
                    <Image 
                        source={{uri:imagem}}
                        style={styles.imgprofile}
                    /> 
                    <Text style={styles.txtTitulo}>{item.nome}</Text>
                </View>

                <View style={styles.infouser}>
                    <View>
                        <Text style={styles.txtInfor}>{item.altura}</Text>
                        <Text style={styles.txtsubtitle}>Altura</Text>
                    </View>

                    <View>
                        <Text style={styles.txtInfor}>{item.peso}</Text>
                        <Text style={styles.txtsubtitle}>peso</Text>
                    </View> 

                    <View>
                        <Text style={styles.txtInfor}>{item.idade}</Text>
                        <Text style={styles.txtsubtitle}>Idade</Text>
                    </View> 
                </View>
            </View>
                    )}
                    />
                    <View>
                <TouchableOpacity 
                    onPress={() => {update()}}
                >
                    <Feather name="edit" size={24} color="black" />
                </TouchableOpacity>
            </View>
     </View>
    );
}


