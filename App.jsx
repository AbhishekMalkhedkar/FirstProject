/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { View, Text, FlatList , StyleSheet } from 'react-native';

function App() {
  const users = [
    {
      id: 1,
      name: 'Abhi',
    },
    {
      id: 2,
      name: 'Aishu',
    },
    {
      id: 3,
      name: 'Abhijna',
    },
    {
      id: 4,
      name: 'Amruta',
    },
    {
      id: 5,
      name: 'Amit',
    },
    {
      id: 6,
      name: 'Anay',
    },
  ];

  return (
    <View>
      <Text style={{ fontSize: 35, color: 'grey', textAlign: 'center' }}>
        List
      </Text>
      <FlatList
      data={users}
      renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
      keyExtractor={item=>item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item : {
    fontSize : 24,
    padding : 5,
    backgroundColor : 'grey',
    color : 'lightblue',
    borderWidth : 1,
    borderColor : 'skyblue',
    margin : 5
  }
});

export default App;
