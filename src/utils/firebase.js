// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs6MnaCEULndd-vUX9tavQLJTYnF3lLOE",
  authDomain: "netflixgpt-f4ebe.firebaseapp.com",
  projectId: "netflixgpt-f4ebe",
  storageBucket: "netflixgpt-f4ebe.appspot.com",
  messagingSenderId: "1000164827408",
  appId: "1:1000164827408:web:829a8d6f528ebca2a04595",
  measurementId: "G-H1L0TLY09J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
