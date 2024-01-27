import { ActionTypes, ActionsUnion } from "../actions.factory";
import { ICourses } from "./course.state";

export const initialState: ICourses = {
    courses: [],
    getCoursesSuccess: false,
    getCoursesFailure: false,
    error: ""
};


export function CourseReducer(state = initialState, action: ActionsUnion): ICourses {

    switch (action.type) {
        // Get Courses Success
        case ActionTypes.GetCoursesSuccess:
            return Object.assign({}, state,
                {
                    courses: action.courses,
                    getCoursesSuccess: true,
                    getCoursesFailure: false
                })

        case ActionTypes.GetCoursesFailure:
            return Object.assign({}, state,
                {
                    getCoursesSuccess: false,
                    getCoursesFailure: true,
                    error:action.error
                })
        default:
            return state;
    }
}
