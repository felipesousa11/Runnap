import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet,SafeAreaView, ScrollView, TouchableOpacity,Button,Image, LayoutAnimation, Platform, UIManager } from 'react-native';
import {FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const CONTENT =[
    {
        isExpanded:false,
        category_name:'Start 20k',
        image:require('../img/banner2.png'),
        subcategory:[
            {id:1, 
            objetivo: '20',
            inicio: "10/05/2021",
            fim:"30/05/2021",
            participantes:"556",
            finalistas:"306",
            realizado:"8",
            restante:"12",
            inscrito: false,
            },
        ]
    },

    {
        isExpanded:false,
        category_name:'Start 25k',
        image:require('../img/banner.png'),
        subcategory:[
            {id:2, 
            objetivo: "25",
            inicio: "12/05/2021",
            fim:"30/05/2021",
            participantes:"56",
            finalistas:"30",
            realizado:"25",
            restante:"0",
            inscrito: true,
            },
        ]
    },

    {
        isExpanded:true,
        category_name:'# Rodagem de maio',
        image:require('../img/banner3.png'),
        subcategory:[
            {id:3, 
            objetivo: "50",
            inicio: "12/05/2021",
            fim:"30/05/2021",
            participantes:"497",
            finalistas:"301",
            realizado:"29",
            restante:"21",
            inscrito: true,
            },
        ]
    },

    {
        isExpanded:false,
        category_name:'Desafio IFNMG',
        image:require('../img/banner4.png'),
        subcategory:[
            {id:4,
            objetivo: "18",
            inicio: "15/05/2021",
            fim:"20/05/2021",
            participantes:"656",
            finalistas:"330",
            realizado:"15",
            restante:"3",
            inscrito: false,},
        ]
    },

    {
        isExpanded:false,
        category_name:'Corra mais',
        image:require('../img/banner5.png'),
        subcategory:[
            {id:5,
            objetivo: "05",
            inicio: "30/05/2021",
            fim:"10/06/2021",
            participantes:"119",
            finalistas:"330",
            realizado:"0",
            restante:"0",
            inscrito: true,},
        ]
    },
];

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
                <Text style={styles.itemText}>
                    {item.category_name}
                </Text>
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

                            <View style={styles.box}>
                                <View style={styles.linha}>
                                    <Text style={styles.text}>Realizado</Text>
                                    <Text style={styles.txtinfor}>{item.realizado}</Text>
                                </View>

                                <View style={styles.linha}>
                                    <Text style={styles.text}>Faltam</Text>
                                     <Text style={styles.txtinfor}>{item.restante}</Text>
                                </View>
                            </View>
                               
                                
                            

                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}


export default function(){
    const [multiSelect, setmultiSelect] = useState(false);
    const [listDataSource, setlistDataSource] = useState(CONTENT);

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
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>Histórico</Text>
                    <TouchableOpacity
                        onPress={()=>setmultiSelect(!multiSelect)}   
                    >
                    <Text style={styles.headerbutton}>
                        {
                            multiSelect
                            ? 'Enable Single \n Expand'
                            : 'Enable Multiple \n Expand'
                        }
                    </Text>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
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
        paddingBottom:25,
      
    },

    itemText:{
        paddingTop:10,
        paddingLeft:10,
        fontSize:20,
        fontWeight:'500',
    },

    content:{
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'#fff',
        borderBottomWidth:0.5,
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
        width:'100%',
        resizeMode:'contain',
        marginBottom:-160,
        marginTop:-160,
    }

});