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
      <Text style={{ fontSize: 25, color: 'grey', marginTop : 5}}>Grid with Dynamic data</Text>
      <View style={{flex:1, flexDirection:'row',flexWrap:'wrap'}}>
      {
        users.map((item) => <Text key={item.id} style={styles.text}>{item.name}</Text>)
      }
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text : {
    fontSize : 20,
    backgroundColor : 'blue',
    color : 'white',
    padding : 10,
    margin : 10,
    height : 100,
    width : 100,
    textAlignVertical: 'center',
    textAlign : 'center'

  }
});

export default App;
