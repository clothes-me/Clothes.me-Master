import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.buttonTrigger = this.buttonTrigger.bind(this);
    
}
  
  buttonTrigger() {
    this.props.navigation.navigate('Selection')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.image}>
          <Image
              style={{width:250, height:250}} 
              source={require('../assets/1Star.png') }/>
          <Image
              style={{width:250, height:250}} 
              source={require('../assets/5Star.png') }/>
          
        </View>
        <Text>ResultsScreen</Text>
        <TouchableHighlight 
                style={styles.button}
                onPress={this.buttonTrigger}
                underlayColor = "white">

              <Text style={styles.buttonText}> Start Now </Text>

          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
  },
  image: {
    flex:1,
    alignItems: 'center',
  },
  button: {
		backgroundColor: 'black',
    borderWidth: 0,
    borderColor: '#eee',
    borderStyle: 'solid',
    borderRadius: 4,
    overflow: 'hidden',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  }
});
