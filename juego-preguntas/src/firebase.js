import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDlvgwwmQAkxdhJUX4Ys3R8UVFvec2gGeE",
  authDomain: "app-desafio-59b92.firebaseapp.com",
  projectId: "app-desafio-59b92",
  storageBucket: "app-desafio-59b92.appspot.com",
  messagingSenderId: "601171790032",
  appId: "1:601171790032:web:c8184810f03e639f2c76d5"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore;

