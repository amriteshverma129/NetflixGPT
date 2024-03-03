// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR2CgzLUbbSYbaktgSuV8UDfDbWPna8pk",
  authDomain: "netflixgpt2-594fb.firebaseapp.com",
  projectId: "netflixgpt2-594fb",
  storageBucket: "netflixgpt2-594fb.appspot.com",
  messagingSenderId: "740957477787",
  appId: "1:740957477787:web:3b6950be9976202bcb9f3e",
  measurementId: "G-PMZWX3BC5V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
