// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6_fxC5q-TkZcUl8d39U76QsjCknVmZi4",
  authDomain: "shaggel-marioplan.firebaseapp.com",
  projectId: "shaggel-marioplan",
  storageBucket: "shaggel-marioplan.firebasestorage.app",
  messagingSenderId: "265094867817",
  appId: "1:265094867817:web:2d372c18ee360bb098ebf8",
  measurementId: "G-SZXP7XNW2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;