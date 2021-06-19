import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCpDo8CkmluFtvfJgLIdfXCGuiY50UKqFk",
    authDomain: "wheres-waldo-ca65d.firebaseapp.com",
    projectId: "wheres-waldo-ca65d",
    storageBucket: "wheres-waldo-ca65d.appspot.com",
    messagingSenderId: "271162515808",
    appId: "1:271162515808:web:b2e53e4b89de9c4fa2fe05"
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };