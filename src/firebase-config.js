import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfxNslbKLt5mQqLKGIxacAL1pMpBwATyA",
  authDomain: "gestion-reclamos-vecinos.firebaseapp.com",
  projectId: "gestion-reclamos-vecinos",
  storageBucket: "gestion-reclamos-vecinos.firebasestorage.app",
  messagingSenderId: "991461778099",
  appId: "1:991461778099:web:b7a09c07875c6265bbc6c6",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
