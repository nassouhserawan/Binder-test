import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastService } from 'src/app/shared/ui/toast/toast.service';
import { AppState } from 'src/app/store/app.state';
import { AddToCart } from 'src/app/store/cart/cart.action';
import { DeleteFromWish, GetWish } from 'src/app/store/wish/wish.action';
import { Course } from 'src/models/course';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
})
export class WishListPage implements OnInit {
  AddToCart(item: Course) {
    this.store.dispatch(new AddToCart(item));
  }

  constructor(private store: Store<AppState>,private toastService:ToastService) { }
  WishList: Course[];

  ngOnInit() {
    this.store.dispatch(new GetWish);
    this.store.select('wishList').pipe().subscribe((Wish) => {
      this.WishList = Wish.wishItems;
      console.log(this.WishList);
    });
  }

  DeleteFromWishList(item: Course) {

    this.store.dispatch(new DeleteFromWish(item.courseName));
    this.toastService.ShowToast(item.courseName+ ' removed from wish list');
    this.store.select('wishList').pipe().subscribe((Wish) => {
      this.WishList = Wish.wishItems;
    });
  }


}
