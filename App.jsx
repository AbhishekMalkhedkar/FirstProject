/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ExStyles from './styles'


function App() {
  
  const [name , setName] = useState("Abhishek");
  const changeName = ()=>{
    setName("Hunterr");
  }

  return (
    <View>
      <Text style={ExStyles.textBox}> Hello RN</Text>
      <Text style={styles.textBox}> I am {name}</Text>\

      <Button onPress={changeName}  title="Press here"/>
    </View>
  );
    
}

const styles = StyleSheet.create({
  textBox : {
    fontSize : 35,
    color : 'grey',
    backgroundColor : 'lightblue',
    margin : 20,
    borderRadius : 10,
    padding : 10,

  }
})



export default App;
