 

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button} from 'react-native';
import { Icon, Container, Header, Content, Left } from 'native-base'
import { Dialog } from 'react-native-simple-dialogs'; 
import CustomHeader from '../../components/Header/CustomHeader';

class About extends Component {
    
  static navigationOptions = {
    drawerIcon:(
         <Image
        style={{height:24,width:24}}
        source={require('../../images/about.png')}
        />
      )
    }

    state = {}
    
    openDialog = (show) => {
    this.setState({ showDialog: show });
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
           <View style={styles.box}>
                <Button style={styles.btn}
                    onPress={ () => this.openDialog(true) }
                    title="About App"
                />
               
                <Dialog
                    title="ClzMate"
                    animationType="fade"
                    contentStyle={
                        {
                            alignItems: "center",
                            justifyContent: "center",
                        }
                    }
                    onTouchOutside={ () => this.openDialog(false) }
                    visible={ this.state.showDialog }
                >
                <Image
                    source={require('../../images/clz.jpg')}
                        // source={
                        //     {
                        //         uri: "https://facebook.github.io/react-native/img/header_logo.png",
                        //     }
                        // }
                        style={
                            {
                                width: 99,
                                height: 87,
                                backgroundColor: "white",
                                marginTop: 10,
                                resizeMode: "contain",
                            }
                        }
                    />
                    <Text style={ { marginVertical: 30 } }>
                         Sadheera Mahanama
                         sadheeramahanama94@gmail.com


                    </Text>
                    <Button
                        onPress={ () => this.openDialog(false) }
                        style={ { marginTop: 10 } }
                        title="CLOSE"
                    />
                </Dialog>
                </View>
           </Content>
       </Container>
    // <View>
                 
    //             <Button
    //                 onPress={ () => this.openDialog(true) }
    //                 title="Custom Dialog"
    //             />

              

    //             <Dialog
    //                 title="Custom Dialog"
    //                 animationType="fade"
    //                 contentStyle={
    //                     {
    //                         alignItems: "center",
    //                         justifyContent: "center",
    //                     }
    //                 }
    //                 onTouchOutside={ () => this.openDialog(false) }
    //                 visible={ this.state.showDialog }
    //             >
    //                 <Image
    //                     source={
    //                         {
    //                             uri: "https://facebook.github.io/react-native/img/header_logo.png",
    //                         }
    //                     }
    //                     style={
    //                         {
    //                             width: 99,
    //                             height: 87,
    //                             backgroundColor: "black",
    //                             marginTop: 10,
    //                             resizeMode: "contain",
    //                         }
    //                     }
    //                 />
    //                 <Text style={ { marginVertical: 30 } }>
    //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //                 </Text>
    //                 <Button
    //                     onPress={ () => this.openDialog(false) }
    //                     style={ { marginTop: 10 } }
    //                     title="CLOSE"
    //                 />
    //             </Dialog>

    //              </View>
                
    );
  }
}

const styles = StyleSheet.create({
    btn :{
         flex:1,
         justifyContent:'center',
         alignItems:'center'
         
     }
     
    
  });

export default About;