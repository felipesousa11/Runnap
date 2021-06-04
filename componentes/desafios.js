import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet,SafeAreaView, ScrollView, TouchableOpacity,Button,Image, LayoutAnimation, Platform, UIManager } from 'react-native';
import {FontAwesome5, FontAwesome, MaterialCommunityIcons,Entypo } from '@expo/vector-icons';
import BDdesafios from './bd_desafios'
import { back } from 'react-native/Libraries/Animated/src/Easing';


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
                <Image 
                   source={item.image}
                   style={styles.img}
                />
                <View style={{flex:1, justifyContent:'center'}}>
                <Text style={styles.itemText}>{item.category_name}</Text>
                </View>
            </TouchableOpacity>
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
                            <View style={styles.box}>
                                <View style={styles.linha}>
                                    <Text style={styles.text}>Objetivo</Text>
                                    <Text style={styles.txtinfor}>{item.objetivo} Km</Text>
                                </View>

                                <View style={styles.linha}>
                                    <Text style={styles.text}>Cronograma</Text>
                                    <Text style={styles.txtinfor}>{item.inicio} a {item.fim} </Text>
                                </View>
                            </View>

                            <View style={styles.box}>
                                <View style={styles.linha}>
                                    <Text style={styles.text}>Participantes</Text>
                                    <Text style={styles.txtinfor}>{item.participantes}</Text>
                                </View>

                                <View style={styles.linha}>
                                    <Text style={styles.text}>Finalistas</Text>
                                    <Text style={styles.txtinfor}>{item.finalistas}</Text>
                                </View>
                            </View>


                            <View style={{marginBottom:10}}>
                                
                                {inscrito?
                                <Text></Text>
                                :
                                <View style={styles.box}>
                                <View style={{flex:1,flexDirection:'row', justifyContent:'space-around'}}>
                                    <View style={styles.linha}>
                                        <Text style={styles.text}>Realizado</Text>
                                        <Text style={styles.txtinfor}>{item.realizado}</Text>
                                    </View>

                                    <View style={styles.linha}>
                                        <Text style={styles.text}>Faltam</Text>
                                        <Text style={styles.txtinfor}>{item.restante}</Text>
                                    </View>
                                </View>
                                </View>
                                }
                                <Button
                                    style={styles.botao}
                                    title={inscrito?"Aceitar desafio":"Você esta no desafio!"}
                                    onPress={()=>setInscrito(!inscrito)}
                                    
                                />
                                
                            </View> 

                            
                               
                                
                            

                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}


export default function Desafios(){

    const [desafios, setDesafios] = React
    .useState(BDdesafios.getDesafios());

    const [multiSelect, setmultiSelect] = useState(false);
    const [listDataSource, setlistDataSource] = useState(desafios);

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
        paddingTop:25
    },
    
    header:{
        flexDirection:'row',
        padding:10,
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
        //paddingBottom:25,
      
    },

    itemText:{
        padding:5,
        fontSize:20,
        fontWeight:'500',
        marginTop:-68,
        backgroundColor:'rgba(0,0,0,0.5)',
        color:'white',
        justifyContent:'center',
    },

    content:{
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#fff',
              
    },

    text:{
        fontSize:16,
    },

    txtinfor:{
        fontSize:20,
        color:'red',
    },


    separator:{
        height:0.5,
        backgroundColor:'#cfcfcf',
        width:'100%',

    },

    box:{
        flex:1,
        flexDirection:'row',
       
    },

    linha:{
        flex:0.5,
        alignItems:'center',
        paddingBottom:10,
        paddingTop:10,
    },

    img:{
        height:250,
        width:'100%',
        resizeMode:'contain',
        paddingBottom:-70,
        paddingTop:-70,
        //marginBottom:-100,
        //marginTop:-160,
    }

});