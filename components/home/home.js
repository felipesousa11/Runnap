import React ,{useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, BackHandler,Alert  } from 'react-native';
import { Entypo, FontAwesome,Fontisto,Feather } from '@expo/vector-icons';



export default function Home ({ navigation }){

    
        useEffect(() => {
          const backAction = () => {
            Alert.alert("Alerta!", "Você realmente deseja sair?", [
              {
                text: "Cancelar",
                onPress: () => null,
                style: "cancel"
              },
              { text: "Sim", onPress: () =>{
              navigation.navigate('Home')
              BackHandler.exitApp();
            } 
            }
            ]);
            return true;
          };
      
          const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
      
          return () => backHandler.remove();
        }, []);






    return(    
        <SafeAreaView>
            
                       
            <View>
                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Feed')}
                    >
                        <View style={styles.box}>
                            <Fontisto name="ampproject" size={30} color={"#F33329"} />
                            <Text style={styles.txticone}>Historico</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Desafios')}
                    >
                        <View style={styles.box}>
                            <Entypo name="trophy" size={30} color={"#F33329"} />
                            <Text style={styles.txticone}>Desafios</Text>
                            </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Addatividade')}
                    >
                        <View style={styles.box}>
                            <Feather name="activity" size={30} color={"#F33329"} />
                            <Text style={styles.txticone}>+ Atividade</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Perfil')}
                    >
                        <View style={styles.box}>
                            <FontAwesome name="user-circle-o" size={30} color={"#F33329"} />
                            <Text style={styles.txticone}>Perfil</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </View>

        </SafeAreaView>

    );
}

const styles  = StyleSheet.create({
   

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
    marginBottom:10,
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
        borderRadius:5,
        },

    txticone:{
        color:"#F33329",
        fontSize:18
    },

img:{
    borderRadius:170, 
    width:'80%', 
    resizeMode:'contain', 
    height:250, 
    marginBottom:-30
}

})