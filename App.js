import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
  } from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems } from 'react-navigation';
import UsersPage from './screens/UsersPage';
import RegisterPage from './screens/RegisterPage';
import { Content, Body, Header } from 'native-base';
class App extends Component{
  render(){
    return(
      <MyApp/>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const myDrawerNavigator = createDrawerNavigator({
  Users: {
    screen: UsersPage
  },
  Register: {
    screen: RegisterPage
  }
});

const MyApp = createAppContainer(myDrawerNavigator);

export default App;