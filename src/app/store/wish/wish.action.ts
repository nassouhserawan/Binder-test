import { Action } from "@ngrx/store";
import { ActionTypes } from "../actions.factory";
import { Course } from "src/models/course";
import { CartItem } from "src/models/cartItem";

export class AddToWish implements Action {
    readonly type = ActionTypes.AddToWish;
    constructor(public wishItem:Course) { }
}

export class AddToWishSuccess implements Action {
    readonly type = ActionTypes.AddToWishSuccess;
    constructor(public payload:boolean) { }
}

export class AddToWishFailure implements Action {
    readonly type = ActionTypes.AddToWishFailure;
    constructor(public error:string) { }
}