import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-f8ucnExR7iZcht5JkWQsQ-LgTtloef4",
  authDomain: "fir-5ef1d.firebaseapp.com",
  projectId: "fir-5ef1d",
  storageBucket: "fir-5ef1d.appspot.com",
  messagingSenderId: "513075852238",
  appId: "1:513075852238:web:5583db75409b1b74f8319f"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;