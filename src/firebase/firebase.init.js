// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCejV-vgsNg8fugGEzTH-NSwKcMYuWP2hQ",
  authDomain: "simple-by-firebase-project.firebaseapp.com",
  projectId: "simple-by-firebase-project",
  storageBucket: "simple-by-firebase-project.appspot.com",
  messagingSenderId: "306895295681",
  appId: "1:306895295681:web:a192a154ac725f5c6ef040"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;