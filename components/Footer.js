import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Footer extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.button1}>
                <Image style={styles.images} source={{uri: "https://i.imgur.com/sWhw462.png"}} />
                </View>
                <View style={styles.button2}>
                <Image style={styles.images} source={{uri: "https://i.imgur.com/gV10qTP.png"}} />
                </View>
                <View style={styles.button3}>
                <Image style={styles.images} source={{uri: "https://i.imgur.com/0QJXdkM.png"}} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 0.6,
      flexDirection: "row",
      paddingTop: 10,
      opacity: 0.8
    },
    button1: {
      flex: 1,
      alignItems: "flex-end",
    },
    button2: {
      flex: 1,
      alignItems: "center"
    },
    button3: {
      flex: 1,
      alignItems: "flex-start"
    },
    images: {
      width: 25,
      height: 25
    }
  })