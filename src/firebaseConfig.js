// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBcVSi4LRw8eydh-_Ugm9io4y9IUWIphKo",
    authDomain: "pawaid-2f3a4.firebaseapp.com",
    projectId: "pawaid-2f3a4",
    storageBucket: "pawaid-2f3a4.appspot.com",
    messagingSenderId: "842881512861",
    appId: "1:842881512861:web:9af15d706c7901c92b6b74",
    measurementId: "G-K06VQ6RYPQ"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
