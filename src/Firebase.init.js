// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArsZh8WrmQiguHhr1fei29xWKPfGZoxF0",
  authDomain: "ts-car-tools.firebaseapp.com",
  projectId: "ts-car-tools",
  storageBucket: "ts-car-tools.appspot.com",
  messagingSenderId: "655306354844",
  appId: "1:655306354844:web:3cb9072595f1d05953fd59"
};

// apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;