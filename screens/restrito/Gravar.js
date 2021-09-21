import React, {useState, useEffect}  from 'react';
import { Dimensions,StyleSheet, Text, View, SafeAreaView, TouchableOpacity,Animated, Button} from 'react-native';
import { Entypo, AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, { Polyline } from 'react-native-maps';

import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import haversine from 'haversine';

const LOCATION_TASK_NAME = 'background-location-task';


export default function ({navigation}){

    const [ativo, setAtivo] = useState (true);
    const [location, setLocation] = useState(null);
    const [distancia, setDistancia] = useState(0);
    const [tempo, setTempo] = useState (0);
    const [speed, setSpeed] = useState (0);

    const [inicio, setInicio] = useState(null);
    

    const [historicoLocalizacao, setHistoricoLocalizacao] = useState([]);
    
    // --------------------
    const [posicaoAtual, setPosicaoAtual] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
  
      const [rota, setRota] = useState([]);

    startTraking = async () => {
        setInicio(new Date());
        const { status } = await Location.requestBackgroundPermissionsAsync();
        if (status === 'granted') {
          console.log("Iniciando serviço")
          await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
            accuracy: Location.Accuracy.BestForNavigation,
          });               
        }    
      };

    stopTraking = async () => {
        salvarAtividade();
        const { status } = await Location.requestBackgroundPermissionsAsync();
        if (status === 'granted') { 
            await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
        }
    };

    const salvarAtividade = ()=> {
        const atividade = {
            nome: "Atividade ao por do sol",
            distancia: distancia,
            inicio: inicio,
            fim: new Date(),
            velocidade: speed,
            percurso: rota,
        }

       /* dbfs.collecton('usuarios')
            .doc('usuarioAtial')
            .collecton('atividades')
            .add(atividade);
            */
    }
    
      callbackUpdate = (track) => {
       //console.log("SIZE: ", track)
        if(track){
            let current = track[track.length-1][0].coords;
            current = {
            ...posicaoAtual,
            ...current,
            latitudeDelta:0.009,
            longitudeDelta:0.004
            }
            setPosicaoAtual(current);

            if(current.latitude && rota &&  rota.length>0)
                setDistancia(distancia+ haversine(current, rota[rota.length-1],{unit: 'km'}))
            setRota([...rota,{latitude:current.latitude, longitude:current.longitude}])

            const duracao = (new Date().getTime() - inicio.getTime())/1000
            setTempo(duracao)
            setSpeed(duracao/distancia)
        }
      }

    useEffect(() => {
            
        (async () => {
            let { status } = false || await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }            
      
            let x = await Location.getProviderStatusAsync();
            setLocation(x);
            //startTraking();

            //let speed = await geolocationCoordinatesInstance.speed();
            //setSpeed(speed)
          })();
    }, [])

    

    /**------------------------- */
    return(
        <SafeAreaView >

            <View style={styles.container}>

                <View style={{alignItems:'center'}}>
                        {/* Distancia */ }
                        <Text style={styles.txtPrincipal} >{distancia.toFixed(2)}km</Text>
                        <Text>Distância</Text>
                </View>
           
                <View style={{flexDirection:'row', alignItems:'space-between'}}>
                    <View style={styles.bloco}>
                        <Text style={styles.txtTitulo}>{tempo}</Text>
                        <View style={styles.linha}>
                            <AntDesign name="clockcircleo" size={17} color="black" />
                            <Text>Duração</Text>
                        </View>
                    </View>

                    <View style={styles.bloco}>
                        <Text style={styles.txtTitulo}>{speed.toFixed(2)}</Text>
                        <View style={styles.linha}>
                            <Entypo name="gauge" size={20} color="black" />
                            <Text>Ritmo (min/km)</Text>
                        </View>
                    </View> 
                </View>
            
                <MapView
                    region={posicaoAtual}
                    provider="google"
                    style={{
                        height: '70%',
                        width: '100%',
                        marginTop:45,
                                            
                    }}
                    initialRegion={{
                    latitude: 37.235290,
                    longitude: -121.827420,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,                                   

                    }}>
                  <Polyline
                    coordinates={rota}
                    strokeColor="#ff3030" // fallback for when `strokeColors` is not supported by the map-provider
                    strokeColors={[
                        '#7F0000',
                        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000'
                    ]}
                    strokeWidth={7}
                    />
                </MapView>
            </View>

            <View style={styles.containerBotoes}>
                            <TouchableOpacity onPress={stopTraking}>
                                <MaterialCommunityIcons name="pause-circle" size={90} color="#63b8ff" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={startTraking}>
                                        <AntDesign name="play" size={90} color="#00cd66" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Finalizar')}>
                                <MaterialCommunityIcons name="stop-circle" size={90} color="#ff3030" />
                            </TouchableOpacity>
            </View>
        </SafeAreaView>



    );
}

const styles = StyleSheet.create({

    bloco:{
        flexDirection:'column',
        alignItems:'center',
        flex:0.5,
        marginTop:15,
    },
    
    linha:{
        flexDirection:'row', 
        alignItems:'stretch'
    },

    txtTitulo:{
        fontSize:30,
    },

    txtPrincipal:{
        fontWeight:'bold',
        fontSize:50,
    },

    botao:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        width:'100%'
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop:25,
        margin: 5
    },

    containerBotoes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width:'100%',
        position:'absolute',
        bottom: 50
    }

})

// -----------------------------
let callbackUpdate = null;
  const track = [];
  
  const addLocation = (location) =>{
    track.push(location);
    if(callbackUpdate)
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

