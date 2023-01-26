// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALRq_T-0e5UohZ3gv_tEG9cKoJKrmehP4",
  authDomain: "amorpropio-7af8f.firebaseapp.com",
  projectId: "amorpropio-7af8f",
  storageBucket: "amorpropio-7af8f.appspot.com",
  messagingSenderId: "799529179695",
  appId: "1:799529179695:web:4775434148b7e72cbbc4da",
  measurementId: "G-WFX974QCDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;