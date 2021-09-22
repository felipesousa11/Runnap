import React ,{useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity,FlatList, Modal } from 'react-native';
import { FontAwesome5, AntDesign ,Feather,MaterialCommunityIcons,Ionicons   } from '@expo/vector-icons';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';
import firebase from '../../firebaseConfig';
import Atividade from './Atividade';
import Detalhes from '../modal/Detalhes_Atividade';

export default function Feed ({ navigation }){

    const [atividade, setAtividade] = useState(false);
    const [detalhe, setDetalhe] = useState(false);
    const [atividadeSelecionada, setAtividadeSelecionada] = useState({});

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

    const showDetalhe = (item) => {
        setDetalhe (true)
        setAtividadeSelecionada (item)
    }


   
    return(    
        <View style={[styles.containerfeed, styles.containertop]}>
           <Menutopo title='Feed' navigation={navigation}/>
            
           <FlatList
                    data={data}
                    renderItem={({item})=>(
                        <View style={{shadowColor:'black', marginBottom:10, backgroundColor:'#fff',shadowColor: '#470000',
                        shadowOffset: {width: 1, height: 2},
                        shadowOpacity: 0.2,
                        elevation: 3,}}>

                            <View style={styles.boxuser}>
                                <TouchableOpacity
                                    onPress={() =>{showDetalhe(item);}}
                                    style={styles.btnDark}
                                >
                                    <View style={{flexDirection:'row', alignItems:'center'}}>
                                        <FontAwesome5 name="running" size={40} color="black" style={{paddingRight:5}}/>
                                        <View style={styles.box}>

                                            <View style={{paddingRight:20}}>
                                                <Text style={{fontSize:12, paddingRight:25}}>Distância</Text>
                                                <Text style={styles.txtInfor}>{item.distancia} km</Text>
                                            </View>
                                    
                                            <View style={{paddingRight:20}}>
                                                <Text style={{fontSize:12, paddingRight:25}}>Tempo</Text>
                                                <Text style={styles.txtInfor}>{item.min}:{item.minuto}:{item.segundo}</Text>
                                            </View>

                                            <View style={{paddingRight:20}}>
                                                <Text >{item.dia}/{item.mes}/{item.ano}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                           
                                
                        </View>
                        
                        )}
                        />
                        <View style={{alignSelf:'flex-end', padding:10}}>
                            <TouchableOpacity
                                onPress={() =>{setAtividade(!atividade);}}
                                style={styles.btnDark}
                            >
                                <AntDesign name="pluscircle" size={50} color="red" />
                            </TouchableOpacity>
                        </View>
                        <Modal 
                                    animationType='slide' visible={atividade}
                                    onRequestClose={() => {setAtividade(false);}}
                                >
                                <TouchableOpacity style={styles.buttonMenu} 
                                onPress={() => {setAtividade(!atividade);}}
                                >
                                    </TouchableOpacity>
                                    <Atividade/>
                                </Modal>
                                
                                <Modal 
                                    animationType='slide' visible={detalhe}
                                    onRequestClose={() => {setDetalhe(false);}}
                                    
                                >
                                <TouchableOpacity style={styles.buttonMenu} 
                                onPress={() => {setDetalhe(!detalhe);}}
                                >
                                    </TouchableOpacity>
                                    <Detalhes item = {atividadeSelecionada}/>
                                </Modal>
        </View>
    );
}

