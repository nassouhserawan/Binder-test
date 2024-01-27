import { ICourses } from './../course/course.state';
import { AddToWishSuccess } from './wish.action';
import { ActionTypes, ActionsUnion } from "../actions.factory";
import { IWish } from "./wish.state";
import { AppState } from '../app.state';

export const initialState: IWish = {
    wishItems: [],
    getWishItemsSuccess: false,
    getWishItemsFailure: false,
    addToWishSuccess: false,
    addToWishFailure: false,
    error: ""
};


export function WishReducer(state = initialState, action: ActionsUnion): any {

    switch (action.type) {
        // Get Courses Success
        case ActionTypes.AddToWishSuccess:
            
            return Object.assign({}, state,
                {
                    wishItems: action.payload,
                    addToWishSuccess: true,
                    addToWishFailure: false,
                })
        case ActionTypes.AddToWishFailure:
            return Object.assign({}, state,
                {
                    addToWishSuccess: false,
                    addToWishFailure: true,
                })
        default:
            return state;
    }

}