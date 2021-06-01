import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Entypo, Feather,Fontisto,FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './componentes/login'
import Historico from './componentes/historico'
import Praticando from './componentes/praticando'
import Desafios from './componentes/desafios'
import Perfil from './componentes/perfil'
import Cadastro from './componentes/cadastro'

const Guias=createBottomTabNavigator();

function Tlogin({navigation}){
  return(
    <Login/>
  );
}

function Tcadastro({navigation}){
  return(
    <Cadastro/>
  );
}

function Thistorico({navigation}){
  return(
    <Historico/>
  );
}

function Tdesafios({navigation}){
  return(
    <Desafios/>
  );
}

function Tpraticando({navigation}){
  return(
    <Praticando/>
  );
}

function Tperfil({navigation}){
  return(
    <Perfil/>
  );
}

export default function App() {
  return (
  // <SafeAreaView> 
    <NavigationContainer>
      <Guias.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Historico') {
              return (
                <Fontisto name="ampproject" size={24} color={color} />
              );
            } else if (route.name === 'Desafios') {
              return (
                <Entypo name="trophy" size={24} color={color} />
              );
            }
            else if (route.name === 'Praticando') {
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
         
                <Guias.Screen
                  name="Desafios"
                  component={Tdesafios}
                  options={{title:'Desafios',
                  headerStyle:{
                    backgroundColor:"#f57804"
                  },
                  headerTintColor:'#fff'}}
                />

                <Guias.Screen
                    name="Historico"
                    component={Thistorico}
                    options={{title:'Historico',
                    headerStyle:{
                      backgroundColor:"#f57804"
                    },
                    headerTintColor:'#fff'
                }}
                />

                <Guias.Screen
                  name="Praticando"
                  component={Tpraticando}
                  options={{title:'Praticando'}}
                />
      </Guias.Navigator>
    </NavigationContainer>
  // </SafeAreaView>   
  );
}
