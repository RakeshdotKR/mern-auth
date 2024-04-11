// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-aef77.firebaseapp.com",
  projectId: "mern-auth-aef77",
  storageBucket: "mern-auth-aef77.appspot.com",
  messagingSenderId: "458612573253",
  appId: "1:458612573253:web:f1c43f7154fa596b964f2c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);