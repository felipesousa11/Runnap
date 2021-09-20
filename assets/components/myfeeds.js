import React, {useState, useEffect} from 'react';
import { Text, View,Image, TouchableOpacity, FlatList} from 'react-native';
import firebase from '../../firebaseConfig';
import {styles} from '../style/Style';
import { FontAwesome5, FontAwesome,Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';



export default function Feed ({ navigation }){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }
    
    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');

   
        useEffect(() =>{
            let ref = firebase.firestore().collection('atividades').where("user_id", "==", user_id).onSnapshot(querySnapshot =>{
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
              
            <View >
               
               <FlatList
                    data={data}
                    renderItem={({item})=>(
                        <View>

                        <Image
                            source={require('../../assets/logotipo.png')}
                            style={styles.img}
                            />

                            <View style={{flexDirection:'row',paddingLeft:15,paddingRight:15,}}>
                                <FontAwesome5 name={"running"} size={24} color="black" style={{paddingRight:5}} />
                                <Text style={styles.txtTitulo}>{item.nome}</Text>
                            </View>
                            <View style={styles.box}>
                                    <View>
                                        <Text style={{fontSize:12, textAlign:'center'}}>Data</Text>
                                        <Text style={styles.txtInfor}>{item.dia}/{item.mes}/{item.ano}</Text>
                                    </View>

                                    <View>
                                        <Text style={{fontSize:12, textAlign:'center'}}>Distância</Text>
                                        <Text style={styles.txtInfor}>{item.distancia} km</Text>
                                    </View>
                                    
                                    <View>
                                        <Text style={{fontSize:12, textAlign:'center'}}>Tempo</Text>
                                        <Text style={styles.txtInfor}>{item.hora}:{item.minuto}:{item.segundo}</Text>
                                    </View>
                                </View>
                                
                                <View style={styles.acoes}>
                                <TouchableOpacity>
                                    <Ionicons name="heart-outline" size={24} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Feather name="share-2" size={24} color="black" />
                                </TouchableOpacity>
                                        
                                </View>
                        </View>
                        
                        )}
                        />
            </View>
        
    );
}

