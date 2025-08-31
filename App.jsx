/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import ExStyles from './styles'


function App() {
  
  const [email , setEmail] = useState("");
  const changeName = ()=>{
    setName("Hunterr");
  }

  return (
    <View>
      <Text style={{fontSize : 35, color: 'blue', textAlign : 'center'}}>Login</Text>
      <Text>Email : {email} </Text>
      <TextInput style={styles.holder} placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} />
      <TextInput style={styles.holder} placeholder="Password" />
      <Button onPress={() => setEmail("")} title="Clear" />
    </View>
  );
    
}

const styles = StyleSheet.create({
  holder : {fontSize: 18, color:'blue', borderWidth:2, borderColor: 'lightblue', borderRadius:10, margin:10, padding:5},
})



export default App;
