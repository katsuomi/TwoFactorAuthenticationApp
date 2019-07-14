import firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: "*********************",
  authDomain: "*********************",
  databaseURL: "*********************",
  projectId: "*********************",
  storageBucket: "",
  messagingSenderId: "*********************",
  appId: "*********************"
}

firebase.initializeApp(config);

export const db = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
