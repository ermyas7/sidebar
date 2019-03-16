import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native'
import { 
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Right,
  Body} from 'native-base';


export class UsersPage extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('./../resources/user.png')} style={{height: 25, width: 25}}/>
    )
  }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#ffffff'}}>
          <Left>
            <Icon name='menu'
             onPress={()=>this.props.navigation.openDrawer()}
              size={20}/>
          </Left>
          <Body />
         <Right />
        </Header>
        <Content contentContainerStyle={{flex: 1, alignItems:'center', justifyContent:'center'}}>
          <Text>Currently there are no registered users</Text>
          <Text>Coming soon...</Text>
          <Text>Registration system under construction</Text>
        </Content>
      </Container>
      
    )
  }
}

const styles = StyleSheet.create({
  left: {
    marginLeft: 0,

  } 
})

export default UsersPage
