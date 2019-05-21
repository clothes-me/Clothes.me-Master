import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { Font, AppLoading, Asset} from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header:null
  }

  constructor(props) {
    super(props);

    this.buttonTrigger = this.buttonTrigger.bind(this);
    
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Asset.loadAsync([
      require('../assets/Shirt.png'),
      require('../assets/Stars/1Star.png'),
      require('../assets/Stars/2Star.png'),
      require('../assets/Stars/3Star.png'),
      require('../assets/Stars/4Star.png'),
      require('../assets/Stars/5Star.png'),
      require('../assets/Clothing_Icons/positive_attitude!.png'),
      require('../assets/Clothing_Icons/radiant_smile!.png'),
      require('../assets/Clothing_Icons/confidence!.png'),
      require("../assets/Clothing_Icons/black_sweater.png"),
      require('../assets/Clothing_Icons/black_buttonup.png'),
      require('../assets/Clothing_Icons/black_shirt.png'),
      require('../assets/Clothing_Icons/blue_buttonup.png'),
      require('../assets/Clothing_Icons/blue_shirt.png'),
      require('../assets/Clothing_Icons/blue_sweater.png'),
      require('../assets/Clothing_Icons/green_buttonup.png'),
      require('../assets/Clothing_Icons/green_shirt.png'),
      require('../assets/Clothing_Icons/green_sweater.png'),
      require('../assets/Clothing_Icons/orange_buttonup.png'),
      require('../assets/Clothing_Icons/orange_shirt.png'),
      require('../assets/Clothing_Icons/orange_sweater.png'),
      require('../assets/Clothing_Icons/pink_shirt.png'),
      require('../assets/Clothing_Icons/pink_sweater.png'),
      require('../assets/Clothing_Icons/purple_buttonup.png'),
      require('../assets/Clothing_Icons/purple_shirt.png'),
      require('../assets/Clothing_Icons/purple_sweater.png'),
      require('../assets/Clothing_Icons/red_buttonup.png'),
      require('../assets/Clothing_Icons/red_shirt.png'),
      require('../assets/Clothing_Icons/red_sweater.png'),
      require('../assets/Clothing_Icons/white_buttonup.png'),
      require('../assets/Clothing_Icons/white_shirt.png'),
      require('../assets/Clothing_Icons/white_sweater.png'),
      require('../assets/Clothing_Icons/yellow_buttonup.png'),
      require('../assets/Clothing_Icons/yellow_shirt.png'),
      require('../assets/Clothing_Icons/yellow_sweater.png'),
      require('../assets/Clothing_Icons/black_jeans.png'),
      require('../assets/Clothing_Icons/black_joggers.png'),
      require('../assets/Clothing_Icons/black_skirt.png'),
      require('../assets/Clothing_Icons/blue_skirt.png'),
      require('../assets/Clothing_Icons/colored_jeans.png'),
      require('../assets/Clothing_Icons/darkwash_jeans.png'),
      require('../assets/Clothing_Icons/gray_joggers.png'),
      require('../assets/Clothing_Icons/green_skirt.png'),
      require('../assets/Clothing_Icons/khaki_jeans.png'),
      require('../assets/Clothing_Icons/lightwash_jeans.png'),
      require('../assets/Clothing_Icons/mediumwash_jeans.png'),
      require('../assets/Clothing_Icons/orange_skirt.png'),
      require('../assets/Clothing_Icons/pink_skirt.png'),
      require('../assets/Clothing_Icons/purple_skirt.png'),
      require('../assets/Clothing_Icons/red_skirt.png'),
      require('../assets/Clothing_Icons/white_skirt.png'),
      require('../assets/Clothing_Icons/yellow_skirt.png'),
      require('../assets/Clothing_Icons/black_boots.png'),
      require('../assets/Clothing_Icons/black_dress_shoes.png'),
      require('../assets/Clothing_Icons/black_tennis_shoes.png'),
      require('../assets/Clothing_Icons/brown_dress_shoes.png'),
      require('../assets/Clothing_Icons/colored_tennis_shoes.png'),
      require('../assets/Clothing_Icons/slides.png'),
      require('../assets/Clothing_Icons/white_tennis_shoes.png'),
      require('../assets/Clothing_Icons/blue_tennis_shoes.png'),
      require('../assets/Clothing_Icons/green_tennis_shoes.png'),
      require('../assets/Clothing_Icons/orange_tennis_shoes.png'),
      require('../assets/Clothing_Icons/pink_tennis_shoes.png'),
      require('../assets/Clothing_Icons/purple_tennis_shoes.png'),
      require('../assets/Clothing_Icons/red_tennis_shoes.png'),
      require('../assets/Clothing_Icons/yellow_tennis_shoes.png'),

    ]),

    await Font.loadAsync({
      'AbrilFatface-Regular': require('../assets/fonts/AbrilFatface-Regular.ttf'),
      'Pala': require('../assets/fonts/pala.ttf') 
    });

    this.setState({ fontLoaded: true });
  }

  buttonTrigger() {
    this.props.navigation.navigate('Selection')
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          
                <View style={styles.heading}>
                    <View>
                      <Text style = {styles.headingText1}>Clothes</Text>
                      <Text style = {styles.headingText2}>Encounters</Text>
                    </View>

                <Text style = {styles.loweredText}>Real Clothes in a Virtual World</Text>
                </View>
              
            <View style={styles.ImageContainer}>
              <Image
              style={styles.Image}
              source={require('../assets/Shirt.png')}/>
            </View>
            
            <TouchableHighlight 
                  style={styles.button}
                  onPress={this.buttonTrigger}
                  underlayColor = "white">

                <Text style = {{color: 'white'}}> Start Now </Text>

            </TouchableHighlight>
            

        </View>
      );
   } else {
    return <AppLoading />;
   }
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  heading: {
    flex: 12,
    alignItems: 'center',
  },
  headingText1: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    marginTop: 22,
    fontFamily: 'AbrilFatface-Regular',
    textAlign: 'center',
  },
  headingText2: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    fontFamily: 'AbrilFatface-Regular',
    textAlign: 'center',
  },

  loweredText: {
    fontFamily: 'Pala',
    textAlign: 'center',
  },
  ImageContainer:{
    flex:20,
    alignItems: 'center',
  },
  Image: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
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
    alignItems: 'center',
	}
});
