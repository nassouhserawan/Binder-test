import { Component, OnInit } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { LoadingService } from 'src/app/shared/ui/loading/loading.service';
import { AppState } from 'src/app/store/app.state';
import { GetCourses } from 'src/app/store/course/course.action';
import { CartItem } from 'src/models/cartItem';
import { Course } from 'src/models/course';
import * as fromCartActions from '../../../store/cart/cart.action'
import * as fromWishActions from '../../../store/wish/wish.action'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private store: Store<AppState>, private modal: ModalController,
    private loadingService: LoadingService, private router: Router) {
    this.store.dispatch(new GetCourses);
  }

  Courses: Course[];
  filteredCourses: Course[];

  ngOnInit() {
    setTimeout(() => {
      this.store.select('courses').pipe().subscribe((data) => {
        this.Courses = data.courses;
      });
      this.filteredCourses = this.Courses;
      console.log(this.Courses);
    }, 100);
  }

  FilterItems(val) {
    let arr = this.Courses.filter((x) => {
      return x.courseName.toLowerCase().indexOf(val.value) > -1 ||
        x.author.toLowerCase().indexOf(val.value) > -1;
    });
    this.filteredCourses = arr;
  }

  // Sort by price ASC
  SortItemsAsc() {
    this.loadingService.showLoading();
    this.modal.getTop().then((modal) => {
      modal?.dismiss();
      this.loadingService.dismissLoading();
    });
    setTimeout(() => {
      this.filteredCourses = this.filteredCourses.slice().sort((a, b) => {
        return Number(a.actualPrice) - Number(b.actualPrice);
      });
      this.loadingService.dismissLoading();
    }, 1000);
  }

  // Sort by price DSC
  SortItemsDsc() {
    this.loadingService.showLoading();
    this.modal.getTop().then((modal) => {
      modal?.dismiss();
      this.loadingService.dismissLoading();
    });
    setTimeout(() => {
      this.filteredCourses = this.filteredCourses.slice().sort((a, b) => {
        return Number(b.actualPrice) - Number(a.actualPrice);
      });
      this.loadingService.dismissLoading();
    }, 1000);
  }
  clicked = false;
  AddToWishList(item: Course) {
    this.store.dispatch(new fromWishActions.AddToWish(item));
    setTimeout(() => {
      this.store.dispatch(new GetCourses);
    }, 4000);
    this.store.select('courses').pipe().subscribe((data) => {
      this.Courses = data.courses;
    });
    this.filteredCourses = this.Courses;
    //this.clicked=false;
    console.log(this.Courses);
  }

  AddToCart(item: Course) {
    this.store.dispatch(new fromCartActions.AddToCart(item));
    this.store.dispatch(new GetCourses);
  }


  GoToCourseDetails(item: Course) {
    this.router.navigateByUrl("/course-details", { state: item })
  }

}
