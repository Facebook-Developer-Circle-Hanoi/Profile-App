import React, { Component } from 'react';
import {View, Image, FlatList, StyleSheet} from 'react-native';
import Data from '../data/Data';

export default class ImageFlatList extends Component {
    render() {
        return(
            <View style={styles.imagesLayout}>
                <FlatList
                    data={Data}
                    renderItem={({item}) => {
                        return(
                            <Image style={styles.images}
                            source={{uri: item.image}}
                            key={item.id} />
                        )
                    }}
                >
                </FlatList>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    images: {
      height: 240,
      borderRadius: 14,
      marginBottom: 10,
    },
    imagesLayout: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        shadowColor: "#333",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    
        elevation: 4,
    },
})