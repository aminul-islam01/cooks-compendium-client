import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeSZGcZm-i1ZsfVnojiPgxEyiWzUn64k4",
  authDomain: "cooks-compendium.firebaseapp.com",
  projectId: "cooks-compendium",
  storageBucket: "cooks-compendium.appspot.com",
  messagingSenderId: "100761266558",
  appId: "1:100761266558:web:5e22563460f06e85672b2f"
};

const app = initializeApp(firebaseConfig);
export default app;