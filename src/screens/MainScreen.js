import React from 'react'

import { Container, Header, Item, Input, Icon, Button, Text ,Content ,ListItem ,List ,Right,Left} from 'native-base';

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

                <Content>


                    <List>

                        <ListItem itemDivider><Text>A</Text></ListItem>
                        <ListItem><Text>Abir</Text></ListItem>
                        <ListItem><Text>Agora</Text></ListItem>
                        <ListItem><Text>Armario</Text></ListItem>

                        <ListItem itemDivider><Text>B</Text></ListItem>
                        <ListItem><Text>Bacia</Text></ListItem>
                        <ListItem><Text>Banheira</Text></ListItem>
                        <ListItem><Text>Bazar</Text></ListItem>


                    </List>
                </Content>
            </Container>


       )
    }

}