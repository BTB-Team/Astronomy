import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABCHumTabMu2LHSHLSbuAJA_rtooaYUgw",
  authDomain: "astronomy-cc501.firebaseapp.com",
  projectId: "astronomy-cc501",
  storageBucket: "astronomy-cc501.firebasestorage.app",
  messagingSenderId: "810449214846",
  appId: "1:810449214846:web:792a32ec30eaf925ac272f",
};

const app = initializeApp(firebaseConfig);
// 🔐 Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
 
provider.setCustomParameters({ 
  prompt: 'select_account',
  auth_type: 'reauthenticate' 
});

export { auth, provider, signInWithPopup };