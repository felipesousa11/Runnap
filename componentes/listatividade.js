import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons,AntDesign  } from '@expo/vector-icons';
import firebase from './firebaseConfig';


export default function Listatividade( {navigation}){
    const [listatv, setListatv] = useState('');

    useEffect(() =>{
        firebase.database().ref('/atividades').on('value',(snapshot)=>{
            const list=[];
            snapshot.forEach(childItem => {
                list.push({
                    key: childItem.key,
                    distancia: childItem.val().distancia,
                    tempo: childItem.val().tempo,
                    data: childItem.val().data,
                });
            });
            setListatv(list);
        })
    }, [])

    function delFire(key) {
        firebase.database().ref('/atividades/' + key).remove()
      }
    
      function editFire(key, distancia, tempo, data) {
        navigation.navigate("Editatividade",{
          key: key,
          distancia: distancia,
          tempo: tempo,
          data: data,
        });
      }

    return(
      <View>
        <Text>atividades (04)</Text>
          <FlatList
              data={listatv}
              keyExtractor={(item)=>item.key}
              renderItem={({item})=>
              <View style={estilos.container}>
                 
                          
                          <View style={{flexDirection:'row', alignItems:'space-between'}}>
                              <View style={estilos.bloco}>
                                  <Text style={estilos.txtsubTitulo} > Distância </Text>
                                  <Text style={estilos.txtinfo}>{item.distancia} km</Text>
                              </View>
                          
                              <View style={estilos.bloco2}>
                                  <Text style={estilos.txtsubTitulo}> Tempo </Text>    
                                  <Text style={estilos.txtinfo}>{item.tempo}min</Text>
                              </View>

                              <View style={estilos.bloco2}>
                                  <Text style={estilos.txtsubTitulo}> Data </Text>    
                                  <Text style={estilos.txtinfo}>{item.data}</Text>
                              </View>

                              <View>
                                <TouchableOpacity  onPress={() => { delFire(item.key) }}>
                                    <MaterialCommunityIcons name="trash-can-outline" size={24} color="black" />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { editFire(item.key, item.distancia, item.tempo, item.data) }}>
                                    <AntDesign name="edit" size={24} color="black" />
                                </TouchableOpacity> 
                                    
                              </View>
                          </View>
                              
                  
              </View>} 
        />
        
      </View>
    )
  }
  
  const estilos = StyleSheet.create({
  
      container:{
          padding:10,
          backgroundColor:"#fff",
          borderRadius:10,
          margin:5,
      },
  
      bloco:{
          flexDirection:'column',
          flex:0.5,
  
      },
  
      bloco2:{
          flexDirection:'column',
          alignItems:'center',
          flex:0.5,
      },
      
      txtTitulo:{
          fontSize:25,
              
          },
  
      txtinfo:{
          fontSize:12,
      },
  
      txtsubTitulo:{
          fontSize:10,
              
          },
  
      img:{
          width:'15%',
          resizeMode:'contain',
         },
      })