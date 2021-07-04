import React, { Component, useState } from 'react';
import { Modal, NativeModules, Platform, StatusBar, SafeAreaView, StyleSheet, Text, View, Dimensions, Image, Button, ScrollView, FlatList, TouchableOpacity, Touchable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../constant/color'
import Slide from './Slide';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchPosts, fetchUser } from '../../redux/actions/index'

const STATUSBAR_HEIGHT = 20
export class FeedScreen extends Component {
    componentDidMount() {
        this.props.fetchUser()
        firebase.firestore()
            .collectionGroup("posts")
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                this.setState({ post: posts })
            })
    }
    constructor(props) {
        super(props)
        this.state = {
            post: []
        }
    }
    render() {

        const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

        return (
            <SafeAreaView>
                <View style={{ height: windowHeight * 0.10, paddingTop: STATUSBAR_HEIGHT }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Add Post")}>
                        <Text>
                            ADD POST
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Search")}>
                        <Text>
                            SEARCH USER
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={this.state.post}
                    style={{ width: windowWidth * 0.9, height: windowHeight * 0.85, alignSelf: "center" }}
                    renderItem={({ item }) => {
                        return <Slide data={item}></Slide>
                    }}
                />
            </SafeAreaView>

        )
    }
}

const mapStateToProps = (store) => ({
    posts: store.userState.posts,
    profile: store.userState.profile
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchPosts, fetchUser }, dispatch);
export default connect(mapStateToProps, mapDispatchProps)(FeedScreen)
// export default FeedScreen