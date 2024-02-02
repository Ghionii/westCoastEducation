var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { listAllCourses } from '../services/courses.js';
function initApp() {
    listCourses();
}
function listCourses() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield listAllCourses();
        console.log(result);
        displayCourses(result);
    });
}
function displayCourses(courses) {
    const coursesElement = document.querySelector('#courses');
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
