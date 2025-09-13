/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { useEffect, useState } from "react";
import { Text, View } from "react-native";


const App = () => {

  const [data, setData] = useState(null);
  
  const getAPIData = async () => {
    //api call
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    
  }

  useEffect(() => {
    getAPIData();
  },[])


  return (
    <View>
      <Text style={{fontSize : 30}} >API Call</Text>
      {
        data ?
        <View>
          <Text>{data.id}</Text>
          <Text>{data.userId}</Text>
          <Text>{data.title}</Text>
          <Text>{data.body}</Text>
        </View> : null
      }
    </View>
  )
};









export default App;
