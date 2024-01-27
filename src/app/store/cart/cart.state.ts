
import { Course } from "src/models/course";

export interface ICart {
    items:Course[];
    getCartSuccess:boolean;
    getCartFailure:boolean;
    addToCartSuccess:boolean;
    addToCartFailure:boolean;
    error:string;
 }