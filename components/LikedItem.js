import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

export default class LikedItem extends Component {
  render() {
    const item = this.props.item

    return (
      <TouchableWithoutFeedback onPress={this.props.viewDetail}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: item.link}}
            key={item.link}
            resizeMode='cover'
          />

          <View style={styles.text}>
            <Text>{item.title}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  image: {
    flexBasis: 100,
    alignSelf: 'center',
    backgroundColor: '#393E41',
    width: 100,
    height: 100
  },
  text: {
    flex: 1,
    padding: 15,
    width: '100%',
    height: 'auto',
  }
});
