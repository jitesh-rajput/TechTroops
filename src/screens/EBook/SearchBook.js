import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements';
import firebase from 'firebase';
require('firebase/firestore');

export default class SearchBook extends React.Component {
    constructor(props) {
        super(porps)
        this.state = {
            books: []
        }
        console.log("EBook search run")
    };

    render() {
        const fetchBook = (search) => {
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
        return (
            <View>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={(search) => { fetchBook(search) }}
                    value={search}
                />
                <FlatList
                    numColumns={1}
                    horizontal={false}
                    data={this.state.books}
                    renderItem={({ item }) => {
                        <TouchableOpacity
                            onPress={() => { console.log("Book Find") }}>
                            <View
                                style={{
                                    backgroundColor: '#e8e8e8',
                                    flexDirection: "row"
                                }}
                            >
                                <View style={{ padding: 5, flexDirection: "column" }}>
                                    <Image
                                        source={{ uri: item.cover_photo }}
                                        style={{ width: 120, height: 180, }}
                                    ></Image>
                                </View>
                                <View style={{ flexDirection: "column", }}>
                                    <Text style={{ fontSize: 20, padding: 10, width: 130 }} >{item.bname}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }}
                >

                </FlatList>
            </View>
        );
    }
}