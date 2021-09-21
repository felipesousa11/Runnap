import React ,{useState,useEffect} from 'react';
import { Text, TextInput, View, TouchableOpacity,KeyboardAvoidingView, Modal  } from 'react-native';
import { Entypo, FontAwesome,Fontisto,Feather,Ionicons } from '@expo/vector-icons';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';
import firebase from '../../firebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { TabActions } from '@react-navigation/routers';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

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
    const [data,setData] = useState('');
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
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

    const changeDate = (valor)=>{
       setData(valor)
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
    
        setDate(currentDate);
        setShow(Platform.OS === 'ios' ? true : false);
    };
    
      const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };

    
      const showTimepicker = () => {
        showMode('time');
      };
    

    return(    
       
        <View style={[styles.container, styles.containertop]}>
           <View style={styles.topoatividade}>
            <TouchableOpacity style={styles.buttonNews}>
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

        <View>
            <View>
                <Button onPress={showTimepicker} title="Selecione a hora!" />
            </View>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange} 
                />
            )}
        </View>

    <View style={{flexDirection:'row'}}>
            <DatePicker
                format="DD/MM/YYYY"
                style={styles.dateComponente}
                date={data}
                onDateChange={changeDate}
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

