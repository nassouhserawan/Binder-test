import { Action } from "@ngrx/store";
import { ActionTypes } from "../actions.factory";
import { Course } from "src/models/course";

// Get Courses

export class GetCourses implements Action {
    readonly type = ActionTypes.GetCourses;
    constructor() { }
}
export class GetCoursesSuccess implements Action {
    readonly type = ActionTypes.GetCoursesSuccess;
    constructor(public courses: Course[]) {}
}
export class GetCoursesFailure implements Action {
    readonly type = ActionTypes.GetCoursesFailure;
    constructor(public error:string) { }
}

