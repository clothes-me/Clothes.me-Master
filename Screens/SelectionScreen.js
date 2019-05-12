import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Button, StyleSheet} from 'react-native';
import { Font, AppLoading } from 'expo';
import { Directions } from 'react-native-gesture-handler';

export default class SelectionScreen extends React.Component {
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
    this.props.navigation.navigate('Results')
  }

  render() {
  if (this.state.fontLoaded) {
    return (
      <View style={styles.container}>
      
                  <View style = {styles.heading}>
                    <Text style={styles.headingText}>What's your outfit of the day?</Text>
                  </View>

                  <View style = {styles.selection}>
                    <View style = {styles.selectionInner}>
                      <Text style={styles.selectionText}>Top</Text>
                      <View style={{flex:1, backgroundColor: 'orange'}}></View>
                    </View>

                    <View style = {styles.selectionInner}>
                      <Text style={styles.selectionText}>Bottom</Text>
                      <View style={{flex:1, backgroundColor: 'orange'}}></View>
                    </View>

                    <View style = {styles.selectionInner}>
                      <Text style={styles.selectionText}>Shoes</Text>
                      <View style={{flex:1, backgroundColor: 'orange'}}></View>
                    </View>
                  </View>
            
            <TouchableHighlight 
                    style={styles.button}
                    onPress={this.buttonTrigger}
                    underlayColor = "white">

                  <Text style = {{color: 'white'}}> Style Now </Text>

              </TouchableHighlight>

      </View>
    );
  }  else {
    return <AppLoading />;
  }
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  headingText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    marginTop: 22,
    fontFamily: 'AbrilFatface-Regular',
    textAlign: 'center',
  },
  selection: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  selectionInner: {
    flex:1,
    flexDirection: 'row',
  },
  selectionText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 36,
    margin: 22,
    fontFamily: 'AbrilFatface-Regular',
    textAlign: 'left',
  },
  button: {
		backgroundColor: 'black',
    borderWidth: 0,
    borderColor: 'red',
    borderStyle: 'solid',
    borderRadius: 4,
    overflow: 'hidden',
    padding: 10,
    margin: 10,
    alignItems: 'center',
	}
});
