import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Button, StyleSheet} from 'react-native';

import ModalGallery from "../components/ModalGallery.js"
import {clothingIcons} from '../assets/ImageData.js';

export default class SelectionScreen extends React.Component {
  static navigationOptions = {
    header:null
  }

  constructor(props) {
    super(props);

    this.buttonTrigger = this.buttonTrigger.bind(this);
    this.scoreChanger = this.scoreChanger.bind(this);

    this.state = {
      fontLoaded: false,
      topscore: 0,
      botscore:0,
      shoescore:0,
    };
  }

  scoreChanger(value, newscore) {
    this.setState({
      [value]: newscore,
    });
  }

  buttonTrigger() {
    let userRating = this.state.topscore + this.state.botscore + this.state.shoescore
    this.props.navigation.navigate('Results', {userRating: userRating})
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
                            <ModalGallery imagedata = {clothingIcons.Tops}
                                          columnNumber = {3}
                                          score = 'topscore'
                                          scoreChanger= {this.scoreChanger}/>
                          </View>
                          



                          <View style = {styles.selectionInner}>
                            <Text style={styles.selectionText}>Bottom</Text>
                            <ModalGallery imagedata = {clothingIcons.Bottoms}
                                          columnNumber = {3}
                                          score = 'botscore'
                                          scoreChanger= {this.scoreChanger}/>
                          </View>



                          <View style = {styles.selectionInner}>
                            <Text style={styles.selectionText}>Shoes</Text>
                            <ModalGallery imagedata = {clothingIcons.Shoes}
                                          columnNumber = {2}
                                          score = 'shoescore'
                                          scoreChanger= {this.scoreChanger}/>
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
    flex:1,
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
