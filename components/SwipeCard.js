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
            style={styles.image}
            source={{uri: card.link}}
            key={card.link}
            resizeMode='cover'
          />

          <View style={styles.textContainer}>
            <Text style={styles.text}>{card.title}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: '100%',
    width: '80%',
    shadowColor: '#000000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 5,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#393E41',
    width: 300,
    height: 300
  },
  textContainer: {
    padding: 15,
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 18,
    fontWeight: '600'
  }
})
