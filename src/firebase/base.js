// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyC6i9tk8yi6W4G7EN2AqotMPTgji9QJb1M",
  authDomain: "solentask.firebaseapp.com",
  projectId: "solentask",
  storageBucket: "solentask.appspot.com",
  messagingSenderId: "157027513127",
  appId: "1:157027513127:web:c4f223abca719a4863af02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);