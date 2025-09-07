import React from 'react';
import { Button, Text, View, TextInput} from 'react-native';

class Student extends React.Component {

  render(){

    console.warn(this.props);
    return (
      <View>
        <Text style={{fontSize : 30, color : 'green'}}> Student Name : {this.props.name}</Text>
        
      </View>
    )
  }  

}
  


export default Student;