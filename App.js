import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert,TouchableHighlight  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageFlatList from './components/ImageFlatList';
import Theme from './constants/Theme';


export default function App() {
  _onPressFollowButton = () => {
    Alert.alert('Followed');
  }
  _onPressSendButton = () => {
    Alert.alert('Message sended');
  }
  return (
    <View style={styles.container}>
      <Navbar></Navbar>
      <View style={styles.info}>
        <View style={styles.avatar}>
          <Image style={styles.avatarDetail} source={{uri: "https://nhacchuonghinhnen.com/wp-content/uploads/2020/03/hinh-nen-gai-xinh-full-hd-cho-dien-thoai-2-scaled.jpg" }} />
        </View>
        <View style={styles.infoDetail}>
          <View style={styles.name}>
            <Text style={styles.username}>Nam Hong</Text>
            <Text style={styles.description}>CTO Get Ins</Text>
          </View>
          <View style={styles.infoButton}>
            <TouchableHighlight style={styles.followButton} onPress={_onPressFollowButton}>
              <Text style={{color: "#fff", fontSize: 15}}>Follow</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.sendButton} onPress={_onPressSendButton}>
              <MaterialIcons name="send" size={20} color="#fff" />
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={styles.containerCount}>
        <View style={styles.number}>
          <Text style={styles.numberDetail}>210</Text>
          <Text style={styles.numberDetail}>15K</Text>
          <Text style={styles.numberDetail}>605</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentDetail}>Photos</Text>
          <Text style={styles.contentDetail}>Followers</Text>
          <Text style={styles.contentDetail}>Following</Text>
        </View>
      </View>
      <View style={styles.containerMain}>
      <ScrollView contentContainerStyle={{flexGrow: 1, flexDirection: "row"}} showsVerticalScrollIndicator={false}>
        <ImageFlatList></ImageFlatList>
        <ImageFlatList></ImageFlatList>
      </ScrollView>
      </View>
      <Footer></Footer>

    </View>
  );
}

const colorFollow = Theme.COLOR.FOLLOW_COLOR;
const colorSend = Theme.COLOR.SEND_MESSAGE_COLOR;
const colorName = Theme.COLOR.POLO_BLUE_COLOR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerMain: {
    flex: 7,
    flexDirection: "row",
    paddingHorizontal: 10
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "flex-end"
  },
  info: {
    flex: 2,
    flexDirection: "row",
    paddingLeft: 10
  },
  avatar: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  infoDetail: {
    flex: 7,
    paddingTop: 15,
    marginLeft: 10
  },
  name: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 30
  },
  username: {
    fontSize: 22,
    fontWeight: "700",
    color: colorName
  },
  description: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 5,
    color: "#9b9eb0"
  },
  infoButton: {
    flex: 1,
    paddingLeft: 25,
    flexDirection: "row"
  },
  followButton: {
    paddingVertical: 5,
    paddingHorizontal: 30,
    backgroundColor: colorFollow,
    color: "#fff",
    height: 30,
    borderRadius: 50,
    marginRight: 10,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  sendButton: {
    paddingVertical: 5,
    paddingHorizontal: 18,
    backgroundColor: colorSend,
    color: "#fff",
    height: 30,
    borderRadius: 14,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  avatarDetail: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 30
  },
  containerCount: {
    flex: 1
  },
  number: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  numberDetail: {
    fontSize: 22,
    fontWeight: "700",
    color: "#101c3a"
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 8,
    position: "relative",
    top: -5
  },
  contentDetail: {
    fontSize: 14,
    color: "#9b9eb0",
  }
});
