import React ,{useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, BackHandler,Alert  } from 'react-native';
import { Entypo, FontAwesome,Fontisto,Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Desafios, Perfil, Feed, Atividade, Cadastrofull, Gravar} from '../index';


export default function Restrito ({ navigation }){

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

    const Tab=createBottomTabNavigator();

    return(    
       
      <Tab.Navigator
          initialRouteName="Feed" 
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Feed') {
              return (
                <Fontisto name="ampproject" size={24} color={color} />
              );
            } else if (route.name === 'Desafios') {
              return (
                <Entypo name="trophy" size={24} color={color} />
              );
            }
            else if (route.name === 'Gravar') {
              return (
                <Feather name="activity" size={24} color={color} />
              );
            }

            else if (route.name === 'Perfil') {
              return (
                <FontAwesome name="user-circle-o" size={24} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
                

                <Tab.Screen name="Desafios" component={Desafios} options={{title:'Desafios'}}/>
                <Tab.Screen name="Feed" component={Feed} options={{title:'Feed',}}/>
                <Tab.Screen name="Gravar" component={Gravar} options={{title:'Gravar'}}/>
                <Tab.Screen name="Perfil" component={Perfil} options={{title:'Perfil'}}/>
                
             
      </Tab.Navigator>
  
    );
}

