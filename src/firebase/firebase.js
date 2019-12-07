import firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCutWc4_Ur_oPdiGo8mLW_q9l3xUL7CZ4s",
  authDomain: "two-factor-auth-app.firebaseapp.com",
  databaseURL: "https://two-factor-auth-app.firebaseio.com",
  projectId: "two-factor-auth-app",
  storageBucket: "two-factor-auth-app.appspot.com",
  messagingSenderId: "932198160011",
  appId: "1:932198160011:web:40a56c84127066477b668e",
  measurementId: "G-3PQ9SMTLSD"
}

firebase.initializeApp(config);

export const db = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
