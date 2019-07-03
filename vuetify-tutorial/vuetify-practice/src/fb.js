import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD0ekB8-3fNVuiuXjqaM925UjhoylFV2eg",
  authDomain: "todo-ninja-ac1c0.firebaseapp.com",
  databaseURL: "https://todo-ninja-ac1c0.firebaseio.com",
  projectId: "todo-ninja-ac1c0",
  storageBucket: "todo-ninja-ac1c0.appspot.com",
  messagingSenderId: "1019142709802",
  appId: "1:1019142709802:web:ad969779ba402107"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// db.settings({ timestampsInSnapshots: true });
export default db;
