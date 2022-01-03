import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavigation from "./SRC/Navigation/index"

const App = () => {
  
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar barStyle={'dark-content'} />
      <AppNavigation/>
    </SafeAreaView>
  );
};

export default App;
