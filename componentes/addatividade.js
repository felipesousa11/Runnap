import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image} from 'react-native';
import firebase from './firebaseConfig';


export default function Addatividade (){

    const [distancia, setDistancia] = useState('');
    const [tempo, setTempo] = useState('');
    const [data, setData] = useState('');
   // const [media, setMedia] = useState('');
  

    function pushFirebase(){
        try{
            firebase.database().ref('/atividades').push({
                distancia: distancia,
                tempo: tempo,
                data: data,
                //media: distancia / tempo,
            })
        }catch (error){
            alert(error)
        }
        finally{
            setDistancia('');
            setTempo('');
            setData('');
        }
    }

    



  
      return(
        <View style={styles.container}>
            <Text>Adicionar atividade</Text>

            <View>
                <TextInput 
                onChangeText={distancia => setDistancia(distancia)} 
                value={distancia}
                style={styles.txt} 
                placeholder="Distância"
                keyboardType="numeric"
                />
            

                <TextInput 
                onChangeText={tempo => setTempo(tempo)} 
                value={tempo}
                style={styles.txt} 
                placeholder="Tempo"
                />

                <TextInput 
                onChangeText={data => setData(data)} 
                value={data}
                style={styles.txt} 
                placeholder="Data"
                />
            </View>

            <TouchableOpacity
                onPress={pushFirebase}
            >
                <Text style={{marginTop:10}}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txt:{
        width:'100%',
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
        width:250,
        marginTop:10
    },
 
})