import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native'

import DetailModal from '../components/DetailModal'
import LikedItem from '../components/LikedItem'

export default class LikedScreen extends Component {
  static navigationOptions = {
    title: 'SwipeX'
  }

  state = {
    detailVisible: false,
    detailCard: undefined
  }

  _keyExtractor = (item, index) => item.link;

  _renderItem = ({item}) => (
    <LikedItem
      item={item}
      key={item.link}
      viewDetail={() => {
        this._viewDetail(item)
      }}
    />
  )

  _viewDetail = (item) => {
    this.setState({
      detailVisible: true,
      detailCard: item
    })
  }

  closeDetail = () => {
    this.setState({
      detailVisible: false
    })
  }

  render() {
    const liked = this.props.navigation.getParam('liked').reverse()

    return (
      <View style={styles.container}>
        <DetailModal
          detailVisible={this.state.detailVisible}
          closeDetail={this.closeDetail}
          card={this.state.detailCard}
        />

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
})
