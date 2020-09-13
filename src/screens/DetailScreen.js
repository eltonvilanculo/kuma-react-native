import React from 'react'
import {
    SafeAreaView,
    ScrollView,
} from 'react-native';
import {Container,Header,Content ,Card ,Body ,Text ,CardItem} from 'native-base'


export default class DetailScreen extends React.Component{


    render() {
        // console.log(this.props.navigation.getParam('possibleFriends', 'defaultValue'))
        console.log('detail',this.props.route.params)
        return(

                <Container>
                    {/*<Header><Text>palavra</Text></Header>*/}

            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>
                                {this.props.route.params.data[1]}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        </Container>


        )
    }

}

