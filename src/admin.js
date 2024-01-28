import { listBookedCourses } from './dom.js';
import { HttpClient } from './http.js';
import { convertFormDataToJson } from './utility.js';

const addCourse = document.querySelector('.btn');
const form = document.querySelector('#admin-control');

const initApp = () => {
  listBookedCourses();
};

const addCourseHandler = async (e) => {
  e.preventDefault();

  const course = new FormData(form);
  const obj = convertFormDataToJson(course);

  saveCourse(obj);

  alert('Du har lagt till en ny kurs');
};

const saveCourse = async (course) => {
  const url = 'http://localhost:3000/courses';
  const http = new HttpClient(url);
  await http.add(course);
};

addCourse.addEventListener('click', addCourseHandler);
document.addEventListener('DOMContentLoaded', initApp);
