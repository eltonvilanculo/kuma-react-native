import React from 'react'
import { StyleSheet } from 'react-native';
import {Icon,Text, Content, List, ListItem, Left, Right } from 'native-base';



  
  export default  props =>(       
       <Content>
           
           <ListItem key={props.childKey} onPress={props.click}>
                
                <Left style={styles.description}>
                  
                    <Text > {props.wordWronga}</Text>
                    <Text note>{props.wordPt}</Text> 
                </Left>

                <Right style={styles.btnR}>
                    <Icon name="arrow-forward" />
                </Right>

            </ListItem>
            
            </Content>
        )

const styles = StyleSheet.create({
    list: {
    },
    description: {

    },

    btnR: {

    }

});

// export const ListSimple =()=>{
//     <Content>
//     <List style={styles.list}>
//     <ListItem key={props.key}>
         
//          <Left style={styles.description}>
           
//              <Text > {props.wordWronga}</Text>
//              <Text note>{props.wordPt}</Text> 
//          </Left>

//          <Right style={styles.btnR}>
//              <Icon name="arrow-forward" />
//          </Right>

//      </ListItem>
//      </List>
//      </Content>

//     //  Na hora de importar deve se usar {} por ser uma funcao , e podemos exportar mais de um componente
// }