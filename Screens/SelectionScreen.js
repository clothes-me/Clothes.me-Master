import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Button, StyleSheet} from 'react-native';

export default class SelectionScreen extends React.Component {
  constructor(props) {
    super(props);

    this.buttonTrigger = this.buttonTrigger.bind(this);
    
    this.state = {
      fontLoaded: false,
      userRating: 5,
    };
  }

  buttonTrigger() {
    this.props.navigation.navigate('Results', {userRating:this.state.userRating})
  }

  render() {
  
    return (
      <View style={styles.container}>
      
                  <View style = {styles.heading}>
                    <Text style={styles.headingText}>What's your outfit of the day?</Text>
                  </View>

                  <View style = {styles.selection}>
                    <View style = {styles.selectionInner}>
                      <Text style={styles.selectionText}>Top</Text>
                      <View style={{flex:1}}></View>
                    </View>

                    <View style = {styles.selectionInner}>
                      <Text style={styles.selectionText}>Bottom</Text>
                      <View style={{flex:1}}></View>
                    </View>

                    <View style = {styles.selectionInner}>
                      <Text style={styles.selectionText}>Shoes</Text>
                      <View style={{flex:1}}></View>
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
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    flex: 1,
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
