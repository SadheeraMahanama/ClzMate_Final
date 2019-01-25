import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import CustomHeader from '../../../components/Header/CustomHeader';
 
class SubjectDetails extends Component{
    constructor(props){
        super(props);

    } 
     render(){
        return(
            <ScrollView> 
                <CustomHeader 
                    title="My Subject"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"

                />
                <Text> ShowSubjectDetails </Text>
                <View style={styles.row1}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Teacher')}>
                        <Text>Teacher</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Results')}>
                        <Text>Result</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row2}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('StudyMaterial')}>
                        <Text>StudyMaterial</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Assigment')}>
                        <Text>Assigment</Text>
                    </TouchableOpacity>
                </View>
             </ScrollView> 
         )
     }
} 
 
export default SubjectDetails;


 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
    },

    row1:{
        flexDirection:'row'
    },

    row2:{
        flexDirection:'row'
    }
});