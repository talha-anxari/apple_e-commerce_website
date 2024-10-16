// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKvAvNbRs71qK9peQ2Wf4uqq5LwgNmEmU",
  authDomain: "apple-store-e9849.firebaseapp.com",
  projectId: "apple-store-e9849",
  storageBucket: "apple-store-e9849.appspot.com",
  messagingSenderId: "687503968416",
  appId: "1:687503968416:web:059bdce66380d6355ea1c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }