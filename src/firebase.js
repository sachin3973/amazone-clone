import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDiNyUC3xz91ZZeiMx4c20_Ixmyo6ZkdL4",
  authDomain: "e-fullstack.firebaseapp.com",
  databaseURL: "https://e-fullstack.firebaseio.com",
  projectId: "e-fullstack",
  storageBucket: "e-fullstack.appspot.com",
  messagingSenderId: "776515159462",
  appId: "1:776515159462:web:8109fdb3f09f335c0e3b67",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
