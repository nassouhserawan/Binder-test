import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store/app.store.module';
import { EffectsModule } from '@ngrx/effects';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';
import { StorageService } from './services/storage/storage.service';

export function provideStorage(storage: Storage) {
  return new StorageService(storage, {
    carts: [],
    wishList: [],
    courses: [],
    profile: {
      firstName: "Mhd Nassouh",
      lastName: "Serawan",
      about: "Highly motivated Software engineer specialist in mobile application development with 5 years of experience in cross platforms { Flutter, Ionic [Cordova,Capacitor] & NGRX Store } and Knowledge in Android native.\
      Extensive knowledge and hands-on experience working on Software Applications. Proven ability to interface with customers, understand product requirements, and design proof of concept prototypes.",
      areaOfInterest: "Programming,Software",
      role: "Administrator",
      experience: "7/10",
      expertise: "Front & Back End",
      username: "test",
      password: "dummy@123",
    }
  });
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    ...AppStoreModule,
    IonicStorageModule.forRoot(),
    //StoreDevtoolsModule.instrument({maxAge:25}),
    // EffectsModule.forRoot([])],
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: StorageService, useFactory: provideStorage, deps: [Storage] },],
  bootstrap: [AppComponent],
})
export class AppModule { }