import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs";
import { CourseService } from "src/app/services/course/course.service";
import * as fromCourseAction from './course.action';
import { ActionTypes } from "../actions.factory";
@Injectable({
    providedIn: 'root'
})
export class CourseEffects {
    GetCourses$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ActionTypes.GetCourses),
            switchMap(() =>
                this.courseService.GetAllCourses().pipe(
                    map((data: any) => new fromCourseAction.GetCoursesSuccess(data)),
                    catchError(async (error) => new fromCourseAction.GetCoursesFailure(error))
                )
            )
        )
    });

    constructor(private actions$: Actions,private courseService:CourseService){}
}