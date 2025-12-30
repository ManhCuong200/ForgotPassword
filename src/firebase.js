// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwW7kpGWjXLCoSITegyXBnne_VIekT3Jk",
  authDomain: "forgotpassword-83562.firebaseapp.com",
  projectId: "forgotpassword-83562",
  storageBucket: "forgotpassword-83562.firebasestorage.app",
  messagingSenderId: "677593227814",
  appId: "1:677593227814:web:f1c32b06a6ed527911bce7",
  measurementId: "G-42KGN16SNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, googleProvider };