// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYaJN92o8SPWAQUi4GdJAhAsrnY_Tu5fE",
  authDomain: "moitllc.firebaseapp.com",
  projectId: "moitllc",
  storageBucket: "moitllc.appspot.com",
  messagingSenderId: "252310215790",
  appId: "1:252310215790:web:321cd604bfa1d80634da7f",
  measurementId: "G-QY4M284YZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);