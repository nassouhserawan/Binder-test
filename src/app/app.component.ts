import { Component } from '@angular/core';
import { StorageService } from './services/storage/storage.service';
import { Store } from '@ngrx/store';
import { GetCourses } from './store/course/course.action';
import { CourseService } from './services/course/course.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private storage: StorageService,private store:Store,
    private courseService:CourseService) {
    this.storage.load();
    this.courseService.GetCourses().subscribe((items)=>{
      this.storage.getValue("courses").then((courses)=>{
        console.log(courses,"courses");
        if(courses.length==0){
          this.storage.setValue("courses",items);
        }
      })
      
    });
  }
}
