import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../../firebase.conf";
import { boot } from 'quasar/wrappers';
import "firebase/auth";

// export default ({ Vue }) => {

//     const app = initializeApp(firebaseConfig);
//     const analytics = getAnalytics(app);

//     console.log("Firebase initialized");
//     Vue.globalProperties.$firebase = app;

// };

export default boot(({ app }) => {
    const app1 = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app1);

    console.log("Firebase initialized");
    app.config.globalProperties.$firebase = app1;
  });