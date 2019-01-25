import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import StudentTabNavigator from './Navigation/StudentTabNavigator';
import { createStackNavigator } from 'react-navigation';
import StudentDrawerNavigator from './Navigation/StudentDrawerNavigator';
import SubjectDetails from '../../Screens/Subject/SubjectDetails/SubjectDetails';
import Assigment from '../../Screens/Subject/SubjectDetails/Assigments/Assigment';
import StudyMaterial from '../../Screens/Subject/SubjectDetails/StudyMaterial/StudyMaterial';
import Results from '../../Screens/Subject/SubjectDetails/Results/Results';
import Teacher from '../../Screens/Subject/SubjectDetails/Teacher/Teacher';
import Login from '../../authScreen/Login/Login';
 
class Student extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            // <StudentDrawerNavigator />
            <StudentStackNavigator />
            // <View style={styles.container}> 
            //     <Text> Student </Text>s
            //     {/* <StudentTabNavigator /> */}
            //  </View>
         )
     }
}
 
export default Student;

const StudentStackNavigator = createStackNavigator({
    StudentDrawerNavigator:{
        screen:StudentDrawerNavigator 
    },

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

    Teacher:{
        screen:Teacher
    },

    // Login:{
    //     screen:Login
    // }
  
  },
      navigationOptions={
        headerMode:'none'
  })
  


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});