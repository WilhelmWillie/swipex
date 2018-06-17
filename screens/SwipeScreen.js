import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Button,
  StyleSheet
} from 'react-native'

import GetXModal from '../components/GetXModal'
import DetailModal from '../components/DetailModal'
import SwipeCard from '../components/SwipeCard'
import SwipeCards from 'react-native-swipe-cards'

import Keys from '../config/ApiKeys'

export default class SwipeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state
    return {
      title: 'SwipeX',
      headerLeft: (
        <Button
          title='New X'
          onPress={() => {
            params.getNewX()
          }}
        />
      ),
      headerRight: (
        <Button
          title='Likes'
          onPress={() => {
            params.gotoLikes()
          }}
        />
      )
    }
  }

  state = {
    x: '',
    modalVisible: true,
    detailVisible: false,
    cards: [],
    liked: [],
    cardDetail: undefined,
    nextStartIndex: 1
  }

  getNewCards = () => {
    // https://www.googleapis.com/customsearch/v1?q=cats&cx=007427109324133697612%3Ayyar-3xgaru&key={YOUR_API_KEY}
    const base = 'https://www.googleapis.com/customsearch/v1'
    const cx = Keys.googleImagesCx
    const apiKey = Keys.googleImagesApiKey
    const imagesUrl = `${base}?q=${this.state.x}&cx=${cx}&searchType=image&start=${this.state.nextStartIndex}&key=${apiKey}`

    fetch(imagesUrl)
      .then(response => response.json())
      .then(responseJson => {
        const cards = this.state.cards
        this.setState({
          cards: responseJson.items,
          nextStartIndex: responseJson.queries.nextPage[0].startIndex
        })
      })
  }

  updateX = (newX) => {
    this.setState({
      x: newX
    }, this.getNewCards)
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }

  toggleDetail = (card) => {
    this.setState({
      detailVisible: !this.state.detailVisible
    })
  }

  openDetail = (card) => {
    this.setState({
      cardDetail: card,
      detailVisible: true
    })
  }

  closeDetail = () => {
    this.setState({
      detailVisible: false
    })
  }

  like = (likedCard) => {
    const liked = this.state.liked
    liked.push(likedCard)

    this.setState({
      liked: liked
    })
  }

  cardRemoved = (index) => {
    if (this.state.cards.length - index == 1) {
      this.getNewCards()
    }
  }

  gotoLikes = () => {
    this.props.navigation.navigate('Liked', { liked: this.state.liked })
  }

  componentDidMount() {
    this.props.navigation.setParams({
      gotoLikes: this.gotoLikes,
      getNewX: this.toggleModal
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <GetXModal
          modalVisible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          updateX={this.updateX}
        />

        <DetailModal
          detailVisible={this.state.detailVisible}
          closeDetail={this.closeDetail}
          card={this.state.cardDetail}
        />

        <View style={styles.cardContainer}>
          <SwipeCards
            cards={this.state.cards}
            loop={true}

            renderCard={(card) => (
              <SwipeCard
                card={card}
                handleTap={() => {
                  this.openDetail(card)
                }}
              />
            )}

            renderNoMoreCards={() => (
              <Text>No more cards</Text>
            )}

            handleYup={this.like}

            cardRemoved={this.cardRemoved}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    height: '100%',
    width: '100%'
  },
  buttonText: {
    textAlign: 'center',
    color: '#05668D',
    lineHeight: 64,
    fontSize: 24
  }
})
