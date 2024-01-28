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


export class GetWish implements Action {
    readonly type = ActionTypes.GetWish;
    constructor() { }
}
export class GetWishSuccess implements Action {
    readonly type = ActionTypes.GetWishSuccess;
    constructor(public wishItems: Course[]) {}
}
export class GetWishFailure implements Action {
    readonly type = ActionTypes.GetWishFailure;
    constructor(public error:string) { }
}


export class DeleteFromWish implements Action {
    readonly type = ActionTypes.DeleteFromWish;
    constructor(public name:string) { }
}

export class DeleteFromWishSuccess implements Action {
    readonly type = ActionTypes.DeleteFromWishSuccess;
    constructor(public payload:boolean) { }
}

export class DeleteFromWishFailure implements Action {
    readonly type = ActionTypes.DeleteFromWishFailure;
    constructor(public error:string) { }
}