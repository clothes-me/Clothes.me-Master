import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Button, StyleSheet} from 'react-native';

export default class SelectionScreen extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Button
                onPress={() => {this.setModalVisible(false)
                }}
                title="Close"
                color="#0000ff"
                
/>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight 
          onPress={() => {
            this.setModalVisible(true);
          }}>
                <Button
                onPress={() => {this.setModalVisible(true)
                }}
                title="Open"
                color="#0000ff"
                
/>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
