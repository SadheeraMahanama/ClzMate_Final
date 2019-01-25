//Test Notice Card
import React, { Component } from 'react';
import { View, Text, Image, Platform, StatusBar,FlatList, StyleSheet } from 'react-native';
import CompleteFlatList from 'react-native-complete-flatlist';
import { Card, ListItem, Button, Icon,Divider } from 'react-native-elements'
import colors from '../styles/colors';


const data = [
  { 
      title: 'React Native FlatList', 
      notice: 'data.cleanData will be not null if search bar is not empty. caution, data without search is not same like data with search due to implement the highlight component. data.cleanData is equal to data.data.cleanData will be not null if search bar is not empty. caution, data without search is not same like data with search due to implement the highlight component. data.cleanData is equal to data', time: '8:10 PM', date: '1 Jan 2018' },
 
      { 
          title: 'Competitive programming', 
          notice: 'Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications. Contestants are referred to as sport programmers. Wikipedia', 
          time: '9:14 PM', 
          date: '1 Dec 2018' },
 
      { 
          title: 'Exam', 
          notice: 'Every year, two million people take international exams with help from the British Council. Students and professionals gain qualifications that can open doors at leading academic institutions and improve their employment prospects around the world.', 
          time: '8:15 PM', 
          date: '1 Jan 2018' },
 
      { 
          title: 'Assignment', 
          notice: 'An assignment is a legal term used in the context of the law of contract and of property. In both instances, assignment is the process whereby a person, the assignor, transfers rights or benefits to another, the assignee. Wikipedia', 
          time: '8:10 PM', 
          date: '1 Jan 2018' },
  
      { 
          title: 'Postponde', 
          notice: 'This word (Postponde) may be misspelled. Below you can find the suggested words which we believe are the correct spellings for what you were searching for. If you click on the links, you can find more information about these words.', 
          time: '8:10 PM', 
          date: '1 Jan 2018' },
 
      { 
          title: 'Fattah', 
          notice: 'Active', 
          time: '8:10 PM', 
          date: '1 Jan 2018' },
 
      { 
          title: 'Fattah', 
          notice: 'Active', 
          time: '8:10 PM', 
          date: '1 Jan 2018' },
 
      { 
          title: 'Fattah', 
          notice: 'Active', 
          time: '8:10 PM', 
          date: '1 Jan 2018' },
 
      { 
          title: 'Fattah', 
          notice: 'Active', 
          time: '8:10 PM', 
          date: '1 Jan 2018' },
 
      { 
          title: 'Fattah', 
          notice: 'Active', 
          time: '8:10 PM', 
          date: '1 Jan 2018' },
 
      { 
          title: 'Fattah', 
          notice: 'Active', 
          time: '8:10 PM', 
          date: '1 Jan 2018' },
  
      { 
          title: 'Fattah', 
          notice: 'Active', 
          time: '8:10 PM', 
          date: '1 Jan 2018' },
 
      { 
          title: 'Fattah', 
          notice: 'Active', 
          time: '8:10 PM', 
          date: '1 Jan 2018' },
 
      { 
          title: 'Fattah', 
          notice: 'Active', 
          time: '8:10 PM', 
          date: '1 Jan 2018' },
  {
    title: 'Muhyiddeen',
    notice: 'Blocked',
    time: '10:10 PM',
    date: '9 Feb 2018',
  },
];

class Temp extends Component {
  cell = (data,index) => {
    const item = data.cleanData ? data.cleanData : data

    console.log(data.cleanData)
    console.log('data.cleanData will be not null if search bar is not empty. caution, data without search is not same like data with search due to implement the highlight component. data.cleanData is equal to data')

    console.log('this is index number : '+index)

    console.log(item+' this is original data')

    return (
    <View style={styles.cardContainter}>
        <View style={styles.card}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>{data.title}</Text>
                </View>
                {/* <Divider style={{ height: 1,backgroundColor: 'red' }} /> */}
           <View style={styles.noticeContainer}>
                <Text>{data.notice}</Text>
           </View>

           <View style={styles.dateContainer}>
               <Text style={styles.date}>{data.date}</Text>
           </View>
        </View>
    </View>

    )
  }

  render() {
    const { navigation } = this.props;
    return (
      <CompleteFlatList
      searchKey={['title', 'notice', 'time', 'date', 'Card']}
      highlightColor="yellow"
      pullToRefreshCallback={() => {
        alert('refreshing');
      }}
      data={data}
    //   renderSeparator={null}
      renderItem={this.cell}
    />
    );
  }
}


export default Temp;

const styles = StyleSheet.create({
    cardContainter:{
        flex:1,
        paddingBottom: 50,
        paddingLeft:15,
        paddingRight:15,

    },
    card:{
        flex:1,
        paddingTop: 50,
        paddingBottom: 50,
        borderColor:colors.notice_border,
        borderWidth: 1,
        paddingLeft:15,
        paddingRight:15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:40

    },

    headerContainer:{        
        borderBottomColor:'red'
    },

    header:{
        fontSize:20,
        paddingBottom: 10,

    },

    noticeContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
        paddingBottom:12
    },

    dateContainer:{
        // flex:1,
        // flexDirection:'column'
        // alignItems: 'flex-end'
        // flexDirection: 'row', 
        // justifyContent: 'flex-end'
    },
    date:{
        // textAlign: 'right',
        // alignSelf: 'flex-end',
        // marginLeft: 'auto'
        // position: 'absolute', 
        // right: 0
        justifyContent: 'flex-end'
    }
})
