/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, Text, View, TextInput} from 'react-native';
import Student from './components/Student'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      name : "Abhi",
    }
  }

  updateName(val){
    this.setState({name : val})
  }

  fruit = () => {
    console.warn("Apple");
  }

  render(){
    return (
      <View>
        <Text style={{fontSize : 30, color : 'red'}}>Class Component</Text>
        <Text style={{fontSize : 30, color : 'red'}}>{this.state.name}</Text>
        <TextInput placeholder='Enter Here' onChangeText={(text) => this.updateName(text)} />
        <Button title='Press here' onPress={this.fruit} />
        <Student name={this.state.name} />
      </View>
    )
  }  

}
  


export default App;
