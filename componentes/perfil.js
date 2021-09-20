import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { Entypo,MaterialCommunityIcons,FontAwesome5,Ionicons } from '@expo/vector-icons';
import firebase from './firebaseConfig';

function logout(){
    firebase.auth().signOut().then(() => {
        alert('Você saiu')
      }).catch((error) => {
        alert('falha')
    });
}

export default props=>{
    return(    
        <SafeAreaView>
            <View style={styles.boxperfil}>
                <Image
                    source={require('../img/perfil.jpg')}
                    style={{borderRadius:170, width:'40%', resizeMode:'contain', height:250, marginBottom:-30}}
                />
                <Text style={{paddingBottom:5}}>Rodrigo Sena</Text>
            </View>
            
            <View style={styles.box}>
                
                <Text style={styles.titulo}>Resumo das Atividades</Text>
                    
                    <View style={styles.linha}>
                        <Ionicons name="ios-pulse-sharp" size={30} color="black"
                                style={styles.icone}
                        />
                            <View>
                                <Text style={styles.txtinfor}>10,30 km</Text>
                                <Text>Distância</Text>
                            </View>
                    </View>

                    <View style={styles.linha}>
                        <FontAwesome5 name="route" size={30} color="black" 
                            style={styles.icone}
                        />
                            <View>
                                <Text style={styles.txtinfor}>7</Text>
                                <Text>Atividades</Text>
                            </View>
                    </View>

                    <View style={styles.linha}>
                        <MaterialCommunityIcons name="timer-outline" size={30} color="black" 
                            style={styles.icone}
                        />
                            <View>
                                <Text style={styles.txtinfor}>02:26:49</Text>
                                <Text>Duração</Text>
                            </View>
                    </View>
                
                    <View style={styles.linha}>
                        <Entypo name="trophy" size={30} color="black" 
                            style={styles.icone}
                        />
                            <View>
                                <Text style={styles.txtinfor}>7</Text>
                                <Text>Desafios</Text>
                            </View>
                    </View>
            </View>

            <View>
                <TouchableOpacity style={{padding:50}}
                    onPress={() => {logout()}}
                >
                    <Text>SAIR</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}

const styles  = StyleSheet.create({
    linha:{
        flexDirection:'row', 
        alignItems:'center'
    },

    icone:{
        padding:10
    },

    txtinfor:{
        fontSize:20, 
        fontWeight:'bold'
    },

    titulo:{
        fontSize:20, 
        fontWeight:'bold', 
        padding:10
    },

    boxperfil:{
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'#fff', 
    marginBottom:10,
    shadowColor: '#470000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 3
    },

    box:{
        padding:10,
        backgroundColor:'#fff', 
        marginBottom:10,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 3
        },
})