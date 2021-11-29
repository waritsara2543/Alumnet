import { initializeApp } from "firebase/app";

import firebaseConfig from "../../firebase.conf";
import { boot } from 'quasar/wrappers';
import "firebase/auth";


export default boot(({ app }) => {
    const app1 = initializeApp(firebaseConfig);


    app.config.globalProperties.$firebase = app1;
  });