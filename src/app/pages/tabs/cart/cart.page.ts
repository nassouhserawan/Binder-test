import { Component, OnInit } from '@angular/core';
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

  constructor(private store: Store<AppState>) { }
  Cart: Course[];
  ngOnInit() {
    this.store.dispatch(new GetCart);
    this.store.select('cart').subscribe((cartItems) => {
      this.Cart = cartItems.items;
    })
  }

}
