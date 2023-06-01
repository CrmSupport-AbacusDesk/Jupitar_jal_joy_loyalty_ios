webpackJsonp([3],{

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditModalPageModule", function() { return ProfileEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_edit_modal__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ProfileEditModalPageModule = /** @class */ (function () {
    function ProfileEditModalPageModule() {
    }
    ProfileEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_edit_modal__["a" /* ProfileEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_edit_modal__["a" /* ProfileEditModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ProfileEditModalPageModule);
    return ProfileEditModalPageModule;
}());

//# sourceMappingURL=profile-edit-modal.module.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
* Generated class for the ProfileEditModalPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ProfileEditModalPage = /** @class */ (function () {
    function ProfileEditModalPage(navCtrl, navParams, viewCtrl, service, alertCtrl, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.data = {};
        this.state_list = [];
        this.district_list = [];
        this.city_list = [];
        this.pincode_list = [];
        this.selectedFile = [];
        this.file_name = [];
        this.karigar_id = '';
        this.formData = new FormData();
        this.profile_data = '';
        this.lang = '';
        this.getstatelist();
        this.today_date = new Date().toISOString().slice(0, 10);
        this.data = navParams.data.user_detail;
        this.data = navParams.data.user_detail;
        this.data.karigar_edit_id = navParams.data.user_detail.id;
        if (this.data.state) {
            this.getDistrictList(this.data.state);
        }
    }
    ProfileEditModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileEditModalPage');
    };
    ProfileEditModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ProfileEditModalPage.prototype.getstatelist = function () {
        var _this = this;
        this.service.get_rqst('app_master/getStates').subscribe(function (r) {
            console.log(r);
            _this.state_list = r['states'];
            _this.karigar_id = r['id'];
            console.log(_this.state_list);
        });
    };
    ProfileEditModalPage.prototype.getDistrictList = function (state_name) {
        var _this = this;
        console.log(state_name);
        this.service.post_rqst({ 'state_name': state_name }, 'app_master/getDistrict')
            .subscribe(function (r) {
            console.log(r);
            _this.district_list = r['districts'];
            console.log(_this.state_list);
        });
    };
    ProfileEditModalPage.prototype.getCityList = function (district_name) {
        var _this = this;
        console.log(district_name);
        this.service.post_rqst({ 'district_name': district_name }, 'app_master/getCity')
            .subscribe(function (r) {
            console.log(r);
            _this.city_list = r['cities'];
            _this.pincode_list = r['pins'];
            console.log(_this.pincode_list);
        });
    };
    ProfileEditModalPage.prototype.getaddress = function (pincode) {
        var _this = this;
        this.service.post_rqst({ 'pincode': pincode }, 'app_karigar/getAddress')
            .subscribe(function (result) {
            console.log(result);
            var address = result.address;
            if (address != null) {
                _this.data.state = result.address.state_name;
                _this.getDistrictList(_this.data.state);
                _this.data.district = result.address.district_name;
                _this.data.city = result.address.city;
                console.log(_this.data);
            }
        });
    };
    ProfileEditModalPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        console.log('data');
        console.log(this.data);
        if (this.data.dealer_counter_name) {
            this.data.dealer_status = 'Active';
            console.log(this.data.dealer_status);
        }
        else {
            this.data.dealer_status = '';
        }
        this.data.lang = this.lang;
        this.data.karigar_type = 1;
        this.data.gender = 'male';
        console.log(this.data);
        this.service.post_rqst({ 'karigar': this.data }, 'app_karigar/addKarigar')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.karigar_id = r['id'];
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        });
    };
    ProfileEditModalPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    ProfileEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-edit-modal',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/profile-edit-modal/profile-edit-modal.html"*/'<!--\n\n  Generated template for the ProfileEditModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'Profile Edit\' | translate}}</ion-title>\n\n    <div class="header-icons">\n\n        <button ion-button class="cs-hdr-icons mr16" (click)="dismiss()">\n\n            <i class="material-icons">clear</i>\n\n        </button>\n\n    </div>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-backgroung">\n\n  <form #f="ngForm" (ngSubmit)="f.form.valid ? submit() : scrollUp()">\n\n      \n\n      \n\n     \n\n      <div class="heading line">\n\n          <p>{{\'Basic Information\' | translate}}</p>\n\n      </div>\n\n      <div class="ragistration-fields">\n\n          <div class="left-right align-in-center">\n\n              <div class="right-part cs-form ml0">\n\n                  <ion-list>\n\n                      <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && first_name?.invalid}">\n\n                          <ion-label floating>{{\'First Name\' | translate}}*</ion-label>\n\n                          <ion-input type="text" name="first_name" #first_name="ngModel" [(ngModel)]="data.first_name" (ngModelChange)="(data.first_name!=null)?data.first_name[0] = data.first_name[0].toUpperCase():\'\'" (keypress)="namecheck($event)" required></ion-input>\n\n                      </ion-item>\n\n                      <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && last_name?.invalid}">\n\n                          <ion-label floating>{{\'Last Name  (optional)\' | translate}}</ion-label>\n\n                          <ion-input type="text" name="last_name" #last_name="ngModel" [(ngModel)]="data.last_name" (ngModelChange)="(data.last_name!=null)?data.last_name[0] = data.last_name[0].toUpperCase():\'\'" (keypress)="namecheck($event)" maxlength="10"></ion-input>\n\n                      </ion-item>\n\n                  </ion-list>\n\n              </div>\n\n          </div>\n\n          \n\n          \n\n          <div class="cs-form">\n\n              <ion-list>\n\n                  <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && company_name?.invalid}" *ngIf="data.user_type==\'2\' || data.user_type==\'3\'">\n\n                      <ion-label floating>{{\'Company Name\' | translate}}.*</ion-label>\n\n                      <ion-input type="text" name="company_name" #company_name="ngModel" [(ngModel)]="data.company_name" required (keypress)="namecheck($event)"></ion-input>\n\n                  </ion-item>\n\n                  \n\n                  <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && mobile_no?.invalid}">\n\n                      <ion-label floating>{{\'Mobile No\' | translate}}.*</ion-label>\n\n                      <ion-input type="number" name="mobile_no" #mobile_no="ngModel" [(ngModel)]="data.mobile_no" required (keypress)="MobileNumber($event)" readonly></ion-input>\n\n                  </ion-item>\n\n\n\n                  <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && payment_number?.invalid}">\n\n                      <ion-label floating>{{\'Paytm Number\' | translate}}</ion-label>\n\n                      <ion-input type="tel" name="payment_number" maxlength="10" minlength="10" #payment_number="ngModel" [(ngModel)]="data.payment_number"></ion-input>\n\n                  </ion-item>\n\n             \n\n              \n\n              <!--//////////////// importaint //////////////-->\n\n              \n\n              <ion-item class="cs-input" [ngClass]="{\'error\':(f.submitted && email?.invalid) || (f.submitted && !email.valid)}">\n\n                  <ion-label floating>{{\'Email ID (optional)\' | translate}}</ion-label>\n\n                  <ion-input type="text" type="text" name="email" #email="ngModel" [(ngModel)]="data.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item class="cs-date mb0" [ngClass]="{\'error\':f.submitted && dob?.invalid}">\n\n                  <ion-label>{{\'Date of Birth (optional)\' | translate}}</ion-label>\n\n                  <ion-datetime displayFormat="DD/MM/YYYY" max={{today_date}} type="text" name="dob" #dob="ngModel" [(ngModel)]="data.dob" >\n\n                  </ion-datetime>\n\n              </ion-item>\n\n          </ion-list>\n\n      </div>\n\n  </div>\n\n  \n\n  <div class="heading line">\n\n      <p>{{\'Address Information\' | translate}}</p>\n\n  </div>\n\n  \n\n  <div class="ragistration-fields">\n\n      <div class="cs-form">\n\n          <ion-list>\n\n              <ion-item class="cs-input">\n\n                  <ion-label floating>{{\'Address (optional)\' | translate}}</ion-label>\n\n                  \n\n                  <ion-input type="text" name="address" #address="ngModel" [(ngModel)]="data.address"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && pincode?.invalid}">\n\n                  <ion-label floating>{{\'Pincode\' | translate}}*</ion-label>\n\n                  <ion-input type="tel" name="pincode" [(ngModel)]="data.pincode" #pincode="ngModel" required maxlength="6" minlength="6" (input)="getaddress(data.pincode)"></ion-input>\n\n              </ion-item>\n\n              \n\n              \n\n              <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && state?.invalid}">\n\n                  <ion-label>{{\'State\' | translate}}*</ion-label>\n\n                  <ion-select name="state" [(ngModel)]="data.state" #state="ngModel" (ngModelChange)="getDistrictList(data.state)" required>\n\n                      <ion-option *ngFor="let row of state_list" value="{{row.state_name}}">{{row.state_name}}</ion-option>\n\n                  </ion-select>\n\n              </ion-item>\n\n              \n\n              <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && state?.invalid}">\n\n                  <ion-label>{{\'District\' | translate}}*</ion-label>\n\n                 \n\n                  <ion-select name="district" [(ngModel)]="data.district" #district="ngModel" (ngModelChange)="getCityList(data.district)" required>\n\n                      <ion-option *ngFor="let row of district_list" value="{{row.district_name}}">{{row.district_name}}</ion-option>\n\n                  </ion-select>\n\n              </ion-item>\n\n              \n\n              <ion-item class="cs-input mb0" [ngClass]="{\'error\':f.submitted && city?.invalid}">\n\n                  <ion-label floating>{{\'City\' | translate}}*</ion-label>\n\n                  <ion-input type="text" name="city" [(ngModel)]="data.city" #city="ngModel" required></ion-input>\n\n              </ion-item>\n\n              \n\n          </ion-list>\n\n      </div>\n\n  </div>\n\n  <!-- /////// Importaint //////////// -->\n\n\n\n  \n\n  \n\n  <ng-container *ngIf="data.user_type==\'1\'">\n\n      <div class="heading line" >\n\n          <p >{{\'Channel Partner Information\' | translate}}</p>\n\n      </div>\n\n      \n\n      <!-- *ngIf="data.user_type!=\'3\'" -->\n\n      <div class="ragistration-fields">\n\n          <div class="cs-form">\n\n              <ion-list>\n\n                  <ion-item class="cs-input">\n\n                      <ion-label floating>{{\'Counter Name (optional)\' | translate}}</ion-label>\n\n                      <ion-input type="text" name="parent_counter_name " pattern="[a-zA-Z ]+" ng-pattern-restrict #parent_counter_name="ngModel" [(ngModel)]="data.parent_counter_name "></ion-input>\n\n                  </ion-item>\n\n                  \n\n                  <ion-item class="cs-input">\n\n                      <ion-label floating>{{\'Contact Person (optional)\' | translate}}</ion-label>\n\n                      <ion-input type="text" name="parent_counter_contact_person " #parent_counter_contact_person="ngModel" [(ngModel)]="data.parent_counter_contact_person"></ion-input>\n\n                  </ion-item>\n\n                  <ion-item class="cs-input mb0" [ngClass]="{\'error\':f.submitted && parent_counter_mobile?.invalid}">\n\n                      <ion-label floating>{{\'Mobile No (optional)\' | translate}}.</ion-label>\n\n                      <ion-input type="tel" name="parent_counter_mobile " #parent_counter_mobile="ngModel" [(ngModel)]="data.parent_counter_mobile" maxlength="10" minlength="10"></ion-input>\n\n                  </ion-item>\n\n                  <!-- <ion-item class="cs-input">\n\n                      <ion-label floating>{{\'Address\'}}</ion-label>\n\n                      <ion-input type="text" name="dealer_address " #dealer_address="ngModel" [(ngModel)]="data.dealer_address"></ion-input>\n\n                  </ion-item> -->\n\n              </ion-list>\n\n          </div>\n\n      </div>\n\n  </ng-container>\n\n  \n\n\n\n  <button ion-button class="cs-btn m0">{{\'Update\' | translate}}</button>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/profile-edit-modal/profile-edit-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], ProfileEditModalPage);
    return ProfileEditModalPage;
}());

//# sourceMappingURL=profile-edit-modal.js.map

/***/ })

});
//# sourceMappingURL=3.js.map