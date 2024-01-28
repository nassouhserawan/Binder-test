import { ICourses } from './../course/course.state';
import { AddToWishSuccess, DeleteFromWishFailure } from './wish.action';
import { ActionTypes, ActionsUnion } from "../actions.factory";
import { IWish } from "./wish.state";
import { AppState } from '../app.state';

export const initialState: IWish = {
    wishItems: [],
    getWishItemsSuccess: false,
    getWishItemsFailure: false,
    addToWishSuccess: false,
    addToWishFailure: false,
    error: "",
    deleteFromWishSuccess: false,
    deleteFromWishFailure: false
};


export function WishReducer(state = initialState, action: ActionsUnion): any {
    let itemArray = [...state.wishItems];
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

        case ActionTypes.GetWishSuccess:
            return Object.assign({}, state,
                {
                    wishItems: action.wishItems,
                    getWishItemsSuccess: true,
                    getWishItemsFailure: false,
                })

        case ActionTypes.GetWishFailure:
            return Object.assign({}, state,
                {
                    getWishItemsSuccess: false,
                    getWishItemsFailure: true,
                    error: action.error
                })


        case ActionTypes.DeleteFromWish:
            let index = itemArray.findIndex((x) => x.courseName == action.name);
            itemArray.splice(index, 1);
            return Object.assign({}, state,
                {
                    wishItems: itemArray,
                })
        case ActionTypes.DeleteFromWishSuccess:
            return Object.assign({}, state,
                {
                    wishItems: state.wishItems,
                    deleteFromWishSuccess: true,
                    deleteFromWishFailure: false
                })
        case ActionTypes.DeleteFromWishFailure:
            return Object.assign({}, state,
                {
                    deleteFromWishSuccess: false,
                    deleteFromWishFailure: true
                })
        default:
            return state;
    }

}