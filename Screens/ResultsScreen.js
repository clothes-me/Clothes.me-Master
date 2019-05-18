import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

import {reccomendationText, randomTips} from '../assets/GeneratedText';

export default class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.randomIntFromInterval = this.randomIntFromInterval.bind(this);
    this.buttonTrigger = this.buttonTrigger.bind(this);

    this.state = {
      fontLoaded: false,
    };
}
  randomIntFromInterval(min,max) {
      return Math.floor(Math.random()*(max-min+1)+min);
  }  

  buttonTrigger() {
    this.props.navigation.navigate('Selection')
  }
  
  render() {
    const {userRating} = this.props.navigation.state.params    

    if (userRating >= 13 && userRating <= 15) {
      var starImage = require('../assets/Stars/1Star.png');
      let randrecc = this.randomIntFromInterval(0,2)
      var reccomendedText = reccomendationText.OneStar[randrecc].reccomendation
      var reccomendedImage = reccomendationText.OneStar[randrecc].imagePath
    } 
    else if (userRating >= 10 && userRating <= 12) {
      var starImage = require('../assets/Stars/2Star.png');
      let randrecc = this.randomIntFromInterval(0,2)
      var reccomendedText = reccomendationText.TwoStar[randrecc].reccomendation
      var reccomendedImage = reccomendationText.TwoStar[randrecc].imagePath
    } 
    else if (userRating >= 6 && userRating <= 9) {
      var starImage = require('../assets/Stars/3Star.png');
      let randrecc = this.randomIntFromInterval(0,2)
      var reccomendedText = reccomendationText.ThreeStar[randrecc].reccomendation
      var reccomendedImage = reccomendationText.ThreeStar[randrecc].imagePath
    } 
    else if (userRating >= 3 && userRating <= 5) {
      var starImage = require('../assets/Stars/4Star.png');
      let randrecc = this.randomIntFromInterval(0,2)
      var reccomendedText = reccomendationText.FourStar[randrecc].reccomendation
      var reccomendedImage = reccomendationText.FourStar[randrecc].imagePath
    } 
    else if (userRating >= 0 && userRating <= 2) {
      var starImage = require('../assets/Stars/5Star.png');
      let randrecc = this.randomIntFromInterval(0,2)
      var reccomendedText = reccomendationText.FiveStar[randrecc].reccomendation
      var reccomendedImage = reccomendationText.FiveStar[randrecc].imagePath
    } 


      return (
        <View style={styles.container}>
          
          <View style = {styles.imageContainer}>
            <Image
                style={{width:300, height:300, resizeMode: 'contain'}} 
                source={starImage}/>
          </View>

          <View style={styles.tipContainer}>
            <Text style={styles.tipText}>
               {randomTips[this.randomIntFromInterval(0,randomTips.length-1)]}
            </Text>
          </View>

          <View style={styles.recomendationContainer}>
              <Text style={styles.recomendationText}>Reccomended for you:</Text>
              <Text style={styles.recomendationText}>{reccomendedText}</Text> 

                <Image
                  style={{flex:1, resizeMode: 'contain', margin: 10}} 
                  source={reccomendedImage}/>
             
          </View>

          <TouchableHighlight 
                  style={styles.button}
                  onPress={this.buttonTrigger}
                  underlayColor = "white">

                <Text style={styles.buttonText}> Style Again? </Text>

            </TouchableHighlight>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 22
  },
  tipContainer: {
    flex: 1,
    margin: 0,
    padding: 10
  },
  tipText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontFamily: 'AbrilFatface-Regular',
    textAlign: 'center',
  },
  recomendationContainer: {
    flex:1,
    alignItems: 'center',
    
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 12,
    shadowColor: 'black',
    shadowRadius:5,
    shadowOpacity: .125,
    shadowOffset: {width:0, height:0},
    elevation: 3
  },
  recomendationText: {
    
    fontSize: 24,
    fontFamily: 'AbrilFatface-Regular',
    textAlign: 'center',
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
