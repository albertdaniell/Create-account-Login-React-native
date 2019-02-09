import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Component1 from './components/Component1'
import Createaccount from './components/Createaccount'
import {createStackNavigator, createAppContainer} from 'react-navigation';
// import { TextInput } from 'react-native-gesture-handler';

const MainNavigator = createStackNavigator({
  Home: {screen: Createaccount},
  Comp1: {screen: Component1},
  
});


const App=createAppContainer(MainNavigator);
export default App;


// export default class App extends React.Component {

  

//   state={
// message:'Hello Albert!!!'

//   }
//   render() {
//     return (
 

  
// <ImageBackground 
//        source={{uri:'https://www.w3schools.com/w3css/img_lights.jpg'}} 
//        style={styles.imgbg}>
// <Createaccount/>
       
     
//   </ImageBackground>

 
     

//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
  
    marginTop:50,
    padding:20
   
  },
  mainview:{
backgroundColor:'#ccc',
flex: 1,
backgroundColor: 'rgba(224, 226, 229,0.30)',
  },
  imgbg:{
    width:'100%',
    height:'100%'
  },
  mytextinput:{
   
    borderColor:'#fff',
    borderWidth:2,
    borderRadius:4,
    height:50,
    marginTop:20,
    padding:15

  },
  createbutton: {
    alignItems: 'center',
    backgroundColor: '#3f8faf',
    padding: 10,
    marginTop:20,
    marginBottom:20,
    height:50,
    borderRadius:50
  },
  buttontext:{
    color:'#fff',
    fontSize:15
  },
  headingtext:{
    color:'#fff',
    fontSize:25
  }
});
