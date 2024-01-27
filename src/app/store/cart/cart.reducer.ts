import { ActionTypes, ActionsUnion } from "../actions.factory";
import { ICart } from "./cart.state";

export const initialState: ICart = {
    items: [],
    getCartSuccess: false,
    getCartFailure: false,
    addToCartSuccess: false,
    addToCartFailure: false,
    error: ""
};


export function CartReducer(state = initialState, action: ActionsUnion): ICart {

    switch (action.type) {

        case ActionTypes.GetCartSuccess:
            return Object.assign({}, state,
                {
                    items: action.items,
                    getCartSuccess: true,
                    getCartFailure: false,
                })

        case ActionTypes.GetCartFailure:
            return Object.assign({}, state,
                {
                    getCartSuccess: false,
                    getCartFailure: true,
                    error:action.error
                })

        // Add To Cart Success
        case ActionTypes.AddToCartSuccess:
            return Object.assign({}, state,
                {
                    items: action.payload,
                    addToCartSuccess: true,
                    addToCartFailure: false,
                })
        case ActionTypes.AddToCartFailure:
            return Object.assign({}, state,
                {
                    addToCartSuccess: false,
                    addToCartFailure: true,
                })
        default:
            return state;
    }

}