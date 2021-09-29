import React ,{useState,useEffect} from 'react';
import { Text, TextInput, View, TouchableOpacity,KeyboardAvoidingView  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';
import firebase from '../../firebaseConfig';
import * as ImagePicker from 'expo-image-picker';



export default function Atividade ({ navigation }){

    if (firebase.auth().currentUser !==null){
        
    }else{
        navigation.navigate('Login')
    }
    
    const [nome, setNome] = useState('');
    const [distancia, setDistancia] = useState('');
    const [hora, setHora] = useState('');
    const [minutos, setMinutos] = useState('');
    const [segundos, setSegundos] = useState('');
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
   

    


    const user_id = firebase.auth().currentUser.uid


    const onChangeNome = (txtNome) =>{
        setNome(txtNome)
    }
    
    const onChangeDistancia = (txtDistancia) =>{
        setDistancia(txtDistancia)
    }

    const onChangeHora = (txtHora) =>{
        setHora(txtHora)
    }
    
    const onChangeMinutos = (txtMinuto) =>{
        setMinutos(txtMinuto)
    }

    const onChangeSegundos = (txtSegundo) =>{
        setSegundos(txtSegundo)
    }

    const onChangeDia = (txtDia) =>{
        setDia(txtDia)
    }

    const onChangeMes = (txtMes) =>{
        setMes(txtMes)
    }
    
    const onChangeAno = (txtAno) =>{
        setAno(txtAno)
    }

     
    function pushFirebase () {
        try{
            firebase.firestore().collection('atividades').add({
                distancia: distancia,
                nome: nome,
                hora: hora,
                minutos: minutos,
                segundos: segundos,
                dia: dia,
                mes: mes,
                ano: ano,
                user_id:user_id,
            })
        }catch (error){
            alert(error)
        }
        finally{
            setDistancia('');
            setNome('');
            setHora('');
            setMinutos ('');
            setSegundos('');
            setDia ('');
            setMes ('');
            setAno ('');
        }
    }

    return(    
       
        <View style={[styles.container, styles.containertop]}>
             <View style={styles.topoatividade}>
                <TouchableOpacity style={styles.buttonNews} onPress={() => navigation.navigate('Feed')}>
                    <Ionicons name="arrow-undo-outline" size={24} color="black" />
                </TouchableOpacity>
                    <Text style={styles.title}>Atividade</Text>
            </View>
       
                <KeyboardAvoidingView> 
                    <View style={styles.container}>
                        <Text>Adicionar atividade manualmente</Text>

                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Nome da atividade"
                                placeholderTextColor="black"
                                onChangeText={txtnome => onChangeNome(txtnome)} 
                                value={nome}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Distancia"
                                placeholderTextColor="black"
                                onChangeText={txtDistancia => onChangeDistancia(txtDistancia)} 
                                value={distancia}
                                keyboardType='numeric'
                            />

                            <View style={{flexDirection:'row'}}>
                                <TextInput
                                    style={styles.inputnum}
                                    placeholder="Hora"
                                    placeholderTextColor="black"
                                    onChangeText={txtHora => onChangeHora(txtHora)} 
                                    value={hora}
                                    keyboardType='numeric'
                                />

                                <TextInput
                                    style={styles.inputnum}
                                    placeholder="Minutos"
                                    placeholderTextColor="black"
                                    onChangeText={txtMinuto => onChangeMinutos(txtMinuto)} 
                                    value={minutos}
                                    keyboardType='numeric'
                                    maxLength={59}
                                />

                                <TextInput
                                    style={styles.inputnum}
                                    placeholder="Segundos"
                                    placeholderTextColor="black"
                                    onChangeText={txtSegundo => onChangeSegundos(txtSegundo)} 
                                    value={segundos}
                                    keyboardType='numeric'
                                    maxLength={59}
                                />
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <TextInput
                                    style={styles.inputnum}
                                    placeholder="Dia"
                                    placeholderTextColor="black"
                                    onChangeText={txtDia => onChangeDia(txtDia)} 
                                    value={dia}
                                    keyboardType='numeric'
                                />

                                <TextInput
                                    style={styles.inputnum}
                                    placeholder="Mês"
                                    placeholderTextColor="black"
                                    onChangeText={txtMes => onChangeMes(txtMes)} 
                                    value={mes}
                                    keyboardType='numeric'
                                />

                                <TextInput
                                    style={styles.inputnum}
                                    placeholder="Ano"
                                    placeholderTextColor="black"
                                    onChangeText={txtAno => onChangeAno(txtAno)} 
                                    value={ano}
                                    keyboardType='numeric'
                                />
                            </View>

                        </View>

                        <View style={styles.bloco}>
                            <TouchableOpacity 
                                style={styles.btnatv}
                                onPress={() => {pushFirebase()}}
                                >
                                    <Text style={{color:'#fff'}}>Salvar</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </KeyboardAvoidingView> 
        </View>

    );
}

