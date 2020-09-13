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
            isLoading: true
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
            .catch(error => console.log(error))
    }

    render() {
        console.log(this.props.navigation)
        const { isLoading, wordList } = this.state;
        console.log('render', isLoading)
        if (isLoading) {
            console.log('loading')
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
                    <Content><ActivityIndicator color='blue' /></Content>
                </Container>
            )
        } else {
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

