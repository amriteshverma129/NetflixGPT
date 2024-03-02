// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoyRRn2_f-d2d09OzBjml_paS-C7RrVE8",
  authDomain: "netflixopenai-252d2.firebaseapp.com",
  projectId: "netflixopenai-252d2",
  storageBucket: "netflixopenai-252d2.appspot.com",
  messagingSenderId: "30614124330",
  appId: "1:30614124330:web:acd75e9d65f6a0630e5053",
  measurementId: "G-DX4G2K25T6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
