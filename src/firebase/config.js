// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBaQpe4aclUcrSUbDo-4_3SSm1tlCBq6q0",
  authDomain: "simpleshop-7fc3d.firebaseapp.com",
  projectId: "simpleshop-7fc3d",
  storageBucket: "simpleshop-7fc3d.appspot.com",
  messagingSenderId: "512608034767",
  appId: "1:512608034767:web:9abe9ca0fd5ba139a9fcba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // get app database
