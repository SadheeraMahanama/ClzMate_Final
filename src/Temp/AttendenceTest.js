//AttendenceTest
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {CalendarList} from 'react-native-calendars';

// const data = [
//         {
//             date:'2018-12-06',
//             present:true
//         },

//         {
//             date:'2018-12-11',
//             present:false
//         },

//         {
//             date:'2018-12-17',
//             present:false
//         },

//         {
//             date:'2018-12-31',
//             present:true
//         }
//     ];

var presentDates =[
       {
           date:'2018-12-01',
           status:true
       },
       {
           date:'2018-12-05',
           status:true
       },

       {
           date:'2018-12-08',
           status:true
       },

       {
           date:'2018-12-07',
           status:true
       },

       {
           date:'2018-12-18',
           status:false
       },

       {
           date:'2018-12-17',
           status:true
       },

       {
           date:'2018-12-28',
           status:false
       },

       {
           date:'2018-12-29',
           status:false
       }

    ];

    var absentdates =[
        '2018-12-02',
        '2018-12-06',
        '2018-12-10',  
        '2018-12-09',
        '2018-12-16',
        '2018-12-19',
        '2018-12-25',
        '2018-12-27'
     ];

   const mark = {
    [presentDates]: {selected: true, markedPresent: true}
   };


 
class AttendenceTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            markedPresent:null,
            markedAbsent: null,
            // data:'jj'
        };
    // this.onDayPress = this.onDayPress.bind(this);
    }
    componentDidMount() {
        this.markedPresent();
        this.markedAbsent();
        // this.setState({
        //     data: presentDates
        // })
    } 

    // call function after you successfully get value in nextDay array

    markedPresent = () => {
        var obj = presentDates.reduce((c, v) => Object.assign(c, {
            [v.date]: {
                selected: true,
                marked: true, 
                customStyles: {
                    container: {
                        // if([v.status]){
                            backgroundColor: 'green',
                        // }
                    },

                    text:{ 
                        color: "white" ,
                        fontWeight: 'bold'
                    }
                }
                }
            }), 
            {

            });
        this.setState({ markedPresent : obj});

        // console.log(this.state.data)
    }


    markedAbsent = () => {
        var obj = absentdates.reduce((c, v) => Object.assign(c, {
            [v]: {selected: true,
                marked: true, 
                customStyles: {
                    container: {
                        backgroundColor:  'red',
                    },

                    text:{ 
                        color: "white" ,
                        fontWeight: 'bold'
                    }
                }
                }
            }), 
            {

            });
        this.setState({ markedAbsent : obj});
    }
     render(){
        return(
            <View /*style={styles.container}*/> 
                <CalendarList 
                    current={'2018-12-04'} 
                    pastScrollRange={24} 
                    futureScrollRange={24} 
                    // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
                    markingType={'custom'}
                    data={presentDates}
                    markedDates={
                        this.state.markedPresent
                        // this.state.markedAbsent
                    }
                    // markedDates={this.state.markedAbsent}
                    // markedDates={{
                    //     '2018-12-28': {
                    //         customStyles: {
                    //             container: {
                    //                 backgroundColor: 'green',
                    //             },
                    //             text: {
                    //                 color: 'white',
                    //                 fontWeight: 'bold'
                    //             },
                    //         },
                    //     },

                    //     '2018-12-29': {
                    //         customStyles: {
                    //             container: {
                    //                 backgroundColor: 'red',
                    //             },
                    //             text: {
                    //                 color: 'white',
                    //                 fontWeight: 'bold'
                    //             },
                    //         }
                    //     },                   
                    // }}
                />
             </View>
            

         )
     }
}
 
export default AttendenceTest;


const styles = StyleSheet.create({
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      borderBottomWidth: 1,
      borderColor: '#eee',
      height: 350
    },
    text: {
      textAlign: 'center',
      borderColor: '#bbb',
      padding: 10,
      backgroundColor: '#eee'
    },
    container: {
      flex: 1,
      backgroundColor: 'gray'
    }
  });