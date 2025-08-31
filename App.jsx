/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text , StyleSheet, ScrollView } from 'react-native';

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
    {
      id: 7,
      name: 'Avinash',
    },
    {
      id: 8,
      name: 'Amar',
    },
    {
      id: 9,
      name: 'Akbar',
    },
    {
      id: 10,
      name: 'Anthony',
    },
    {
      id: 11,
      name: 'Akhil',
    },
    {
      id: 12,
      name: 'Abhilash',
    },
    {
      id: 13,
      name: 'Alok',
    },
    {
      id: 14,
      name: 'Akkarin',
    },
  ];

  return (
    <View>
      <Text style={{ fontSize: 25, color: 'grey', marginTop : 5}}>List with map function(Custom)</Text>
      <ScrollView style={{marginBottom:30}}>
      {
        users.map((item) =><Text style={styles.item} ke > {item.name}</Text>)
      }

      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  item : {
    fontSize : 30,
    padding : 5,
    marginBottom : 10,
    backgroundColor : 'grey',
    color : 'lightblue',
    borderWidth : 1,
    borderColor : 'skyblue'
  },
});

export default App;
