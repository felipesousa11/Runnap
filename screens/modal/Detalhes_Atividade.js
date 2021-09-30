import React ,{useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity,FlatList, Modal } from 'react-native';
import { FontAwesome5, AntDesign ,Feather,MaterialCommunityIcons,Ionicons   } from '@expo/vector-icons';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';
import firebase from '../../firebaseConfig';


export default function({navigation, item}){

    const [atividade, setAtividade] = useState ({});

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }

    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');

    useEffect(() =>{
        setAtividade (item)
        console.log (item)
    }, [item])

    function delFire(key) {
        firebase.database().ref('/atividades/' + key).remove()
      }  
    return(    
        <View style={[styles.containerfeed, styles.containertop]}>
           <View style={styles.topoatividade}>
                <TouchableOpacity style={styles.buttonNews} onPress={() => navigation.navigate('Feed')}>
                    <Ionicons name="arrow-undo-outline" size={24} color="black" />
                </TouchableOpacity>
                    <Text style={styles.title}>Detalhe da Atividade</Text>
            </View>
            
           {
            atividade &&
                        <View style={{shadowColor:'black', marginBottom:10, backgroundColor:'#fff',shadowColor: '#470000',
                        shadowOffset: {width: 1, height: 2},
                        shadowOpacity: 0.2,
                        elevation: 3,}}>

                            
                            
                            <View style={{flexDirection:'row',paddingLeft:15,paddingRight:15,}}>
                                <Text style={styles.txtTitulo}>{atividade.nome}</Text>
                            </View>
                                <View style={styles.box}>
                                    <View style={{paddingRight:20}}>
                                        <Text style={{fontSize:12, paddingRight:25 }}>Data</Text>
                                        <Text style={styles.txtInfor} >{atividade.dia}/{atividade.mes}/{atividade.ano}</Text>
                                    </View>

                                    <View style={{paddingRight:20}}>
                                        <Text style={{fontSize:12, paddingRight:25}}>Distância</Text>
                                        <Text style={styles.txtInfor}>{atividade.distancia} km</Text>
                                    </View>
                                    
                                    <View style={{paddingRight:20}}>
                                        <Text style={{fontSize:12, paddingRight:25}}>Tempo</Text>
                                        <Text style={styles.txtInfor}>{atividade.hora}:{atividade.minutos}:{atividade.segundos}</Text>
                                    </View>
                                </View>
                                <Image
                            source={require('../../assets/printmapa2.jpeg')}
                            style={styles.img}
                            />
                                <View style={styles.acoes}>
                                <TouchableOpacity>
                                    <View style={styles.boxuser}>
                                        <FontAwesome5 name="edit" size={24} color="black" />
                                        <Text>Editar</Text>
                                    </View>
                                </TouchableOpacity>
                                
                                    
                                    <TouchableOpacity onPress={() => { delFire(item.key) }}>
                                        <View style={styles.boxuser}>
                                            <MaterialCommunityIcons name="trash-can-outline" size={24} color="black" />
                                            <Text>Excluir</Text>
                                        </View>
                                    </TouchableOpacity>
                                    
                                
                                <TouchableOpacity>
                                    <View style={styles.boxuser}>
                                        <Feather name="share-2" size={24} color="black" />
                                        <Text>Compartilhar</Text>
                                    </View>
                                </TouchableOpacity>
                                        
                                </View>
                                
                        </View>
}
                    
        </View>
    );
}

