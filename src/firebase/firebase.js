import { firebase } from '@firebase/app'
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCiXhTDanUDCIo0aWjHXnL4g5YQfC57fCo",
    authDomain: "expensify-4e88f.firebaseapp.com",
    projectId: "expensify-4e88f",
    storageBucket: "expensify-4e88f.appspot.com",
    messagingSenderId: "548961280543",
    appId: "1:548961280543:web:a0a8401edf02f6059feb2a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export { firebase, database as default };
