// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-aIhfmZWA-9CFg2zFgccZoG5ffacLyJ0",
  authDomain: "netflix-gpt-3ede4.firebaseapp.com",
  projectId: "netflix-gpt-3ede4",
  storageBucket: "netflix-gpt-3ede4.firebasestorage.app",
  messagingSenderId: "970775831020",
  appId: "1:970775831020:web:566d59df3d9b6228ca60c9",
  measurementId: "G-CQ1MH9RF7W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
