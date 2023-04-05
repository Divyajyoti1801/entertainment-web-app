// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj4xfDFMddR5H_tPiKdh1csNdcebO_ZWg",
  authDomain: "entertainment-web-app-d25f7.firebaseapp.com",
  projectId: "entertainment-web-app-d25f7",
  storageBucket: "entertainment-web-app-d25f7.appspot.com",
  messagingSenderId: "915912626825",
  appId: "1:915912626825:web:99e5faaaf80b31966d2c58",
};

initializeApp(firebaseConfig);

//Firebase Authentication Instance
export const auth = getAuth();

//FireStore Instance
const db = getFirestore();

//Creation Collection in Database with "users" name
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("User Authentication Documentation Error");
    }
  }
  return userDocRef;
};

//Create New User using Email And Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//Sign-In With Email and Password
export const signInWithAuthUserWithEmailAndPassword = (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

//Export Const SignOut
export const signOutUser = async () => await signOut(auth);

//OnAuthStateChangedListener
export const OnAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);