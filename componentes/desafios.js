import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ProgressBarAndroid } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const desafios=[
  {
    id:'001',
    desc:['SUPERE SEUS LIMITES','75','50',0]
  },

  {
    id:'002',
    desc:['CORRIDA DIA DAS MÃES','50','23',1]
  },

  {
    id:'003',
    desc:['MESTRE DO ASFALTO','45','35',0]
  },

 
 
]


export default function(){
  return(
    <View>
        <FlatList
            data={desafios}
            keyExtractor={item=>item.id}
            renderItem={({item})=>
            <View style={estilos.container}>
               
                    <View >
                    </View>

                        
                        <View style={{flexDirection:'row', alignItems:'space-between'}}>
                            <View style={{ margin:'auto'}}>
                                <MaterialCommunityIcons name="timer-outline" size={28} color="black" />
                            </View>
                            
                            <View style={{alignItems:'center', margin:'auto'}}>
                                <Text style={estilos.txtinfo}>{item.desc[0]}</Text>
                                <Text>{item.desc[2]}/{item.desc[1]}</Text>
                                <View>
                                    <ProgressBarAndroid
                                        styleAttr="Horizontal"
                                        indeterminate={false}
                                        progress={0.5}
                                        />
                                </View>
                                
                            </View>
                        
                            <View style={{ margin:'auto'}}>
                                <FontAwesome5 name="check" size={24} color="black" />
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
        borderBottomWidth:1,
        borderBottomColor:"#CFCFCF",
        margin:5,
    },

    bloco:{
        flexDirection:'column',
        flex:0.5,

    },

    bloco2:{
        flexDirection:'column',
        alignItems:'flex-end',
        flex:0.5,
    },
    
    txtTitulo:{
        fontSize:25,
            
        },

    txtinfo:{
        fontSize:20,
    },

    txtsubTitulo:{
        fontSize:15,
            
        },

    img:{
        width:'15%',
        resizeMode:'contain',
       },
    })
