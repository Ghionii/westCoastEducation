const logInButton = document.querySelector('.btn');
const logInForm = document.querySelector('#logInForm');

logInButton.addEventListener('click', (e) => {
  e.preventDefault();

  const username = logInForm.email.value;
  const password = logInForm.password.value;

  if (username === 'admin@admin.se' && password === 'password') {
    alert('Du har loggat in');
    location.href = 'admin.html';
  } else {
    alert('Fel användarnamn eller lösenord');
  }
});
