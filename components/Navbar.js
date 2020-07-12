import React, { Component } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default class Navbar extends Component {
    render() {
        return (
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="#6e7697" />
                <Entypo name="dots-two-vertical" size={24} color="#6e7697" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        alignItems: "flex-end"
    }
})