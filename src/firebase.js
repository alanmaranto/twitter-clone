import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCw1MjqfQ8wuhmBfOPhXN0d2xWPnDDBbEU",
  authDomain: "twitter-clone-bc923.firebaseapp.com",
  databaseURL: "https://twitter-clone-bc923.firebaseio.com",
  projectId: "twitter-clone-bc923",
  storageBucket: "twitter-clone-bc923.appspot.com",
  messagingSenderId: "937417007419",
  appId: "1:937417007419:web:f1f8b809e8a3839147171e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
