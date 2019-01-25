import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import CustomHeader from '../../../../components/Header/CustomHeader';
import colors from '../../../../styles/colors';
 
class Results extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <ScrollView> 
                {/* <Text> Teacher </Text> */}
                <CustomHeader 
                    title="My Results"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />

                <View style={styles.subjectNameContainer}>
                    <Text style={styles.subjectName}>Combine Maths</Text>
                </View>

                <View style={styles.marksColumn}>
                    <View style={styles.marksLabel}>
                        <Text style={styles.marksText}>Marks</Text>
                    </View>
                    <View style={styles.leftMarks}>
                        <Text style={styles.marksText}>78</Text>
                    </View>
                </View>

                <View style={styles.marksColumn}>
                    <View style={styles.marksLabel}>
                        <Text style={styles.marksText}>Higest Marks</Text>
                    </View>
                    <View style={styles.leftMarks}>
                        <Text style={styles.marksText}>95</Text>
                    </View>
                </View>

             </ScrollView>
         )
     }
}
 
export default Results;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    subjectName:{
        fontSize:30,
        fontWeight:'400',
        color:colors.subjectName
    },

    subjectNameContainer:{
        alignItems:'center'
    },

    marksColumn:{
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        marginTop:40,
    },

    leftMarks:{
        flex:1,
        alignItems:'flex-end'
    },

    marksLabel:{
        fontSize:25
    },

    marksText:{
        fontSize:25
        
    }
});