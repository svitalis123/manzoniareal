import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCvh0aeTX2L5kAJqvnFpgmIvhG3i7IzfU0",
    authDomain: "mazonia-3addc.firebaseapp.com",
    projectId: "mazonia-3addc",
    storageBucket: "mazonia-3addc.appspot.com",
    messagingSenderId: "814697331566",
    appId: "1:814697331566:web:66e0703949aa86d20ddf7f"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const storage= firebase.storage();
const auth =firebase.auth();

export {auth, db, storage};