/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text , StyleSheet, SectionList } from 'react-native';

function App() {
  const users = [
    {
      id: 1,
      name: 'Abhi',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 2,
      name: 'Aishu',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 3,
      name: 'Abhijna',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 4,
      name: 'Amruta',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 5,
      name: 'Amit',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 6,
      name: 'Anay',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 7,
      name: 'Avinash',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 8,
      name: 'Amar',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 9,
      name: 'Akbar',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 10,
      name: 'Anthony',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 11,
      name: 'Akhil',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 12,
      name: 'Abhilash',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 13,
      name: 'Alok',
      data : ["PHP" , "React", "Angular", "Java"]
    },
    {
      id: 14,
      name: 'Akkarin',
      data : ["PHP" , "React", "Angular", "Java"]
    },
  ];


  return (
    <View>
      <Text style={{ fontSize: 25, color: 'grey', marginTop : 5}}>Section List In RN</Text>
      <SectionList
      sections={users}
      renderItem={({item}) => <Text style={{fontSize : 20, marginLeft : 20}}>{item}</Text>}
      renderSectionHeader={({section : {name}}) => <Text style={{fontSize : 25, color : 'red', }}>{name}</Text> }
      />
    </View>
  );
};



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
});

export default App;
