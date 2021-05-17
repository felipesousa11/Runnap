import * as React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';


const atividades=[
  {
    id:'001',
    desc:['27 de abril de 2021','Corrida', '10,05', '46:00']
  },

  {
    id:'002',
    desc:['28 de abril de 2021','Corrida', '15,46', '1:06:29']
  },

  {
    id:'003',
    desc:['29 de abril de 2021','Corrida', '03,45', '22:11']
  },

  {
    id:'004',
    desc:['30 de abril de 2021','Corrida', '10,05', '46:00']
  },

  {
    id:'005',
    desc:['02 de maio de 2021','Corrida', '11,05', '46:09']
  },

  {
    id:'006',
    desc:['03 de maio de 2021','Corrida', '05,55', '36:00']
  },
]

export default function(){
  return(
    <View>
        <FlatList
            data={atividades}
            keyExtractor={item=>item.id}
            renderItem={({item})=>
            <View style={estilos.container}>
                <View>
                    <Text style={estilos.txtTitulo}>{item.desc[1]}</Text>
                    <Text>{item.desc[0]}</Text>
                </View>
                <View style={{flexDirection:'row' }} >
                    <View style={estilos.bloco}>
                        <Text style={estilos.txtsubTitulo} > Distância </Text>
                        <Text style={estilos.txtinfo}>{item.desc[2]} kM</Text>
                    </View>
                
                    <View style={estilos.bloco}>
                        <Text style={estilos.txtsubTitulo}> Tempo </Text>    
                        <Text style={estilos.txtinfo}>{item.desc[3]} min</Text>
                    </View>
                </View>
                <Image
                source={require('../img/printmapa.png')}
                style={estilos.img}
            />
            </View>} 
      />
    </View>
  )
}

const estilos = StyleSheet.create({

    container:{
        padding:10,
        borderWidth:1,
        borderRadius:10,
        margin:5,
    },

    bloco:{
        flexDirection:'column',
        alignItems:'center',
        flex:0.5,
    },
    
    txtTitulo:{
        fontSize:30,
            
        },

    txtinfo:{
        fontSize:25,
    },

    txtsubTitulo:{
        fontSize:15,
            
        },

    img:{
        width:'100%',
        resizeMode:'contain',
        marginTop:-100,
          },
    })
