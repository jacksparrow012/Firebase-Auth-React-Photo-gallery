import firebase from "firebase";

var Config = {
    apiKey: "AIzaSyBEs10qmGUmYVB2xAsTIrY1fJCaV7Ox1PM",
    authDomain: "myimagesapp-58d70.firebaseapp.com",
    projectId: "myimagesapp-58d70",
    storageBucket: "myimagesapp-58d70.appspot.com",
    messagingSenderId: "779898945207",
    appId: "1:779898945207:web:8db9146f8cc7c0a4c11732",
    measurementId: "G-YR0X1L4Q6H"
};

export const firebaseui = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ]
}

// ***Initialize Firebase
firebase.initializeApp(Config);
export default firebase