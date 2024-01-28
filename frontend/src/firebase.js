import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyB0h8o52KblrBufbqvBMZPNPUQPfUIMlB8" ,
  authDomain: "mern-blog-with-oauth.firebaseapp.com" ,
  projectId: "mern-blog-with-oauth",
  storageBucket: "mern-blog-with-oauth.appspot.com" ,
  messagingSenderId: "376190879884" ,
  appId: "1:376190879884:web:b879c6c3832efc6e5153a9",
  measurementId: "G-C51GXY1CQC" 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);