import { AddToCart, AddToCartFailure, AddToCartSuccess, DeleteFromCart, DeleteFromCartFailure, DeleteFromCartSuccess, GetCart, GetCartFailure, GetCartSuccess } from "./cart/cart.action";
import { GetCourses, GetCoursesFailure, GetCoursesSuccess } from "./course/course.action";
import { AddToWish, AddToWishFailure, AddToWishSuccess, DeleteFromWish, DeleteFromWishFailure, DeleteFromWishSuccess, GetWish, GetWishFailure, GetWishSuccess } from "./wish/wish.action";

export enum ActionTypes {

    // Get Courses Actions
    GetCourses = "[Dashboard Page] Get Courses",
    GetCoursesSuccess = "[Dashboard Page] Get Courses Success",
    GetCoursesFailure = "[Dashboard Page] Get Courses Failure",

    // Get Cart Actions
    GetCart = "[Dashboard Page] Get Cart",
    GetCartSuccess = "[Dashboard Page] Get Cart Success",
    GetCartFailure = "[Dashboard Page] Get Cart Failure",


    // Add to Cart Actions
    AddToCart = "[Dashboard Page] Add To Cart",
    AddToCartSuccess = "[Dashboard Page] Add To Cart Success",
    AddToCartFailure = "[Dashboard Page] Add To Cart Failure",


    // Delete From Cart Actions
    DeleteFromCart = "[Dashboard Page] Delete From Cart",
    DeleteFromCartSuccess = "[Dashboard Page] Delete From Cart Success",
    DeleteFromCartFailure = "[Dashboard Page] Delete From Cart Failure",

    // Add to Wish Actions
    AddToWish = "[Dashboard Page] Add To Wish",
    AddToWishSuccess = "[Dashboard Page] Add To Wish Success",
    AddToWishFailure = "[Dashboard Page] Add To Wish Failure",

    // Get Wish Actions
    GetWish = "[Dashboard Page] Get Wish",
    GetWishSuccess = "[Dashboard Page] Get Wish Success",
    GetWishFailure = "[Dashboard Page] Get Wish Failure",


    // Delete From Wish Actions
    DeleteFromWish = "[Dashboard Page] Delete From Wish",
    DeleteFromWishSuccess = "[Dashboard Page] Delete From Wish Success",
    DeleteFromWishFailure = "[Dashboard Page] Delete From Wish Failure",
}

export type ActionsUnion =
    GetCourses | GetCoursesSuccess | GetCoursesFailure |
    GetCart | GetCartSuccess | GetCartFailure |
    AddToCart | AddToCartSuccess | AddToCartFailure |
    AddToWish | AddToWishSuccess | AddToWishFailure |
    DeleteFromCart | DeleteFromCartSuccess | DeleteFromCartFailure |
    GetWish | GetWishSuccess | GetWishFailure |
    DeleteFromWish | DeleteFromWishSuccess | DeleteFromWishFailure;
