import { fetchCourses } from '../utilities/http.js';
import { CourseModel } from '../models/CoursesModel.js';

export async function listAllCourses(): Promise<CourseModel[]> {
  const result = await fetchCourses();
  return result;
}
