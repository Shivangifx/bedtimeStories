import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  useWindowDimensions,
  ToastAndroid,
  Platform
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class NewStoryScreen extends Component {
  constructor() {
    super();
    this.state = {
      StoryName: '',
      Author: '',
      Body: '',
      Conclusion: '',
      UserId: firebase.auth().currentUser.email,
      UserName: ''
    }
  }

  showToast = () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show("Your story has been uploaded", ToastAndroid.SHORT)      
    }
  }

  find = (UserId) => {
    db.collection('users').where("emailId", "==", UserId).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            UserName: doc.data().Name
          })
        })
      })
  }

  getUserDetails = (userId) => {
    db.collection("users").where('emailId', '==', userId).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.setState({
            UserName: doc.data().Name
          })
        })
      })
  }

  deletedoc = () => {
    db.collection('stories').where("UserName", '==', '').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const upd = db.collection('stories').doc(doc.id).delete();
        });
      })
  }

  addStory = (StoryName, Author, Body, Conclusion, UserId, UserName) => {
    db.collection('stories').add({
      "StoryName": StoryName,
      "Author": Author,
      "Body": Body,
      "Conclusion": Conclusion,
      "UserId": UserId,
      "UserName": UserName,
    })
  }

  componentDidMount() {
    this.find(this.state.UserId)
    //this.getUserDetails(this.state.UserId)
  }
  componentDidUpdate() {
    console.log(this.state)
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <MyHeader title="WRITE YOUR OWN" navigation={this.props.navigation} />
          <KeyboardAvoidingView>
            <View style={styles.container}>
              <TextInput
                style={styles.StoryName}
                placeholder='Title'
                onChangeText={(text) => {
                  this.setState({
                    StoryName: text
                  })
                }}
              />
              <TextInput
                style={styles.Author}
                placeholder='Author'
                onChangeText={(text) => {
                  this.setState({
                    Author: text
                  })
                }}
              />
              <TextInput
                style={styles.Story}
                placeholder='Introduction / Body'
                multiline={true}
                numberOfLines={10}
                onChangeText={(text) => {
                  this.setState({
                    Body: text
                  })
                }}
              />
              <TextInput
                style={styles.Story}
                placeholder='Conclusion'
                multiline={true}
                numberOfLines={10}
                onChangeText={(text) => {
                  this.setState({
                    Conclusion: text
                  })
                }}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this.showToast()
                  this.addStory(this.state.StoryName, this.state.Author, this.state.Body, this.state.Conclusion, this.state.UserId, this.state.UserName)
                  this.setState({
                    StoryName: ' ',
                    Author: ' ',
                    Body: ' ',
                    Conclusion: ' ',
                  })
                }}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  keyBoardStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 35,
    color: '#1351d8',
    alignItems: 'center',
    textAlign: 'center',
  },

  StoryName: {
    width: "75%",
    height: "5%",
    alignItems: 'center',
    borderColor: '#1351d8',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
  },
  Author: {
    width: "75%",
    height: "5%",
    alignItems: 'center',
    borderColor: '#1351d8',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    margin: 10
  },

  Story: {
    width: "75%",
    height: "17%",
    alignSelf: 'center',
    borderColor: '#1351d8',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#1351d8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20
  },

})
