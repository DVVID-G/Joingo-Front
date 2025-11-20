// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV4088RKSvup-cUjxN9PRAsyvMk9AXJbg",
  authDomain: "plataforma-de-v-llamadas.firebaseapp.com",
  projectId: "plataforma-de-v-llamadas",
  storageBucket: "plataforma-de-v-llamadas.firebasestorage.app",
  messagingSenderId: "729141166368",
  appId: "1:729141166368:web:4c09bf8116e68c80071745",
  measurementId: "G-4RP9TV4F8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ❌ QUITA ESTO
// const analytics = getAnalytics(app);

// Services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
