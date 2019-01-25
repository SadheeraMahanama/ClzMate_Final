

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
 
class Logout extends Component {

    static navigationOptions = {
        drawerIcon:(
            <Image
            style={{height:24,width:24}}
            source={require('../../images/logout.png')}
            />
        )
      }

  render() {
    return (
       <Container>
            <Header>
               <Left>
                   <Icon name="ios-menu"
                         onPress={() =>
                         this.props.navigation.navigate('DrawerOpen')}
                   />

               </Left>
           </Header>
           <Content>
               <Text>Logout</Text>
           </Content>
       </Container>
    );
  }
}

export default Logout;