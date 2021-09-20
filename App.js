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
import Finalizar from './componentes/finalizar'
import Home from './componentes/home'
import Addatividade from './componentes/addatividade'
import Listatividade from './componentes/listatividade'
import Editatividade from './componentes/editatividade'


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

          <Stack.Screen
              name="Home"
              component={Home}
              options={{title:'Home' }}
          />

          <Stack.Screen
                  name="Desafios"
                  component={Desafios}
                  options={{title:'Desafios',
                  }}
                />

                <Stack.Screen
                    name="Historico"
                    component={Historico}
                    options={{title:'Historico',}}
                />

                <Stack.Screen
                  name="Praticando"
                  component={Praticando}
                  options={{title:'Praticando'}}
                />

                <Stack.Screen
                  name="Perfil"
                  component={Perfil}
                  options={{title:'Perfil'}}
                />
                <Stack.Screen
                  name="Finalizar"
                  component={Finalizar}
                  options={{title:'Finalizar'}}
                />

                <Stack.Screen
                  name="Addatividade"
                  component={Addatividade}
                  options={{title:'Addatividade'}}
                />

                <Stack.Screen
                  name="Listatividade"
                  component={Listatividade}
                  options={{title:'Listatividade'}}
                />

                <Stack.Screen
                  name="Editatividade"
                  component={Editatividade}
                  options={{title:'Editatividade'}}
                />
    </Stack.Navigator>
    </NavigationContainer>
  
  );
}

