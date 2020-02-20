import React,{Component} from 'react';
import {View,Text,StyleSheet} from "react-native";
import {StatusBar} from "react-native-web";
import Button from "../Button";

class Timer extends Component{
    render() {
        const {
            isPlaying,
            elapsedTime,
            timerDuration,
        } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barstyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying&&(<Button iconName="play-circle-o" onPress={()=> alert("it works!")}/>)}
                    {isPlaying&&(<Button iconName="stop-circle" onPress={()=> alert("it works!")}/>)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:"#3065ee"
        },
        upper:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            fontSize:50
        },
        lower:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            fontSize:30
        },
        time:{
            color:"white",
            fontSize:120,
            fontWeight:"100"
        },
    }
);

export default Timer;