import { ActionTypes, ActionsUnion } from "../actions.factory";
import { ICart } from "./cart.state";

export const initialState: ICart = {
    items: [],
    getCartSuccess: false,
    getCartFailure: false,
    addToCartSuccess: false,
    addToCartFailure: false,
    error: "",
    deleteFromCartSuccess: false,
    deleteFromCartFailure: false
};


export function CartReducer(state = initialState, action: ActionsUnion): ICart {
    let itemArray = [...state.items];
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
                    error: action.error
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


        case ActionTypes.DeleteFromCart:
            let index = itemArray.findIndex((x) => x.courseName == action.name);
            itemArray.splice(index, 1);
            return Object.assign({}, state,
                {
                    items: itemArray,
                })
        case ActionTypes.DeleteFromCartSuccess:
            return Object.assign({}, state,
                {
                    items: state.items,
                    deleteFromCartSuccess: true,
                    deleteFromCartFailure: false
                })
        case ActionTypes.DeleteFromCartFailure:
            return Object.assign({}, state,
                {
                    deleteFromCartFailure: true
                })
        default:
            return state;
    }

}