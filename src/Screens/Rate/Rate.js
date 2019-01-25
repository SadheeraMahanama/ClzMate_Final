 

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import { Rating } from 'react-native-elements';



class Rate extends Component {
    
  static navigationOptions = {
    drawerIcon:(
         <Image
        style={{height:24,width:24}}
        source={require('../../images/rate.png')}
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
           {/* ratingCompleted(rating) {
  console.log("Rating is: " + rating)
} */}
            {/* <Rating showRating
            type="star"
            fractions={1}
            startingValue={3.6}
            readonly
            imageSize={40}
            onFinishRating={this.ratingCompleted}
            style={{ paddingVertical: 10 }}
            /> */}
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


           </Content>
       </Container>
    );
  }
}

export default Rate;