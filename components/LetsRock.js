import React, { Component } from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

export default class LetsRock extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.image} source={{uri: 'https://media.giphy.com/media/BLE2zK1fWLayk/giphy.gif'}} />
          <Text style={styles.text}>Let’s Rock!</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 'auto',
    width: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { height: 0, width: 0},
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '80%',
    height: '80%',
    borderRadius: 10,
  }
})
