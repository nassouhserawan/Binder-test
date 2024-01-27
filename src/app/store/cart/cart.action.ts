import { Action } from "@ngrx/store";
import { ActionTypes } from "../actions.factory";
import { Course } from "src/models/course";

export class GetCart implements Action {
    readonly type = ActionTypes.GetCart;
    constructor() { }
}
export class GetCartSuccess implements Action {
    readonly type = ActionTypes.GetCartSuccess;
    constructor(public items: Course[]) {}
}
export class GetCartFailure implements Action {
    readonly type = ActionTypes.GetCartFailure;
    constructor(public error:string) { }
}

export class AddToCart implements Action {
    readonly type = ActionTypes.AddToCart;
    constructor(public cartItem:Course) { }
}

export class AddToCartSuccess implements Action {
    readonly type = ActionTypes.AddToCartSuccess;
    constructor(public payload:boolean) { }
}

export class AddToCartFailure implements Action {
    readonly type = ActionTypes.AddToCartFailure;
    constructor(public error:string) { }
}