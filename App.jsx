/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {  View, StyleSheet, Text, TouchableHighlight  } from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <Text style={{fontSize : 30}}>TouchableHighlight</Text>
      <TouchableHighlight>
        <Text style={[styles.btn, styles.success]}>Sucess</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.btn, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.btn, styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.btn, styles.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.btn}>Button</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  main : {
    flex : 1,
  },
  btn : {
    backgroundColor : '#bbb',
    color : '#fff',
    fontSize : 24,
    padding : 10,
    margin : 10,
    textAlign : 'center',
    borderRadius : 10,
    shadowColor : 'black',
    elevation : 10,
    shadowOpacity : 1
  },
  success : {
    backgroundColor : 'green'
  },
  primary : {
    backgroundColor : 'blue'
  },
  warning : {
    backgroundColor : 'gold'
  },
  error : {
    backgroundColor : 'red'
  }
})




export default App;
