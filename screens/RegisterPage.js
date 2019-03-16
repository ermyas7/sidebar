import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
} from 'react-native'
import { 
  Icon,
  Container,
  Header,
  Content,
  Left,
  Body,
  Right } from 'native-base';
export class RegisterPage extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('./../resources/register.jpeg')} style={{height: 25, width: 25}}/>
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
        <Content contentContainerStyle={{flexDirection: 'column', justifyContent:'space-between'}}>
          <Text style={styles.heading}>Register</Text>
          <TextInput placeholder="Username" style={styles.registerInput}/>
          <TextInput placeholder="email" style={styles.registerInput}/>
          <View style={styles.btn}>
            <Button title="Register" 
             onPress={() => this.props.navigation.navigate('Users')}/>
          </View>
        </Content>
      </Container>
      
    )
  }
}

const styles = StyleSheet.create({
  registerInput: {
    height: 36,
    padding: 4,
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 10,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 2,
    color: '#48BBEC',
  },
  heading: {
    color: '#48BBEC',
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 22,
  },
  btn: {
    marginRight: 50,
    marginLeft: 50,
  }

})

export default RegisterPage
