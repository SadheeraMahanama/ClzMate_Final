

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,BackHandler} from 'react-native';
import { Icon, Container, Header, Content, Left } from 'native-base'
import CustomHeader from '../../components/Header/CustomHeader';
//BackAndroid.exitApp();
class Exit extends Component {

    static navigationOptions = {
        drawerIcon: (
            <Image
            style={{height:24,width:24}}
            source={require('../../images/exit.png')}
            />
        )
      }

      exit_function = () => {
          BackHandler.exitApp();
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
               <View>
            <Button title="Exit Button"
            onPress={this.exit_function}/>
            </View>
           </Content>
       </Container>
    );
  }
}

export default Exit;