import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const Firebase = {
  apiKey: "AIzaSyBrs9uqD4wuVow-dK7nbK2yZYZAI1wi5UA",
  authDomain: "login-4444.firebaseapp.com",
  projectId: "login-4444",
  storageBucket: "login-4444.appspot.com",
  messagingSenderId: "95550423394",
  appId: "1:95550423394:web:90df30ad802a1784bbac3b",
  measurementId: "G-Q6H92LFLS2"
};

// Initialize Firebase
const app = initializeApp(Firebase);

export const auth = getAuth(app); 
 
export default Firebase;