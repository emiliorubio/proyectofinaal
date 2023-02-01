// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALRq_T-0e5UohZ3gv_tEG9cKoJKrmehP4",
  authDomain: "amorpropio-7af8f.firebaseapp.com",
  databaseURL: "https://amorpropio-7af8f-default-rtdb.firebaseio.com",
  projectId: "amorpropio-7af8f",
  storageBucket: "amorpropio-7af8f.appspot.com",
  messagingSenderId: "799529179695",
  appId: "1:799529179695:web:ce5cd5b5db039b5cbbc4da",
  measurementId: "G-STDJQ9T3BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirebaseApp = ()=> {
  return app
}
