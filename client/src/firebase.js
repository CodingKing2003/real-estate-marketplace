// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-820ef.firebaseapp.com",
  projectId: "real-estate-820ef",
  storageBucket: "real-estate-820ef.appspot.com",
  messagingSenderId: "934847220409",
  appId: "1:934847220409:web:ceeba1844b63060300a968"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);