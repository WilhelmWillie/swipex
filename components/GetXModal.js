import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  Modal, 
  View, 
  TextInput, 
  TouchableHighlight 
} from 'react-native';

export default class GetXModal extends Component {
  state = {
    getXInput: '',
    invalidInput: false
  }

  render() {
    // Changes the style of the x input textbox if we get bad input
    const xInputStyle = (this.state.invalidInput) ? ([styles.xInput, styles.badInput]) : (styles.xInput)

    return (
      <Modal animationType={'fade'} transparent={false} visible={this.props.modalVisible}>
        <View style={styles.getXModal}>
          <Text style={styles.title}>SwipeX</Text>

          <Text style={styles.intro}>
            Get started with SwipeX by inputting what you want to swipe for
          </Text>

          <TextInput 
            placeholder='Dogs, cats, cars...'
            style={xInputStyle}
            value={this.state.newTermInput} 
            onChangeText={(text) => {
              this.setState({
                getXInput: text
              });
            }}
          />

          <TouchableHighlight 
            style={styles.setXButton}
            underlayColor='#E94F37'
            onPress={
              () => {
                if (this.state.getXInput !== '') {
                  this.props.toggleModal()
                  this.props.updateX(this.state.getXInput)

                  this.setState({
                    invalidInput: false
                  });
                } else {
                  this.setState({
                    invalidInput: true
                  });
                }
              }
            }
          >
            <Text style={styles.setXButtonText}>Start Swiping</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  } 
}

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontSize: 64,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '700'
  },
  intro: {
    color: '#FFFFFF',
    fontSize: 18,
    padding: 20,
    textAlign: 'center',
    fontWeight: '700'
  },
  getXModal: {
    flex: 1,
    backgroundColor: '#427AA1',
    justifyContent: 'center',
    alignContent: 'center'
  },
  xInput: {
    backgroundColor: '#ffffff',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    padding: 20,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18
  },
  badInput: {
    borderColor: '#E94F37',
    borderWidth: 2
  },
  setXButton: {
    backgroundColor: '#E94F37',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 20
  },
  setXButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700'
  }
}); 