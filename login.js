import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCK5kly6RWaioiC1qMSgt44PnCXoAmQtvY",
    authDomain: "im2-project-gartan.firebaseapp.com",
    projectId: "im2-project-gartan",
    storageBucket: "im2-project-gartan.appspot.com",
    messagingSenderId: "493393317646",
    appId: "1:493393317646:web:40908af51aea75e4e4915f"
  };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    const submit = document.getElementById('submit');
    submit.addEventListener("click", function (event){
    event.preventDefault()

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Logging in...")
    window.location.href = "main.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})