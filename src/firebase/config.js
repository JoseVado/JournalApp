// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClv6eGMHio33O1zabuFk2E0LfenGJMfHc",
    authDomain: "react-cursos-29fc9.firebaseapp.com",
    projectId: "react-cursos-29fc9",
    storageBucket: "react-cursos-29fc9.appspot.com",
    messagingSenderId: "907616253820",
    appId: "1:907616253820:web:88abd3d72661e3868b56f9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);