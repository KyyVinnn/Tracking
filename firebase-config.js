// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyDNQ4f_ARvMllLVm9AVOP5Gv9VhGUl0-1M",
  authDomain: "trackingmyfriend-afad8.firebaseapp.com",
  projectId: "trackingmyfriend-afad8",
  storageBucket: "trackingmyfriend-afad8.firebasestorage.app",
  messagingSenderId: "1040546291179",
  appId: "1:1040546291179:web:8ad9ac2b3cf77db2f18dae"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();