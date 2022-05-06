// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiJwctOmHqpMhcHZJhPOOoZevvZL4Toyc",
  authDomain: "challenge-204c5.firebaseapp.com",
  projectId: "challenge-204c5",
  storageBucket: "challenge-204c5.appspot.com",
  messagingSenderId: "41286767509",
  appId: "1:41286767509:web:3577d0ad8fcd14284d9c9c",
  measurementId: "G-TMNNWDHCHH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
