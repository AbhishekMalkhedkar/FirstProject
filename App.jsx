/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { View, StyleSheet, Pressable , Text} from 'react-native';

const App = () => {

  return (
    <View style={styles.main}>
      <Pressable 
       onPress={() => console.warn("Normal OnPress")}
       onLongPress={() => console.warn("OnLongPress")}
      onPressIn={() => console.warn("Press In")}
      onPressOut={() => console.warn("Press Out")}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent : 'center'
  },
  pressableBtn : {
    backgroundColor : 'blue',
    color : '#fff',
    padding : 10,
    margin : 10,
    borderRadius : 10,
    fontSize : 20,
    textAlign : 'center',
    shadowColor : 'black',
    elevation : 5
  }

});

export default App;
