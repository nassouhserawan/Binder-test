import { Course } from "src/models/course";

export interface ICourses {
   courses:Course[];
   getCoursesSuccess:boolean;
   getCoursesFailure:boolean;
   error:string;
}