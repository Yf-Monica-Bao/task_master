import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "task-master-8556d.firebaseapp.com",
  projectId: "task-master-8556d",
  storageBucket: "task-master-8556d.appspot.com",
  messagingSenderId: "250341528041",
  appId: "1:250341528041:web:034da67e9a28bee909bb78",
  measurementId: "G-Y2Y13KFSNM",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
