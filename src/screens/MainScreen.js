import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class MainScreen extends Component {
    render() {
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
            </Container>
        );
    }
}