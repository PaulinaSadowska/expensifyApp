import { firebase } from '@firebase/app'
require("firebase/firestore");

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export { firebase, database as default };
