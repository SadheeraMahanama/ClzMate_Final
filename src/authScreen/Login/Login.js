// import React, { Component } from 'react';
// import {View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     KeyboardAvoidingView,
//     ScrollView,
//     AsyncStorage
// } from 'react-native';
// import colors from '../../styles/colors';
// import InputField from '../../components/form/InputField';
// import NextArrorButton from '../../components/button/NextArrorButton'
 
// class Login extends Component{
//     constructor(props){
//         super(props);

//         this.state={
//             // formValid:false,
//             formValid:true,
//             validEmail:false,
//             // validEmail:true,
//             emailAddress:'',
//             password:'',
//             validPassword:false,
//             // validPassword:true,
//             loadingVisible:false
//         }
//         this.handleCloseNotification=this.handleCloseNotification.bind(this);
//         this.handleEmailChange=this.handleEmailChange.bind(this);
//         this.handleNextButton=this.handleNextButton.bind(this);
//         this.handlePasswordChange=this.handlePasswordChange.bind(this);
//         this.toggleNextButtonState= this.toggleNextButtonState.bind(this);
//         this.datahandler=this.datahandler.bind(this);

//     } 
//     //handle login
//     handleNextButton(){
//         // alert(this.state.emailAddress)
//         console.log(this.state.emailAddress)
//         console.log('Login');
      
//       url = 'https://ems.aladinlabs.com/api/auth/login';
//       console.log(url);
      
//     // try {
//         fetch(url,{
            
//          method:'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Requested-With': 'XMLHttpRequest'
//         },
//         body:JSON.stringify({
//         //   email : this.state.emailAddress,
//         //   password : this.state.password,
//         //   remember_me : true
//             // email : "bhanuka2017@gmail.com",
//             // password : "abc123",
//             // remember_me : true
//             email : "student@ems.com",
//             password : "abc123",
//             remember_me : true,
//             // email : "student@ems.com",
//             // password : "123456",
//             // remember_me : true
//             // email : "parent@ems.com",
//             // password : "abc123",
//             // remember_me : true
//             // email : this.state.emailAddress,
//             // password : this.state.password,
//             // remember_me : true
//         })
//       })
//     //   .then((response)=> console.log(response)) 
//       .then((response) => response.json())
//       .then((responseJson) => {
//             this.datahandler(responseJson)
//            })
//       // .done();
//     // } 
//     // .catch ((error) => {
//     //     alert('No network Connection Found '+error);
//     // });
        
//     }

//     datahandler(data){
//         console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");

//         console.log(data);
//         console.log(data.message);
        
//         console.log(data.expires_at);
//         console.log(data.access_token);
//         if(data.message === 'Unauthorized'){
//             console.log('Check ur username n email bcoz Unauthorized')
//             alert("Check ur username n email bcoz Unauthorized")
//             return
//         }
//         // alert("******** "+data.access_token);
//         const token=data.access_token;
    
//         this.setToken(token);
//         let user=data.user; 
//         console.log(user);
//         let roles=data.user.roles;  
//         let len=data.user.roles.length;         
//         console.log(roles);
//         console.log(len);    
//         // this.get_user_details(token);
//         for(let i=0; i<len;i++){
//             console.log(roles[i].name)
//             if(roles[i].name ==="Student"){
//                 console.log("Hi i am "+roles[i].name);
//                 // this.props.navigation.navigate('Student');
//                 this.props.navigation.navigate('StudentDrawerNavigation');
//                 break;
//             }
//             else if(roles[i].name === "Parent"){
//                 console.log("Hi i am "+roles[i].name);
//                 // this.props.navigation.navigate('Parent');
//                 this.props.navigation.navigate('ParentDrawerNavigator');
//                 break;
//             }
//             // else{
//             //     alert("Check your email and password")
//             // }

//         }
//     }

//     async setToken(mytoken){
//         // console.log(" ****** "+mytoken)
//         try{
//           await AsyncStorage.setItem("token",mytoken);
//           alert('Token saves asyn');
//           // this.getToken();
//         }catch(error){
//           alert("token store error");
//         }
//       }

//     handleCloseNotification(){
//         // alert("Closing Notification")
//         this.setState({ formValid : true})
//     }

//     handleEmailChange(email){
//         const emailCheckRegex=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//         this.setState({ emailAddress:email});

//         if(!this.state.validEmail){
//             if(emailCheckRegex.test(email)){
//                 this.setState({ validEmail : true })
//             }else{
//                 if(!emailCheckRegex.test(email)){
//                     this.setState({ validEmail : false })
//                 }
//             }
//         }
//     }

//     handlePasswordChange(password){
//         this.setState({ password });
        
