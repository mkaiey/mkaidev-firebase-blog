// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYYd6tB-KmxY_L78AXsev0NoHVJiR6zeo",
  authDomain: "mkaidev-c3fca.firebaseapp.com",
  projectId: "mkaidev-c3fca",
  storageBucket: "mkaidev-c3fca.appspot.com",
  messagingSenderId: "426852112939",
  appId: "1:426852112939:web:f2c3c0ea6b19b532dce86e",
  measurementId: "G-XVPT8SXT3R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
