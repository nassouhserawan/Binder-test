import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { StorageService } from "../storage/storage.service";
import { Course } from "src/models/course";

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient,private storage:StorageService) { 
    }

    GetCourses(): Observable<any> {
        return this.http.get('../../assets/data/data.json').pipe(
            map(results => results
            ));
    }

    GetAllCourses() {
        return new Observable(observe => {
          setTimeout(async () => {
            if (this.storage) {
             // await this.storage.load();
              await this.storage.getValue('courses').then((courses: Course[]) => {
                observe.next(courses);
                observe.complete();
              });
            }
          }, 5);
        });
      }
}
