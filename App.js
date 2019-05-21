import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from "./Screens/HomeScreen.js"
import SelectionScreen from "./Screens/SelectionScreen.js"
import ResultsScreen from "./Screens/ResultsScreen.js"

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Selection: { screen: SelectionScreen },
  Results: { screen: ResultsScreen }
}, {
  activeTintColor: 'black'
})

const App = createAppContainer(MainNavigator); 
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
