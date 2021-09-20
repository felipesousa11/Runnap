import React ,{useEffect} from 'react';
import { Text, View, TouchableOpacity  } from 'react-native';
import { MaterialCommunityIcons, Ionicons   } from '@expo/vector-icons';
import {styles} from '../style/Style';

export default function Menutopo (props){

    return(    
       <View style={styles.topo}>
            <TouchableOpacity style={styles.buttonNews}>
                <Ionicons name="ios-notifications-circle" size={30} color="black" />
            </TouchableOpacity>
           <Text style={styles.title}>{props.title}</Text>
           <TouchableOpacity style={styles.buttonMenu} >
                <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={30} color="black" />
           </TouchableOpacity>
        </View>
    );
}