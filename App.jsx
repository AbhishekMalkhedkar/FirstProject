/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Text, View } from "react-native";



const Tab = createBottomTabNavigator();
const App = () => {

  



  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login"  component={Login} />
        <Tab.Screen name="SignUp"  component={SignUp} />
      </Tab.Navigator>

    </NavigationContainer>
  )
};


const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
};


const SignUp = () => {
  return (
    <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}> 
      <Text style={{fontSize : 25}}>SignUp</Text>
    </View>
  )
}







export default App;
