import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';

export default class SplashScreen extends React.Component{


    render() {
        return(<View style={styles.view}>
            <Text style={styles.text_splash}>Kuma</Text>
        /></View>)
    }

}

const styles = StyleSheet.create({
    view:{
        flex:1 ,
        backgroundColor:'#000'
    } ,
    text_splash:{
        color:'#fff' ,
        fontWeight:'bold' ,



    }

})