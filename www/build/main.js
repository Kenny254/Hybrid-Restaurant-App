webpackJsonp([15],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_network_service__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Service = (function () {
    function Service(http, networkService) {
        this.http = http;
        this.networkService = networkService;
        this.sflive = 'https://order.sandwichfactory.qa/api/sforder'; //https://order.sandwichfactory.qa/api/sforder
        this.sfapiUrl = 'http://aljedad.com/api/sforder'; //http://aljedad.com/api/sforder
        this.equalTo = '%3D%3D';
        this.and = '%26%26';
        this.json = '?_view=json';
        this.filter = '_filter=';
        this.sort = '_sort=';
        this.amp = '&';
        this.postUrl = "http://aljedad.com/sforder/api";
        this.blogUrl = "https://sandwichfactory.qa/blog/wp-json/wp/v2/posts";
        this.notificationUrl = "https://sandwichfactory.qa/blog/wp-json/wp/v2/posts?filter[category_name]=notifications";
    }
    Service.prototype.getData = function () {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        }
        else {
            return this.http.get('assets/json/restaurantAppJson.json')
                .map(function (response) { return response.json(); });
        }
    };
    Service.prototype.getCategory = function () {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        }
        else {
            return this.http.get(this.sflive + '/9i3njlbu8_categories/' + this.json + this.amp + this.filter + 'status' + this.equalTo + '1' + this.amp + this.sort + 'priority+asc')
                .map(function (response) { return response.json(); });
        }
    };
    Service.prototype.getMenus = function (catId) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        }
        else {
            return this.http.get(this.sflive + '/9i3njlbu8_menus/' + this.json + this.amp + this.filter + 'menu_category_id' + this.equalTo + catId + this.and + 'menu_status' + this.equalTo + '1' + this.amp + this.sort + 'menu_priority+asc')
                .map(function (response) { return response.json(); });
        }
    };
    Service.prototype.getMenuItem = function (menuId) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        }
        else {
            return this.http.get(this.sflive + '/9i3njlbu8_menus/' + menuId + this.json)
                .map(function (response) { return response.json(); });
        }
    };
    Service.prototype.getMenuOptions = function (menuId) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        }
        else {
            return this.http.get(this.sflive + '/9i3njlbu8_menu_options/' + this.json + this.amp + this.filter + 'menu_id' + this.equalTo + menuId)
                .map(function (res) { return res.json(); });
        }
    };
    Service.prototype.getOptionName = function (optionValueId, optionId) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        }
        else {
            return this.http.get(this.sflive + '/9i3njlbu8_option_values/' + this.json + this.amp + this.filter + 'option_value_id' + this.equalTo + optionValueId + this.amp + 'option_id' + this.equalTo + optionId + this.sort + 'priority+asc')
                .map(function (resp) { return resp.json(); });
        }
    };
    Service.prototype.postOrderDetails = function (orderedItems) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        }
        else {
            //console.log(JSON.stringify(orderedItems));
            this.body = 'message=' + JSON.stringify(orderedItems);
            this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            this.headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
            return this.http.post(this.postUrl, this.body, { headers: this.headers })
                .map(function (res) { return res.text(); });
            //     .subscribe((data) => {
            //     console.log(data);
            // });
            //.catch(this.handleError);
        }
    };
    Service.prototype.getBlog = function () {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        }
        else {
            return this.http.get(this.blogUrl)
                .map(function (res) { return res.json(); });
        }
    };
    Service.prototype.getBlogDetail = function (post_id) {
        if (this.networkService.noConnection()) {
            this.networkService.showNetworkAlert();
        }
        else {
            return this.http.get(this.blogUrl + '/' + post_id)
                .map(function (res) { return res.json(); });
        }
    };
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_network_service__["a" /* NetworkService */]])
], Service);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		580,
		6
	],
	"../pages/cart/cart.module": [
		581,
		5
	],
	"../pages/category/category.module": [
		582,
		4
	],
	"../pages/checkout/checkout.module": [
		583,
		14
	],
	"../pages/contact/contact.module": [
		584,
		13
	],
	"../pages/home/home.module": [
		585,
		3
	],
	"../pages/intro/intro.module": [
		586,
		12
	],
	"../pages/location/location.module": [
		587,
		1
	],
	"../pages/news-detail/news-detail.module": [
		589,
		11
	],
	"../pages/news/news.module": [
		588,
		10
	],
	"../pages/notification/notification.module": [
		590,
		9
	],
	"../pages/product-details/product-details.module": [
		591,
		0
	],
	"../pages/product-list/product-list.module": [
		592,
		2
	],
	"../pages/settings/settings.module": [
		593,
		8
	],
	"../pages/thankyou/thankyou.module": [
		594,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 185;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkService = (function () {
    function NetworkService(alert, 
        //private diagnostic: Diagnostic,
        network, app) {
        this.alert = alert;
        this.network = network;
        this.app = app;
        //this.nav = navCtrl
        this.navCtrl = app.getActiveNav();
    }
    NetworkService.prototype.noConnection = function () {
        return (this.network.type === 'none');
    };
    NetworkService.prototype.showSettings = function () {
        if (this.noConnection()) {
            this.showNetworkAlert();
        }
        else {
            this.navCtrl.push("Homepage");
        }
        // if (this.diagnostic.switchToWifiSettings) {
        //   this.diagnostic.switchToWifiSettings();
        // } else {
        //   this.diagnostic.switchToSettings();
        // }
    };
    NetworkService.prototype.showNetworkAlert = function () {
        var _this = this;
        var networkAlert = this.alert.create({
            title: 'No Internet Connection',
            message: 'Please check your internet connection.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () { }
                },
                {
                    text: 'Reload',
                    handler: function () {
                        networkAlert.dismiss().then(function () {
                            _this.showSettings();
                        });
                    }
                }
            ]
        });
        networkAlert.present();
    };
    return NetworkService;
}());
NetworkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], NetworkService);

