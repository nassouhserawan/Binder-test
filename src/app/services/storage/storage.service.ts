import { Inject, Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private SETTINGS_KEY: string = '_settings';
  settings: any;

  _defaults: any;
  //_readyPromise: Promise<any>;

  constructor(public storage: Storage,@Inject('defaults') defaults?:any) {
    this._defaults = defaults;
     this.storage.create();
  }

  load() {
    return this.storage.get(this.SETTINGS_KEY).then((value) => {
      if (value) {
        this.settings = value;
        return this._mergeDefaults(this._defaults);
      } else {
        return this.setAll(this._defaults).then((val) => {
          this.settings = val;
        })
      }
    });
  }

  _mergeDefaults(defaults: any) {
    for (let k in defaults) {
      if (!(k in this.settings)) {
        this.settings[k] = defaults[k];
      }
    }
    return this.setAll(this.settings);
  }

  merge(settings: any) {
    for (let k in settings) {
      this.settings[k] = settings[k];
    }
    return this.save();
  }

  setValue(key: string, value: any): Promise<any> {
    if (!this.settings) {
      return this.load().then((v) => {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
      });
    } else {
      this.settings[key] = value;
      return this.storage.set(this.SETTINGS_KEY, this.settings);
    }

    // return new Promise(() => { });
  }

  setAll(value: any) {
    return this.storage.set(this.SETTINGS_KEY, value);
  }

  getValue(key: string): Promise<any>{
    return this.storage.get(this.SETTINGS_KEY)
      .then(settings => {
        return settings[key];
      });
  }

  save() {
    return this.setAll(this.settings);
  }

  get allSettings() {
    return this.settings;
  }
}
 