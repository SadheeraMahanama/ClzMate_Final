import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from "react-navigation";
import Splash from './src/Screens/Splash/Splash'
import Login from './src/authScreen/Login/Login';
import Student from './src/landingScreen/Student/Student';
//import Parent from './src/landingScreen/Parent/Parent';
import StudentTabNavigator from './src/landingScreen/Student/Navigation/StudentTabNavigator';
//import ParentTabNavigator from './src/landingScreen/Parent/Navigation/ParentTabNavigator';
import StudentDrawerNavigation from './src/landingScreen/Student/Navigation/StudentDrawerNavigator';
//import ParentDrawerNavigator from './src/landingScreen/Parent/Navigation/ParentDrawerNavigator';
import Temp from './src/Temp/Temp';
import AttendenceTest from './src/Temp/AttendenceTest';
import ForgotPassword from './src/authScreen/ForgotPassword/ForgotPassword';
import SubjectList from './src/components/subjectList/SubjectList';
import SubjectDetails from './src/Screens/Subject/SubjectDetails/SubjectDetails';
// import Teacher from './src/Screens/Subject/SubjectDetails/Teacher/Teacher';
// import TestTeacher from './src/Screens/Subject/SubjectDetails/Teacher/TestTeacher';
import Results from './src/Screens/Subject/SubjectDetails/Results/Results';
import StudyMaterial from './src/Screens/Subject/SubjectDetails/StudyMaterial/StudyMaterial';
import TestTimeLine from './src/Temp/TestTimeLine';
import Assigment from './src/Screens/Subject/SubjectDetails/Assigments/Assigment';
import Chat from './src/Screens/Chat/Chat';
export default class App extends Component{
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
// const AppStackNavigator = StackNavigator({

  // Test:{
  //   screen:TestTimeLine
  // },
  // StudyMaterial:{
  //   screen:StudyMaterial
  // },
  // Results:{
  //   screen:Results
  // },
  // TestTeacher:{
  //   screen:TestTeacher
  // },
  // Teacher:{
  //   screen:Teacher
  // },

  // Parent:{
  //   screen:Parent
  // },
  // Student:{
  //   screen:Student
  // },
  // SubjectDetails:{
  //   screen:SubjectDetails
  // },
 
  // SubjectList:{
  //   screen:SubjectList
  // },

  // Temp:{
  //   screen:Temp
  // },
  // AttendenceTest:{
  //   screen:AttendenceTest
  // },

  // ParentTabNavigator:{
  //   screen:ParentDrawerNavigator
  // },

  // StudentTabNavigator:{
  //   screen:StudentDrawerNavigation
  // },
  // ,
  // Splash:{
  //   screen:Splash
  // },
  Login:{
    screen:Login
  },

  // Student:{
  //   screen: Student
  // },

  // Parent:{
  //   screen:Parent
  // },

  StudentDrawerNavigation:{
    screen:StudentDrawerNavigation
  },

  // ParentDrawerNavigator:{
  //   screen:ParentDrawerNavigator
  // },

  SubjectDetails:{ 
    screen:SubjectDetails
  },

  Assigment:{
      screen:Assigment
  },

  StudyMaterial:{
      screen:StudyMaterial
  },

  Results:{
      screen:Results
  },

  chat:{
    screen:Chat
  }

  // Teacher:{
  //     screen:Teacher
  // },

},
    navigationOptions={
      headerMode:'none'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
