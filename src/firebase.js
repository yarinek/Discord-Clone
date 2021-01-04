import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxXTlD7wNGcXpaiy_cZi9Dgda7MYKyV3U",
    authDomain: "discord-clone-13cd1.firebaseapp.com",
    projectId: "discord-clone-13cd1",
    storageBucket: "discord-clone-13cd1.appspot.com",
    messagingSenderId: "975415547254",
    appId: "1:975415547254:web:555d982aad5856e8119657",
    measurementId: "G-LSXXJF2B6F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;