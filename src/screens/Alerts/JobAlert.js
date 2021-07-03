import React, { Component, useState } from 'react';
import { Modal, NativeModules, Platform, StatusBar, SafeAreaView, StyleSheet, Text, View, Dimensions, Image, Button, ScrollView, FlatList, TouchableOpacity, Touchable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const STATUSBAR_HEIGHT = 20
import Slide from './Slide';

export default function JobAlert({ navigation }) {
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
    console.log(navigation)
    const slideList = Array.from({ length: 30 }).map((_, i) => {
        return {
            id: i,
            image: `https://picsum.photos/1440/2842?random=${i}`,
            title: `This is the Job title ! ${i + 1}`
        };
    });

    return (
        <SafeAreaView>
            <View style={{ height: windowHeight * 0.10, paddingTop: STATUSBAR_HEIGHT }}>
                <Text style={{ fontSize: 30, alignSelf: "center" }}>JOB</Text>
            </View>

            <FlatList
                data={slideList}
                style={{ flex: 0.1 }}
                style={{ flex: 0.1, width: windowWidth * 0.9, height: windowHeight * 0.85, alignSelf: "center" }}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                width: windowWidth * 0.8, height: windowHeight * 0.3,
                                backgroundColor: '#e8e8e8',
                                padding: 5,
                                borderRadius: 10,
                                margin: 20,
                                borderWidth: 1,
                                borderColor: "black",
                                alignSelf: "center",
                                flexDirection: "column",
                            }}
                        >
                            <TouchableOpacity onPress={() => navigation.navigate('Job Detail')}>
                                <View style={{ felx: 0, flexDirection: "row" }}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ width: 80, height: 100, borderRadius: 5, flex: 1 }}
                                    ></Image>
                                    <Text style={{ fontSize: 24, padding: 10, flex: 2, width: 80 }}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />

        </SafeAreaView>

    )
}

