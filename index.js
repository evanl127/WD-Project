import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

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

loginButton.addEventListener("click", function(){
    console.log("baller")
})
const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")
