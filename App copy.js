import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Entypo, Feather,Fontisto,FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './componentes/login'
import Historico from './componentes/historico'
import Praticando from './componentes/praticando'
import Desafios from './componentes/desafios'
import Perfil from './componentes/perfil'
import Cadastro from './componentes/cadastro'
import Mapa from './componentes/mapa'

const Tab=createBottomTabNavigator();
const Stack =createStackNavigator();

function Stacks(){
  return(
    <Stack.Navigator 
          headerMode='none'
          initialRouteName="Login" >
      
          <Stack.Screen
              headerNode="none"
              name="Login"
              component={Login}
              options={{title:'Bem vindo'}}
          />

          <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{title:'Cadastro' }}
          />
    </Stack.Navigator>

  )
}

export default function App() {
  return (
  
    <NavigationContainer>
      <Tab.Navigator
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
                

                <Tab.Screen
                  name="Desafios"
                  component={Desafios}
                  options={{title:'Desafios',
                  }}
                />

                <Tab.Screen
                    name="Historico"
                    component={Historico}
                    options={{title:'Historico',}}
                />

                <Tab.Screen
                  name="Praticando"
                  component={Mapa}
                  options={{title:'Praticando'}}
                />

                <Tab.Screen
                  name="Perfil"
                  component={Perfil}
                  options={{title:'Perfil'}}
                />

      </Tab.Navigator>
    </NavigationContainer>
  
  );
}

