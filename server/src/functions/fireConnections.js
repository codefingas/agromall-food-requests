import * as fireadmin from "firebase-admin";
import firebase from 'firebase';
import serviceAccount from "../../serviceAccountKey.json";

fireadmin.initializeApp({
  credential: fireadmin.credential.cert(serviceAccount),
  databaseURL: "https://agromall-d819e.firebaseio.com",
});


export default {
    Firebase: fireadmin,
    Firedb : fireadmin.firestore(fireadmin),
    Auth : fireadmin.auth()
};