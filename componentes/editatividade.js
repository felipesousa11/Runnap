import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './firebaseConfig';


export default function Editatividade({ navigation }) {
    const [distancia, setDistancia] = useState(navigation.getParam('distancia'));
    const [tempo, setTempo] = useState(navigation.getParam('tempo'));
    const [data, setData] = useState(navigation.getParam('data'));

   
  function upDateFire() {
    try {
      firebase.database().ref('/atividades/'+navigation.getParam('key')).update({
        distancia: distancia,
        tempo: tempo,
        data: data,
      })

    } catch (error) {
      alert(error);
    }
    finally {
        setDistancia('');
        setTempo('');
        setData('');
      navigation.navigate("Listatividade")
    }
  }

    return (
        <View style={styles.container}>
            <View style={styles.viewCenter}>

                <Text style={styles.text}>Distancia</Text>
                <TextInput style={styles.textInput} onChangeText={distancia => setDistancia(distancia)} value={distancia} />

                <Text style={styles.text}>Tempo</Text>
                <TextInput style={styles.textInput} onChangeText={tempo => setTempo(tempo)} value={tempo} />

                <Text style={styles.text}>Data</Text>
                <TextInput style={styles.textInput} onChangeText={data => setData(data)} value={data} />

                <TouchableOpacity style={styles.btnEnviar} onPress={() => { upDateFire() }}>
                    <Text style={styles.text}>Update</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnEnviar} onPress={() => navigation.navigate("Listatividade")}>
                    <Text style={styles.text}>Cancel</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewCenter: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    btnEnviar: {
        borderWidth: 1,
        borderColor: 'red',
        width: 100,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    textInput: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 5
    },
});