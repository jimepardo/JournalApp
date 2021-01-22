import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

 const firebaseConfig = {
    apiKey: "AIzaSyA1Hs3MAuYiymn6FIDB_z77-fwJETeeTtw",
    authDomain: "react-app-cursos-b8f98.firebaseapp.com",
    projectId: "react-app-cursos-b8f98",
    storageBucket: "react-app-cursos-b8f98.appspot.com",
    messagingSenderId: "1087292534522",
    appId: "1:1087292534522:web:537decb1791cc1abe12343"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
  const githubAuthProvider = new firebase.auth.GithubAuthProvider();
  
  export {
      db,
      googleAuthProvider,
      twitterAuthProvider,
      githubAuthProvider,
      firebase
  }