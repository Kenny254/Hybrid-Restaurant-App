import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Service } from '../app/service';
import { OneSignal } from '@ionic-native/onesignal';
import { ImageLoaderConfig } from 'ionic-image-loader';


@Component({
  templateUrl: 'app.html',
  selector: 'MyApp',
  providers: [Service, OneSignal]

})
export class MyApp {
  noOfItems: number;
  newsCounter: number;
  offerCounter = 0;
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
 

  ngOnInit(): any {
    let token = localStorage.getItem('introShown');

    if (token == '1') {
      this.rootPage = "IntroPage";
    }
    else {
      this.rootPage = "IntroPage";
      localStorage.setItem('introShown', '1');
    }
  }



  constructor(public platform: Platform,
    public service: Service,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public oneSignal: OneSignal,
    public toast: ToastController,
    private imageLoaderConfig: ImageLoaderConfig ) {

    platform.ready().then((res) => {
      if (res == 'cordova') {
        this.oneSignal.startInit('');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(() => {
        });
        this.oneSignal.handleNotificationOpened().subscribe((jsonData:any) =>  {
        let dataFromPush = JSON.stringify(jsonData);
                    // this.navCtrl.push("NotificationPage");

        console.log('didReceiveRemoteNotificationCallBack: ' + dataFromPush);  
        });

        this.oneSignal.endInit();
      }
      statusBar.styleDefault();
      splashScreen.hide();


    });
   
    this.imageLoaderConfig.setFallbackUrl('../../assets/no-image.png'); 
    // this.service.getData()
    //   .subscribe((response) => {
    //     this.newsCounter = response.newsList.length;
    //     for (let i = 0; i <= response.menuItems.length - 1; i++) {
    //       if (response.menuItems[i].offer != null) {
    //         this.offerCounter = this.offerCounter + 1;
    //       }
    //     }
    //   })
  }

 isLogin() {
    return localStorage.getItem('user') != null;
  }
  home() {
    this.nav.setRoot("HomePage");
  }
  catagory() {
    this.nav.setRoot("CategoryPage");
  }
  gotoCart() {
    this.nav.setRoot("CartPage");
  }
  yourOrders() {
    this.nav.setRoot("OrdersPage");
  }
  news() {
    this.nav.setRoot("NewsPage");
  }
  contact() {
    this.nav.setRoot("ContactPage");
  }
  aboutUs() {
    this.nav.setRoot("AboutUsPage");
  }
  thankyou() {
    this.nav.setRoot("ThankyouPage");
  }
  notification(){
    this.nav.setRoot("NotificationPage")
  }
  intro(){
    this.nav.setRoot("IntroPage")
  }
}
