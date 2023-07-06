// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV61qi_9tIxhF9smppLLSZrjnRestBPxo",
  authDomain: "chat-app-f6acc.firebaseapp.com",
  projectId: "chat-app-f6acc",
  storageBucket: "chat-app-f6acc.appspot.com",
  messagingSenderId: "433314896474",
  appId: "1:433314896474:web:b810def6c5b26553d85663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)