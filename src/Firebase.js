import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyB7p0biXEd5D7lkHJ6K8y4Pe2hxIQtW7gQ",
  authDomain: "react-spas-83c48.firebaseapp.com",
  databaseURL: "https://react-spas-83c48-default-rtdb.firebaseio.com",
  projectId: "react-spas-83c48",
  storageBucket: "react-spas-83c48.appspot.com",
  messagingSenderId: "830629858889",
  appId: "1:830629858889:web:b4f6e11adf2448da2db998",
  measurementId: "G-8WVEW47W21"
};

  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;