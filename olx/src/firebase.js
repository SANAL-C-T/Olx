
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIRE_BASE_API_KEY,
  authDomain:"olx-clone-bc603.firebaseapp.com",
  projectId:import.meta.env.VITE_FIRE_BASE_PROJECT_ID,
  databaseURL:"gs://olx-clone-bc603.appspot.com",
  storageBucket:"olx-clone-bc603.appspot.com",
  messagingSenderId:"49974343745",
  appId:import.meta.env.VITE_FIRE_BASE_API_ID


};


const app = initializeApp(firebaseConfig);

export const fireStoreDatabase =getFirestore(app);
export const auth =getAuth(app);
export const db = getFirestore(app);
export const storage =getStorage(app);