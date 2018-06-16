import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Button,
  StyleSheet
} from 'react-native';

import GetXModal from '../components/GetXModal'
import DetailModal from '../components/DetailModal'
import SwipeCard from '../components/SwipeCard'
import Keys from '../config/ApiKeys'

export default class SwipeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state
    return {
      title: 'SwipeX',
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
    x: undefined,
    modalVisible: true,
    detailVisible: false,
    cards: [],
    liked: []
  }

  getNewCards = () => {
    // https://www.googleapis.com/customsearch/v1?q=cats&cx=007427109324133697612%3Ayyar-3xgaru&key={YOUR_API_KEY}
    const base = 'https://www.googleapis.com/customsearch/v1'
    const cx = Keys.googleImagesCx
    const apiKey = Keys.googleImagesApiKey
    const imagesUrl = `${base}?q=${this.state.x}&cx=${cx}&searchType=image&key=${apiKey}`
  
    fetch(imagesUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          cards: responseJson.items
        })
      });
  }

  updateX = (newX) => {
    this.setState({
      x: newX
    }, this.getNewCards);
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  toggleDetail = () => {
    this.setState({
      detailVisible: !this.state.detailVisible
    })
  }

  like = () => {
    const cards = this.state.cards;
    const likedCard = cards.pop();

    const liked = this.state.liked;
    liked.push(likedCard);

    this.setState({
      cards: cards,
      liked: liked
    })
  }

  gotoLikes = () => {
    this.props.navigation.navigate('Liked', { liked: this.state.liked })
  }

  componentDidMount() {
    this.getNewCards()

    this.props.navigation.setParams({
      gotoLikes: this.gotoLikes
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
          toggleDetail={this.toggleDetail}
          card={this.state.cards[this.state.cards.length-1]} 
        />

        <View style={styles.card}>
          <SwipeCard 
            card={this.state.cards[this.state.cards.length-1]} 
            handleTap={this.toggleDetail}
          />
        </View>

        <View style={styles.actions}>
          <TouchableHighlight style={styles.dislike} onPress={this.like}>
            <Text style={styles.buttonText}>👎</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.like} onPress={this.like}>
            <Text style={styles.buttonText}>👍</Text>
          </TouchableHighlight>
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
  card: {
    height: '80%',
    width: '100%'
  },
  actions: {
    flexBasis: 50,
    paddingTop: 20,
    width: '80%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  dislike: {
    flexBasis: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E94F37',
    alignItems: 'center',
    overflow: 'hidden'
  },
  like: {
    flexBasis: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'green',
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonText: {
    textAlign: 'center',
    color: '#05668D',
    lineHeight: 64,
    fontSize: 24
  }
}); 