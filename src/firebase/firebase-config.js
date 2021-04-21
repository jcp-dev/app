import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCDt2osehi8eG37pIxfAQixPo-FHz2oNP4",
  authDomain: "users-84536.firebaseapp.com",
  projectId: "users-84536",
  storageBucket: "users-84536.appspot.com",
  messagingSenderId: "809486910756",
  appId: "1:809486910756:web:d587af27f30fea09c85fb1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export {
  db,
  firebase
}

