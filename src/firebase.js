// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyCN4VzElz7ef65OAmK5-QR1A7oR5P_lMHY",
  authDomain: "mern-estate-6b4ae.firebaseapp.com",
  projectId: "mern-estate-6b4ae",
  storageBucket: "mern-estate-6b4ae.appspot.com",
  messagingSenderId: "580260438274",
  appId: "1:580260438274:web:181d78bb0c4951d141a21b",
}; */
const firebaseConfig = {
  apiKey: process.env.VITE_APIKEY,
  authDomain: "mern-estate-6b4ae.firebaseapp.com",
  projectId: "mern-estate-6b4ae",
  storageBucket: "mern-estate-6b4ae.appspot.com",
  messagingSenderId: "580260438274",
  appId: "1:580260438274:web:181d78bb0c4951d141a21b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
