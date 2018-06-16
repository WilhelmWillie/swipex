import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class LikedScreen extends Component {
  static navigationOptions = {
    title: 'SwipeX'
  }

  state = {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Liked</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
}); 