import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj9jvt5eQNe18HOC2eQzF7ZvO9UhvsUro",
  authDomain: "crwn-db-91fa5.firebaseapp.com",
  projectId: "crwn-db-91fa5",
  storageBucket: "crwn-db-91fa5.appspot.com",
  messagingSenderId: "789135209722",
  appId: "1:789135209722:web:f9cbce03eda5d446e28543",
  measurementId: "G-6Q6B4MD6BT",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        ...additionalData,
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
