// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB9_0Q_wv0UuyeFoOs_Xe5NflOCSTzwag",
  authDomain: "macro-tale.firebaseapp.com",
  projectId: "macro-tale",
  storageBucket: "macro-tale.firebasestorage.app",
  messagingSenderId: "799868493082",
  appId: "1:799868493082:web:41c822e12aeb470aa7e0a3",
  measurementId: "G-S39L5BY5QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);