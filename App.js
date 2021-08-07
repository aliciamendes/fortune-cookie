import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require('./src/cookie.png'),
      text: ''
      
    };
    this.phrases= [
      "Viado Burro",
      "Galaseca",
      "Teu rabo!!",
      "Ta passada?",
      "olha o carro da vacina passando, mami",
      "aiai",
    ]
    this.crackCookie = this.crackCookie.bind(this);
  }

  crackCookie(){
    let randomNumber = Math.floor(Math.random() * this.phrases.length)
  
    this.setState({
      text: '"' + this.phrases[randomNumber] + '"',
      image: require('./src/cookieOpen.png'),
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Image 
          source={this.state.image} 
          style={styles.img} />

        <Text style={styles.phrase}>
          {this.state.text}
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={ this.crackCookie }
          >
          <View style={styles.buttonArea}>
            <Text style={styles.txtButton}>Open Cookie</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phrase: {
    fontSize: 18,
    marginVertical: 15,
    fontStyle: 'italic'
  },
  img: {
    width: 250,
    height: 250,
  },
  button: {
    width: 200,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'pink',
    marginTop: 30
  },
  buttonArea: {   
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'pink'
  },
});

export default App;
