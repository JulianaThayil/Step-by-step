import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDZDYNoTcSesSR6a1Vyf25P_oTzZKaTO90",
  authDomain: "step-by-step-96e75.firebaseapp.com",
  databaseURL: "https://step-by-step-96e75.firebaseio.com",
  projectId: "step-by-step-96e75",
  storageBucket: "step-by-step-96e75.appspot.com",
  messagingSenderId: "593075018975"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}
