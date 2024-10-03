// src/services/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
    apiKey: "AIzaSyApRJf0RsnE8j_N2RAFHEEFFvl9lumCYEc",
    authDomain: "mercado-caro-coderhouse-react.firebaseapp.com",
    projectId: "mercado-caro-coderhouse-react",
    storageBucket: "mercado-caro-coderhouse-react.appspot.com",
    messagingSenderId: "401165455574",
    appId: "1:401165455574:web:ceefd2c6619b9e9f49b977"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
