// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1ppevFDAElsj6gw4GR8y93L_RxvjxRLY",
  authDomain: "intervalo-3b.firebaseapp.com",
  projectId: "intervalo-3b",
  storageBucket: "intervalo-3b.appspot.com",
  messagingSenderId: "105012049075",
  appId: "1:105012049075:web:587df72cdfdfa090672cc6",
  measurementId: "G-1W8MZZWWHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);