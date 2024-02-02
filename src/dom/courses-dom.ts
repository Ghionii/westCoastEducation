import { CourseModel } from '../models/CoursesModel.js';
import { listAllCourses } from '../services/courses.js';

function initApp() {
  listCourses();
}

async function listCourses() {
  const result = await listAllCourses();
  console.log(result);

  displayCourses(result as CourseModel[]);
}

function displayCourses(courses: CourseModel[]): void {
  const coursesElement = document.querySelector('#courses') as HTMLDivElement;

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

document.addEventListener('DOMContentLoaded', initApp);
