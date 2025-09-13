/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Home from './components/Home';

const Stack = createNativeStackNavigator();
const App = () => {

  const btnAction = () => {
    console.warn("Btn Pressed");
    
  }



  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
             headerStyle : {
              backgroundColor : 'grey',
             },
             headerTitleStyle : {
              fontSize : 25
             },
             headerTintColor : 'skyblue'

             }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerLeft : () =><Button title='Left' onPress={btnAction} />, 
            headerRight : () =><Header />, 
            title : ""
          }}
        />
        <Stack.Screen name="Home" component={Home}
        options={{
             title : "Home", 
             headerStyle : {
              backgroundColor : 'lightblue',
             },
             headerTitleStyle : {
              fontSize : 26
             },
             headerTintColor : 'grey'

             }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const Header = () => {
  return (
    <Button title='btn' />
  )
}







export default App;
