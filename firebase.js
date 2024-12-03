  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

  import { getAuth, createUserWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup, onAuthStateChanged
   } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
 
//   //, addDoc 
//    import {getFirestore,collection  ,addDoc,doc, setDoc
//  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
// <!-- Cloudinary -->
<script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>
 
  const firebaseConfig = {
    apiKey: "AIzaSyA67Th-CcosPwhV6QIQfVssxJRrrBdQI0Y",
    authDomain: "authentic-fc273.firebaseapp.com",
    projectId: "authentic-fc273",
    storageBucket: "authentic-fc273.firebasestorage.app",
    messagingSenderId: "99787197439",
    appId: "1:99787197439:web:98cf4f936f3b0fc8ed35ca"
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

 const provider = new GoogleAuthProvider(auth)

  export {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup,
    provider, onAuthStateChanged
  }