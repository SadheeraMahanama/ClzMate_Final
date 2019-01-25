import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader'
import AttendenceCalendar from '../../components/attendence/AttendenceCalendar';
import AttendenceTest from '../../Temp/AttendenceTest';
import NoticeCard from '../../components/notice_card/NoticeCard';
 
class Attendence extends Component{
    constructor(props){
        super(props);
    } 
    static navigationOptions = ({
        title: "",

    })
     render(){
        return(
                <View>
                {/* add custome header */}
                <CustomHeader 
                    title="Attendence"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-checkmark-circle"
                />
                <AttendenceCalendar />
                </View>
         )
     }
}
 
export default Attendence;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});