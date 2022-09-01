import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_XtY_IMNXQmUGXnFOfEZo__33NVf6iV0",
  authDomain: "netflix-project-22ff7.firebaseapp.com",
  projectId: "netflix-project-22ff7",
  storageBucket: "netflix-project-22ff7.appspot.com",
  messagingSenderId: "635717122071",
  appId: "1:635717122071:web:2120a13b1d3384c8760452"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);