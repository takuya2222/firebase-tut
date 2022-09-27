import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmAqjFo9zKedDQdmJ9mIBdSNX2nswkoLs",
  authDomain: "fir-tutorial-3dcf7.firebaseapp.com",
  projectId: "fir-tutorial-3dcf7",
  storageBucket: "fir-tutorial-3dcf7.appspot.com",
  messagingSenderId: "284637044872",
  appId: "1:284637044872:web:c1fe74bc6c48c19b5cff3d",
  measurementId: "G-8G9L1XPH48",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
