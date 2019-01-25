import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import CustomHeader from '../../../../components/Header/CustomHeader';
 
class Assigment extends Component{
constructor(props){
    super(props);
 
} 
     render(){
        return(
            <ScrollView> 
            {/* <Text> Teacher </Text> */}
            <CustomHeader 
                title="Assigments"
                leftPress={() => this.props.navigation.goBack()}
                iconNameRight="md-git-network"
                iconName="arrow-round-back"
                type="sub"
            />
         </ScrollView>
         )
     }
}
 
export default Assigment;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});