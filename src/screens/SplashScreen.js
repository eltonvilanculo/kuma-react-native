import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button ,
    ActivityIndicator
} from 'react-native';
import MainScreen from "./MainScreen";

export default class SplashScreen extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            loading:0
        }


    }

    componentDidMount(){


        var retry = this.state.loading

       const checkStatus = ()=> {
         console.log('once again')
            if(++retry > 4) {
                console.log(retry)
                clearTimeout(id);
                this.setState({
                    loading:retry
                }) ;
            }
        }

        var id = setInterval(checkStatus, 1000);
    }


    render() {

        if(this.state.loading<4){
            return(



                <View style={[styles.container, styles.horizontal]}>

                    <Text style={styles.text_splash} onPress={()=>{this.props.navigation.navigate('MainScreen')}}>Kuma</Text>
                    <ActivityIndicator size="large" color="blue" />
                </View>

                    )
        }

        return (<MainScreen />)


    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center" ,
        backgroundColor:'#000'

    },
    horizontal: {
        flexDirection: "column",
        alignContent:'center',
        justifyContent: "space-around",
        padding: 10
    } ,
    text_splash:{
        color:'#fff' ,
        fontWeight:'bold' ,
        fontSize:52 ,
        marginLeft:'35%'




    }

})