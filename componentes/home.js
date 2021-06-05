import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Image, Button} from 'react-native';
import { Entypo,MaterialCommunityIcons,FontAwesome,Ionicons,Fontisto,Feather } from '@expo/vector-icons';


export default function Home ({ navigation }){
    return(    
        <SafeAreaView>
            
            <View style={styles.boxperfil}>
                <Image
                    source={require('../img/logo.png')}
                    style={{borderRadius:170, width:'40%', resizeMode:'contain', height:250, marginBottom:-30}}
                />
            </View>
            
            <View>
                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Historico')}
                        >
                            <View style={styles.box}>
                                <Fontisto name="ampproject" size={30} color={'black'} />
                                <Text>Historico</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Desafios')}
                        >
                            <View style={styles.box}>
                                <Entypo name="trophy" size={30} color={'black'} />
                                <Text>Desafios</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <TouchableOpacity
                            onPress={() => navigation.navigate('Praticando')}
                        >
                            <View style={styles.box}>
                                <Feather name="activity" size={30} color={'black'} />
                                <Text>Ação</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Perfil')}
                        >
                            <View style={styles.box}>
                                <FontAwesome name="user-circle-o" size={30} color={'black'} />
                                <Text>Perfil</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
    //backgroundColor:'#fff', 
    marginBottom:10,
    //shadowColor: '#470000',
    //shadowOffset: {width: 0, height: 1},
    //shadowOpacity: 0.2,
    //elevation: 3
    },

    box:{
        padding:10,
        backgroundColor:'#fff', 
        margin:20,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 3,
        width:150,
        height:150,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',

        },
})