import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrOE-UliM76kOl2Y5FAamhyIMrw_x-VTI",
  authDomain: "clone-ae56a.firebaseapp.com",
  projectId: "clone-ae56a",
  storageBucket: "clone-ae56a.appspot.com",
  messagingSenderId: "457304453961",
  appId: "1:457304453961:web:de723b409e755a5b016098"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
