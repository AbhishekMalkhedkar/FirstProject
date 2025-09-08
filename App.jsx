/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {  View, StyleSheet, Text, TouchableOpacity  } from 'react-native';

const App = () => {

  const [selectedRadio, setSelectedRadio] = useState(1);
  const skills = [
    {
      id : 1,
      name : "Java"
    },
    {
      id : 2,
      name : "PHP"
    },
    {
      id : 3,
      name : "JS"
    },
    {
      id : 4,
      name : "C"
    },
    {
      id : 5,
      name : "C++"
    },
  ]

  return (
    <View style={styles.main}>
      {
        skills.map((item,index) => 
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {
                selectedRadio===item.id? <View style={styles.radioBg}></View> : null
              }
            </View>
          <Text style={styles.radioTxt}>{item.name}</Text>
         </View>
      </TouchableOpacity>)
      }
      
    </View> 
  )
}

const styles = StyleSheet.create({
  main : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  radioTxt : {
    fontSize : 20,
    color : 'skyblue'
  },
  radio : {
    height : 40,
    width : 40,
    borderColor : 'skyblue',
    borderWidth : 2,
    borderRadius : 20,
    margin : 10
  },
  radioWrapper : {
    flexDirection : 'row',
    alignItems : 'center'
  },
  radioBg : {
    backgroundColor : 'skyblue',
    height : 28,
    width : 28,
    borderRadius : 20,
    margin : 4

  }
})




export default App;
