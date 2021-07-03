import React, { Component, useEffect, useState } from 'react';
import { Modal, NativeModules, Platform, StatusBar, SafeAreaView, StyleSheet, Text, View, Dimensions, Image, Button, ScrollView, FlatList, TouchableOpacity, Touchable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import color from '../../constant/color';
import * as openanything from 'react-native-openanything'
import firebase from 'firebase';
import SearchBook from './SearchBook';
const { StatusBarManager } = NativeModules;
//const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const STATUSBAR_HEIGHT = 20

export default class Ebooks extends Component {
    componentDidMount() {
        firebase.firestore()
            .collectionGroup("EBooks")
            .get()
            .then((snapshot) => {
                console.log(snapshot)
                let books = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                this.setState({ books: books })
            })
    }
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }
    render() {
        console.log(this.state.books)
        const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

        function Slide({ data }) {
            return (
                <View>
                    <View
                        style={{
                            backgroundColor: '#e8e8e8',
                            flexDirection: "row"
                        }}
                    >
                        <View style={{ padding: 5, flexDirection: "column" }}>
                            <Image
                                source={{ uri: data.cover_photo }}
                                style={{ width: 120, height: 180, }}
                            ></Image>
                        </View>
                        <View style={{ flexDirection: "column", }}>
                            <Text style={{ fontSize: 20, padding: 10, width: 130 }} >{data.bname}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 20, alignSelf: "center" }}>
                        <TouchableOpacity
                            onPress={() => openanything.Pdf(data.book)}
                            style={{
                                backgroundColor: color.PRIMARY_COLOR, borderRadius: 5, height: 30, width: windowWidth * 0.7, alignSelf: "center"
                            }}
                        >
                            <Text style={{ color: "white", textTransform: "uppercase", alignSelf: "center", alignContent: "center" }}>Read Book</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        return (
            <SafeAreaView>
                <SearchBook></SearchBook>
                <View style={{ position: "relative" }}>
                    <FlatList
                        data={this.state.books}
                        style={{ paddingTop: 20, width: windowWidth * 0.9, height: windowHeight * 0.8, alignSelf: "center" }}
                        renderItem={({ item }) => {
                            return <Slide data={item} />;
                        }}
                    />
                </View>
            </SafeAreaView>

        )
    }
}
