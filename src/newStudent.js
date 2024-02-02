import { convertFormDataToJson } from './utility.js';
import { HttpClient } from './http.js';
import { courseSelector } from './dom.js';

const registerAndSignup = document.querySelector('.btn');
const form = document.querySelector('#logInForm');

const initApp = async () => {};

const addUserHandler = async (e) => {
  e.preventDefault();

  const user = new FormData(form);
  const obj = convertFormDataToJson(user);

  saveUser(obj);

  alert('Du är bokad och registrerad');
};

const saveUser = async (user) => {
  const url = 'http://localhost:3000/customer';
  const http = new HttpClient(url);
  await http.add(user);
};

registerAndSignup.addEventListener('click', addUserHandler);
document.addEventListener('DOMContentLoaded', initApp);
