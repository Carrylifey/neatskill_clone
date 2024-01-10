// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5ltCw537bkVeqs0KpiCigJNUwWdpDSEE",
  authDomain: "neatskill-clone.firebaseapp.com",
  projectId: "neatskill-clone",
  storageBucket: "neatskill-clone.appspot.com",
  messagingSenderId: "774058699543",
  appId: "1:774058699543:web:6b0f0614eb33c7c918a552",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
