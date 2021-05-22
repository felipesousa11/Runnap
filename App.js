import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo, Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './componentes/login'
import Historico from './componentes/historico'
import Desafios from './componentes/desafios'
import Praticando from './componentes/praticando'

const Guias=createBottomTabNavigator();

function Tlogin({navigation}){
  return(
    <Login/>
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

export default function App() {
  return (
    <NavigationContainer>
      <Guias.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Historico') {
              return (
                <Fontisto name="ampproject" size={24} color="black" />
              );
            } else if (route.name === 'Desafios') {
              return (
                <Entypo name="trophy" size={24} color="black" />
              );
            }
            else if (route.name === 'Praticando') {
              return (
                <Feather name="activity" size={24} color="black" />
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
  );
}
