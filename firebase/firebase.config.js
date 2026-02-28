// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain ,
  projectId: import.meta.env.VITE_projectId ,
  storageBucket: import.meta.env.VITE_storageBucket ,
  messagingSenderId: import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId ,
  measurementId: import.meta.env.VITE_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




// warning
// create .env.local  file at the root folder and paste it 
// I am sharing it for learning purpuse, don not share it because of sensitive data 

// VITE_apiKey=AIzaSyBzveY706KhHoZtmEzflfdrPAP_ghmgWPs
// VITE_authDomain=fruit-store-nilandu.firebaseapp.com
// VITE_projectId=fruit-store-nilandu
// VITE_storageBucket=fruit-store-nilandu.firebasestorage.app
// VITE_messagingSenderId=953558887341
// VITE_appId=1:953558887341:web:8577b8eb78a0de2b990f24
// VITE_measurementId=G-BQ7EM0BTYL