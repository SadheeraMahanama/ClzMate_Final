 

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import CustomHeader from '../../components/Header/CustomHeader';
 
// class Chat extends Component {
    
//   static navigationOptions = {
//     drawerIcon:(
//          <Image
//         style={{height:24,width:24}}
//         source={require('../../images/chat.png')}
//         color='orange'
//         />
//       )
//     }

//   render() {
//     return (
//        <Container>
//            <Header>
//                <Left>
//                    <Icon name="ios-menu"
//                          onPress={() =>
//                          this.props.navigation.navigate('DrawerOpen')}
//                    />

//                </Left>
//            </Header>
//            <Content>
//                <Text>Chat</Text>
//            </Content>
//        </Container>
//     );
//   }
// }

// export default Chat;

class Chat extends Component{
  render() {
      return (
          <View>
          <CustomHeader 
          title="Chat"
          openDrawer={() => this.props.navigation.openDrawer()}
          //iconName="md-checkmark-circle"
      />
          <Text>chat</Text>
          </View>
      );
    }

}
export default Chat;
