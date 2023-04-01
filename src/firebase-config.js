// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAroxW0U3Z_avFMHKpGW033UGJIFDJKgxo",
  authDomain: "my-first-project-656c9.firebaseapp.com",
  projectId: "my-first-project-656c9",
  storageBucket: "my-first-project-656c9.appspot.com",
  messagingSenderId: "984792762393",
  appId: "1:984792762393:web:5711bbc23015e494eb8288",
  measurementId: "G-N4EFX819YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

