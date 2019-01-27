import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    AsyncStorage
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StackActions, NavigationActions } from 'react-navigation';
 
class Logout extends Component{ 

    constructor(props){
        super(props);
        this.getToken();
        this.getDecision();
      }
      state={
        decision:'',
        token:""
      };

    handletoken=(text)=>{
      this.setState({token:text});
      console.log("In handletoken Function : "+this.state.token+" ********** ")

    }

    getDecision(){
        Alert.alert(
            'Logout comfirmation',
            'do you want to logout?',
            [
            // {text:'Yes', onPress:()=>this.requestlogout()},
            {text:'Yes', onPress:()=>this.datahandler()},

            // {text:'No', onPress:()=>this.props.navigation.pop()}
            {text:'No', onPress:()=>this.props.navigation.goBack()}

            ],
            { cancelable: false}
        )
    }

    async getToken(){
        try{
          let thistoken=await AsyncStorage.getItem("token");
          console.log("In Logout Function : "+thistoken+" ********** ")
         // let token=JSON.stringify(thistoken)

          //alert(a)
          if(thistoken!=null){
            this.handletoken(thistoken);
          }else{
            this.props.navigation.Login();             
          }
        }catch(error){
          alert(error);
          this.props.navigation.Login();          
        }
      }

    // requestlogout(){
    //     var tkn=this.state.token;
    //     console.log('requestlogout');
    //     console.log('Token '+tkn);
    //     fetch('https://ems.aladinlabs.com/api/auth/logout', {
    //         method: 'GET',
    //         headers: {
    //           "Authorization": 'Bearer '+ tkn,
    //           'Content-Type': 'XMLHttpRequest'
    //         }
            
    //     })
      
    //   .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.datahandler(responseJson)
    //            })
    //         // .then((res) => {
    //         //     console.log("############ "+res+" ########### ")
    //         //     if (res.state === true) {
    //         //       this.removeToken()
                  
    //         //     } else {
    //         //         alert(res.msg)
    //         //     }
    //         // })
    //         .done();
    // }

    datahandler(){
        console.log('Data Handler');
        // console.log(data);
        // console.log(data.message);
        // if(data.message == 'Successfully logged out'){
            this.removeToken();
        // }else{
            // alert(data.message)
        // }

           
    }
    async removeToken(){
            try{
                let thistoken=await AsyncStorage.removeItem("token");
                // await AsyncStorage.removeItem("token");
                // let thtoken=await AsyncStorage.getItem("token");
                console.log("In remove Token Function : "+thistoken+" ********** ")
                alert("You are sucessfuly loggedout");
                // this.props.navigation.navigate('AppStackNavigator',{},NavigationActions.navigate({ routeName: 'Login' }));
                // this.props.navigation.navigate('Login');
                console.log("before nav");
                this.props.navigation.navigate("Login");
                // this.props.navigator.immediatelyResetStack([Router.getRoute('AppStackNavigator')], 0);
                // {() => this.props.navigation.navigate("Notice")};

                // this.props.navigation.goBack();
                // this.props.navigation.goBack();


                // const resetAction = StackActions.reset({
                //     index: 0,
                //     actions: [NavigationActions.navigate({ routeName: 'TabNavigation' })],
                //   });
                //   this.props.navigation.dispatch(resetAction);

                // this.props.navigation.dispatch(StackActions.popToTop());
                console.log("after nav");
                //alert(a) 
            }catch(error){
                alert("token get error HHHH");
                this.props.navigation.pop();
            }
      }

     render(){
        return(
            <View style={styles.container}> 
                <Text></Text>
             </View>
         )
     }
}
 
export default Logout;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});