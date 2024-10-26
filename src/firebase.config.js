import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASAXPj04KE_cOxzBngBzvdjivHIVup2DM",
  authDomain: "house-maketplace-app-a55b8.firebaseapp.com",
  projectId: "house-maketplace-app-a55b8",
  storageBucket: "house-maketplace-app-a55b8.appspot.com",
  messagingSenderId: "296343290761",
  appId: "1:296343290761:web:da867addbac12461375758",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const db = getFirestore();
export const auth = getAuth(app);
