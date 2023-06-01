webpackJsonp([4],{

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCategoryPageModule", function() { return MainCategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_category__ = __webpack_require__(817);
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
var MainCategoryPageModule = /** @class */ (function () {
    function MainCategoryPageModule() {
    }
    MainCategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_category__["a" /* MainCategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main_category__["a" /* MainCategoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], MainCategoryPageModule);
    return MainCategoryPageModule;
}());

//# sourceMappingURL=main-category.module.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainCategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_detail_product_detail__ = __webpack_require__(197);
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
* Generated class for the MainCategoryPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var MainCategoryPage = /** @class */ (function () {
    function MainCategoryPage(navCtrl, navParams, service, loadingCtrl, con, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.con = con;
        this.translate = translate;
        this.prod_cat_list = [];
        this.filter = {};
        this.flag = '';
        this.cat_images = [];
        this.lang = '';
        this.tokenInfo = {};
        this.uploadUrl = "";
        this.presentLoading();
        this.getProductCategoryList();
    }
    MainCategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainCategoryPage');
        this.uploadUrl = this.con.upload_url;
    };
    MainCategoryPage.prototype.presentLoading = function () {
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
    MainCategoryPage.prototype.getProductCategoryList = function () {
        var _this = this;
        console.log('catagorylist');
        this.filter.limit = 0;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/mainCategoryList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            // this.loading.dismiss();
            _this.prod_cat_list = r['categories'];
            _this.id = r['categories'];
            console.log(_this.id);
            for (var i = 0; i < _this.prod_cat_list.length; i++) {
                _this.cat_id = _this.prod_cat_list[i]['id'];
            }
        });
    };
    MainCategoryPage.prototype.getProductList = function (search) {
        var _this = this;
        console.log(search);
        this.filter.search = search;
        this.service.post_rqst({ 'filter': this.filter, 'category_id': this.cat_id }, 'app_master/categoryList')
            .subscribe(function (r) {
            console.log(r);
            _this.prod_cat_list = r['categories'];
        });
    };
    MainCategoryPage.prototype.goOnProductPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_detail_product_detail__["a" /* ProductDetailPage */], { 'id': id });
    };
    MainCategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-category',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/main-category/main-category.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>Category</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <div class="fix" >\n\n      <div class="search">\n\n          <ion-searchbar type=\'text\' placeholder="{{\'Search\'}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" \n\n          (ngModelChange)="getProductList(filter.search)"></ion-searchbar>\n\n          {{filter.search}}\n\n      </div>\n\n  </div> -->\n\n  <div class="m16" >\n\n      <div  class="our-product" *ngFor="let list of prod_cat_list; let i=index" (click)="goOnProductPage(list.id)">\n\n          <div class="thumbnail">\n\n              <!-- <ion-slides class="cs-slide" pager autoplay="1000" speed="1000" loop="true" *ngIf="list.image && list.image.length>2" >\n\n                  <ion-slide *ngFor="let image of list.image; let i=index">\n\n                      <img [src]="uploadUrl+image.image_name">\n\n                  </ion-slide>\n\n              </ion-slides> -->\n\n              <!-- *ngIf=" list.image.length==1" -->\n\n              <div >\n\n                <img [src]="uploadUrl+list.image[0].image_name" *ngIf=" list.image.length==1">\n\n                <img src="assets/imgs/default-image.png" *ngIf="!list.image.length">\n\n            </div>\n\n          </div>\n\n          <!-- (click)="goOnProductPage(list.id)" -->\n\n          <div class="product-footer">\n\n              <p>{{list.category_name |titlecase}}</p>\n\n          </div>\n\n      </div>\n\n  </div>\n\n\n\n  <!-- <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n\n      <ion-infinite-scroll-content\n\n      loadingSpinner="bubbles"\n\n      loadingText="{{\'Loading more data...\' | translate}}">\n\n  </ion-infinite-scroll-content>\n\n</ion-infinite-scroll> -->\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/main-category/main-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], MainCategoryPage);
    return MainCategoryPage;
}());

//# sourceMappingURL=main-category.js.map

/***/ })

});
//# sourceMappingURL=4.js.map