// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHbu-a1W0AUrle7NY6YrD0bXqyBN3o3kI",
  authDomain: "netflixgpt-d3b5f.firebaseapp.com",
  projectId: "netflixgpt-d3b5f",
  storageBucket: "netflixgpt-d3b5f.firebasestorage.app",
  messagingSenderId: "430271622369",
  appId: "1:430271622369:web:794320c0c83251f1141ba0",
  measurementId: "G-FRKC3DF8WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);