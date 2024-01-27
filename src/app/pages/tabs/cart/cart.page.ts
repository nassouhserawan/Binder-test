import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { DeleteFromCart, GetCart } from 'src/app/store/cart/cart.action';
import { Course } from 'src/models/course';
import * as fromWishActions from '../../../store/wish/wish.action'
import { ToastService } from 'src/app/shared/ui/toast/toast.service';
import { DialogService } from 'src/app/shared/ui/dialog/dialog.service';
import { Constant } from 'src/app/shared/configuration/constant';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {


  constructor(private router: Router, private store: Store<AppState>,
    private toastService: ToastService, private dialogService: DialogService) { }
  Cart: Course[];
  Total:number;  
  ngOnInit() {
    this.store.dispatch(new GetCart);
    this.store.select('cart').pipe().subscribe((cartItems) => {
      this.Cart = cartItems.items;
      this.Cart.forEach((item) => {
        Constant.TotalPrice += item.actualPrice - item.actualPrice * item.discountPercentage * 0.01;
      });
      this.Total=Constant.TotalPrice;
    });
  }

  DeleteFromCart(item: Course) {
    this.store.dispatch(new DeleteFromCart(item.courseName));
    this.store.select('cart').pipe().subscribe((cartItems) => {
      this.Cart = cartItems.items;
      Constant.TotalPrice = 0.00;
      this.Cart.forEach((item) => {
        Constant.TotalPrice += item.actualPrice - item.actualPrice * item.discountPercentage * 0.01;
      });
      this.Total=Constant.TotalPrice;
    });
  }

  AddToWishList(item: Course) {
    this.store.dispatch(new DeleteFromCart(item.courseName));
    this.store.dispatch(new fromWishActions.AddToWish(item));
    this.store.select('cart').pipe().subscribe((cartItems) => {
      this.Cart = cartItems.items;
      Constant.TotalPrice = 0.00;
      this.Cart.forEach((item) => {
        Constant.TotalPrice += item.actualPrice - item.actualPrice * item.discountPercentage * 0.01;
      });
      this.Total=Constant.TotalPrice;
    });
  }

  GoCheckOut() {
    if (this.Cart.length == 0)
      this.toastService.ShowErrorToast("No items in th cart");
    else {
      this.dialogService.ShowAlert("Your order has been sent successfully");
    }
  }

}
