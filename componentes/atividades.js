import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const atividades=[
  {
    id:'001',
    desc:['27 ABR 21','Corrida', '10,05', '00:46:00']
  },

  {
    id:'002',
    desc:['28 ABR 21','Corrida', '15,46', '01:06:29']
  },

  {
    id:'003',
    desc:['29 ABR 21','Corrida', '03,45', '00:22:11']
  },

  {
    id:'004',
    desc:['30 ABR 21','Corrida', '10,05', '00:46:00']
  },

  {
    id:'005',
    desc:['02 MAI 21','Corrida', '11,05', '00:46:09']
  },

  {
    id:'006',
    desc:['03 MAI 21','Corrida', '05,55', '00:36:00']
  },
]

export default function(){
  return(
    <View>
      <Text style={estilos.txtTitulo} >Atividades Realizadas</Text>
        <FlatList
            data={atividades}
            keyExtractor={item=>item.id}
            renderItem={({item})=>
            <View style={estilos.container}>
                
                <View style={{flexDirection:'row' }} >

                    <View style={{margin:'auto'}}>
                       <Entypo name="flash" size={30} color="black" />
                    </View>                    
                    <View style={estilos.bloco2}>
                      <Text style={estilos.txtTitulo} >{item.desc[1]}</Text>
                      <Text style={estilos.txtinfo}>{item.desc[0]}</Text>
                    </View>

                    <View style={estilos.bloco}>
                        <Text style={estilos.txtTitulo}>{item.desc[2]} km</Text>
                        <Text style={estilos.txtinfo}>{item.desc[3]} </Text>
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
        alignItems:'center',
        flex:0.4,
    },
    bloco2:{
      flexDirection:'column',
      alignItems:'flex-start',
      flex:0.4,
  },


    
    txtTitulo:{
        fontSize:20,
            
        },

    txtinfo:{
        fontSize:15,
        color:'#363636'
    },

    txtsubTitulo:{
        fontSize:15,
            
        },

    img:{
        width:'20%',
        flex:0.2,
        resizeMode:'center',
        marginTop:-105,
          },
    })
