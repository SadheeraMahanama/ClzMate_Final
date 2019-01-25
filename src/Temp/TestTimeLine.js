// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import Timeline from 'react-native-timeline-listview'

// export default class Example extends Component {
//   constructor(){
//     super()
//     this.data = [
//       {time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',lineColor:'#009688', icon: require('../Images/user.jpg')},
//       {time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', icon: require('../Images/user.jpg')},
//       {time: '12:00', title: 'Lunch', icon: require('../Images/user.jpg')},
//       {time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ',lineColor:'#009688', icon: require('../Images/user.jpg')},
//       {time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', icon: require('../Images/user.jpg')}
//     ]
//   } 

//   render() {
//     //'rgb(45,156,219)'
//     return (
//       <View style={styles.container}>
//         <Timeline 
//           style={styles.list}
//           data={this.data}
//           circleSize={20}
//           circleColor='rgba(0,0,0,0)'
//           lineColor='rgb(45,156,219)'
//           timeContainerStyle={{minWidth:52, marginTop: -5}}
//           timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
//           descriptionStyle={{color:'gray'}}
//           options={{
//             style:{paddingTop:5}
//           }}
//           innerCircle={'icon'}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
// 		paddingTop:65,
//     backgroundColor:'white'
//   },
//   list: {
//     flex: 1,
//     marginTop:20,
//   },
// });
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Timeline from 'react-native-timeline-listview'

export default class Example extends Component {
  constructor(){
    super()
    this.data = [
              {time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',lineColor:'#009688', icon: require('../images/user.png')},
              {time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', icon: require('../images/user.png')},
              {time: '12:00', title: 'Lunch', icon: require('../images/user.png')},
              {time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ',lineColor:'#009688', icon: require('../images/user.png')},
              {time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', icon: require('../images/user.png')}
            ]
  } 

  render() {
    //'rgb(45,156,219)'
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
		paddingTop:65,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
});