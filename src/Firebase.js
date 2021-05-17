import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCcN59FmYCykvQ885oznLA3K9tTO8EqqHE",
  authDomain: "vishnu-msds.firebaseapp.com",
  projectId: "vishnu-msds",
  storageBucket: "vishnu-msds.appspot.com",
  messagingSenderId: "401716191273",
  appId: "1:401716191273:web:ddd3f882f28e02afecfc38",
  measurementId: "G-PXLLF9P4M9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore()

export { db };