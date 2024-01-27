import { Inject, Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';


@Injectable({
    providedIn: 'root'
})

export class LoadingService {


    constructor(private loadingController: LoadingController) { }
    loading: HTMLIonLoadingElement;
    showLoading() {
        this.loadingController.create({
            spinner: 'bubbles',
            duration: 3000,
        }).then((loading) => {
            this.loading == loading;
            loading.present();
        });
    }

    dismissLoading() {
        this.loading.dismiss();
    }
}