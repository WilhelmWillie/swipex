import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Modal,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Linking
} from 'react-native'

export default class DetailModal extends Component {
  state = {
  }

  render() {
    const card = this.props.card

    if (card === undefined) {
      return (<View></View>)
    }

    return (
      <Modal animationType={'fade'} transparent={false} visible={this.props.detailVisible}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.card}>
              <Image
                style={[styles.image, {width: card.image.width, height: card.image.height}]}
                source={{uri: card.link}}
                resizeMode='contain'
              />
            </View>

            <Text style={styles.title}>{card.title}</Text>

            <TouchableHighlight
              onPress={() => {
                Linking.openURL(card.link)
              }}
            >
              <Text>Open URL</Text>
            </TouchableHighlight>


          </View>
        </ScrollView>

        <TouchableHighlight
          style={styles.closeDetail}
          onPress={this.props.toggleDetail}
        >
          <Text></Text>
        </TouchableHighlight>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 30
  },
  card: {
    flex: 1,
    height: 500,
    width: '100%',
    borderColor: '#393E41',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden'
  },
  title: {
    fontSize: 22,
    padding: 15
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#393E41'
  },
  closeDetail: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: 'lightblue',
    top: 20,
    right: 20,
    position: 'absolute'
  }
})
