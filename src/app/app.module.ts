import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store/app.store.module';
import { EffectsModule } from '@ngrx/effects';
import { IonicStorageModule ,Storage} from '@ionic/storage-angular';
import { StorageService } from './services/storage/storage.service';

export function provideStorage(storage: Storage) {
  return new StorageService(storage, {
    carts: [],
    wishList: [],
    courses:[],
    profile:null
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
export class AppModule {}