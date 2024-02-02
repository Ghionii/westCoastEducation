import { fetchCourses, fetchStudents } from './http.js';

const courseSelection = document.querySelector('#courseNumber');
const bookedCourses = document.querySelector('#student-container');

const initApp = (e) => {
  courseSelector();
};

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
