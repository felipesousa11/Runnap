import React ,{useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, BackHandler,Alert  } from 'react-native';
import { Entypo, FontAwesome,Fontisto,Feather } from '@expo/vector-icons';
import {styles} from '../../assets/style/Style';
import Menutopo from '../../assets/components/Menutopo';

export default function Desafios ({ navigation }){

    return(    
        <View style={[styles.container, styles.containertop]}>
            <Menutopo title='Desafios' navigation={navigation}/>
        </View>
    );
}

