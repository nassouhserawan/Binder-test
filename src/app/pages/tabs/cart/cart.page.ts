import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { GetCart } from 'src/app/store/cart/cart.action';
import { Course } from 'src/models/course';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  GoCheckOut() {
    this.router.navigateByUrl('/checkout');
  }

  constructor(private router: Router, private store: Store<AppState>) { }
  Cart: Course[];
  TotalPrice: number = 0.00;
  ngOnInit() {
    this.store.dispatch(new GetCart);
    this.store.select('cart').subscribe((cartItems) => {
      this.Cart = cartItems.items;
      this.Cart.forEach((item) => {
        this.TotalPrice += item.actualPrice - item.actualPrice * item.discountPercentage * 0.01;
      });
    });

  }

}
