// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd-3BXRJu8BlbzRvaZvuVaSnyMo8S2x7k",
  authDomain: "nextfire-b6605.firebaseapp.com",
  projectId: "nextfire-b6605",
  storageBucket: "nextfire-b6605.appspot.com",
  messagingSenderId: "789172733762",
  appId: "1:789172733762:web:5b1e96df6f6a88c692eadb",
  measurementId: "G-9X9SHPEVLB"
};

// Initialize Firebase
if (!firebase.getApps().length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();