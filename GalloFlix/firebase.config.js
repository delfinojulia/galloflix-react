// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn_xLskFUxHqSl0EX3hvZ2l-dLZVh4Ih4",
  authDomain: "galloflix-1cdee.firebaseapp.com",
  projectId: "galloflix-1cdee",
  storageBucket: "galloflix-1cdee.appspot.com",
  messagingSenderId: "956270615389",
  appId: "1:956270615389:web:a8784d4855bad6ff0266b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);