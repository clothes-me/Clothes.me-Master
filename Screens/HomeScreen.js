import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Font } from 'expo';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.buttonTrigger = this.buttonTrigger.bind(this);
    
    this.state = {
      fontLoaded: false,
    };
}
  async componentDidMount() {
    await Font.loadAsync({
      'AbrilFatface-Regular': require('../assets/fonts/AbrilFatface-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  buttonTrigger() {
    this.props.navigation.navigate('Selection')
  }
  
  render() {
    return (
      <View style={styles.container}>
       {
          this.state.fontLoaded ? (
          <Text style = {styles.headingText}>Clothes Encounters</Text>
          ): null }
          <Text style = {styles.loweredText}>Make Clothes Easy</Text>
          
          
          <Image
          style={{width: 350, height: 350,flex:1}}
          source={require('../assets/Shirt.png')}/>
          

          <TouchableHighlight 
                style={styles.button}
                onPress={this.buttonTrigger}
                underlayColor = "white">

              <Text style = {{color: 'white'}}> Start Now </Text>

          </TouchableHighlight>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    flex: 2,
    alignItems: 'center',
  },
  headingText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
    margin: 22,
    marginBottom: 0,
    fontFamily: 'AbrilFatface-Regular',
    textAlign: 'center',
  },

  loweredText: {
    fontFamily: 'Palatino',
    textAlign: 'left',
  },
  button: {
		backgroundColor: 'black',
    borderWidth: 0,
    borderColor: '#eee',
    borderStyle: 'solid',
    borderRadius: 4,
    overflow: 'hidden',
    padding: 10,
    margin: 10
	}
});
