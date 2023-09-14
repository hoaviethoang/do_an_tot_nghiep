// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvVeR4hDZPIekP2iaeBz080XKcEXR3g4w",
  authDomain: "shop-6bf8c.firebaseapp.com",
  projectId: "shop-6bf8c",
  storageBucket: "shop-6bf8c.appspot.com",
  messagingSenderId: "934087760855",
  appId: "1:934087760855:web:072a78ae4eecefbabb8992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;