import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet,SafeAreaView, ScrollView, TouchableOpacity,Button,Image, LayoutAnimation, Platform, UIManager } from 'react-native';
import {FontAwesome5, FontAwesome, MaterialCommunityIcons,SimpleLineIcons,AntDesign, Entypo,Ionicons } from '@expo/vector-icons';
import BDhistorico from './bd_historico';


const ExpandableComponent = ({item, onClickFunction}) => {
    const [layoutHeight, setlayoutHeight] = useState(0);

    useEffect(() =>{
         if (item.isExpanded){
             setlayoutHeight(null);
         }else{
             setlayoutHeight(0);
         }
    }, [item.isExpanded])

    const [inscrito, setInscrito]=useState(false)
    return(
        
            <View>
            <TouchableOpacity
                style={styles.item}
                onPress={onClickFunction}
            >
                <Text style={{fontSize:20, paddingLeft:10}}>{item.category_name}</Text>
                    <View style={styles.topo}>
                        <View>
                            <Text style={{textAlign:'center'}}>Data</Text>
                            <Text style={styles.txtinfor}>{item.data}</Text>
                        </View>

                        <View style={{borderRightWidth:0.5, borderLeftWidth:0.5,paddingRight:40, paddingLeft:40}}>
                            <Text style={{textAlign:'center'}}>Distância</Text>
                            <Text style={styles.txtinfor}>{item.distancia} km</Text>
                        </View>
                              
                        <View >
                            <Text style={{textAlign:'center'}}>Tempo</Text>
                            <Text style={styles.txtinfor}>{item.tempo}</Text>
                        </View>
                    </View>

                    <View>
                        <Image source={item.image}
                               style={styles.img}
                        />               
                    </View>
                               
            </TouchableOpacity>
                    <View style={styles.acoes}>
                        <MaterialCommunityIcons name="arm-flex-outline" size={24} color="black" />
                        <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                        <FontAwesome5 name="share-square" size={24} color="black" />
                    </View>
            <View
                style={{
                    height: layoutHeight,
                    overflow:'hidden'
                }}
            >
                {
                    item.subcategory.map((item, key) =>(
                        <TouchableOpacity
                            key={key}
                            style={styles.content}
                        >
                            <View style={styles.container}>    
                                <View style={styles.linha}>
                                    <MaterialCommunityIcons name="timer-outline" size={24} color="black" />
                                    <Text style={styles.texto}>Duração</Text>
                                    <Text style={styles.txtinfor}>{item.tempo} min</Text>
                                </View>

                                <View style={styles.linha}>
                                    <FontAwesome5 name="route" size={24} color="black" />
                                    <Text style={styles.texto}>Distância</Text>
                                    <Text style={styles.txtinfor}>{item.distancia} km</Text>
                                </View>
                            
                                <View style={styles.linha}>
                                    <Entypo name="gauge" size={24} color="black" />
                                    <Text style={styles.texto}>Ritmo médio</Text>
                                    <Text style={styles.txtinfor}>{item.ritmo} /km</Text>
                                </View>

                                <View style={styles.linha}>
                                    <SimpleLineIcons name="speedometer" size={24} color="black" />
                                    <Text style={styles.texto}>Vel. máxima</Text>
                                    <Text style={styles.txtinfor}>{item.velocidadeMax} km/h</Text>
                                </View>

                                <View style={styles.linha}>
                                    <Ionicons name="speedometer-outline" size={24} color="black" />
                                    <Text style={styles.texto}>Vel. média </Text>
                                    <Text style={styles.txtinfor}>{item.velocidadeMed} km/h</Text>
                                </View>

                                <View style={styles.linha}>
                                    <MaterialCommunityIcons name="slope-uphill" size={24} color="black" />
                                    <Text style={styles.texto}>Ganho de elev.</Text>
                                    <Text style={styles.txtinfor}>{item.ganhoElev} m</Text>
                                </View>

                                <View style={styles.linha}>
                                    <MaterialCommunityIcons name="slope-downhill" size={24} color="black" />
                                    <Text style={styles.texto}>Perda de elev.</Text>
                                    <Text style={styles.txtinfor}>{item.perdaElev} m</Text>
                                </View>

                                <View style={styles.linha}>
                                    <AntDesign name="clockcircleo" size={23} color="black" />
                                    <Text style={styles.texto}>Hora de início</Text>
                                    <Text style={styles.txtinfor}>{item.hora} h</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
        
    )
}


export default function Historico(navigation){

    const [historico, setHistorico] = React
    .useState(BDhistorico.getHistorico());


    const [multiSelect, setmultiSelect] = useState(false);
    const [listDataSource, setlistDataSource] = useState(historico);

    if (Platform.OS === 'android'){
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index) =>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiSelect){
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        }else{
            array.map((value, placeindex) =>
            placeindex === index
            ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
            : (array[placeindex]['isExpanded']) = false 
            );
        }
        setlistDataSource(array)
    }

    return(
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>Historico</Text>
                    <TouchableOpacity
                        onPress={()=>setmultiSelect(!multiSelect)} 
                    >
                        <Entypo name="menu" size={24} color="black" /> 
                   
                    </TouchableOpacity>
                </View>
                <ScrollView>
                        {
                            listDataSource.map((item, key)=>(
                                <ExpandableComponent
                                key={item.category_name}
                                item={item}
                                onClickFunction={() =>{
                                    updateLayout(key)
                                }}
                                />
                            ))
                        }
                </ScrollView>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
       
    header:{
        flexDirection:'row',
        flex:1,
        width:'100%',
        alignContent:'center',
        backgroundColor:"red",
        marginTop:35,
        //paddingLeft:10,
        //position:'absolute'
    },

    titleText:{
        flex:1,
        fontSize:22,
        fontWeight:'bold'
    },

    headerbutton:{
        textAlign:'center',
        justifyContent:'center',
        fontSize:18,
    },

    item:{
        paddingBottom:20,
      
    },

    itemText:{
        paddingTop:10,
        paddingLeft:10,
        fontSize:20,
        fontWeight:'500',
    },

    topo:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        padding:10},

    content:{
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#fff',
        borderBottomWidth:0.5,
    },

    linha:{
        flexDirection:'row',
        padding:5,
       justifyContent: 'space-around'

    },

    texto:{
        flex:1,
        fontSize:18,
        paddingLeft:10,
    },

    txtinfor:{
        fontSize:18,
        alignSelf:'flex-end'
        

    },


    separator:{
        height:0.5,
        backgroundColor:'#cfcfcf',
        width:'100%',

    },

    img:{
        height:250,
        width:'100%',
        resizeMode:'cover',
        //marginBottom:1,
        //marginTop:-115,
    },

    acoes:{
        backgroundColor:"#EBEAEA",
        flexDirection:'row',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:15,
        paddingRight:15,
        marginBottom:15,
        justifyContent:'space-between',

    },

});