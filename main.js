import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getDocs, collection, getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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
    const db = getFirestore(app);

    const logoutButton = document.getElementById('logoutBtn');

    auth.onAuthStateChanged(user => {
        if (user) {
            userEmailSpan.textContent = user.email;
        } else {
            userEmailSpan.textContent = 'Not logged in';
            window.location.href = 'login.html';
        }
    });

    logoutButton.addEventListener('click', () => {
        auth.signOut().then(() => {
            alert('You have been logged out.');
            window.location.href = 'login.html';
        }).catch((error) => {
            console.error('Error logging out:', error);
        });
    });

const downloadbtn = document.getElementById('download');
if (downloadbtn) {
    downloadbtn.addEventListener('click', async function() {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const users = querySnapshot.docs.map(doc => ({
            ...doc.data()
        }));
        const filename = 'Emails-firestore.xlsx';
        const worksheet = XLSX.utils.json_to_sheet(users);

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'users');
        XLSX.writeFile(workbook, filename);
    });
}