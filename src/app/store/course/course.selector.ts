import { createFeatureSelector } from "@ngrx/store";
import { ICourses } from "./course.state";
import { AppState } from "../app.state";

export const controllers=createFeatureSelector<AppState,ICourses>('courses');