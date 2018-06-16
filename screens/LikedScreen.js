import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import LikedItem from '../components/LikedItem'

export default class LikedScreen extends Component {
  static navigationOptions = {
    title: 'SwipeX'
  }

  state = {
  }

  _keyExtractor = (item, index) => item.link;

  _renderItem = ({item}) => (
    <LikedItem item={item} key={item.link} />
  )

  render() {
    const liked = this.props.navigation.getParam('liked')

    return (
      <View style={styles.container}>
        <FlatList
          data={liked}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          style={{
            height: '100%'
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
