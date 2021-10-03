import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Cadastro, Cadastrofull } from './screens';
import Restrito from './screens/restrito/Restrito';
import editPerfil from './screens/restrito/editPerfil';

console.ignoredYellowBox = [
  'Setting a timer'
]

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Restrito" options={{headerShown:false}} component={Restrito} />
        <Stack.Screen name="Cadastrofull" options={{headerShown:false}} component={Cadastrofull} />
        <Stack.Screen name="editPerfil" options={{headerShown:false}} component={editPerfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;