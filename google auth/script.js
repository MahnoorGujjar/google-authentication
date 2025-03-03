// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider,
    onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/11.4.0/firebaseauth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA-lFuR1JkxV-gT8TZZmx-SMLXQELIKnR8",
    authDomain: "sign-up-log-in-form-2771e.firebaseapp.com",
    projectId: "sign-up-log-in-form-2771e",
    storageBucket: "sign-up-log-in-form-2771e.firebasestorage.app",
    messagingSenderId: "462822975889",
    appId: "1:462822975889:web:a3d1f2cff4823ad7a35230",
    measurementId: "G-LFC8RGN72Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();



  // Sign Up with Email/Password

  document.getElementById('signup-btn')?.addEventListener('click' , (e)=>{
    e.preventDefault();

    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth , email , password)
    .then(()=> {
        alert("signup successfully!")
        window.location.href = "welcome.html";
    })
    .catch((error)=>{
        alert(error.message);
    })
  });

  // Login with Email/Password

  document.getElementById('login-btn')?.addEventListener('click' ,  (e)=>{
    e.preventDefault();

    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth , email , password )
    .then(()=>{
        alert("Login Successfully!")
        window.location.href = "welcome.html";
    })
    .catch((error)=>{
        alert(error.message);
    })
  });

  // Continue with Google

  document.getElementById('google-btn')?.addEventListener('click' , (e)=>{
    e.preventDefault();

    signInWithPopup(auth , provider)
    .then(()=>{
        alert("Login Successful!")
        window.location.href = "welcome.html";
    })
    .catch((error)=>{
        alert(error.message);
    })
  });


  // Logout

  document.getElementById('logout-btn')?.addEventListener('click' , (e)=>{
    e.preventDefault();

    signOut(auth)
    .then(()=>{
        alert("Logged Out Successfully!");
        window.location.href = "index.html";
    })
    .catch((error)=>{
        alert(error.message);
    })
  });


  // Show User Email on Welcome Page

  onAuthStateChanged(auth , (user) => {
    if(user && window.location.pathname.includes("welcome.html")){
        document.getElementById('user-email').textContent = user.email
    }else if (!user && window.location.pathname.includes("welcome.html")){
        window.location.href = "index.html";
    }
  })
