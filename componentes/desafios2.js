import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';


const desafios=[
  {
    id:'001',
    desc:['SUPERE SEUS LIMITES','75','50']
  },

  {
    id:'002',
    desc:['CORRIDA ESPECIAL DIA DAS MÃES','50', '23']
  },

  {
    id:'003',
    desc:['MESTRE DO ASFALTO','45','35']
  },

 
 
]


export default function(){
  return(
    <View>
      <Text>Inscritos (04)</Text>
        <FlatList
            data={desafios}
            keyExtractor={item=>item.id}
            renderItem={({item})=>
            <View style={estilos.container}>
               
                    <View >
                        <Text style={estilos.txtTitulo}>{item.desc[0]}</Text>
                    </View>

                        
                        <View style={{flexDirection:'row', alignItems:'space-between'}}>
                            <View style={estilos.bloco}>
                                <Text style={estilos.txtsubTitulo} > Objetivo </Text>
                                <Text style={estilos.txtinfo}>{item.desc[1]} km</Text>
                            </View>
                        
                            <View style={estilos.bloco2}>
                                <Text style={estilos.txtsubTitulo}> Faltam </Text>    
                                <Text style={estilos.txtinfo}>{item.desc[2]} km</Text>
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
