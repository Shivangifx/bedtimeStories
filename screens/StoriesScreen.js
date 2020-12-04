import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import db from '../config'
import { Header, Card } from 'react-native-elements'
import { SearchBar, Icon } from 'react-native-elements'


export default class StoriesScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stories: [],
            search: '',
            allSearches: []
        }
        this.story = null
    }



    getData = () => {
        this.story = db.collection('stories')
            .onSnapshot((snapshot) => {
                var stories = snapshot.docs.map((doc) => doc.data())
                this.setState({
                    stories: stories
                });
            })
    }

    updateSearch(){
        console.log(this.state)
        db.collection('stories').where("StoryName", '==', this.state.search).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    // console.log(doc.data())
                    this.setState({
                        stories: doc.data(),
                        allSearches:doc.data()
                    })
                    console.log(this.state)
                })
            })

    };





    componentDidMount() {
        this.getData()
        console.log(this.state)
    }
    componentWillUnmount() {
        this.story
        console.log(this.state)
    }
    componentDidUpdate() {
    }


    render() {
        const { search } = this.state;
        const icon =
            <Icon
                name='search'
                onPress={() => {
                    console.log(this.state)
                    this.updateSearch()
                }}
            />
            const s = this.state.allSearches
        return (
            <ScrollView>
                <View>
                    <Header
                        centerComponent={{ text: "Stories", style: { color: '#90A5A9', fontSize: 30, fontWeight: "bold", } }}
                        backgroundColor="#eaf8fe"
                    />
                    <View>
                        <Card>
                            <SearchBar
                                placeholder="Search..."
                                onChangeText={(text) => {
                                    this.setState({
                                        search: text
                                    })
                                }}
                                value={search}
                                searchIcon={icon}
                            />
                            <FlatList
                                data={this.state.stories}
                                //renderItem={this.renderItem}
                                renderItem={({ item }) => (
                                    <Card>
                                        <View>
                                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Story', { "details": item }) }}>
                                                <h1>{item.StoryName}</h1>
                                            </TouchableOpacity>
                                            <h2>{item.Author}</h2>
                                        </View>
                                    </Card>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                                extraData={s}
                                //refreshing={true}
                            />

                        </Card>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
