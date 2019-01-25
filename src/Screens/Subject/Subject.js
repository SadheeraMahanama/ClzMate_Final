import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CustomHeader from '../../components/Header/CustomHeader';
import SubjectList from '../../components/subjectList/SubjectList';
import SubjectDetails from './SubjectDetails/SubjectDetails';
 
class Subject extends Component{
    static navigationOptions = ({
        title: "",

    }) 
     render(){
        return(
            <ScrollView> 
                {/* add custome header */}
                <CustomHeader 
                    title="My Classes"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="menu"

                />
                {/* <AppStackNavigator /> */}
                <SubjectList />
                {/* <Text>Subject</Text> */}
             </ScrollView>
         )
     }
}
  
export default Subject;
const AppStackNavigator = createStackNavigator({
    SubjectList:{
      screen:SubjectList
    },

    SubjectDetails:{
        screen: SubjectDetails
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:25
        },
});