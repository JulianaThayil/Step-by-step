import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
/*
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
*/
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
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