//         if(!this.state.validPassword){
//             if(password.length >= 6 ){
//                 //Password has to be at least 6 character long
//                 this.setState({ validPassword: true})
//             }else if(password < 6){
//                 this.setState({ validPassword: false});
//             }
//         }
//     }

//     toggleNextButtonState(){
//         const { validEmail, validPassword }=this.state;
//         if(validEmail && validPassword ){
//             return false;
//         }
//         return true;
//     }
//      render(){
//         const { formValid, loadingVisible, validEmail, validPassword }=this.state;
//         const showNotification=formValid? false:true;
//         const background=formValid?colors.green01:colors.darkOrange;
//         const notificationMarginTop= showNotification ? 10:0;
//         // console.log(this.props.loggedInStatus);
//         return(
//             <KeyboardAvoidingView
//                 style={styles.wrapper}
//             >
//                 <View style={styles.scrollWrapper}>
//                     <ScrollView style={styles.scrollView}>
//                         <Text style={styles.loginHeader}>Log In</Text>

//                         <InputField 
//                             labelText="EMAIL ADDRESS"
//                             labelTextSize={14}
//                             labelColor='#ffffff'
//                             textColor='#ffffff'
//                             borderBottomColor="#ffffff"
//                             inputType="email"
//                             customStyle={{marginBottom:30}}
//                             onChangeText={this.handleEmailChange}
//                             showCheckmark={validEmail}
//                             autoFocus={true}
//                         />

//                         <InputField 
//                             labelText="PASSWORD"
//                             labelTextSize={14}
//                             labelColor='#ffffff'
//                             textColor='#ffffff'
//                             borderBottomColor="#ffffff"
//                             inputType="password"
//                             customStyle={{marginBottom:30}}
//                             onChangeText={this.handlePasswordChange}
//                             showCheckmark={validPassword}

//                         />

//                         <View>
//                             <NextArrorButton 

//                                 handleNextButton={this.handleNextButton}
//                                 // disabled={this.toggleNextButtonState()}
//                             />
//                         </View>
                        
//                     </ScrollView>
//                 </View>
//             </KeyboardAvoidingView>
//          )
//      }
// }

// export default Login;


// const styles = StyleSheet.create({
//     wrapper:{
//         display:'flex',
//         flex:1,
//         backgroundColor:colors.green01,

//     },
//     scrollViewWrapper:{
//         marginTop:70,
//         flex:1,
//     },
//     scrollView:{
//         paddingLeft:30,
//         paddingRight:30,
//         paddingTop:20,
//         // flex:1
//     },
//     loginHeader:{
//         fontSize:30,
//         color:colors.white,
//         fontWeight:'600',
//         marginBottom:40,
//     },
//     // nextButton:{
//     //     // position:'absolute',
//     //     alignItems:'flex-end',
//     //     right:20,
//     //     bottom:10
//     // },
//     // notificationWrapper:{
//     //     position:'absolute',
//     //     bottom:0,
//     //     // zIndex:9
//     //     zIndex:999
//     // }
// });


