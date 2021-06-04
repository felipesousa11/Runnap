import React from 'react'
import {SafeAreaView,TouchableWithoutFeedback, Animated,Text, Image} from 'react-native'
import Mapview,{Marker} from 'react-native-maps'
import {mapastyle} from '../styles/mapa-style'



const Mapascreen = () => {
    return(    
        <SafeAreaView style={mapastyle.flex}>
           <Mapview
                style={{flex:1}}
                initialRegion={{
                    latitude:-3.722,
                    longitude:-38.515,
                    latitudeDelta:0.09,
                    longitudeDelta:0.04
                }}>
                    
                <Marker
                    description="Eu to aqui"
                    coordinate={{latitude: -3.723, longitude:-38.515}}
                >
                    <Image source={require('../img/marcador.png')}
                            style={mapastyle.markerimg}
                    />                    

                </Marker>
            </Mapview>


           <TouchableWithoutFeedback>
                <Animated.View style={mapastyle.botao}>
                    <Text>Iniciar</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </SafeAreaView>

    );
}

export default Mapascreen;