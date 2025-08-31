/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";



function App() {
  
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [display , setDisplay] = useState(false);
  
  const clear = () => {
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <View>
      <Text style={{fontSize : 35, color: 'grey', textAlign : 'center'}}>Form</Text>
      <TextInput style={styles.holder} placeholder="Name" onChangeText={(text) => setName(text)} value={name} />
      <TextInput style={styles.holder} placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} />
      <TextInput style={styles.holder} placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true} />
      <View style={{marginBottom : 10}}>
        <Button title="Submit" onPress={()=>setDisplay(true)}  />
      </View>  
      <Button title="Clear" onPress={clear} />
      <View>
        {
          display? 
          <View>
            <Text style={{fontSize:20}} >User Name is : {name}</Text>
            <Text style={{fontSize:20}} >Email is : {email} </Text>
            <Text style={{fontSize:20}} >Password is : {password} </Text>
          </View> : null
        }
      </View>

    </View>
  );
    
}

const styles = StyleSheet.create({
  holder : {fontSize: 18, color:'grey', borderWidth:2, borderColor: 'lightblue', borderRadius:10, margin:10, padding:5},
})



export default App;
