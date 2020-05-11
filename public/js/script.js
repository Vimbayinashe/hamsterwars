const { firebaseConfig } = require('./config');

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const db = firebase.firestore();

