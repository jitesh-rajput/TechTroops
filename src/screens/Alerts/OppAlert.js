import React, { Component, useState } from 'react';
import { Modal, NativeModules, Platform, StatusBar, SafeAreaView, StyleSheet, Text, View, Dimensions, Image, Button, ScrollView, FlatList, TouchableOpacity, Touchable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const { StatusBarManager } = NativeModules;
//const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const STATUSBAR_HEIGHT = 20
export default function OppAlert({ navigation }) {
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

    const slideList = Array.from({ length: 30 }).map((_, i) => {
        return {
            id: i,
            // image: `https://picsum.photos/1440/2842?random=${i}`,
            // username: "Username",
            title: `This is the Block title! ${i + 1}`,
            subtitle: `This is the Blog ${i + 1}!`,
        };
    });

    return (
        <SafeAreaView>
            <View style={{ height: windowHeight * 0.10, paddingTop: STATUSBAR_HEIGHT }}>
                <Text style={{ fontSize: 30, alignSelf: "center" }}>Compitions</Text>
            </View>
            <FlatList
                data={slideList}
                style={{ width: windowWidth * 0.9, height: windowHeight * 0.85, alignSelf: "center" }}
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
                                alignSelf: "center"
                            }}
                        >
                            <TouchableOpacity onPress={() => navigation.navigate("Opp Detail")}>
                                <View>
                                    <Text style={{ fontSize: 24, paddingBottom: 10 }}>{item.title}</Text>
                                    <Text style={{ fontSize: 18 }}>{item.subtitle}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </SafeAreaView>

    )
}

