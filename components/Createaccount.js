import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,TextInput,TouchableOpacity,ScrollView,Button, KeyboardAvoidingView} from 'react-native';

// import { TextInput } from 'react-native-gesture-handler';

export default class App extends React.Component {

  

  state={
message:'Hello Albert!!!'

  }

  static navigationOptions = {
    
    title: 'Create account',
  };
  render() {

    const {navigate} = this.props.navigation;
    return (
 
 <ImageBackground 
 source={{uri:'https://www.w3schools.com/w3css/img_lights.jpg'}} 
       style={styles.imgbg}>
       

       <View
       style={styles.mainview}
       
       >

       <KeyboardAvoidingView  behavior="padding"
       keyboardVerticalOffset='120'
        enabled>
       <ScrollView>  
       <View
   style={styles.container}
   > 

   <Text style={styles.headingtext}>Create Account</Text>
<TextInput
placeholder='Username'
clearButtonMode='always'
autoFocus={true}
placeholderTextColor='#3f3f3f'
style={styles.mytextinput}
returnKeyType='next'
>

</TextInput>


<TextInput
placeholder='Email address'
inlineImageLeft='search_icon'
clearButtonMode='always'
autoComplete='email'
placeholderTextColor='#3f3f3f'
keyboardType='email-address'
style={styles.mytextinput}
returnKeyType='next'
>

</TextInput>


<TextInput
placeholder='Phone number'
keyboardType='number-pad'
clearButtonMode='always'
placeholderTextColor='#3f3f3f'
style={styles.mytextinput}
returnKeyType='next'
>

</TextInput>

<TextInput
placeholder='Password'
textContentType='password'
secureTextEntry={true}
clearButtonMode='always'
placeholderTextColor='#3f3f3f'
style={styles.mytextinput}
returnKeyType='next'
>

</TextInput>


<TextInput
placeholder='Confirm Password'
textContentType='password'
secureTextEntry={true}
clearButtonMode='always'
placeholderTextColor='#3f3f3f'
style={styles.mytextinput}
returnKeyType='go'
>

</TextInput>
<TouchableOpacity
style={styles.createbutton}

>
  <Text style={styles.buttontext}>Create Account</Text>
</TouchableOpacity>

<Text
       
        onPress={() => navigate('Comp1', {name: 'Jane'})}
        style={styles.loginoption}
      >
Have account? Login
      </Text>


   </View>
   
   </ScrollView>
   </KeyboardAvoidingView>
  
       </View>
     
     
</ImageBackground>
  

    );
  }
}

const styles = StyleSheet.create({
  container: {
  
    marginTop:50,
    padding:20
   
  },
  mainview:{
backgroundColor:'#ccc',
flex: 1,
backgroundColor: 'rgba(0, 0, 0,0.30)',
  },
  imgbg:{
    width:'100%',
    height:'100%'
  },
  mytextinput:{
   backgroundColor:'rgba(214, 214, 214,0.50)',
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
    fontSize:15,
    marginTop:5
  },
  headingtext:{
    color:'#fff',
    fontSize:25
  },
  loginoption:{
    color:'#efefef',
    fontSize:20,
    textAlign:'center',
    marginTop:20
  }
});
