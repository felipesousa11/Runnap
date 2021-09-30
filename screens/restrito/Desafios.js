import React ,{useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity,FlatList, Modal } from 'react-native';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';
import firebase from '../../firebaseConfig';
import AtividadesService from '../../service/AtividadesService';

export default function Ranking ({ navigation }){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }

    const user_id = firebase.auth().currentUser.uid
    const [data, setData] = useState('');

    async function loadAtividades(){
        const atividades = await AtividadesService.loadAtividades();
        setData(atividades);
    }

    useEffect(() =>{
       loadAtividades()
    }, []);

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
                            
                            { !item.profile.imagem ? 
                            <Image
                                source={require('../../assets/perfil.png')}
                                style={styles.imgprofile}
                            /> : 
                            <Image
                                source={{uri: item.profile.imagem}}
                                style={styles.imgprofile}
                            />
                            }
                        </View>
                        </View>
                        <View style={{paddingRight:20, flexDirection:'row'}}>
                            <Text style={styles.txtTitulo}>{item.profile.nome}</Text>
                            <Text style={styles.txtTitulo}>{item.nome}</Text>
                            <Text style={styles.txtInfor}>{item.distancia} km</Text>
                            <Text style={styles.txtInfor}>{item.hora}:{item.minutos}:{item.segundos}</Text>

                        </View>
                    </View>
                
            </View>
  
                        </View>
                        
                        )}
                        />
                        
        </View>
    );
}

