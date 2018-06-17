import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native'

import SwipeCards from 'react-native-swipe-cards'
import SwipeCard from './SwipeCard'

export default class extends Component {
  render () {
    return (
      <SwipeCards
        cards={this.props.cards}

        renderCard={(card) => (
          <SwipeCard
            card={card}
            handleTap={this.props.toggleDetail}
          />
        )}

        renderNoMoreCards={() => (
          <Text>No more cards</Text>
        )}

        handleYup={() => {console.log('yup')}}
        handleNope={() => {console.log('nope')}}
      />
    )
  }
}

const styles = StyleSheet.create({
})
