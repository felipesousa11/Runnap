import React ,{useState,useEffect} from 'react';
import { Text, TextInput, View, TouchableOpacity,KeyboardAvoidingView  } from 'react-native';
import { Entypo, FontAwesome,Fontisto,Feather } from '@expo/vector-icons';
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
    const [minuto, setMinuto] = useState('');
    const [segundo, setSegundo] = useState('');
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
    
    const onChangeMinuto = (txtMinuto) =>{
        setMinuto(txtMinuto)
    }

    const onChangeSegundo = (txtSegundo) =>{
        setSegundo(txtSegundo)
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
                minuto: minuto,
                segundo: segundo,
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
            setMinuto ('');
            setDia ('');
            setMes ('');
            setAno ('');
        }
    }

    return(    
       
        <View style={[styles.container, styles.containertop]}>
            <Menutopo title='Atividade' navigation={navigation}/>
       
            <KeyboardAvoidingView> 
<View style={styles.container}>
<Text>Adicionar atividade manualmente</Text>

<View>
    <TextInput
        style={styles.input}
        placeholder="Nome da atividade"
        onChangeText={txtnome => onChangeNome(txtnome)} 
        value={nome}
    />

    <TextInput
        style={styles.input}
        placeholder="Distancia"
        onChangeText={txtDistancia => onChangeDistancia(txtDistancia)} 
        value={distancia}
        keyboardType='numeric'
    />

    <View style={{flexDirection:'row'}}>
        <TextInput
            style={styles.inputnum}
            placeholder="Hora"
            onChangeText={txtHora => onChangeHora(txtHora)} 
            value={hora}
            keyboardType='numeric'
        />

        <TextInput
            style={styles.inputnum}
            placeholder="Minutos"
            onChangeText={txtMinuto => onChangeMinuto(txtMinuto)} 
            value={minuto}
            keyboardType='numeric'
            maxLength={59}
        />

        <TextInput
            style={styles.inputnum}
            placeholder="Segundos"
            onChangeText={txtSegundo => onChangeSegundo(txtSegundo)} 
            value={segundo}
            keyboardType='numeric'
            maxLength={59}
        />
    </View>

    <View style={{flexDirection:'row'}}>
        <TextInput
            style={styles.inputnum}
            placeholder="Dia"
            onChangeText={txtDia => onChangeDia(txtDia)} 
            value={dia}
            keyboardType='numeric'
        />

        <TextInput
            style={styles.inputnum}
            placeholder="Mês"
            onChangeText={txtMes => onChangeMes(txtMes)} 
            value={mes}
            keyboardType='numeric'
        />

        <TextInput
            style={styles.inputnum}
            placeholder="Ano"
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

