import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDkul_ljz8hTqs7-k4cef_mHNdRFvAwgIg",
    authDomain: "mycryptotracker-19357.firebaseapp.com",
    projectId: "mycryptotracker-19357",
    storageBucket: "mycryptotracker-19357.appspot.com",
    messagingSenderId: "475270824164",
    appId: "1:475270824164:web:7b267c4217bb994251ecf1"
  };

  firebase.initializeApp(firebaseConfig)

  const cryptoFirestore = firebase.firestore()
  const cryptoAuth = firebase.auth()

  export { cryptoFirestore, cryptoAuth}
