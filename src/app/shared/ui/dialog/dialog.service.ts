import { Inject, Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { DeleteFromCart } from 'src/app/store/cart/cart.action';
import { Constant } from '../../configuration/constant';


@Injectable({
    providedIn: 'root'
})

export class DialogService {


    constructor(public alertController: AlertController,private store:Store<AppState>) { }


    ShowAlert(message) {
        this.alertController.create({
            message: message,
            header:"Checkout Order",
            buttons: [
                {
                    text: 'OK',
                    handler:(data)=>{
                        this.store.select('cart').pipe().subscribe((items)=>{
                            items.items.forEach((item)=>{
                                this.store.dispatch(new DeleteFromCart(item.courseName));
                            });
                            Constant.TotalPrice=0.00;
                        });
                    }
                }
            ]
        }).then((dialog) => {
            dialog.present();
        });
    }

}