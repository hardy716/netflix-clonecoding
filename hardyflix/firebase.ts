// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOpwapJMxmeIE2yrGQxlSakdeMFdGOQO4",
    authDomain: "hardyflix-a8e6d.firebaseapp.com",
    projectId: "hardyflix-a8e6d",
    storageBucket: "hardyflix-a8e6d.appspot.com",
    messagingSenderId: "596480946721",
    appId: "1:596480946721:web:957d8aa93aadaab0646960"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDOpwapJMxmeIE2yrGQxlSakdeMFdGOQO4",
//   authDomain: "hardyflix-a8e6d.firebaseapp.com",
//   projectId: "hardyflix-a8e6d",
//   storageBucket: "hardyflix-a8e6d.appspot.com",
//   messagingSenderId: "596480946721",
//   appId: "1:596480946721:web:957d8aa93aadaab0646960"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);