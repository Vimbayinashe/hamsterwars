const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hamster-vote-app.firebaseio.com"
});

// Firebase Code Hints
const auth = admin.auth();
const db = admin.firestore();
const storage = admin.storage();


module.exports = { auth, db, storage }