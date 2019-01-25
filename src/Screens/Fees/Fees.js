import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';
// import Temp from '../../Temp/Temp';
import NoticeCard from '../../components/notice_card/NoticeCard'
 
class Notice extends Component{
    constructor(props){
        super(props);

    } 
    static navigationOptions = ({
        title: "",

    })
     render(){
        return(
            <ScrollView> 
                {/* add custome header */}
                <CustomHeader 
                    title="Notice"
                    openDrawer={() => this.props.navigation.openDrawer()}
                    iconName="md-notifications"

                />
                <NoticeCard />
             </ScrollView>
         )
     }
}
 
export default Notice;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});