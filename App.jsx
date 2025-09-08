/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import {  View, StyleSheet, Text, ActivityIndicator, TouchableOpacity  } from 'react-native';

const App = () => {

  const [showIndicator, setShowIndicator] = useState(false);
  
  const displayLoader = () => {
    setShowIndicator(true);
    setTimeout(() => {
      setShowIndicator(false);
    }, 3000);
  }

  return (
    <View style={styles.main}>
      <Text style={{fontSize : 30}}>Activity Indicator</Text>
      <ActivityIndicator size={80} color='red' animating={showIndicator} />
      <TouchableOpacity onPress={displayLoader}>
        <Text style={styles.btn}>Show</Text>
      </TouchableOpacity>
    </View> 
  )
}

const styles = StyleSheet.create({
  main : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  btn : {
    fontSize : 20,
    backgroundColor : 'skyblue',
    padding : 10,
    margin : 10,
    borderRadius : 10

  }
})




export default App;
