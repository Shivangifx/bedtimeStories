import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAm97DSyNQ8EkMTBUzcDXxsJI4yZsbAawk",
  authDomain: "c68-homework.firebaseapp.com",
  databaseURL: "https://c68-homework.firebaseio.com",
  projectId: "c68-homework",
  storageBucket: "c68-homework.appspot.com",
  messagingSenderId: "931396938447",
  appId: "1:931396938447:web:9e480864925efa97f6a5ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
