// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA_kv_OiDLxTNp0gMqXJX066iQyKEVN9zE',
  authDomain: 'ceddexco.firebaseapp.com',
  projectId: 'ceddexco',
  storageBucket: 'ceddexco.appspot.com',
  messagingSenderId: '442280327645',
  appId: '1:442280327645:web:26ee90c3448b6dd4469e34',
  measurementId: 'G-975K2PLLV1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
