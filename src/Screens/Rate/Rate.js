 

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import { Rating } from 'react-native-elements';
import CustomHeader from '../../components/Header/CustomHeader';



// class Rate extends Component {
    
//   static navigationOptions = {
//     drawerIcon:(
//          <Image
//         style={{height:24,width:24}}
//         source={require('../../images/rate.png')}
//         />
//       )
//     }

//   render() {
//     return (
//        <Container>
//            <Header>
//                <Left>
//                <Button
//                             transparent
//                              onPress={() => this.props.navigation.navigate('DrawerOpen')}
                             
//                         >
//                             <Icon name="menu" 
//                             style={{bottom:15}}/>
//                         </Button>
 

//                </Left>
//            </Header>
//            <Content>
          
//             <Rating
//   type="star"
//   color='blue'
//   ratingCount={5}
//   fractions={2}
//   startingValue={1.57}
//   imageSize={40}
//   onFinishRating={this.ratingCompleted}
//   showRating
//   style={{ paddingVertical: 10 }}
// />


//            </Content>
//        </Container>
//     );
//   }
// }

// export default Rate;

class Rate extends Component{
  render() {
      return (
          <View>
          <CustomHeader 
          title="Rate"
          openDrawer={() => this.props.navigation.openDrawer()}
          iconName="md-checkmark-circle"
      />

  <Rating
  type="star"
  color='blue'
  ratingCount={5}
  fractions={2}
  startingValue={1.57}
  imageSize={40}
  onFinishRating={this.ratingCompleted}
  showRating
  style={{ paddingVertical: 10 }}
/>
           
          </View>
      );
    }

}
export default Rate;
 