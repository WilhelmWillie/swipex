import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native'

export default class SwipeCard extends Component {
  render () {
    const card = this.props.card

    if (card === undefined) {
      return (<View />)
    }

    return (
      <TouchableWithoutFeedback
        onPress={this.props.handleTap}
      >
        <View style={styles.card}>
          <Image
            style={[styles.image, {width: card.image.width, height: card.image.height}]}
            source={{uri: card.link}}
            key={card.link}
            resizeMode='cover'
          />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderColor: '#393E41',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#393E41'
  }
})
