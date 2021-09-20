import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Button} from 'react-native';
import firebase from '../../firebaseConfig';



export default function Addatividade ({ navigation }){

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

            <View>
                <TouchableOpacity 
                    style={styles.botao}
                    onPress={() => {pushFirebase()}}
                    >
                        <Text style={{color:'#fff'}}>Salvar</Text>
                </TouchableOpacity>
            </View>


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

    input:{
        width:'100%',
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
        width:300,
        marginTop:10
    },

    inputnum:{
        width:100,
        borderWidth:1,
        borderColor:'#000',
        padding:10,
        borderRadius:10,
        marginTop:10
    },

    botao:{
        backgroundColor:"#F33329",
        width:'100%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        paddingLeft:30,
        paddingRight:30,
        marginTop:15
    },
 
})