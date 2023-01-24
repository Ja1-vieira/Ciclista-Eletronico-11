import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

export default class LoginScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    };
  }

  handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() =>{
        this.props.navigation.navigate('BottomTab');
      })
      .catch(error => {
        Alert.alert(error.message);     
      });
  };
}

<View>
  <TouchableOpacity> 
    <Text style={styles.loginText}>
      Login
    </Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.passwordText}>
    <Text>
      Senha
    </Text>
  </TouchableOpacity>

</View>

const styles = StyleSheet.create({

loginText: {
  fontSize: 20
},
passwordText: {
  fontSize: 20
},
})