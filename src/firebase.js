import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeiiRmjKPxWcabThSGlrQqsjsjuTPy6LU",
  authDomain: "twitter-clone-e3c8d.firebaseapp.com",
  projectId: "twitter-clone-e3c8d",
  storageBucket: "twitter-clone-e3c8d.appspot.com",
  messagingSenderId: "685505429713",
  appId: "1:685505429713:web:aea5e3a18a857e9ad605f0",
  measurementId: "G-1LPJZK597V",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = firebaseApp.firestore();
export default db;
