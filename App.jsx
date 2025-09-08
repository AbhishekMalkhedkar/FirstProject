/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { View, StyleSheet, Text, Button, Modal } from 'react-native';

const App = () => {

  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal
      transparent={true}
      visible={showModal}
      animationType='slide'
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTxt}>Hello World</Text>
            <Button title='Close Modal' onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.btnContainer}>
        <Button title="Open" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  btnContainer: {
    flex : 1,
    justifyContent : 'flex-end'
  },
  centeredView : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  modalView : {
    backgroundColor : '#fff',
    padding : 30,
    borderRadius : 20,
    shadowColor : 'black',
    elevation : 5,

  },
  modalTxt : {
    fontSize : 30,
    marginBottom : 20

  }

});

export default App;
