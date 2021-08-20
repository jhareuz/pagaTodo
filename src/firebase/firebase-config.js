import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDdGI-BuePYzN3oN6VZRneRMDCjpi4PrJs",
    authDomain: "react-app-curso-d844a.firebaseapp.com",
    projectId: "react-app-curso-d844a",
    storageBucket: "react-app-curso-d844a.appspot.com",
    messagingSenderId: "696698245779",
    appId: "1:696698245779:web:6f06ef6e22620a3145b366"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }