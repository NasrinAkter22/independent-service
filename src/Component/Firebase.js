// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCj0yLvOQuH7CutfGawsWHVw2Ig2x5SNw0",
    authDomain: "doctor-sight.firebaseapp.com",
    projectId: "doctor-sight",
    storageBucket: "doctor-sight.appspot.com",
    messagingSenderId: "768917119799",
    appId: "1:768917119799:web:ce4b179a6b09709e3bf0b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;