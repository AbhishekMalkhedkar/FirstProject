/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
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
          
        />
        <Stack.Screen name="Home" component={Home}
        options={{
             title: 'User Home',
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

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
    </View>
  );
};
const Login = props => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default App;
