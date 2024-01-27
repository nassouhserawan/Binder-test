 
import { Action, ActionReducerMap } from "@ngrx/store"; 
import { AppState } from "./app.state"; 
import { CourseReducer } from "./course/course.reducer";
import { CartReducer } from "./cart/cart.reducer";
import { WishReducer } from "./wish/wish.reducer";

export const reducers: ActionReducerMap<AppState> =
 {
   courses:CourseReducer,
   cart:CartReducer,
   wishList:WishReducer
 };