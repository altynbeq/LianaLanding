import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHBXlrXmvO34Yxj7OkV6nmwELeyUi7Nog", // Проверьте этот ключ
  authDomain: "regi-aaedf.firebaseapp.com",
  projectId: "regi-aaedf",
  storageBucket: "regi-aaedf.appspot.com",
  messagingSenderId: "566222151137",
  appId: "1:566222151137:web:15fd3f824d153da36f06a0",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
