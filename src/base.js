import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXykJGh5MF9C9G86E2fUng9e0qDpewyCU",
  authDomain: "restaurant-oreha.firebaseapp.com",
  databaseURL: "https://restaurant-oreha.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
