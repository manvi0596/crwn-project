import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD8rykoqTNhV356Lgui-J1Ll4jAFpT2s-M",
  authDomain: "crwn-db-3744f.firebaseapp.com",
  projectId: "crwn-db-3744f",
  storageBucket: "crwn-db-3744f.appspot.com",
  messagingSenderId: "554619647524",
  appId: "1:554619647524:web:817d881051c5b54de28ab1",
  measurementId: "G-F4R8ZNL5JN",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
