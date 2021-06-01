import React, {useState, useEffect}  from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Button} from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import MapView, { Marker, Polyline } from 'react-native-maps';

export default function (){

    const [location, setLocation] = useState(null);
    const [historicoLocalizacao, setHistoricoLocalizacao] = useState([]);
    

    Location.watchPositionAsync({timeInterval:3000,distanceInterval:1, mayShowUserSettingsDialog:true}, (location) => {
        // setLocation(location);
        setHistoricoLocalizacao([
            ...historicoLocalizacao, 
            {
                latitude : location.coords.latitude,
                longitude: location.coords.longitude
            }
            ]);
    })

    useEffect(() => {
            
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
      
            //let location = await Location.getCurrentPositionAsync({});
            /*setHistoricoLocalizacao([...historicoLocalizacao,{
                lat: location.coords.latitude,
                lng: location.coords.latitude
            }]);*/
            let x = await Location.getProviderStatusAsync();
            setLocation(x);
          })();
    }, [])

    return(
        <SafeAreaView >
           <View style={estilos.container}>
                <View style={{alignItems:'center'}}>
                    <Text style={estilos.txtTitulo}>CORRIDA</Text>
                </View>

                <View style={{alignItems:'center'}}>
                    <Text style={estilos.txtPrincipal} >9,42</Text>
                    <Text>Distância</Text>
                </View>

                <View style={{flexDirection:'row', alignItems:'space-between'}}>
                    <View style={estilos.bloco}>
                        <Text style={estilos.txtTitulo}>28:51</Text>
                        <View style={{flexDirection:'row', alignItems:'space-between'}}>
                            <AntDesign name="clockcircleo" size={17} color="black" />
                            <Text>Duração</Text>
                        </View>
                    </View>

                    <View style={estilos.bloco}>
                        <Text style={estilos.txtTitulo}>8:51</Text>
                        <View style={{flexDirection:'row', alignItems:'space-between'}}>
                            <Entypo name="gauge" size={20} color="black" />
                            <Text>Ritmo (min/km)</Text>
                        </View>
                    </View> 
                </View>

                <View style={{flexDirection:'row', alignItems:'space-between'}}>
                    <View style={estilos.bloco}>
                        <Entypo name="location" size={24} color="black" />
                    </View>

                    <View style={estilos.bloco}>
                        <Entypo name="bar-graph" size={24} color="black" />
                    </View>
                </View>
                
                {/* <TouchableHighlight onPress={obterlocal}>
                <Text>Clique aqui para pegar a localização</Text>
                </TouchableHighlight> */}
                <Text>Latitude: {historicoLocalizacao.length}</Text>
                <Text>Longitude: {JSON.stringify(location)}</Text>
                <MapView
                    style={{
                        height: 320,
                        width: '100%',
                                            
                    }}
                    initialRegion={{
                    latitude: 37.235290,
                    longitude: -121.827420,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,                                   

                    }}
                >
                {historicoLocalizacao &&
                    <Polyline coordinates={historicoLocalizacao} strokeWidth={5} />
                }
                </MapView>
                
           </View>
            

        </SafeAreaView>



    )
}

const estilos = StyleSheet.create({

    container:{
        paddingTop:25,
        margin:5,
    },

    bloco:{
        flexDirection:'column',
        alignItems:'center',
        flex:0.5,
        marginTop:15,
    },
    
    txtTitulo:{
        fontSize:30,
    },

    txtinfo:{
        fontSize:25,
    },


    txtPrincipal:{
        fontWeight:'bold',
        fontSize:50,
    },

    txtsubTitulo:{
        fontSize:15,
            
        },

    icone:{
        width:'30%',
        resizeMode:'contain',
        marginTop:-80    
    },

    img:{
        width:'100%',
        resizeMode:'stretch',
        marginTop:-90,
    },

    botao:{
        marginTop:10,
    }

})