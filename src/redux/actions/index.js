import firebase from "firebase"
import { USER_STATE_CHANGE, USER_POST_STATE_CHANGE, GET_BOOKS } from "../constants/index"

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    console.log("Snap shot data", snapshot.data())
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data() })
                }
                else {
                    console.log("Does not work ")
                }
            })
    })
}

export function fetchUserPosts() {
    return ((dispatch) => {
        firebase.firestore()
            .collection('posts')
            .where('user_id', '==', firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                console.log(posts)
                dispatch({ type: USER_POST_STATE_CHANGE, posts })
            })
    })
}

export function fetchPosts() {
    return ((dispatch) => {
        firebase.firestore()
            .collectionGroup("posts")
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                console.log(posts)
            })
    })
}

export function GetBooks() {
    firebase.firestore()
        .collectionGroup("EBooks")
        .get()
        .then((snapshot) => {
            console.log(snapshot)
            books = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data }
            })
            console.log(books)
            dispatch({ type: GET_BOOKS, books })
        })
}