import React ,{useState, useEffect} from 'react';
import { Text, View, Image, RefreshControl,FlatList, Modal } from 'react-native';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';
import firebase from '../../firebaseConfig';
import AtividadesService from '../../service/AtividadesService';

export default function Ranking ({ navigation }){

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
      }, []);


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
                    refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      }
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
                        <View >
                            <View>
                                <Text style={styles.txtTitulo}>{item.profile.nome}</Text>
                            </View>
                            <View style={{flexDirection:'row', alignContent:'space-around'}}>
                                <Text>{item.distancia} km</Text>
                                <Text style={{paddingLeft:20}}>{item.hora}:{item.minutos}:{item.segundos}</Text>
                                <Text style={{paddingLeft:20}}>{item.dia}/{item.mes}/{item.ano}</Text>
                            </View>

                        </View>
                    </View>
                
            </View>
  
                        </View>
                        
                        )}
                        />
                        
        </View>
    );
}

