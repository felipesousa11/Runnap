import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, FlatList} from 'react-native';
import firebase from '../../firebaseConfig';
import { FontAwesome5, FontAwesome, Feather, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';



export default function Feed ({ navigation }){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }
    
    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');

   
        useEffect(() =>{
            let ref = firebase.firestore().collection('atividades').onSnapshot(querySnapshot =>{
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
              
            <View style={style.container}>
               
                <FlatList
                    data={data}
                    //keyExtractor={({key}, index)=>key}
                    renderItem={({item})=>(
                        <View style={style.container}>
                            <View style={{flexDirection:'row',paddingLeft:15,paddingRight:15,}}>
                                <FontAwesome5 name={"running"} size={24} color="black" style={{paddingRight:5}} />
                                <Text style={style.txtTitulo}>{item.nome}</Text>
                            </View>
                            <View style={style.box}>
                                    <View>
                                        <Text style={{fontSize:12, textAlign:'center'}}>Data</Text>
                                        <Text style={style.txtInfor}>{item.dia}/{item.mes}/{item.ano}</Text>
                                    </View>

                                    <View>
                                        <Text style={{fontSize:12, textAlign:'center'}}>Distância</Text>
                                        <Text style={style.txtInfor}>{item.distancia} km</Text>
                                    </View>
                                    
                                    <View>
                                        <Text style={{fontSize:12, textAlign:'center'}}>Tempo</Text>
                                        <Text style={style.txtInfor}>{item.hora}:{item.minuto}:{item.segundo}</Text>
                                    </View>
                                </View>
                                
                                <View style={style.acoes}>
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

const style = StyleSheet.create({
   
    container:{
        flex: 1,
        backgroundColor: '#fff',
        
      
    },    

    box:{
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        justifyContent:'space-between',
    },

    acoes:{
        backgroundColor:"#EBEAEA",
        flexDirection:'row',
        marginTop:15,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        justifyContent:'space-between',

    },
   
    txtTitulo:{
        fontSize:20,
        fontWeight:'bold',
    },

    txtInfor:{
        fontSize:17,
        color:"#363636",
    },
    
    imagem:{
        width:"100%",
        resizeMode: 'contain',
        marginTop:-110,
        marginBottom:-115,

    },
})