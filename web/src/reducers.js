import * as firebase from "firebase/app";
import "firebase/auth";
import categories from "./components/admin/Resources/categories";

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

let initialState = {
  isAdmin: false,
  entities: [{ name: "markets", data: [] }, { name: "categories", data: [{name: "Animal Food"}, {name: "Bakery"}, {name: "Beverages"}] }],
};

const AgroReducer = async (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN":
      //   const { email, password } = action.data;
      //   console.log("THE FIREBASE", action.data);
      //   firebase
      //     .auth()
      //     .signInWithEmailAndPassword(email, password)
      //     .catch((err) => {
      //       console.log("ERROR WHILE SIGNING IN", err);
      //     });

      return {
        ...state,
        isAdmin: true,
      };
      break;
    case "SIGN_OUT":
      firebase.auth().signOut();
    //   location.reload();
      break;

    case "CREATED":
        console.log("THE PASSED REQUEST", action.data);
        const {data} = action.data;
        let presentState = await Promise.resolve(state).then(resp => resp);
        const entityItems = presentState.entities.filter(v => v.name !== action.data.entity);
        const item = presentState.entities.filter(v => v.name === action.data.entity);

        console.log("THE STATE HERE", state);
        state = {
            ...presentState,
            entities:  [...entityItems, {name: action.data.entity, data: [...item[0].data, data]}],
        };
        console.log("THE STATE", state);
        return state;
    default:
      return state;
  }
};

export default AgroReducer;
