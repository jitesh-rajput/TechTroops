import React, { Component, useState } from 'react';
import { Modal, NativeModules, Platform, StatusBar, SafeAreaView, StyleSheet, Text, View, Dimensions, Image, Button, ScrollView, FlatList, TouchableOpacity, Touchable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const { StatusBarManager } = NativeModules;
//const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
const STATUSBAR_HEIGHT = 20

export default function JobDetail({ navigation }) {
    // constructor(props) {
    //     super(props)

    // }
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

    return (
        <SafeAreaView>
            <View style={{ paddingTop: 20, width: windowWidth * 0.9, height: windowHeight * 0.9, alignSelf: "center", backgroundColor: '#e8e8e8' }}>
                <View>
                    <View style={{ padding: 5, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "black" }}>


                        <Text style={{ fontSize: 24, paddingLeft: 10, paddingBottom: 30, fontWeight: "bold" }}> Infosys On Campus Heiring freshers Student 2020-2021</Text>
                    </View>
                    <Text style={{ fontSize: 18, paddingBottom: 30 }}> The company is looking the new hires in the digital space, including cloud computing,
                        data and analytics, artificial intelligence, open-source technologies, and enterprise services, to support some of the world'
                        gest organizations navigate their digital journeys.
                    </Text>
                    <ScrollView>
                        <Text style={{ fontSize: 18 }}>Infosys Eligibility Criteria 2020- 2021
                            Academic Qualification:
                            Class 10th Standard : 60%(6 CGPA) or Above
                            Class 12th Standard : 60%(6 CGPA) or Above
                            College Graduation : 65%(6.5 CGPA) or Above
                            Eligible Passing Year:
                            2020
                            College Qualification Required:
                            B.E.
                            B.Tech.(All Branches)
                            MCA
                            M.sc
                            BSc/BCA
                            Eligibile Branches:
                            All Engineering Branches are available
                            Other Important Criteria:
                            There should be No Backlogs at the time of Selection Process.
                            The education gap should be of maximum 2 years,if any, is allowed between 10th and graduation.
                            Candidates who have participated in any Infosys Interview process in the last 9 Months are not eligible.
                            Should be from a Full-time Degree course recognized by the Central/State Government of India.
                            The candidates must not have any pending attendance requirement with the college.

                        </Text>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>

    )
}
