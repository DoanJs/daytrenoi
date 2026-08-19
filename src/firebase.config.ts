import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getDatabase } from "firebase/database";

// config for hoabanmaiedu-mobile
// const firebaseConfig = {
//   apiKey: "AIzaSyBneelps2P-qPFG5h3VSPYTwJRtx0u4n80",
//   authDomain: "hoabanmaiedu-mobile.firebaseapp.com",
//   projectId: "hoabanmaiedu-mobile",
//   storageBucket: "hoabanmaiedu-mobile.firebasestorage.app",
//   messagingSenderId: "465303174037",
//   appId: "1:465303174037:web:c9ab7e49f2105a5a86149c",
//   measurementId: "G-P113B6FJ95"
// };

// config for OwlAcademy
const firebaseConfig = {
  apiKey: "AIzaSyBiDsFNdi1PnCWle3weuyACprGdzVYAtjE",
  authDomain: "owlacademy-32834.firebaseapp.com",
  projectId: "owlacademy-32834",
  storageBucket: "owlacademy-32834.firebasestorage.app",
  messagingSenderId: "815591920856",
  appId: "1:815591920856:web:104345bb356a0832a973ad",
  measurementId: "G-3P1GGLJ4SH"
};

// setLogLevel("debug");
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app, "asia-southeast1");
const rtdb = getDatabase(app);
// const analytics = getAnalytics(app);
export { auth, db, functions, rtdb};
