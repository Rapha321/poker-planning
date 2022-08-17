import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAZHBPZsT7v7zCk6gAT5uoEtgf-nCJg0uk",
    authDomain: "poker-planning-17412.firebaseapp.com",
    projectId: "poker-planning-17412",
    storageBucket: "poker-planning-17412.appspot.com",
    messagingSenderId: "33693728451",
    appId: "1:33693728451:web:a50391ab4ec4b4eb94ec76",
    measurementId: "G-HW8HXK4WPZ"
  };


  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);