import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  AsyncStorage,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Button,
  
} from 'react-native'; 
import JwtDecode from 'jwt-decode';

 
import bgImage from '../../images/bg.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
  
  const{width:WIDTH}= Dimensions.get('window')

   
  class  Login extends Component {
    static navigationOptions={
        header:null
      }
       
      constructor(props){
          super(props);
          this.state={
               email :'',
               //validated: false ,
               password:'',
               showPass : true,
               press : false,
  
          }
      };

      showPass = () => {
          if(this.state.press == false){
             this.setState({ showPass : false, press : true})
          }else{
            this.setState({ showPass : true, press : false})
          }

      }
       
      login = () => {
        fetch('https://clzmate.herokuapp.com/user/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                // email: this.state.email,
                // password: this.state.password,
                email: "janitha@gmail.com",
                password: "password",
            })
        })

            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                this.dataHandler(res);
              

                if (res.state === true) {
                    alert('Successfully Loged in');
                    // AsyncStorage.setItem('token',res.JWT_Token);
                    var decoded=JwtDecode(res.JWT_Token);
                    var user_id=decoded.user._id;
                    this.setUserId(user_id);
                    // AsyncStorage.setItem('user_Id',user_id);

                     console.log("#######");
                    
                    this.props.navigation.navigate('StudentDrawerNavigation');
                } else {
                    alert('no response from backend')
                }
            })
            .done();
    }

    dataHandler(res){
        console.log(res);
        console.log("********* in datahadler in login");
        let token=res.JWT_Token;
        console.log("JWT_Token : "+token);

        this.setToken(token);


    }

    async setToken(mytoken){
                console.log(" ****** "+mytoken)
                try{
                  await AsyncStorage.setItem("token",mytoken);
                  alert('Token saves asyn');
                  // this.getToken();
                }catch(error){
                  alert("token store error");
                }
    }

    async setUserId(user_Id){
        console.log(" ****** "+user_Id)
        try{
          await AsyncStorage.setItem("user_Id",user_Id);
          alert('user_Id saves asyn');
          // this.getToken();
        }catch(error){
          alert("token store error");
        }
}
        

    

    nextForgot=()=>{
        console.log("Press forgotPassword")
        this.props.navigation.navigate('ForgotPassword');
    }
 
    




  render() {
    return (
        

        
                
               <ImageBackground style={styles.container} source={bgImage}>
               
               <View style={styles.loginContainer}> 
 
                    <Text style={styles.logoText}>ClzMate</Text>
                    
                </View>
                <View style={styles.threeContainer}>
                    <View style={styles.inputContainer}>

                  <Icon name= {'ios-mail'}
                    size = {28}
                    
                    color=  {'rgba(0,0,0,0.8)'}
                    style={styles.inputIcon}
                  /> 
                <TextInput    autoCapitalize="none" autoCorrect={false}   
                    value={this.setState.email}
    
                    placeholder='Email'
                   // placeholderTextColor= {'rgba(255,255,255,0.9)'}
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(email) => this.setState({email})}
                   // keyboardType = "email_address"
                    />
                   
                </View>

                <View style={styles.inputContainer}> 
                <Icon name= {'ios-unlock'}
                    size = {28}
                    color=  {'rgba(0,0,0,0.8)'}
                    style={styles.inputIcon}
                  /> 
                <TextInput 
                    placeholder='Password'
                    //placeholderTextColor='#292929'
                    secureTextEntry={this.state.showPass} 
                    //secureTextEntry={true}
                    style={styles.textInput}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(password) => this.setState({password})}/>
                   
            <TouchableOpacity style={styles.btnEye} 
             onPress={this.showPass.bind(this)}>
             <Icon 
            name= {this.state.press == false ? 'ios-eye-off' : 'ios-eye'}
            size = {26} 
            color=  {'rgba(0,0,0,0.8)'}
             />
            </TouchableOpacity>
        </View>
                <TouchableOpacity onPress ={this.login.bind(this)}
                style={styles.button}> 
                <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>

                 
                 <TouchableOpacity onPress={this.nextForgot}> 
                <Text style={styles.pwtxt}>Forgot password?</Text>
                </TouchableOpacity>

                {/* <Text style= {styles.pwtxt}>Forgot password?</Text> */}
                </View>
                 
                 
         
                 </ImageBackground>
                
      
    );
  }
}

const styles = StyleSheet.create({
   wrapper:{
       flex:1 
   },
   container:{
       flex:1,
       width:null,
       height:null,
       justifyContent:'center',
       alignItems:'stretch'
   },
   header:{
        
        
       fontSize: 38,
       color:'black',
       fontWeight:'bold'

   },
    logoText:{
    fontSize: 60,
    color:'black',
    fontWeight:'bold',
    marginBottom :  50,
    //opacity:0.5

},
   loginContainer:{
       alignItems:'center',
       paddingLeft:20,
       paddingRight:20

   },
   textInput:{
        
       paddingLeft:65,
       backgroundColor:'rgba(0,0,0,0.35)',
       //color:'rgba(255,255,255,0.7)',
       marginHorizontal : 25,
       marginBottom: 10,
       borderRadius : 35,
       width:  WIDTH - 55,
       height : 55,
       fontSize:20,
       color : 'white'
       
   },
   button:{
    paddingLeft:65,
    marginTop: 20,
    backgroundColor:'rgba(0,0,0,0.8)',
    //color:'rgba(255,255,255,0.7)',
    marginHorizontal : 25,
    marginBottom: '3%',
    borderRadius : 35,
    width:  WIDTH - 55,
    height : 55,
    //justifyContent : 'center'
     
     
     },
   btntext:{
       
       color:'#fff',
       fontSize:26,
       //textAlign : 'center',
        marginTop: 10,
        marginLeft : 60,
   },
   logo:{
       width:100,
       height:100,
   },
   inputIcon:{
       position: 'absolute',
       top: 15,
       left: 50
   },
   inputContainer:{
       marginTop: 0.5
       },
       pwtxt:{
           color : '#0277BD',
           fontSize : 18,
           marginLeft :  200,
       },
       threeContainer:{
          marginBottom : 50 
       },
       btnEye:{
        position: 'absolute',
        top: 15,
        right : 50
       }
    

});
export default Login;