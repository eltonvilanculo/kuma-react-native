/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { ActivityIndicator, Alert, StyleSheet } from 'react-native';

import { Container, Header, Item, Input, Icon, Button, Text, Content, List, ListItem, Left, Right } from 'native-base';
import DetailScreen from './DetailScreen';
import ListSimpleItem from '../components/ListSimpleItem';
import faker from 'faker'

export default class MainScreen extends Component {

    constructor(props) {
        super(props)
        const wordResultAux =[] ; 
        this.state = {
            wordList: [],
            isLoading: true,
            error:null ,
            pilotWords: [
                'dia',
                'tarde',
                'noite',
            ],
            value:'',
        }
    }
    handleScreen = (id) => {

        console.log(id)
        this.props.navigation.navigate('DetailScreen')

    }
    
    handleItemClicked = ()=> {
        alert('clicked')
    }


    handleIput=(e)=>{
        
    //    console.log('writing',e)
       this.setState({value:e})
       this.setState({wordList:this.checkWords(e)})
       console.log('wordList -> ' ,this.state.wordList)
    //   console.log('result search ->',this.checkWords(e)) 

    }

    checkWords(word){

        // const array =  this.state.wordList ; 
        // const array =  ['a' ,'asas' , 'vddd' , 'www' , 'ssss' , 'wert'] ; 

        return this.wordResultAux.filter(searchResut=>searchResut.port.toLowerCase().indexOf(word.toLowerCase()) > -1)

    }
    componentDidMount() {

        fetch("http://localhost:3000/meaning")
            .then(result => result.json())
            .then((result2) => {
                const array = result2
                this.setState({ isLoading: false, wordList: array })
                array.forEach((iten) => {


                })
            })
            .catch((error) => {
             
                const myDemoList = []
                for(let i=0; i<10 ; i++){
                    myDemoList[i] = 
                        {
                            id:faker.random.uuid(),
                            ronga:faker.random.word(),
                            port:faker.random.word()
                        }
                    }

                    this.setState({error:error , wordList:myDemoList})
                    this.wordResultAux = myDemoList ; 
                   
                }
             
         )
    }


    render() {
        // console.log('navigation TAG',this.props.navigation)
        const { isLoading, wordList ,error } = this.state;
         if(error){

            // console.log('wordErrorList',wordList)
            return (

                <Container>
                       <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Pesquisar" onChangeText={this.handleIput} value={this.state.value}/>
                        </Item>
                        <Button transparent>
                            <Text>error</Text>
                        </Button>
                    </Header>
                    <Content>
                        <Text bold style={{color:'blue' , fontWeight:'bold' ,  fontSize:24 }}  onPress={()=>this.props.navigation.navigate('DetailScreen' ,{data:this.state.pilotWords})}>
                            {JSON.stringify(`Boss como correr a App sem a API haaaaa ${error}`)}
                        </Text>
                        <List>
                            
                            {wordList.map(word=>( <ListSimpleItem id={word.id} wordWronga={word.port} click={this.handleItemClicked}/>))}

                       
                       </List>
                    </Content>
                </Container>
           ) ;
        }
        if (isLoading) {


            return (
                <Container>
                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Pesquisar" />
                        </Item>
                        <Button transparent>
                            <Text>error</Text>
                        </Button>
                    </Header>
                    <Content><ActivityIndicator color='blue' size='large' /></Content>
                </Container>
            )
        }

        else {
            // console.log('not loading', wordList)
            return (
                <Container>
                    <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Pesquisar" />
                        </Item>
                        <Button transparent>
                            <Text>Pesquisar</Text>
                        </Button>
                    </Header>
                    <Content>
                        <List style={descriptStyle.list}>
                            {wordList.map(word => (<ListItem onPress={() => { this.handleScreen(word.id) }}
                                key={word.id}>
                                <Left style={descriptStyle.description}>
                                    <Text > {word.ronga + "\n"}</Text>
                                    <Text note>{word.port}</Text>
                                </Left>

                                <Right style={descriptStyle.btnR}>
                                    <Icon name="arrow-forward" />
                                </Right>

                            </ListItem>
                            ))}

                        </List>
                    </Content>
                </Container>
            );
        }
    }


}
// Add Style to Description text
const descriptStyle = StyleSheet.create({
    list: {
    },
    description: {

    },

    btnR: {

    }

});

