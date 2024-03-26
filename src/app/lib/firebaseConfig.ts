// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ4Mg3z2MrxzI68Rtu9Zs46RpwHYef6s8",
  authDomain: "sparkmysportweb.firebaseapp.com",
  rojectId: "sparkmysportweb",
  storageBucket: "sparkmysportweb.appspot.com",
  messagingSenderId: "222298782295",
  appId: "1:222298782295:web:c43b18129a62d3ea0a4112",
  measurementId: "G-WT2WTCVCHC",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export default firebase;