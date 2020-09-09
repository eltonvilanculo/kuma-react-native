import React from 'react'

import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class MainScreen extends React.Component{


    render() {
        return(

            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
            </Container>


       )
    }

}