//# sourceMappingURL=network-service.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(267);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_network_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_diagnostic__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_image_loader__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate/ng2-translate';








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#CartPageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news-detail/news-detail.module#NewsDetailPageModule', name: 'NewsDetailPage', segment: 'news-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NewsPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product-details/product-details.module#ProductDetailsPageModule', name: 'ProductDetailsPage', segment: 'product-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product-list/product-list.module#ProductListPageModule', name: 'ProductListPage', segment: 'product-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsModule', name: 'Settings', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankyouPage', segment: 'thankyou', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ionic_image_loader__["b" /* IonicImageLoader */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_10__providers_network_service__["a" /* NetworkService */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_diagnostic__["a" /* Diagnostic */],
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_image_loader__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, service, statusBar, splashScreen, oneSignal, toast, imageLoaderConfig) {
        var _this = this;
        this.platform = platform;
        this.service = service;
        this.oneSignal = oneSignal;
        this.toast = toast;
        this.imageLoaderConfig = imageLoaderConfig;
        this.offerCounter = 0;
        platform.ready().then(function (res) {
            if (res == 'cordova') {
                _this.oneSignal.startInit('8fe87859-f423-4946-964f-28cee25c1b8b', '973507141094');
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
                _this.oneSignal.handleNotificationReceived().subscribe(function () {
                });
                _this.oneSignal.handleNotificationOpened().subscribe(function (jsonData) {
                    var dataFromPush = JSON.stringify(jsonData);
                    // this.navCtrl.push("NotificationPage");
                    console.log('didReceiveRemoteNotificationCallBack: ' + dataFromPush);
                });
                _this.oneSignal.endInit();
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
    MyApp.prototype.ngOnInit = function () {
        var token = localStorage.getItem('introShown');
        if (token == '1') {
            this.rootPage = "IntroPage";
        }
        else {
            this.rootPage = "IntroPage";
            localStorage.setItem('introShown', '1');
        }
    };
    MyApp.prototype.isLogin = function () {
        return localStorage.getItem('user') != null;
    };
    MyApp.prototype.home = function () {
        this.nav.setRoot("HomePage");
    };
    MyApp.prototype.catagory = function () {
        this.nav.setRoot("CategoryPage");
    };
    MyApp.prototype.gotoCart = function () {
        this.nav.setRoot("CartPage");
    };
    MyApp.prototype.yourOrders = function () {
        this.nav.setRoot("OrdersPage");
    };
    MyApp.prototype.news = function () {
        this.nav.setRoot("NewsPage");
    };
    MyApp.prototype.contact = function () {
        this.nav.setRoot("ContactPage");
    };
    MyApp.prototype.aboutUs = function () {
        this.nav.setRoot("AboutUsPage");
    };
    MyApp.prototype.thankyou = function () {
        this.nav.setRoot("ThankyouPage");
    };
    MyApp.prototype.notification = function () {
        this.nav.setRoot("NotificationPage");
    };
    MyApp.prototype.intro = function () {
        this.nav.setRoot("IntroPage");
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Projects\sfapp\src\app\app.html"*/'<ion-menu persistent="true" [content]="content" class="menu">\n  <ion-content class="sidebar-menu">\n    <ion-row class="img-name-row">\n      <ion-col>\n        <img class="user-img" src="assets/img/logo-main.png">\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col>\n        <p class="user-name">Sandwich Factory</p>\n      </ion-col>\n    </ion-row> -->\n    <button menuClose class="menu-item" ion-item (click)="home()">\n      <ion-icon name="home" item-left></ion-icon>\n      Home\n    </button>\n    <button menuClose class="menu-item" ion-item (click)="catagory()">\n      <ion-icon  name="apps" item-left></ion-icon>\n      Category\n    </button>\n    <!--<button menuClose class="menu-item" ion-item (click)="offer()">\n      <ion-icon  name="pricetag" item-left></ion-icon>\n      Offers<ion-badge class="menu-badge">{{offerCounter}}</ion-badge>\n    </button>-->\n    <button menuClose class="menu-item" ion-item (click)="gotoCart()">\n      <ion-icon  name="cart" item-left></ion-icon>\n      My Cart<ion-badge class="menu-badge">{{noOfItems}}</ion-badge>\n    </button>\n    <!--<button menuClose class="menu-item" ion-item *ngIf="isLogin()"\n            (click)="yourOrders()">\n      <ion-icon  name="timer" item-left></ion-icon>\n      Your Orders\n    </button>-->\n    <!-- <button menuClose class="menu-item" ion-item *ngIf="isLogin()"\n            (click)="settings()">\n      <ion-icon name="settings" item-left></ion-icon>\n      Settings\n    </button> -->\n    <button menuClose class="menu-item" ion-item\n            (click)="news()">\n      <ion-icon name="paper" item-left></ion-icon>\n      Our Blog\n    </button>\n    <!--<button menuClose class="menu-item" ion-item *ngIf="isLogin()"\n            (click)="favourite()">\n      <ion-icon name="heart" item-left></ion-icon>\n      Favourite\n    </button>-->\n     <button menuClose class="menu-item" ion-item\n                     (click)="aboutUs()">\n      <ion-icon name="contacts" item-left></ion-icon>\n      About Us\n    </button>\n    <button menuClose class="menu-item" ion-item\n                     (click)="contact()">\n      <ion-icon name="call" item-left></ion-icon>\n      Contact\n    </button>\n    <!--<button menuClose class="menu-item" ion-item *ngIf="!isLogin()" (click)="login()">\n      <ion-icon name="log-in" item-left></ion-icon>\n      Login\n    </button>\n    <button menuClose class="menu-item" ion-item *ngIf="isLogin()" (click)="logout()">\n      <ion-icon name="log-out" item-left></ion-icon>\n      Logout\n    </button>-->\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Projects\sfapp\src\app\app.html"*/,
        selector: 'MyApp',
        providers: [__WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* Service */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_image_loader__["a" /* ImageLoaderConfig */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[262]);
//# sourceMappingURL=main.js.map