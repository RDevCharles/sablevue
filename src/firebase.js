import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDWSM-XPo8b7Y-V0EooXN3rl2gMoUG8Bow",
  authDomain: "blk-owned-db-f6a77.firebaseapp.com",
  databaseURL: "https://blk-owned-db-f6a77.firebaseio.com",
  projectId: "blk-owned-db-f6a77",
  storageBucket: "blk-owned-db-f6a77.appspot.com",
  messagingSenderId: "250893745358",
  appId: "1:250893745358:web:c924450f8ab0bb0683a49f",
  measurementId: "G-CZBH93RZNY"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore();

export default firebase;