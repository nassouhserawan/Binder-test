import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { ActionTypes } from "../actions.factory";
import { CartService } from "src/app/services/cart/cart.service";
import * as fromCartAction from './cart.action';

@Injectable({
    providedIn: 'root'
})
export class CartEffects {
    AddToCart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ActionTypes.AddToCart),
            mergeMap(Cart =>
                this.cartService.AddToCart(Cart['cartItem'])),
            map(res => new fromCartAction.AddToCartSuccess(res)),
            catchError((err) => of(new fromCartAction.AddToCartFailure(err))))

    });

    GetCartItems$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ActionTypes.GetCart),
            switchMap(() =>
                this.cartService.GetCartItems().pipe(
                    map((data: any) => new fromCartAction.GetCartSuccess(data)),
                    catchError(async (error) => new fromCartAction.GetCartFailure(error))
                )
            )
        )
    });

    DeleteFromCart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ActionTypes.DeleteFromCart),
            mergeMap(data =>
                this.cartService.DeleteCartItem(data['name'])),
            map(res => new fromCartAction.DeleteFromCartSuccess(res)),
            catchError((err) => of(new fromCartAction.DeleteFromCartFailure(err))))

    });

    constructor(private actions$: Actions, private cartService: CartService) { }
}