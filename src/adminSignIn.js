import { fetchAdmin } from './http.js';

const logInButton = document.querySelector('.btn');
const logInForm = document.querySelector('#logInForm');

logInButton.addEventListener('click', async (e) => {
  e.preventDefault();

  const username = logInForm.email.value;
  const password = logInForm.password.value;

  const adminLogIn = await fetchAdmin();

  const AdminUsername = adminLogIn.username;
  const AdminPassword = adminLogIn.password;

  if (username === AdminUsername && AdminPassword === password) {
    alert('Du har loggat in');
    location.href = 'admin.html';
  } else {
    alert('Fel användarnamn eller lösenord');
  }
});
