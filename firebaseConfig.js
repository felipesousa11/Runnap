import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyACAX6llOAgv29aPNQG1Z8lbaJcHXhI6YM",
  authDomain: "runnepi.firebaseapp.com",
  projectId: "runnepi",
  storageBucket: "runnepi.appspot.com",
  messagingSenderId: "981054674472",
  appId: "1:981054674472:web:1ba529b7b0282da96e871d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  let storage = firebase.storage();

  export default firebase;