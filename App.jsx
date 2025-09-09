/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, StyleSheet , Text, Platform} from 'react-native';

const App = () => {


  return (
    <View style={styles.container}>
      <Text style={{fontSize : 25, color : 'red'}}>Platform : {Platform.OS}</Text>
      {
        Platform.OS === "android" ?
        <View style={{backgroundColor : 'green', height : 100, width : 100}}></View>
        :
        <View style={{backgroundColor : 'green', height : 100, width : 100}}></View>
      }
      <Text style={styles.txt}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  txt : {
    color : Platform.OS === "android"? 'skyblue' : 'grey',
    fontSize : 24
  }

});

export default App;
