importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAg3Ya0oFADikog3FqQxCS5M6wjAOd9nLc",
  authDomain: "alumnet-project.firebaseapp.com",
  projectId: "alumnet-project",
  storageBucket: "alumnet-project.appspot.com",
  messagingSenderId: "929711807516",
  appId: "1:929711807516:web:eacf0c8b921829e09f53d9",
  measurementId: "G-4H0T407Y13"
});

if (firebase.messaging.isSupported()) {

    const messaging = firebase.messaging();

    messaging.onBackgroundMessage(function (payload) {
        // console.log('[firebase-messaging-sw.js] Received background message ', payload);
        // Customize notification here
        const notificationTitle = 'Background Message Title';
        const notificationOptions = {
            body: 'Background Message body.',
            icon: '/firebase-logo.png'
        };

        self.registration.showNotification(notificationTitle,
            notificationOptions);
    });

}


// [END on_background_message]