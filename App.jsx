/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { View, StyleSheet , Text, StatusBar, Button} from 'react-native';

const App = () => {

  const [hide, setHide] = useState(false);
  const [barStyle, setBarStyle] = useState("default");

  return (
    <View style={styles.container}>
      <StatusBar
       backgroundColor="red"
       barStyle={barStyle}
       hidden={hide}
      />
      <Button title='Toggle Status Bar' onPress={() => setHide(!hide)} />
      <Button title='Update Style' onPress={() => setBarStyle("dark-content")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center'
  }

});

export default App;
