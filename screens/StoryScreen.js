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
    ScrollView
} from 'react-native';
import { Card, Header, Icon } from 'react-native-elements';

import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class StoryScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserId: firebase.auth().currentUser.email,
            StoryName: this.props.navigation.getParam("details")["StoryName"],
            Author: this.props.navigation.getParam("details")["Author"],
            Body: this.props.navigation.getParam("details")["Body"],
            Conclusion: this.props.navigation.getParam("details")["Body"],




        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flex: 0.1 }}>
                        <Header
                            leftComponent={<Icon name='arrow-left' type='feather' color='#696969' onPress={() => this.props.navigation.goBack()} />}
                            centerComponent={{ text: "Complete Story", style: { color: '#90A5A9', fontSize: 30, fontWeight: "bold", } }}
                            backgroundColor="#eaf8fe"
                        />
                    </View>
                    <View style={{ flex: 0.8 }}>
                        <Card>
                            <Card>
                                <Text style={{ fontWeight: 'bold',fontSize:30,textAlign:'center' }}>{this.state.StoryName} by {this.state.Author}</Text>
                            </Card>
                            <Card>
                                <Text style={{ fontWeight: 'bold' }}>{this.state.Body}</Text>
                            </Card>
                            <Card>
                                <Text style={{ fontWeight: 'bold' }}>{this.state.Conclusion}</Text>
                            </Card>

                        </Card>
                    </View>
                </View>
            </ScrollView>
        )
    }

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'orange',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8
        },
        elevation: 16
    }
})