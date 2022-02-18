import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAFeUVGg6rtFkyNXGx9VTdf_VaS9rdPF9g",
  authDomain: "ayhan-b7555.firebaseapp.com",
  databaseURL:
    "https://ayhan-b7555-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ayhan-b7555",
  storageBucket: "ayhan-b7555.appspot.com",
  messagingSenderId: "268973759663",
  appId: "1:268973759663:web:f41a463768ae43bccbc85a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
