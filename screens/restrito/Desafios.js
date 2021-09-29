import React ,{useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity,FlatList, Modal } from 'react-native';
import { FontAwesome5, AntDesign ,Feather,MaterialCommunityIcons,Ionicons   } from '@expo/vector-icons';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';
import firebase from '../../firebaseConfig';

export default function Ranking ({ navigation }){


    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }

    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');

    useEffect(() =>{
        let ref = firebase.firestore().collection("atividades")
        .orderBy("date", "desc").onSnapshot(querySnapshot =>{
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
        <View style={[styles.containerfeed, styles.containertop]}>
           <Menutopo title='Ranking' navigation={navigation}/>
            
           <FlatList
                    data={data}
                    renderItem={({item})=>(
                        <View style={{shadowColor:'black', marginBottom:10, backgroundColor:'#fff',shadowColor: '#470000',
                        shadowOffset: {width: 1, height: 2},
                        shadowOpacity: 0.2,
                        elevation: 3,}}>

            <View style={styles.boxuser}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={styles.box}>
                        <View style={{paddingTop:10,paddingBottom:10}}>
                            <Image
                                source={require('../../assets/perfil.png')}
                                style={styles.imgprofile}
                            />
                        </View>
                        </View>
                        <View style={{paddingRight:20, flexDirection:'row'}}>
                            <Text style={styles.txtTitulo}>{item.nome}</Text>
                            <Text style={styles.txtInfor}>{item.distancia} km</Text>
                        </View>
                    </View>
                
            </View>
  
                        </View>
                        
                        )}
                        />
                        
        </View>
    );
}

