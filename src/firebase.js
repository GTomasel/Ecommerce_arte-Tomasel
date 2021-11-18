import firebase from 'firebase/app'

import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyAydMg47CL_T2KyxvbAZRhWa7JyoqGiBIk",
    authDomain: "ecommerce-photog.firebaseapp.com",
    projectId: "ecommerce-photog",
    storageBucket: "ecommerce-photog.appspot.com",
    messagingSenderId: "746977371138",
    appId: "1:746977371138:web:b57ba0c1420e1ccc82731b"

}

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)