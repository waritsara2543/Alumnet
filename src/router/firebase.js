// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg3Ya0oFADikog3FqQxCS5M6wjAOd9nLc",
  authDomain: "alumnet-project.firebaseapp.com",
  projectId: "alumnet-project",
  storageBucket: "alumnet-project.appspot.com",
  messagingSenderId: "929711807516",
  appId: "1:929711807516:web:eacf0c8b921829e09f53d9",
  measurementId: "G-4H0T407Y13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);