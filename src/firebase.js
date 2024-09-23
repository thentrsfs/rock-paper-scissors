import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg65oCi37ALQ8RbbDowh3ne33NWa6QMJM",
  authDomain: "rockpaperscissors-bd303.firebaseapp.com",
  projectId: "rockpaperscissors-bd303",
  storageBucket: "rockpaperscissors-bd303.appspot.com",
  messagingSenderId: "32629806614",
  appId: "1:32629806614:web:1663713117581b0e2dc737",
  measurementId: "G-57EDJKV2FB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
