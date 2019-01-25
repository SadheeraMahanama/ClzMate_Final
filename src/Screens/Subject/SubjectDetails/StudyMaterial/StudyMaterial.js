import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import CustomHeader from '../../../../components/Header/CustomHeader';
import Timeline from 'react-native-timeline-listview';

class StudyMaterial extends Component{ 
    constructor(props){
        super(props);
        this.data = [
            {time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',lineColor:'#009688', icon: require('../../../../images/user.png')},
            {time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', icon: require('../../../../images/user.png')},
            {time: '12:00', title: 'Lunch', icon: require('../../../../images/user.png')},
            {time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ',lineColor:'#009688', icon: require('../../../../images/user.png')},
            {time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', icon: require('../../../../images/user.png')}
          ]

    } 
     render(){
        return(
            <ScrollView> 
                {/* <Text> Teacher </Text> */}
                <CustomHeader 
                    title="Study Materials"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />

            <Timeline 
                    style={styles.list}
                    data={this.data}
                    circleSize={20}
                    circleColor='rgb(45,156,219)'
                    lineColor='rgb(45,156,219)'
                    timeContainerStyle={{minWidth:52, marginTop: -5}}
                    timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
                    descriptionStyle={{color:'gray'}}
                    options={{
                        style:{paddingTop:5}
                    }}
                    innerCircle={'dot'}
            />
             </ScrollView>
         )
     }
}
 
export default StudyMaterial;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});