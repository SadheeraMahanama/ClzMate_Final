import React, { Component } from 'react';
import {View,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {Avatar} from 'react-native-elements';
import { Container, Header, Content, Card, CardItem, Text, Body  } from "native-base";
import CustomHeader from '../../../../components/Header/CustomHeader';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

  const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'Contact Number',
    content: '0718846578',
  },
  {
    title: 'Email Address',
    content: 'chanakauomfit@gmail.com',
  },
  {
    title: 'Country',
    content: 'Sri Lanka',
  },
  {
    title: 'City',
    content: 'Colombo',
  },
  {
    title: 'Course Details',
    content: 'Computation Mathematics',
  },

  {
    title: 'Qualifications',
    content: BACON_IPSUM,
  },
];

const SELECTORS = [
    {
      title: 'First',
      value: 0,
    },
    {
      title: 'Third',
      value: 2,
    },
    {
      title: 'None',
    },
  ];
 
class Teacher extends Component{
    constructor(props){
        super(props);

    } 

    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: false,
    };

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
      };
    
      setSections = sections => {
        this.setState({
          activeSections: sections.includes(undefined) ? [] : sections,
        });
      };
    
      renderHeader = (section, _, isActive) => {
        return (
          <Animatable.View
            duration={400}
            style={[styles.header, isActive ? styles.active : styles.inactive]}
            transition="backgroundColor"
          >
            <Text style={styles.headerText}>{section.title}</Text>
          </Animatable.View>
        );
      };
    
      renderContent(section, _, isActive) {
        return (
          <Animatable.View
            // duration={400}
            duration={600}
            style={[styles.content, isActive ? styles.active : styles.inactive]}
            transition="backgroundColor"
          >
            <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
              {section.content}
            </Animatable.Text>
          </Animatable.View>
        );
    }

     render(){
        const { multipleSelect, activeSections } = this.state;
        return(
            <ScrollView> 
                {/* <Text> Teacher </Text> */}
                <CustomHeader 
                    title="My Teacher"
                    leftPress={() => this.props.navigation.goBack()}
                    iconNameRight="md-git-network"
                    iconName="arrow-round-back"
                    type="sub"
                />

                <View style={styles.AvatarContainer}>
                    <Avatar
                        xlarge
                        rounded
                        // source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                        source={require('../../../../images/user.png')}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />

                    <Text style={styles.TeacherName}> Mr. Anuruddha</Text>
                </View>

                <View>
                    <Container>
                        <Content padder>
                        <Card>
                            <TouchableOpacity onPress={this.toggleExpanded}>
                                <View style={styles.header}>
                                <Text style={styles.headerText}>Teacher Details</Text>
                                </View>
                            </TouchableOpacity>
                            <Collapsible collapsed={this.state.collapsed} align="center">
                                <View style={styles.content}>
                                <Text>
                                    Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                                    ribs
                                </Text>
                                </View>
                            </Collapsible>
                            <Accordion
                                activeSections={activeSections}
                                sections={CONTENT}
                                touchableComponent={TouchableOpacity}
                                expandMultiple={multipleSelect}
                                renderHeader={this.renderHeader}
                                renderContent={this.renderContent}
                                duration={600}
                                // duration={400}
                                onChange={this.setSections}
                            />
                            {/* </Body> */}
                        </Card>
                        </Content>
                    </Container>
                </View>

             </ScrollView>
         )
     }
}
 
export default Teacher;


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//         },

//     AvatarContainer:{
//         alignItems: 'center',
//         justifyContent: 'center',

//     },

//     TeacherName:{
//         fontSize:34,
//         fontWeight:'bold'
//     }
// });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      // paddingTop: Constants.statusBarHeight,
    },

    AvatarContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },

        TeacherName:{
        fontSize:34,
        fontWeight:'bold'
    },

    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 20,
    },
    header: {
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    headerText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
    //   color:'blue'
    },
    content: {
      padding: 20,
      backgroundColor: '#fff',
    },
    active: {
      backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
      backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    selector: {
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    activeSelector: {
      fontWeight: 'bold',
    },
    selectTitle: {
      fontSize: 14,
      fontWeight: '500',
      padding: 10,
    },
    multipleToggle: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 30,
      alignItems: 'center',
    },
    multipleToggle__title: {
      fontSize: 16,
      marginRight: 8,
    },
  });