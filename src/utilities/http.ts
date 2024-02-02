import { CourseModel } from '../models/CoursesModel.js';

export class HttpClient<CourseModel> {
  #url: string;

  constructor(url: string) {
    this.#url = url;
  }

  async get() {
    try {
      const response = await fetch(this.#url);

      if (response.ok) {
        const result: CourseModel = await response.json();
        return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`An error occurred in the get method: ${error}`);
    }
  }
}

export async function fetchCourses(): Promise<CourseModel[]> {
  try {
    const response = await fetch('http://localhost:3000/courses');

    if (response.ok) {
      const result: CourseModel[] = await response.json();
      return result;
    } else {
      console.log(response.status);
      throw new Error(`Failed to fetch courses. Status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    throw new Error(`An error occurred while fetching courses: ${error}`);
  }
}
