/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

import { ActivityIndicator, Alert, StyleSheet } from 'react-native';

import { Container, Header, Item, Input, Icon, Button, Text, Content, List, ListItem, Left, Right } from 'native-base';
import DetailScreen from './DetailScreen';

export default class MainScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            wordList: [],
            isLoading: true,
            error:null ,
            pilotWords: [
                'dia',
                'tarde',
                'noite',
            ],
        }
    }
    handleScreen = (id) => {

        console.log(id)
        this.props.navigation.navigate('DetailScreen')

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
                this.setState({error:error})

            })
    }

    render() {
        console.log('navigation TAG',this.props.navigation)
        const { isLoading, wordList ,error } = this.state;
         if(error){

            return (
                <Container>
                    <Content>
                        <Text bold style={{color:'blue' , fontWeight:'bold' ,  fontSize:24 }}  onPress={()=>this.props.navigation.navigate('DetailScreen' ,{data:this.state.pilotWords})}>
                            {JSON.stringify(`Boss como correr a App sem a API haaaaa ${error}`)}
                        </Text>
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
            console.log('not loading', wordList)
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

