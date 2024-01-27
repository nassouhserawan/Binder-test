import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ActionTypes } from "../actions.factory";
import { WishService } from "src/app/services/wish/wish.service";
import * as fromCourseActions from '../../store/course/course.action'
import * as fromWishActions from '../../store/wish/wish.action'
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class WishEffects {

    AddToWish$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ActionTypes.AddToWish),
            mergeMap(Wish =>
                this.wishService.AddToWish(Wish['wishItem'])),
            map(res => new fromWishActions.AddToWishSuccess(res)),
            catchError((err) => of(new fromWishActions.AddToWishFailure(err))))

    });

constructor(private actions$: Actions,private wishService:WishService) { }
}