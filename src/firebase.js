import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB763h8-U9E7e9m8WAIque-pc8dIasSv_I",
  authDomain: "lowbeat-12107.firebaseapp.com",
  databaseURL: "https://lowbeat-12107.firebaseio.com",
  projectId: "lowbeat-12107",
  storageBucket: "lowbeat-12107.appspot.com",
  messagingSenderId: "342001659571",
  appId: "1:342001659571:web:fdc329fe8fc624c0e40ac6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();

export {auth, firebase, db}