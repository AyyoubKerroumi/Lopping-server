const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs5dhbOpG8KSVURRGJo7ZL4zpQIx181LA",
    authDomain: "testnodejs-e678e.firebaseapp.com",
    projectId: "testnodejs-e678e",
    storageBucket: "testnodejs-e678e.appspot.com",
    messagingSenderId: "1081474329172",
    appId: "1:1081474329172:web:888ed91a62acde348e1bc1"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

module.exports = db;