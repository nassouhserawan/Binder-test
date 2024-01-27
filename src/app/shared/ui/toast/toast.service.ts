import { Inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
    providedIn: 'root'
})

export class ToastService {


    constructor(public toastController: ToastController) { }


    ShowToast(message) {
        this.toastController.create({
            message: message,
            color: 'success',
            icon: 'checkmark-circle-outline',
            duration: 3000
        }).then((toast) => {
            toast.present();
        });
    }
    ShowErrorToast(message) {
        this.toastController.create({
            message: message,
            color: 'danger',
            icon: 'alert-circle-outline',
            duration: 3000
        }).then((toast) => {
            toast.present();
        });
    }

}