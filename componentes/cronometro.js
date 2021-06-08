import React, {Component} from 'react';
import {Plataform, StyleSheet, Text,TouchableOpacity, View} from "react-native";


export default class App extends Component{

   

    constructor(props){
        super(props)

        this.state = {
            timer:null,
            number:0,
            starStopText:'Start',
        }

        this.startStopButton = this.startStopButton.bind(this);
        this.clearButton = this.clearButton.bind(this);
    }

    startStopButton(){
        if (this.state.timer == null){

           let newS = this.state;
           newS.starStopText = 'Stop';
           this.setState(newS);

           this.state.timer = setInterval(() => {
               let newState = this.state;
               newState.number +=0.1,
               this.setState(newState);
           }, 100);

           
        }else{
            clearInterval(this.state.timer);
            let newState = this.state;
            newState.starStopText = 'Start';
            newState.timer = null;
            this.setState(newState);
        }
    }

    clearButton(){

        clearInterval(this.state.timer);
        let newState =this.state;
        newState.startStopText = 'Start';
        newState.timer = null;
        newState.number = 0;
        this.setState(newState)
    }

    render(){
        return (
            <View>
                <Text>{this.state.number.toFixed(1)}</Text>

                <TouchableOpacity onPress={this.startStopButton}>
                    <Text>CliC</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.clearButton}>
                <Text>{this.state.starStopText}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}