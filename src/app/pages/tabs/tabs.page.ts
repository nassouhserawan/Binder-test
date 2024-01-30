import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  selectTab: any;
  @ViewChild('tabs') tabs: IonTabs | any;

  constructor(private store:Store<AppState>) { }

  numberOfItems=0;
  ngOnInit() {
    this.store.select('cart').pipe().subscribe((cart)=>{
      this.numberOfItems=cart.items.length;
    });
  }

  setCurrentTab(event) {
    console.log(event);    
    this.selectTab = this.tabs.getSelected();
  }

}
