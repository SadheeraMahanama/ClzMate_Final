// import React, { Component } from 'react'
// import {
//     Platform,
    
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   ImageBackground,
//   Modal,
//   ActivityIndicator,
//   Animated,
//   Dimensions,
// } from 'react-native'
 
// const {width,height} = Dimensions.get('window');
 

//   class Splash extends Component {
//     static navigationOptions={
//       header:null
//     }
//     constructor(props) {
//         super(props);
//     }

//     load = () => {
//         this.props.navigation.navigate('Login');
//     } 
//     anim = new Animated.Value(0);

//     componentDidMount() {
//         setTimeout(() => { this.load() }, 3000);
//         Animated.timing(this.anim, {
//             toValue: 1,
//             duration: 2000
//         }).start();
//     }
   
    
   
//   render() {
//       const translateY =this.anim.interpolate({
//           inputRange:[0,1],
//           outputRange:[-(height*2),0]
//       });
//       const translateX =this.anim.interpolate({
//         inputRange:[0,1],
//         outputRange:[-(height*2),0]
//     });
//     return (
//       <View style={styles.container}>
//         <Animated.View style={[styles.circle, {transform:[{translateX},{translateY }]}]}/>
//     </View>   
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor:'#F4FF81', 
//     justifyContent:'center',
//     alignItems:'center',
//   },
   
//   circle:{
//       width:height*2,
//       height:height*2,
//       borderRadius: height,
//       backgroundColor: '#81D4FA',
//   }
   
  
// })  ;
// export default Splash;


import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Modal,
  ActivityIndicator,
  Animated,
  Dimensions,
} from 'react-native'

class Splash extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.text1}>ClzMate</Text>
        </View>
        <View>
          <Text style={styles.text2}>Powered by React Native</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#4a148c', 
      justifyContent:'center',
      alignItems:'center',
    },
    text1:{
      color:'white',
      fontSize:70,
      fontWeight:'bold'
    },
    text2:{
      color:'white',
      fontSize:20,
      fontWeight:'200',
      paddingBottom:20
    },
    textWrapper:{
      flex:1,
      justifyContent:'center'
    }
     
    
    
  })  ;
  export default Splash;