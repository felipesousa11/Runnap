import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
const LOCATION_TASK_NAME = 'background-location-task';


export default function App() {  

    const [posicaoAtual, setPosicaoAtual] = useState({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    const [rota, setRota] = useState([]);

  onPress = async () => {
    const { status } = await Location.requestBackgroundPermissionsAsync();
    if (status === 'granted') {
      console.log("Inicinando serviço")
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.High,
      });     
    }    
  };

  callbackUpdate = (track) => {
    console.log("SIZE: ", track.length)
    let current = track[track.length-1][0].coords;
    current = {
      ...posicaoAtual,
      ...current,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0121
    }
    setPosicaoAtual(current);
    setRota([...rota,{latitude:current.latitude, longitude:current.longitude}])
  }

  
    return (
      <View style={{flex:1, justifyContent:"center", alignContent:"center"}}>
        <TouchableOpacity onPress={onPress}>
          <Text>Ativar Serviço de Localização</Text>          
        </TouchableOpacity>
        <Text>{posicaoAtual.latitude}, {posicaoAtual.longitude}</Text>
        <MapView
        style={styles.mapa}
        region={posicaoAtual}
        provider={PROVIDER_GOOGLE}        
      >
      <Polyline
          coordinates={rota}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000'
          ]}
          strokeWidth={6}
        />
          </MapView>
      </View>
    );  
}

let callbackUpdate = (track) => {
  console.log("size:", track.length)
};
const track = [];
const addLocation = (location) =>{
  track.push(location);
  callbackUpdate(track);
}

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log("erro!")
    return;
  }
  if (data) {
    const { locations } = data;    
    addLocation(locations)
  }
});

const styles = StyleSheet.create({
  mapa: {
      width:Dimensions.get("window").width,
      height:Dimensions.get("window").height-250
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
