// import Firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../../firebase.conf";

export default ({ Vue }) => {
    // Initialize Firebase from settings
    console.log(firebaseConfig);
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // Firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized");
};