import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage/storage.service';
import { LoadingService } from 'src/app/shared/ui/loading/loading.service';
import { ToastService } from 'src/app/shared/ui/toast/toast.service';
import { Profile } from 'src/models/Profile';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:string="test";
  password: string="";
  profile: Profile | any;


  constructor(private router: Router, private storage: StorageService,
    private toast:ToastService,private loading:LoadingService) { }

    login() {
      this.loading.showLoading();
      this.storage.getValue("profile").then((data)=>{
        this.profile=data;
        if(this.username?.length==0 || this.password?.length==0){
          this.toast.ShowErrorToast("username and password are required");
          this.loading.dismissLoading();
        }
        else if(this.password==this.profile.password){
          setTimeout(()=>{
            this.router.navigateByUrl('/tabs/dashboard');
            this.toast.ShowToast("Welcome to Binder app")
          },5000);
        }else{
          this.loading.dismissLoading();
            this.toast.ShowErrorToast("username or password not correct");
        }
      });
    }
  ngOnInit() {
  }

}
