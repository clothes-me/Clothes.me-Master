import React, { Component } from 'react'
import {StyleSheet, TouchableOpacity, View, Image, FlatList, Modal, Dimensions} from 'react-native'

const ITEM_WIDTH = Dimensions.get('window').width


export default class ModalGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
       modalVisible: false,
       columns: this.props.columnNumber,
       displayImage: this.props.imagedata[0].imagePath,
       }
  }

 render() {
   const {columns} = this.state

   return (
     <View style={styles.container}>

        <TouchableOpacity
          style ={{ alignItems: "center"}}
          onPress={() => {
            this.setState({modalVisible: true});
          }}>

          <Image style={{width: 90, height: 90, resizeMode: 'contain'}} 
                 source = {this.state.displayImage}/>
        </TouchableOpacity>

      
      <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          >

          <View style={{marginTop: 22}}>
              <FlatList
                numColumns = {columns}
                data = {this.props.imagedata}
                renderItem={({ item }) => {
                  return (
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({
                              displayImage: item.imagePath,
                              modalVisible: false
                            }); 
                            this.props.scoreChanger(this.props.score, item.score)
                          }}>
                          
                          <Image style={{width: (ITEM_WIDTH-(20*columns))/columns, height: 100, resizeMode: 'contain', margin: 10}} 
                              source = {item.imagePath}/>
                              
                        </TouchableOpacity>
                    );
                  }}
                keyExtractor={(item, index) => item.reccomendation}
                />

          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',

  },
})