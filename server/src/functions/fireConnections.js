import * as fireadmin from "firebase-admin";
// import firebase from 'firebase';
// import "firebase/auth";
// import "firebase/firestore";
import serviceAccount from "./serviceAccountKey";
import config from './config';





// firebase.initializeApp(config);

fireadmin.initializeApp({
  credential: fireadmin.credential.cert(serviceAccount),
  databaseURL: "https://agromall-d819e.firebaseio.com",
});


export default {
    Firebase: fireadmin,
    Firedb : fireadmin.firestore(fireadmin),
    Auth : fireadmin.auth()
};