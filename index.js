import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyAdAp6ZDnY8SbZworUFgdWg6D9xgjmAXuw",
    authDomain: "bths-problem.firebaseapp.com",
    databaseURL: "https://bths-problem-default-rtdb.firebaseio.com",
    projectId: "bths-problem",
    storageBucket: "bths-problem.firebasestorage.app",
    messagingSenderId: "925726886192",
    appId: "1:925726886192:web:a9c09e1667a8a459ee60f5",
    measurementId: "G-STRREJTQ5Z"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const loginButton = document.getElementById("sign-in-btn")
const signupButton = document.getElementById("sign-up-btn")

loginButton.addEventListener("click", function(){
    let user = emailInputEl;
    let password = passwordInputEl;
    signInWithEmailAndPassword();
})
signupButton.addEventListener("click",function(){
    let user = emailInputEl;
    let password = passwordInputEl;
    createAccount();
})

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

function createAccount(){
    console.log("Sign up with email and password")
    const email = emailInputEl.value
    const password= passwordInputEl.value
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showLoggedInView()
    })
    .catch((error) => {
      console.error(error.message)
    });
}

function signinAccount(){
    console.log("Sign in with email and password")
    const email = emailInputEl.value
    const password= passwordInputEl.value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      showLoggedInView()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error.message)
    });
}

function showLoggedInView(){
    window.location.href = "mainpage.html"
}

