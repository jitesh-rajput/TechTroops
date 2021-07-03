import React, { Component, useEffect, useState } from 'react';
import { Modal, NativeModules, Platform, StatusBar, SafeAreaView, StyleSheet, Text, View, Dimensions, Image, Button, ScrollView, FlatList, TouchableOpacity, Touchable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import color from '../../constant/color';
import Pdf from 'react-native-pdf';
import firebase from 'firebase';
import { SearchBar } from 'react-native-elements';
import { ShowPdf } from './ShowPdf';
import * as Opensnything from 'react-native-openanything'
const { StatusBarManager } = NativeModules;
//const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const STATUSBAR_HEIGHT = 20

export default class Ebooks extends Component {
    componentDidMount() {
        firebase.firestore()
            .collectionGroup("EBooks")
            .get()
            .then((snapshot) => {
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
            books: [],
            search: ""
        }
    }
    render() {
        const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

        const fetchBook = (search) => {
            this.setState({ search: search })
            firebase.firestore()
                .collection('EBooks')
                .where('bname', '>=', search)
                .get()
                .then((snapshot) => {
                    let books = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return { id, ...data }
                    })
                    this.setState({ books: books })
                })
        }

        function Slide({ data }) {
            const source = { uri: data.book }
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
                            onPress={() => ShowPdf(data.book)}
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
                <SearchBar
                    placeholder="Search Book"
                    onChangeText={(search) => { fetchBook(search) }}
                    value={this.state.search}
                />
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
