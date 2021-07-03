import React from 'react'
import firebase from 'firebase';
require('firebase/firestore')
require('firebase/firebase-storage')

export function UploadBlog(params) {
    const { detail, navigation, title, website } = params;
    firebase
        .firestore()
        .collection('Blogs')
        .add(
            {
                user_id: firebase.auth().currentUser.uid,
                btitle: title,
                bdetail: detail,
                bwebsite: website,
                creation: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        .then(() => {
            console.log("Blog uploaded")
            navigation.goBack()
        }
        )
}
