import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBuLWHRydL5Mp_YLDGjFBWBHJdhlCH-Hd0",
    authDomain: "nabilah-629f0.firebaseapp.com",
    databaseURL: "https://nabilah-629f0.firebaseio.com",
    projectId: "nabilah-629f0",
    storageBucket: "nabilah-629f0.appspot.com",
    messagingSenderId: "172769865085",
    appId: "1:172769865085:web:652463e6d4ce49e9eaf014",
    measurementId: "G-PKDLV3TXT2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const storage = firebase.storage();
  const firestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {storage, firestore, timestamp}
 