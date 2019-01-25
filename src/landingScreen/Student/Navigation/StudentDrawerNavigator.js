// import React from 'react'
// import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
// import { createDrawerNavigator, DrawerItems } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Right } from 'native-base';
// // import Logout from '../authScreen/Logout/Logout';
// import StudentTabNavigator from './StudentTabNavigator';
// import Profile from '../../../Screens/Profile/Profile'
// import Logout from '../../../authScreen/Logout/Logout';
// import StudentLogout from '../StudentLogout';
// // import Settings from './Settings';  //Tab Nav
// // import Profile from './Profile'; //Stack Nav

// const CustomDrawerComponent = (props)=>(
//   <SafeAreaView>
//       <View style={{height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
//           <Image source={require('../../../Images/user.jpg')} style={{height:120, width:120, borderRadius:60}} />
//       </View>
//       <ScrollView>
//           <DrawerItems {...props} />
//       </ScrollView>
//   </SafeAreaView>
// )


// export default createDrawerNavigator({
//   Home: {
//     screen: StudentTabNavigator, 
//     navigationOptions: {
//       drawerLabel: 'Home',
//       drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
//     }
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       drawerLabel: 'Profile',
//       drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
//     }
//   },

//   Logout:{
//     screen:Logout
//   }

//   // Logout:{
//   //   screen:StudentLogout
//   // }
// },
// {
//   drawerPosition :"right",
//   contentComponent:CustomDrawerComponent

// });  



import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageErrorEventData,Image} from 'react-native';
import { createDrawerNavigator,DrawerItems } from 'react-navigation'
import { Container,Content,Header,Body,Icon } from 'native-base';
import StudentTabNavigator from './StudentTabNavigator';

import Chat from '../../../Screens/Chat/Chat'
// import Logout from '../../../Screens/Logout/Logout'
import Logout from '../../../authScreen/Logout/Logout'
import Exit from '../../../Screens/Exit/Exit'
import Settings from '../../../Screens/Settings/Settings'
import Help from '../../../Screens/Help/Help'
import Share from '../../../Screens/Share/Share'
import About from '../../../Screens/About/About'
import Rate from '../../../Screens/Rate/Rate'
 

class App extends Component {
  render() {
    return (
       <MyDrawer/>
    );
  }
}

const CustomerDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.header}>
      <Body>
        <Image
        style={styles.DrawerImage}
        source={require('../../../images/clz.jpg')}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const MyDrawer =  createDrawerNavigator({
  Home: {
        screen: StudentTabNavigator, 
        navigationOptions: {
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor }) => <Icon name="cog" size={17} />,
        }
      },
  Chat: {
    screen: Chat
  },
  Logout: {
    screen: Logout
  },
  Exit: {
    screen: Exit
  },
  Settings:{
    screen: Settings
  },
  Help:{
    screen: Help
  },
  Share:{
    screen: Share
  },
  About:{
    screen: About
  },
  Rate:{
    screen: Rate
  },

},{
  initialRouteName:'Home',
  contentComponent:CustomerDrawerContentComponent,
  drawerOpenRoute:'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  drawerToggleRoute:'DrawerToggle',
  drawerPosition:'left',
  contentOptions:{
    activeTintColor:'orange'
  }
}
)



const styles = StyleSheet.create({
  DrawerImage: {
     height:150,
     width:150,
     borderRadius:75,

  },
  header:{
    height:200,
    backgroundColor:'#fff',
    //marginLeft:25,
  }
  
});

export default App;
