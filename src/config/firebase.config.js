import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Thêm import cho Firebase Storage
// import 'dotenv/config';

const firebaseConfig = {
    apiKey: "AIzaSyBygtOa2QGoAhQYyOLcfHcnaLFi-jKgDFk",
    authDomain: "beautyboutique-7ebb3.firebaseapp.com",
    projectId: "beautyboutique-7ebb3",
    storageBucket: "beautyboutique-7ebb3.appspot.com",
    messagingSenderId: "708336554569",
    appId: "1:708336554569:web:a87eb28e5e82ae7ad0e598",
    measurementId: "G-PKR5ZNRGV2"
    // apiKey: process.env.FIREBASE_APIKEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Gán kết quả của initializeApp vào biến app

// Sử dụng Firebase Storage
const storage = getStorage(app);

export { storage };