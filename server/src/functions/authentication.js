import * firebase from 'firebase-admin';

class Auth {
   constructor(collection) {
       this.name = collection;
   }

   static login = (data) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(resp => console.log("THE RESPONSE FROM LOGIN", resp)).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log("THE REOPONSE FROM ERRORS", errorCode, errorMessage);
      });
   }
     
}

export default Auth;