// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoflqAf3Iml8Pt5Xx3MB6VvyY_SXhHBNg",
  authDomain: "fir-auth-bac3a.firebaseapp.com",
  projectId: "fir-auth-bac3a",
  storageBucket: "fir-auth-bac3a.appspot.com",
  messagingSenderId: "329723510844",
  appId: "1:329723510844:web:99d85505b8bd9032470339",
  measurementId: "G-43FQJ7D5MV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
