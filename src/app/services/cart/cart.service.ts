import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartItem } from "src/models/cartItem";
import { StorageService } from "../storage/storage.service";
import { ToastService } from "src/app/shared/ui/toast/toast.service";
import { Course } from "src/models/course";

@Injectable({
    providedIn: 'root'
})


export class CartService {

    constructor(private storage: StorageService, private toastService: ToastService) { }


    AddToCart(cartItem: CartItem) {
        return new Observable<any>(observe => {
            setTimeout(async () => {
                await this.storage.load();
                let arrayOfCartItem: CartItem[] = [];
                arrayOfCartItem = await this.storage.getValue('cart');
                let checkExist = arrayOfCartItem.findIndex((x) => x.courseName == cartItem.courseName);
                if (checkExist == -1) {
                    arrayOfCartItem.push(cartItem);
                    await this.storage.setValue('cart', arrayOfCartItem).then(() => {
                        this.toastService.ShowToast("Course successfully added in the cart")
                    }).catch((error) => {
                        this.toastService.ShowErrorToast(error);
                    });
                    observe.next(arrayOfCartItem);
                    observe.complete();
                } else {
                    this.toastService.ShowErrorToast(cartItem.courseName+" already exists in the cart");
                }
            }, 5);
        });
    }

    GetCartItems() {
        return new Observable(observe => {
          setTimeout(async () => {
            if (this.storage) {
             await this.storage.load();
              await this.storage.getValue('cart').then((cartItems: Course[]) => {
                observe.next(cartItems);
                observe.complete();
              });
            }
          }, 5);
        });
      }
}