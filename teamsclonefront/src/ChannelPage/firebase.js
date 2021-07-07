import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrP3zynQU9sMbPDV3pL-L0BdXUh2B7bTk",
  authDomain: "teams-clone-chat.firebaseapp.com",
  databaseURL: "https://teams-clone-chat-default-rtdb.firebaseio.com",
  projectId: "teams-clone-chat",
  storageBucket: "teams-clone-chat.appspot.com",
  messagingSenderId: "587427799414",
  appId: "1:587427799414:web:02c1490be21868449b1a57"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
