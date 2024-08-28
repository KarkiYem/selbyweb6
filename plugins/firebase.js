import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyDVqQEuIELdKAHcCEfYQ95RvuONC3ohPYA",
  authDomain: "selby-eab78.firebaseapp.com",
  projectId: "selby-eab78",
  storageBucket: "selby-eab78.appspot.com",
  messagingSenderId: "231664419563",
  appId: "1:231664419563:web:9dd103fcad960b57ee74ae",
  measurementId: "G-RB50VKQQC8",
};
var fb = "";
var analytic = "";
if (!firebase.apps.length) {
  fb = firebase.initializeApp(firebaseConfig);
  analytic = firebase.analytics(fb);
}
let firestore = firebase.firestore();
let auth = firebase.auth();
export { firestore, firebase, auth, fb, analytic };
