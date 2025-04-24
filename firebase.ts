import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC1C_YgyBUzY1o8MddCvj2AQM-PdC48S2s",
    authDomain: "pdf-saas-project.firebaseapp.com",
    projectId: "pdf-saas-project",
    storageBucket: "pdf-saas-project.firebasestorage.app",
    messagingSenderId: "886000352363",
    appId: "1:886000352363:web:2cbf3a7cd18e572ca2452e",
    measurementId: "G-45Z4W5T0TD",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

am setting up firebase bro am tweaking bro for real man imma saas spender now holy moly thats wildeee cuh