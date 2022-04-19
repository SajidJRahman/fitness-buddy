// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



/* ----------------------------------------------------------------------------------
I tried to use Environment Variable, but I was having some error, so I didn't used it.
------------------------------------------------------------------------------------*/
const firebaseConfig = {
    apiKey: "AIzaSyCRrDqTd9_J2dgz2ZsvJxolLOnbDMPct1k",
    authDomain: "fitness-buddy-sajidjrahman.firebaseapp.com",
    projectId: "fitness-buddy-sajidjrahman",
    storageBucket: "fitness-buddy-sajidjrahman.appspot.com",
    messagingSenderId: "332640352105",
    appId: "1:332640352105:web:a45a01185a5203d9d6eff8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;