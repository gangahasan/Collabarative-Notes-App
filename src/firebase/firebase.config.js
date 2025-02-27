// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqJKjuqgXQgILfKEhhQ7QzDICPM8ZjJ0w",
  authDomain: "redux-firebase-notesapp.firebaseapp.com",
  projectId: "redux-firebase-notesapp",
  storageBucket: "redux-firebase-notesapp.firebasestorage.app",
  messagingSenderId: "873018714247",
  appId: "1:873018714247:web:026c4a2d863e74260a7022",
};
export const auth = getAuth(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
