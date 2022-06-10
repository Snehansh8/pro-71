import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDdS0oYkDY55wDlk2Yu6WVBVyz5nFLUim4",
    authDomain: "e-library-edd85.firebaseapp.com",
    projectId: "e-library-edd85",
    storageBucket: "e-library-edd85.appspot.com",
    messagingSenderId: "875983663569",
    appId: "1:875983663569:web:cb936ef4cb3e29dbc330f0",
    measurementId: "G-T2L5RR8NPV"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
