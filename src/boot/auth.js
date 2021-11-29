import { initializeApp } from "firebase/app";
import Firebase from "firebase/app";
import firebaseConfig from "../../firebase.conf";
import "firebase/auth";
import { boot } from 'quasar/wrappers';


export default boot(({ app }) => {
    const app1 = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app1);


    app.config.globalProperties.$auth = app1.auth;
  });