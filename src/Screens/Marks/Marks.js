
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import CustomHeader from '../../components/Header/CustomHeader';

class Marks extends Component{
    render() {
        return (
            <View>
            <CustomHeader 
            title="Marks"
            openDrawer={() => this.props.navigation.openDrawer()}
            iconName="md-checkmark-circle"
        />
            <Text>marks</Text>
            </View>
        );
      }

}
export default Marks;