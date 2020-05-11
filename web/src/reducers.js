import axios from "axios";
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

firebase.initializeApp(firebaseConfig);

const initialState = {
  isAdmin: false,
  entities : [{name: "Markets",
data: [ ]}, {name: "Categories"}]
};

const url = `http://localhost:5001/agromall-d819e/us-central1/api`;

const AgroReducer = async (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN":
      const { email, password } = action.data;
      console.log("THE FIREBASE", action.data);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          console.log("ERROR WHILE SIGNING IN", err);
        });
      break;
    case "SIGN_OUT":
      firebase.auth().signOut();
      break;
    default:
      return state;
  }

  return state;
};

export default AgroReducer;
