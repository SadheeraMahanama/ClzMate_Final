import React, { Component } from 'react';
import {View,
    Text,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ScrollView,
    AsyncStorage
} from 'react-native';
import { Card, ListItem, Button, Header } from 'react-native-elements'
import colors from '../../styles/colors';
import { withNavigation } from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



 

const formatData = (data, numColumns)=>{
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0){
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty:true});
        numberOfElementsLastRow=numberOfElementsLastRow+1;
    }

    return data;
}

const numColumns = 3;
 
class SubjectList extends Component{
    constructor(props){
        super(props);
    // this.subjectHandler=this.subjectHandler.bind(this);

    this.state={
        userId:"",
        subjects:null,
        isLoading:true,
    }


    }

    componentDidMount(){
        this.getUserId();
        this.requestSubjects();
        console.log("I am here @ subject");
    }

     async getUserId(){
        try{
            let userId = await AsyncStorage.getItem("user_Id");
            console.log("#################### get user id in subjects"+userId);
            if(userId!=null){
                this.handleUserId(userId);

            }else{
                console.log("user id is not available");
                this.getUserId();
            }
        }catch(error){
            alert(error+"in subject list");
        }
     }
     map

     handleUserId(userId){
         this.setState({userId:userId});
         console.log("handle user id in subjects "+this.state.userId);

     }

    requestSubjects(){
        // var user_Id;
        fetch('https://clzmate.herokuapp.com/user/getClasses/5c49d507ef8c7a0022b4aa96', {
        // fetch('https://clzmate.herokuapp.com/user/getClasses/'+this.userId, {

            method:'GET',

        })
        // .then((response) => console.log(response)) 
        .then((response) => response.json())
        //.then((responseJson) => console.log(responseJson))  
        .then((responseJson) =>{
            this.dataHandler(responseJson)
        } ) 
        .done();
    }

    dataHandler(responseData){
        console.log('subject data handler');
        console.log(responseData);
        this.setState({
            subjects:responseData,
            isLoading:false,

        })
        console.log("set to the subject state");
        console.log(this.state.subjects);
        console.log(this.state.subjects.clzes);
        // console.log(this.state.subjects.clzes[0].);


    }

    // renderItem = ({item, index})=>{
    //     //Close in the position
    //     if(item.empty ===  true){
    //         return(
    //             <View style={[styles.item, styles.itemInvisible]}>

    //             </View>
    //         )
    //     }
    //     return(
    //         <TouchableOpacity key={index} style={styles.item} 
    //         onPress={this.subjectHandler} >
    //                 <Text style={styles.itemText}>{item.subject}</Text>
                
    //         </TouchableOpacity>
    //     )
    // }
//    cell = (data,index) => {
//     console.log("I am cell");
//        return(
//            <View>
//                <Text>Hello Cell</Text>

//            </View>
//        )
      
//    }
    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.activityIndicator}>
                    <ActivityIndicator size="large" color="black"/>
                </View>

                // <View style={styles.activityIndicator}>
                //     <EvilIcons
                //     name="md-ei-spinner-2"
                //     size={30}
                //       />
                // </View>
            )
        }        
        else{
            console.log("@ else part in subject list");
            let classes = this.state.subjects.clzes.map((val, key) => {
                return(
                    <View key={key}>
                    <View style={styles.sub}>
                        <Button
                            large
                            rightIcon={{name: 'code'}}
                            title={val.subjectName} 
                            backgroundColor='#3949ab'
                             //color='black'  
                        />
                    </View>
                    
                        {/* <Text>Classes list</Text>
                        <Text>
                            {val.subjectName}
                        </Text> */}
                    </View>
                )
            });
        

        return(

            <View>
            
                {classes}
            </View>
            

            
        )
    }
}
}

 
export default SubjectList;
// export default withNavigation(SubjectList);



const styles = StyleSheet.create({
    container:{
        flex:1,
        // marginVertical :20,
    },

    // activityIndicator:{
    //     //flex:1,
    //     justifyContent:'center',
    //     alignItems:'center'
    // },
    
    // item:{
    //     // backgroundColor:colors.subject_list,
    //     backgroundColor:"red",
    //     alignItems:'center',
    //     justifyContent:'center',
    //     flex:1,
    //     margin:1,
    //     height: Dimensions.get('window').width/numColumns, //approximate a square
    // },

    // itemInvisible:{
    //     backgroundColor:'transparent'
    // },

    // itemText:{
    //     color:'#fff'
    // },

    sub:{
       // marginTop:10,
        marginBottom: 10,
         
    },

    // containerWait: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },

    //   item:{
    //     flex: 1,
    //     padding: 20,
    
    //   },
    //   titleContainer:{
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
    
    //   title:{
    //     fontSize: 20,
    //     fontWeight: "500",
    //     justifyContent:'center'
    //   },
    
    //   notice:{
    //     paddingBottom:20
    //   },
    
    //   dateContainer:{
    //     backgroundColor: '#1c50a5',
    //     padding: 15,
    //     borderRadius: 25,
    //     alignItems: 'center',
    
    //   },
    
    //   date:{
    //     fontWeight: '300',
    //     color: '#ffffff'
    //   }
});