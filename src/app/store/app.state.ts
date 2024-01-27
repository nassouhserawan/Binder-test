import { ICart } from "./cart/cart.state";
import { ICourses } from "./course/course.state";
import { IWish } from "./wish/wish.state";

export interface AppState { 
    courses:ICourses;
    cart:ICart,
    wishList:IWish
}