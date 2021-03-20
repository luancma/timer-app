// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzkmBODXMDFu8KpuuobTAdRupBsJt0sSY",
  authDomain: "login-system-3c8c4.firebaseapp.com",
  projectId: "login-system-3c8c4",
  storageBucket: "login-system-3c8c4.appspot.com",
  messagingSenderId: "526232954178",
  appId: "1:526232954178:web:abd5e22d2555faf8b9d4db",
  measurementId: "G-E0ZL2BF0HD"
};

firebase.initializeApp(firebaseConfig);

export function makeLogin({ email, password }) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      const newUser = {
        email: user.email,
        uid: user.uid
      };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode }, { errorMessage });

      // ..
    });
}
