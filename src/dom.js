import { fetchCourses } from './http.js';
import { fetchStudents } from './http.js';
const coursesElement = document.querySelector('#courses');
const courseSelection = document.querySelector('#courseNumber');
const bookedCourses = document.querySelector('#student-container');

const initApp = () => {
  console.log('laddat');
  listCourses();
};

// Lista kurserna
async function listCourses() {
  const courses = await fetchCourses();
  courses.forEach((course) => {
    coursesElement.innerHTML += `     <div>
    <img src="${course.image}" />
    <h3>${course.title}</h3>
    <div>Kurs-nummer: ${course.courseNumber}</div>
    <div>Längd: ${course.time}</div>
    <div>Läge: ${course.location}</div>
    <div>Utbildningens start: ${course.startDate}</div>
    <a href="/src/HTML/courseSignUp.html">
    <button>Ansök</button>
     </a>
  </div>`;
  });
}

async function courseSelector() {
  const courses = await fetchCourses();
  courses.forEach((course) => {
    courseSelection.innerHTML += `     <select name="courseSelection" id="courseSelection">
    <option value="${course.courseNumber}">${course.title}</option>
  </select>`;
  });
}

async function listBookedCourses() {
  const customers = await fetchStudents();
  customers.forEach((student) => {
    bookedCourses.innerHTML += ` <div id="student-container">
        <div>Student: ${student.customerName}</div>
        <div>Adress: ${student.billingAdress}</div>
        <div>Email: ${student.email}</div>
        <div>Telefon: ${student.phoneNumber}</div>
        <div>Kursnummer: ${student.courseNumber}</div>
      </div>`;
  });
}

document.addEventListener('DOMContentLoaded', initApp);

export { courseSelector, listBookedCourses };
