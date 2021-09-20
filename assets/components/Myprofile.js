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

      return(
              
            <View >
               
               <FlatList
                    data={data}
                    renderItem={({item})=>(
                    <View>
                        <View style={{paddingTop:10,paddingBottom:10}}>
                            <Image
                                source={{uri:'https://lh3.googleusercontent.com/ogw/ADea4I6-VVyY2h5Oyl5PTd2HVv0Obmk-hz-DqhGOAW1Q9mw=s83-c-mo',}}
                                style={styles.imgprofile}
                            />
                            <Text style={styles.txtTitulo}>{item.nome}</Text>
                        </View>

                        <View style={styles.box}>
                            <View>
                                <Text style={styles.txtInfor}>12</Text>
                                <Text style={styles.txtsubtitle}>Apoiadores</Text>
                            </View>

                            <View>
                                <Text style={styles.txtInfor}>15</Text>
                                <Text style={styles.txtsubtitle}>Apoiando</Text>
                            </View> 

                            <View>
                                <Text style={styles.txtInfor}>19</Text>
                                <Text style={styles.txtsubtitle}>Atividades</Text>
                            </View>  
                        </View>

                    </View>
                        
                        )}
                        />
            </View>
        
    );
}

