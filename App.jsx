/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text , StyleSheet, ScrollView, FlatList } from 'react-native';

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
      <Text style={{ fontSize: 25, color: 'grey', marginTop : 5}}>Component in Loop with FlastList</Text>
      <FlatList
      data={users}
      renderItem={({item}) => <UserData item={item} /> }
      />
    </View>
  );
};

const UserData = ({item}) => {
  return (
    <View style={styles.box}>
        <Text style={styles.item}>{item.id}</Text>
        <Text style={styles.item}>{item.name}</Text>
    </View>
  )
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

  },
  item : {
    fontSize : 24,
    color : 'orange',
    flex : 1,
    margin : 2,
    textAlign : 'center'
  },
  box : {
    flexDirection : 'row',
    borderWidth : 2,
    borderColor : 'pink',
    marginBottom : 10
  }
});

export default App;
