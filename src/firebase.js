import firebase from "firebase/firebase";
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

const firebaseConfig = {
    apiKey: "AIzaSyAGJTcwXJC1ULpeUSM4nnPvObt1vl3Pw1E",
    authDomain: "forms-1efd5.firebaseapp.com",
    databaseURL: 'https://forms-1efd5-default-rtdb.asia-southeast1.firebasedatabase.app/',
    projectId: "forms-1efd5",
    storageBucket: "forms-1efd5.appspot.com",
    messagingSenderId: "692212749069",
    appId: "1:692212749069:web:cc37a161a4b4cb6d0d9644",
    measurementId: "G-3JVHVXCNTE"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics()
export default firebase