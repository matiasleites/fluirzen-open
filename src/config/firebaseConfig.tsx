import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Timestamp, getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_DB,
  projectId: import.meta.env.VITE_PID,
  storageBucket: import.meta.env.VITE_SB,
  messagingSenderId: import.meta.env.VITE_SID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MID,
};

export const firebaseApp = initializeApp(config);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
export const functions = getFunctions(firebaseApp, "southamerica-east1");
export const nowFirebase = Timestamp.now();
