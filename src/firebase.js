// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
