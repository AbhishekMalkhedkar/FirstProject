/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View} from 'react-native';
import {WebView } from 'react-native-webview'

const App = () => {


  return (
    <WebView source={{uri : "https://www.google.com/"}} />
  );
};



export default App;
