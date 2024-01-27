import { ToastService } from "src/app/shared/ui/toast/toast.service";
import { StorageService } from "../storage/storage.service";
import { Injectable } from "@angular/core";
import { Course } from "src/models/course";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class WishService {

    constructor(private storage: StorageService, private toastService: ToastService) {
    }

    AddToWish(item: Course) {
        return new Observable<any>(observe => {
            setTimeout(async () => {
                await this.storage.load();
                let arrayOfWishItem: Course[] = [];
                let Courses:Course[]=[];
                let temp:Course[]=[];
                let index = -2;
                arrayOfWishItem = await this.storage.getValue('wishList');
                Courses = await this.storage.getValue('courses');
                let checkExist = arrayOfWishItem.findIndex((x) => x.courseName == item.courseName);
                if (checkExist == -1) {
                    let nItem = { ...item };
                    nItem.isWishItem = true;
                    arrayOfWishItem.push(nItem);
                    await this.storage.setValue('wishList', arrayOfWishItem).then(async() => {
                        this.toastService.ShowToast("Course successfully added to wish list")
                        index = Courses.findIndex((x) => x.courseName == item.courseName);
                        temp = Courses;
                        temp[index] = { ...nItem };
                        await this.storage.setValue('courses', temp);
                        
                    }).catch((error) => {
                        this.toastService.ShowErrorToast(error);
                    });
                    observe.next(arrayOfWishItem);
                    observe.complete();
                } else {
                    this.toastService.ShowErrorToast(item.courseName + " already exists in wish list");
                }
            }, 5);
        });
    }
}