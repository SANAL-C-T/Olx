// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
 
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fireStoreDatabase = getFirestore(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;

onAuthStateChanged(auth, (user) => {
  if (user) {
      // User is signed in
      console.log("User is logged in:", user);
  } else {
      // User is signed out
      console.log("User is logged out");
  }
});