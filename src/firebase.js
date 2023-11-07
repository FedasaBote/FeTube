import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJaC7W0W3ciMfgB9qugNTLJ4t9WN4NwB8",
  authDomain: "fetube-58d0f.firebaseapp.com",
  projectId: "fetube-58d0f",
  storageBucket: "fetube-58d0f.appspot.com",
  messagingSenderId: "814031039489",
  appId: "1:814031039489:web:815efb0d27f363ebc9e400",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
// "timeago.js": "^4.0.2",
