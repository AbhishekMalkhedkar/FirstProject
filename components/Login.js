import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const Login = props => {

    const age = 29;

    const [name, setName] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <TextInput onChangeText={(text) => setName(text) } placeholder="Enter Name" style={{fontSize : 20, borderColor : '#000', borderWidth : 2}}  />
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home', {name  , age })}
      />
    </View>
  );
};

export default Login;