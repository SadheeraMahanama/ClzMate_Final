import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import IconIonic from 'react-native-vector-icons/Ionicons';
import Subject from '../../../Screens/Subject/Subject';
import Fees from '../../../Screens/Fees/Fees';
import Attendence from '../../../Screens/Attendence/Attendence';
import Marks from '../../../Screens/Marks/Marks'
import colors from '../../../styles/colors';

const TabNavigation = createMaterialTopTabNavigator({
    Subject:{
        screen:Subject,
        navigationOptions: {
            tabBarLabel: "Schedule",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="md-book"
                    size={30}
                    color={tintColor} />
            )
        }
    },

    Fees:{
        screen:Fees,
        navigationOptions: {
            tabBarLabel: "Fees",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="logo-usd"
                    size={30}
                    color={tintColor} />
            )
        }
    },

    Attendence:{
        screen:Attendence,
        navigationOptions: {
            tabBarLabel: "Attendance",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="md-hand"
                    size={30}
                    color={tintColor} />
            )
        }
    },
    Marks:{
        screen:Marks,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <IconIonic
                    name="md-checkmark-circle-outline"
                    size={30}
                    color={tintColor} />
            )
        }
    }

},{
    tabBarPosition:'bottom',
    // initialRouteName:'Notice',
    animationEnabled:true,
    tabBarOptions: {
        activeBackgroundColor:'red',
        //activeTintColor:'red',
        //inactiveBackgroundColor:'green',
        //inactiveTintColor:'red',
        showIcon:true,
        labelStyle: {
          fontSize: 10,
          padding:3,
          //pressOpacity:'red',
          //pressColor:'black'
        },
        // tabStyle: {
        //   width: 100,
        // },
        style: {
          backgroundColor: colors.greenPrimary,
          height:60,

        },
      }
});

export default createStackNavigator({ TabNavigation }, {headerMode:"none"});