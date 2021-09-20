import React ,{useState,useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { Entypo, FontAwesome,Fontisto,Feather,AntDesign,Ionicons } from '@expo/vector-icons';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';
import firebase from '../../firebaseConfig';
import Myfeed from '../../assets/components/myfeeds'


export default function Perfil ({ navigation }){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }
    
    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');

   

        useEffect(() =>{
            let ref = firebase.firestore().collection('user').where("user_id", "==", user_id).onSnapshot(querySnapshot =>{
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

    function logout(){
        firebase.auth().signOut().then(() => {
            navigation.navigate('Login')
          }).catch((error) => {
            alert('falha')
        });
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
                        source={require('../../assets/perfil.png')}
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


