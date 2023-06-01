webpackJsonp([9],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoupanCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoupanCodePage = /** @class */ (function () {
    function CoupanCodePage(navCtrl, navParams, service, alertCtrl, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.barcodeScanner = barcodeScanner;
        this.qr_code = '';
        this.data = {};
        this.flag = '';
    }
    CoupanCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CoupanCodePage');
    };
    CoupanCodePage.prototype.submit = function (data) {
        var _this = this;
        this.flag = 1;
        console.log(data);
        this.qr_code = data;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'qr_code': this.qr_code }, 'app_karigar/karigarCoupon').subscribe(function (r) {
            console.log(r);
            if (r['status'] == 'BLANK') {
                _this.showAlert("This Coupon Code doesn't contain any Value");
                return;
            }
            else if (r['status'] == 'INVALID') {
                _this.showAlert("Invalid Coupon Code");
                return;
            }
            else if (r['status'] == 'Product_not_exist') {
                _this.showAlert("Product not Exist");
                return;
            }
            else if (r['status'] == 'Product_point_not_exist') {
                _this.showAlert("Product Point not Exist");
                return;
            }
            else if (r['status'] == 'REQUIRED') {
                _this.showAlert("Please Enter Coupon Code");
                return;
            }
            else if (r['status'] == 'USED') {
                _this.showAlert("Coupon Already Used");
                return;
            }
            else if (r['status'] == 'UNASSIGNED OFFER') {
                _this.showAlert("Your Account Under Verification");
                return;
            }
            _this.showSuccess(r['coupon_value'] + " points has been added into your wallet");
            // this.navCtrl.setRoot(TabsPage,{index:'0'});
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        });
    };
    CoupanCodePage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (resp) {
            console.log(resp);
            _this.qr_code = resp.text;
            console.log(_this.qr_code);
            if (resp.text != '') {
                _this.service.post_rqst({ 'karigar_id': _this.service.karigar_id, 'qr_code': _this.qr_code }, 'app_karigar/karigarCoupon').subscribe(function (r) {
                    console.log(r);
                    if (r['status'] == 'INVALID') {
                        _this.showAlert("Invalid Coupon Code");
                        return;
                    }
                    else if (r['status'] == 'USED') {
                        _this.showAlert("Coupon Already Used");
                        return;
                    }
                    else if (r['status'] == 'UNASSIGNED OFFER') {
                        _this.showAlert("Invalid Coupon Code");
                        return;
                    }
                    else if (r['status'] == 'REQUIRED') {
                        _this.showAlert("Please Enter the coupon code ");
                        return;
                    }
                    _this.showSuccess(r['coupon_value'] + " points has been added into your wallet");
                    // this.navCtrl.setRoot(TabsPage,{index:'0'});
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                });
            }
            else {
                console.log('not scanned anything');
            }
        });
    };
    CoupanCodePage.prototype.showAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    CoupanCodePage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    CoupanCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-coupan-code',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/scane-pages/coupan-code/coupan-code.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Enter Coupon Code</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="bg-margin">\n\n    <div class="paragraph mt15">\n\n      <p>Please enter coupon code here, to get your points</p>\n\n    </div>\n\n    <div class="nrml-input">\n\n      <input type="text" placeholder="Coupon Code" [(ngModel)]="data.code" #code="ngModel" name="code">\n\n    </div>\n\n    <div class="coupon-error" *ngIf="!data.code && flag==1">\n\n      <p>Required</p>\n\n    </div>\n\n    <button class="cs-btn btn-radius-four" (click)="submit(data.code)"><span>Submit</span></button>\n\n    <!-- mt50 -->\n\n    <div class="scane-img" >\n\n      <img src="assets/imgs/scane.png" (click)="scan()">\n\n      <p>Tap on scan icon to scan your coupon </p>\n\n    </div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/scane-pages/coupan-code/coupan-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], CoupanCodePage);
    return CoupanCodePage;
}());

//# sourceMappingURL=coupan-code.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelpolicyModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancelation_policy_cancelation_policy__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transaction_transaction__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { TabsPage } from '../tabs/tabs';


var CancelpolicyModalPage = /** @class */ (function () {
    function CancelpolicyModalPage(navCtrl, navParams, viewCtrl, service, alertCtrl, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.data = {};
        this.otp_value = '';
        this.karigar_id = '';
        this.otp = '';
        this.karigar_detail = {};
        this.gift_id = '';
        this.gift_detail = '';
        this.redeemPoint = {};
        this.redeemType = {};
        this.UserType = {};
        console.log();
        this.redeemType = this.navParams.get('redeem_type');
        console.log(this.redeemType);
        this.redeemPoint = this.navParams.get('redeem_point');
        this.karigar_id = this.navParams.get('karigar_id');
        this.gift_id = this.navParams.get('gift_id');
        this.UserType = this.service.karigar_info.user_type;
        this.data.payment_type = "Paytm";
        if (this.redeemType == 'gift') {
            this.data.payment_type = "Gift";
        }
    }
    CancelpolicyModalPage.prototype.ionViewDidLoad = function () {
        this.karigar_id = this.navParams.get('karigar_id');
        this.gift_id = this.navParams.get('gift_id');
        this.getOtpDetail();
        this.presentLoading();
    };
    CancelpolicyModalPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    CancelpolicyModalPage.prototype.goOnCancelationPolicy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cancelation_policy_cancelation_policy__["a" /* CancelationPolicyPage */]);
    };
    CancelpolicyModalPage.prototype.getOtpDetail = function () {
        var _this = this;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'gift_id': this.gift_id, "redeem_amount": this.redeemPoint }, 'app_karigar/sendOtp')
            .subscribe(function (r) {
            _this.loading.dismiss();
            _this.otp = r['otp'];
            _this.karigar_detail = r['karigar'];
            _this.gift_detail = r['gift'];
        });
    };
    CancelpolicyModalPage.prototype.resendOtp = function () {
        var _this = this;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'gift_id': this.gift_id, "redeem_amount": this.redeemPoint }, 'app_karigar/sendOtp')
            .subscribe(function (r) {
            _this.otp = r['otp'];
            console.log(_this.otp);
        });
    };
    CancelpolicyModalPage.prototype.otpvalidation = function () {
        this.otp_value = false;
        if (this.data.otp == this.otp) {
            this.otp_value = true;
        }
    };
    CancelpolicyModalPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        console.log('data');
        console.log(this.data);
        if (this.karigar_detail.user_type == 2) {
            this.data.payment_type = "Gift";
        }
        this.data.karigar_id = this.service.karigar_id,
            this.data.gift_id = this.gift_id,
            this.data.redeem_type = this.redeemType;
        this.data.redeem_amount = this.redeemPoint;
        this.data.offer_id = this.gift_detail.offer_id,
            console.log('data');
        this.service.post_rqst({ 'data': this.data }, 'app_karigar/redeemRequest')
            .subscribe(function (r) {
            _this.loading.dismiss();
            console.log(r);
            if (r['status'] == "SUCCESS") {
                // this.navCtrl.setRoot(TabsPage,{index:'3'});
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                _this.showSuccess("Redeem Request Sent Successfully");
            }
            else if (r['status'] == "EXIST") {
                _this.showAlert(" Already Redeemed!");
            }
        });
    };
    CancelpolicyModalPage.prototype.showAlert = function (text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    cssClass: 'close-action-sheet',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__transaction_transaction__["a" /* TransactionPage */]);
                    }
                }]
        });
        alert.present();
    };
    CancelpolicyModalPage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    CancelpolicyModalPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    CancelpolicyModalPage.prototype.ionViewDidLeave = function () {
        console.log('leave');
        this.dismiss();
    };
    CancelpolicyModalPage.prototype.myNumber = function () {
        console.log(this.data);
        if (this.data.check1 == true) {
            this.data.payment_number = this.karigar_detail.mobile_no;
        }
        else {
            this.data.payment_number = '';
        }
    };
    CancelpolicyModalPage.prototype.address = function () {
        console.log(this.data);
        if (this.data.check1 == true) {
            this.data.shipping_address = this.karigar_detail.address + ' ,' + this.karigar_detail.city + ' ,' + this.karigar_detail.district + ' ,' + this.karigar_detail.state + ' ,' + this.karigar_detail.pincode;
        }
        else {
            this.data.shipping_address = '';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
    ], CancelpolicyModalPage.prototype, "nav", void 0);
    CancelpolicyModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cancelpolicy-modal',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/cancelpolicy-modal/cancelpolicy-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>cancelpolicy-modal</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="popup-modal">\n\n    \n\n    <div class="modal-center">\n\n        <div class="modal-content in-modal">\n\n            <form #f="ngForm">\n\n                <h1>{{\'Jal Uphar\' | translate}} </h1>\n\n                <p class="highligt-error" *ngIf="karigar_detail.document_image == \'\' || karigar_detail.document_no == \'\'">* Your document details are missing !</p>\n\n                \n\n                <p>{{\'Are you sure to redeem your\'| translate}} {{gift_detail.coupon_points}} {{\'Points\' |translate}}?</p>\n\n                \n\n                <div class="number-content">\n\n                    <p>{{\'Enter your 6 digit number that sent to\' | translate}} <span class="blue-color lineh24">+91 {{karigar_detail.mobile_no}}</span>\n\n                    </p>\n\n                </div>\n\n                <div class="input-section">\n\n                    <div class="input-adjust m0">\n\n                        <input class="pl16 radius-none" type="tel" name="otp" placeholder="{{\'Enter OTP\' | translate}}" #otp="ngModel" [(ngModel)]="data.otp" (ngModelChange)="otpvalidation()" required>\n\n                        <div class="otp-error" *ngIf="!otp_value && otp?.touched">\n\n                            <p>{{\'Wrong OTP value\' | translate}}</p>\n\n                        </div>\n\n                    </div>\n\n                    <div class="resend">\n\n                        <a (click)="resendOtp()">{{\'Resend\' | translate}}</a>\n\n                    </div>\n\n                </div>\n\n                \n\n                \n\n                <ng-container *ngIf="redeemType == \'Cash\'">\n\n                \n\n                <ion-list radio-group class="payment-option" name="payment_type" [(ngModel)]="data.payment_type" #user_type="ngModel" payment_type>\n\n                    <ion-list-header>\n\n                        {{\'Points Received Type\' | translate}}\n\n                    </ion-list-header>\n\n                    \n\n                    <ion-item>\n\n                        <ion-label><img src="assets/imgs/paytm.png">{{\'Paytm\' | translate}}</ion-label>\n\n                        <ion-radio value="Paytm"></ion-radio>\n\n                    </ion-item>\n\n                    \n\n                    <ion-item>\n\n                        <ion-label><img src="assets/imgs/phonepay.png">{{\'PhonePe\' | translate}}</ion-label>\n\n                        <ion-radio value="PhonePe"></ion-radio>\n\n                    </ion-item>\n\n                    \n\n                    <ion-item>\n\n                        <ion-label><img src="assets/imgs/googlepay.png">{{\'Google Pay\' | translate }}</ion-label>\n\n                        <ion-radio value="Google Pay"></ion-radio>\n\n                    </ion-item>\n\n                    \n\n                    <ion-item *ngIf="redeemType == \'gift\'">\n\n                        <ion-label><img src="assets/imgs/home-icon/gift.svg">{{\'Gift\' | translate}}</ion-label>\n\n                        <ion-radio value="Gift"></ion-radio>\n\n                    </ion-item>\n\n                </ion-list>\n\n                \n\n                \n\n                <ng-container *ngIf="data.payment_type == \'Paytm\' || data.payment_type == \'PhonePe\' || data.payment_type == \'Google Pay\'">\n\n                    <div class="check-bx">\n\n                        <ion-item>\n\n                            <ion-checkbox color="secondary" checked="true" name="check1" #check1="ngModel" [(ngModel)]="data.check1" (click)="myNumber()">\n\n                            </ion-checkbox>\n\n                        </ion-item>\n\n                        <p>{{\'Same as login number\' | translate}}</p>\n\n                    </div>\n\n                    \n\n                    <div class="input-section">\n\n                        <div class="input-adjust m0">\n\n                            <input class="pl16 radius-none" type="tel" name="payment_number" placeholder="{{data.payment_type}} Number" #payment_number="ngModel" [(ngModel)]="data.payment_number" minlength="10" maxlength="10"  required>\n\n                            <div class="otp-error" *ngIf="!payment_number && otp?.payment_number">\n\n                                <p>{{data.payment_type}} number required</p>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </ng-container>\n\n\n\n            </ng-container>\n\n                <ng-container *ngIf="redeemType == \'gift\'">\n\n                    <div class="check-bx mt0">\n\n                        <ion-item>\n\n                            <ion-checkbox color="secondary" checked="true" name="check1" #check1="ngModel" [(ngModel)]="data.check1" (click)="address()">\n\n                            </ion-checkbox>\n\n                        </ion-item>\n\n                        <p>{{\'Same as address\' | translate}}</p>\n\n                    </div>\n\n                    \n\n                    <div class="input-section">\n\n                        <div class="input-adjust m0 mt0">\n\n                            <textarea class="pl16 mt0"  name="shipping_address" placeholder="{{ \'Shipping Address\' | translate}}" #shipping_address="ngModel" [(ngModel)]="data.shipping_address"   required></textarea>\n\n                            <!-- <div class="otp-error" *ngIf="!shipping_address && otp?.shipping_address">\n\n                                <p>{{data.payment_type}} number required</p>\n\n                            </div> -->\n\n                        </div>\n\n                    </div>\n\n                </ng-container>\n\n                \n\n                <div class="check-bx">\n\n                    <ion-item>\n\n                        <ion-checkbox color="secondary" checked="true" name="check" #check="ngModel" [(ngModel)]="data.check" required></ion-checkbox>\n\n                    </ion-item>\n\n                    <p>{{\'I have read\' | translate}} <a (click)="goOnCancelationPolicy()">{{\'cancelation policy\' | translate}}</a></p>\n\n                </div>\n\n                <div class="footer-btn">\n\n                    <a class="outline-btn" (click)="dismiss()">{{\'No\' | translate}}</a>\n\n                    <button class="fill-btn" [disabled]="!data.check ||!data.otp ||!otp_value || karigar_detail.document_image == \'\' || karigar_detail.document_no == \'\' " (click)="f.form.valid && submit()">{{\'Yes\' | translate}}</button>\n\n                </div>\n\n            </form>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/cancelpolicy-modal/cancelpolicy-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], CancelpolicyModalPage);
    return CancelpolicyModalPage;
}());

//# sourceMappingURL=cancelpolicy-modal.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FeedbackPage = /** @class */ (function () {
    function FeedbackPage(navCtrl, navParams, service, alertCtrl, app, storage, translate, contsn, actionSheetController, camera, loadingCtrl, transfer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.storage = storage;
        this.translate = translate;
        this.contsn = contsn;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.data = {};
        this.rootPage = '';
        this.feedbackdata = [];
        this.tokenInfo = {};
        this.lang = '';
        this.ok = "";
        this.upload_url = "";
        this.formdata = new FormData();
        this.timeLeft = 20;
        this.cam = "";
        this.gal = "";
        this.cancl = "";
        this.upl_file = "";
        this.save_succ = "";
        this.image = "";
        this.startTimer();
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.translate.get('Cancel')
            .subscribe(function (resp) {
            _this.cancl = resp;
        });
        console.log('ionViewDidLoad FeedbackPage');
        this.get_user_lang();
        this.Feedbackdata();
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.upload_url = this.contsn.upload_url;
    };
    FeedbackPage.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                _this.timeLeft = 20;
                _this.Feedbackdata();
            }
        }, 1000);
    };
    FeedbackPage.prototype.download = function (data) {
        window.open(data, '_self');
    };
    FeedbackPage.prototype.scroll = function () {
        var messagesContent = this.content;
        console.log(messagesContent.getContentDimensions());
        console.log(messagesContent.getContentDimensions().contentHeight);
        messagesContent.scrollToBottom(1000);
        // messagesContent.scrollTo(0, messagesContent.getContentDimensions().contentHeight, 700);
    };
    FeedbackPage.prototype.submitFeedback = function () {
        var _this = this;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'feedback': this.data.feedback }, 'app_karigar/feedback')
            .subscribe(function (r) {
            console.log(r);
            _this.Feedbackdata();
            _this.data.feedback = '';
        });
    };
    FeedbackPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.Feedbackdata();
        refresher.complete();
    };
    FeedbackPage.prototype.showSuccess = function (text) {
        var _this = this;
        this.translate.get("ThankYou")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    FeedbackPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    FeedbackPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_2_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    FeedbackPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    FeedbackPage.prototype.Feedbackdata = function () {
        var _this = this;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/feedback_data')
            .subscribe(function (r) {
            console.log(r);
            _this.feedbackdata = r.feedback;
            _this.scroll();
        });
    };
    FeedbackPage.prototype.open_camera = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Select An Option",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takePhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    FeedbackPage.prototype.takePhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.image);
            _this.save_picture();
        });
    };
    FeedbackPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.image = 'data:image/jpeg;base64,' + imageData;
            _this.formdata.append("image", _this.image);
            console.log(_this.image);
            _this.save_picture();
        });
    };
    FeedbackPage.prototype.save_picture = function () {
        var _this = this;
        var updateAlert = this.alertCtrl.create({
            title: 'Are you sure ?',
            message: 'You want to send this!',
            buttons: [
                { text: this.cancl, },
                { text: this.ok,
                    handler: function () {
                        var loader = _this.loadingCtrl.create({
                            content: "Uploading..."
                        });
                        loader.present();
                        var fileTransfer = _this.transfer.create();
                        var random = Math.floor(Math.random() * 100);
                        var options = {
                            fileKey: 'photo',
                            fileName: "myImage_" + random + ".jpg",
                            chunkedMode: false,
                            mimeType: "image/jpeg",
                        };
                        fileTransfer.upload(_this.image, _this.contsn.rootUrl + 'user_attact?id=' + _this.service.karigar_id, options)
                            .then(function (data) {
                            console.log(data);
                            loader.dismiss();
                            _this.Feedbackdata();
                        });
                    }
                }
            ]
        });
        updateAlert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scrollElement'),
        __metadata("design:type", Object)
    ], FeedbackPage.prototype, "content", void 0);
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/feedback/feedback.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title >{{\'Chat with us\' | translate}}</ion-title>\n\n        \n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding #scrollElement>\n\n    \n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content  pullingIcon="arrow-dropdown"\n\n        pullingText="{{\'Pull to refresh\' | translate}}"\n\n        refreshingSpinner="circles"\n\n        refreshingText="{{\'Refreshing...\' | translate}}">\n\n    </ion-refresher-content>\n\n</ion-refresher>\n\n\n\n<div class="chat">\n\n    <ul>\n\n        <ng-container *ngFor="let row of feedbackdata">\n\n            <li class="me" *ngIf="row.feedback || row.attach_feedback">\n\n                <div class="entete">\n\n                    <h3>{{row.date_created == \'0000-00-00 00:00:00\' ? \'\' : row.date_created | date:\'d MMM h:m a\'}}</h3>\n\n                    <span class="status blue"></span>\n\n                </div>\n\n                \n\n                <div *ngIf="row.feedback" class="message">\n\n                    {{row.feedback}}\n\n                </div>\n\n                <div *ngIf="row.attach_feedback" class="message img-type" (click)="download(upload_url+row.attach_feedback)">\n\n                    <img src="{{upload_url+row.attach_feedback}}">\n\n                </div>\n\n            </li>\n\n            <li class="you" *ngIf="row.reply || row.attach_reply">\n\n                <div class="entete">\n\n                    <span class="status green"></span>\n\n                    <h3>{{row.reply_date == \'0000-00-00 00:00:00\' ? \'\' : row.reply_date | date:\'d MMM h:m a\'}}</h3>\n\n                </div>\n\n                \n\n                <div *ngIf="row.reply" class="message">\n\n                    {{row.reply}}\n\n                </div>\n\n                <div *ngIf="row.attach_reply" class="message img-type" (click)="download(upload_url+row.attach_reply)">\n\n                    <img src="{{upload_url+row.attach_reply}}">\n\n                </div>\n\n            </li>\n\n        </ng-container>\n\n    </ul>\n\n</div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <div class="chat-message" >\n\n        <textarea type="text" placeholder="{{\'Write something\' | translate}}" name="feedback" #feedback="ngModel" [(ngModel)]="data.feedback">{{\'Write something\' | translate}}</textarea>\n\n        <a class="attachment" (click)="open_camera()"><i class="material-icons">attach_file</i></a>\n\n        <a class="send-btn" (click)="submitFeedback()"><i class="material-icons">send</i></a>\n\n    </div>\n\n</ion-footer>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/feedback/feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiveRemarkModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { TabsPage } from '../tabs/tabs';

var ReceiveRemarkModalPage = /** @class */ (function () {
    function ReceiveRemarkModalPage(navCtrl, navParams, viewCtrl, alertCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.data = {};
        this.gift_id = '';
    }
    ReceiveRemarkModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReceiveRemarkModalPage');
        this.gift_id = this.navParams.get('gift_id');
        this.redeem_type = this.navParams.get('redeem_type');
        console.log(this.redeem_type);
    };
    ReceiveRemarkModalPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    ReceiveRemarkModalPage.prototype.submit = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmation!',
            subTitle: 'Did you receive this ' + this.redeem_type + ' ?',
            cssClass: 'action-close',
            buttons: [{
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    cssClass: 'close-action-sheet',
                    handler: function () {
                        // console.log(gift_id);
                        _this.service.post_rqst({ 'id': _this.gift_id, 'karigar_id': _this.service.karigar_id, 'remark': _this.data.receiving_remark }, 'app_karigar/redeemReceiveStatus').subscribe(function (r) {
                            console.log(r);
                            // this.navCtrl.setRoot(TabsPage,{index:'3'});
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                            _this.showSuccess('You have received ' + _this.redeem_type + ' successfully');
                            // this.getTransactionDetail()
                        });
                    }
                }]
        });
        alert.present();
    };
    ReceiveRemarkModalPage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ReceiveRemarkModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receive-remark-modal',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/receive-remark-modal/receive-remark-modal.html"*/'\n\n<ion-content padding class="popup-modal">\n\n  <div class="modal-center">\n\n    <div class="modal-content in-modal">\n\n      <p>Receiving Remark</p>\n\n      \n\n      <div class="input-section">\n\n        <div class="input-adjust m0">\n\n          <textarea class="radius-none" type="text" placeholder="Enter Remark" name="receiving_remark"  #receiving_remark="ngModel" [(ngModel)]="data.receiving_remark"  required></textarea>\n\n        </div>\n\n      </div>\n\n      \n\n      <div class="footer-btn">\n\n        <button class="outline-btn" (click)="dismiss()">Cancel</button>	\n\n        <button class="fill-btn" [disabled]="!data.receiving_remark" (click)="submit()">Save</button>\n\n      </div>	\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/receive-remark-modal/receive-remark-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], ReceiveRemarkModalPage);
    return ReceiveRemarkModalPage;
}());

//# sourceMappingURL=receive-remark-modal.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancelpolicy_modal_cancelpolicy_modal__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offers_offers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GiftDetailPage = /** @class */ (function () {
    function GiftDetailPage(navCtrl, navParams, modalCtrl, service, loadingCtrl, app, storage, translate, db, constant, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.constant = constant;
        this.toastCtrl = toastCtrl;
        this.gift_id = '';
        this.gift_detail = {};
        this.balance_point = '';
        this.star = '';
        this.rating_star = '';
        this.offer_balance = '';
        this.karigar_detail = {};
        this.tokenInfo = {};
        this.lang = '';
        this.uploadUrl = '';
        this.redeemable_amount = '';
        this.uploadUrl = this.constant.upload_url;
    }
    GiftDetailPage.prototype.ionViewDidLoad = function () {
        this.uploadUrl = this.constant.upload_url;
        console.log('ionViewDidLoad GiftDetailPage');
        this.gift_id = this.navParams.get('id');
        this.getGiftDetail(this.gift_id);
        this.presentLoading();
        this.get_user_lang();
    };
    GiftDetailPage.prototype.presentCancelPolicyModal = function () {
        var gift = 'gift';
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cancelpolicy_modal_cancelpolicy_modal__["a" /* CancelpolicyModalPage */], { 'karigar_id': this.service.karigar_id, 'gift_id': this.gift_id, 'redeem_type': gift });
        contactModal.present();
        console.log('otp');
    };
    GiftDetailPage.prototype.goOnOfferDetailPage = function (offer_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__offers_offers__["a" /* OffersPage */], { 'id': offer_id });
    };
    GiftDetailPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    GiftDetailPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    GiftDetailPage.prototype.getGiftDetail = function (gift_id) {
        var _this = this;
        console.log(gift_id);
        this.service.post_rqst({ 'gift_id': gift_id, 'karigar_id': this.service.karigar_id, 'id': '' }, 'app_karigar/giftDetail')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.gift_detail = r['gift'];
            _this.rating_star = parseInt(r['gift'].rating);
            console.log(_this.gift_detail);
            _this.gift_detail.coupon_points = parseInt(_this.gift_detail.coupon_points);
            if (r['gift_star']) {
                _this.star = parseInt(r['gift_star'].star);
                console.log(_this.star);
            }
            _this.redeemable_amount = parseInt(r['redeemable_amount']);
            // var referal_point_per = r['referral_point_per'].one_time_percentage;
            // var referral_amount = ((r['karigar'].referal_point_balance * referal_point_per)/100);
            // this.offer_balance= parseInt(r['karigar'].balance_point) + (referral_amount);
            if (_this.redeemable_amount < _this.gift_detail.coupon_points) {
                var toast = _this.toastCtrl.create({
                    message: "You have insufficient points!",
                    duration: 3000
                });
                toast.present();
            }
        });
    };
    GiftDetailPage.prototype.presentLoading = function () {
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
    GiftDetailPage.prototype.rating = function (star) {
        var _this = this;
        this.presentLoading();
        console.log(star);
        this.service.post_rqst({ 'star': star, 'gift_id': this.gift_id, 'karigar_id': this.service.karigar_id, 'offer_id': this.gift_detail.offer_id }, 'app_karigar/giftRating').subscribe(function (r) {
            console.log(r);
            if (r) {
                _this.getGiftDetail(_this.gift_id);
            }
        });
    };
    GiftDetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    GiftDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gift-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/gift-gallery/gift-detail/gift-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'Gift Gallery\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="top-nav nav-adjust">\n\n        <p>{{gift_detail.title |titlecase}} {{\'Offer Points\' | translate}}</p>\n\n        <h1> {{redeemable_amount || 0}}</h1>\n\n    </div>\n\n    <div class="margin-padding pb0">\n\n        <div class="phone">\n\n            <div class="phone-head">\n\n                <h1>{{lang !=\'en\' ? gift_detail.hin_gift_title : gift_detail.gift_title | titlecase}}</h1>\n\n                <p>{{gift_detail.coupon_points}} {{\'Points\' | translate}}</p>\n\n\n\n            </div>\n\n            <div class="phone-img">\n\n                <img src="{{uploadUrl+gift_detail.image}}">\n\n            </div>\n\n        </div>\n\n        <div class="detail-list">\n\n            <div class="detail">\n\n                <div class="img-section">\n\n                    <img src="{{uploadUrl+gift_detail.offer_banner}}">\n\n                </div>\n\n                <div class="info" (click)="goOnOfferDetailPage(gift_detail.offer_id)">\n\n                    <h1>{{lang !=\'en\' ? gift_detail.hin_title : gift_detail.title | titlecase}}</h1>\n\n                    <p><span>{{\'Valid Upto\' | translate}} :</span> {{gift_detail.end_date | date:\'d MMMM y\'}}</p>\n\n                </div>\n\n            </div>\n\n            <div class="product-icon">\n\n                <i class="material-icons">keyboard_arrow_right</i>\n\n            </div>\n\n        </div>\n\n        <div class="rating">\n\n            <i class="material-icons" [ngClass]="{\'active\':rating_star>=1}">star_rate</i>\n\n            <i class="material-icons" [ngClass]="{\'active\':rating_star>=2}">star_rate</i>\n\n            <i class="material-icons" [ngClass]="{\'active\':rating_star>=3}">star_rate</i>\n\n            <i class="material-icons" [ngClass]="{\'active\':rating_star>=4}">star_rate</i>\n\n            <i class="material-icons" [ngClass]="{\'active\':rating_star>=5}">star_rate</i>\n\n            <p>{{rating_star}} {{\'Star\' | translate}} - {{gift_detail.votes}} {{\'Votes\' | translate}} </p>\n\n        </div>\n\n        <div class="lorem-text">\n\n            <p>\n\n                <Strong>{{\'Specification\' | translate}} : <div [innerHTML]="lang !=\'en\' ? gift_detail.hin_gift_specification : gift_detail.gift_specification"></div> </Strong>\n\n            </p>\n\n        </div>\n\n        <button ion-item class="cs-btn btn-radius mb0" (click)="presentCancelPolicyModal()" *ngIf="redeemable_amount >= gift_detail.coupon_points">{{\'Send Redeem Request\' | translate}}</button>\n\n        <div class="h32"></div>\n\n    </div>\n\n    <div class="fix-item">\n\n        <p>{{\'Rate a Gift\' | translate}}</p>\n\n        <i class="material-icons" [ngClass]="{\'active\':star>=1}" (click)="rating(\'1\')">star_rate</i>\n\n        <i class="material-icons" [ngClass]="{\'active\':star>=2}" (click)="rating(\'2\')">star_rate</i>\n\n        <i class="material-icons" [ngClass]="{\'active\':star>=3}" (click)="rating(\'3\')">star_rate</i>\n\n        <i class="material-icons" [ngClass]="{\'active\':star>=4}" (click)="rating(\'4\')">star_rate</i>\n\n        <i class="material-icons" [ngClass]="{\'active\':star>=5}" (click)="rating(\'5\')">star_rate</i>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/gift-gallery/gift-detail/gift-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], GiftDetailPage);
    return GiftDetailPage;
}());

//# sourceMappingURL=gift-detail.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_constant_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, con, navParams, service, loadingCtrl, storage, translate, db) {
        this.navCtrl = navCtrl;
        this.con = con;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.offer_id = '';
        this.terms_detail = {};
        this.tokenInfo = {};
        this.lang = '';
        this.upload_url = '';
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        this.upload_url = this.con.upload_url;
        console.log('ionViewDidLoad TermsPage');
        this.offer_id = this.navParams.get('id');
        this.getTermsDetail(this.offer_id);
        this.get_user_lang();
        this.presentLoading();
    };
    TermsPage.prototype.getTermsDetail = function (offer_id) {
        var _this = this;
        console.log(offer_id);
        this.service.post_rqst({ 'offer_id': offer_id, 'karigar_id': 22 }, 'app_karigar/offerTermCondition').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.terms_detail = r['offer'];
        });
    };
    TermsPage.prototype.presentLoading = function () {
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
    TermsPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    TermsPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/terms/terms.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'Terms & Condition\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div class="fix">\n\n		<div class="bg-banner">\n\n			 <img src="{{upload_url + terms_detail.offer_banner}}">\n\n		</div>\n\n	</div>\n\n	<div class="terms-text">\n\n		<p [innerHTML]="terms_detail.terms">{{terms_detail.terms}}</p>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceTextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus_modal_aboutus_modal__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdvanceTextPage = /** @class */ (function () {
    function AdvanceTextPage(navCtrl, navParams, modalCtrl, service, loadingCtrl, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.translate = translate;
        this.profile_data = {};
        this.tokenInfo = {};
        this.lang = '';
    }
    AdvanceTextPage.prototype.ionViewDidLoad = function () {
        this.getCompanyprofile();
        this.get_user_lang();
        console.log('ionViewDidLoad AdvanceTextPage');
    };
    AdvanceTextPage.prototype.presentAboutModal = function () {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__aboutus_modal_aboutus_modal__["a" /* AboutusModalPage */]);
        contactModal.present();
    };
    AdvanceTextPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    AdvanceTextPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    AdvanceTextPage.prototype.getCompanyprofile = function () {
        var _this = this;
        this.presentLoading();
        this.service.post_rqst({}, 'app_karigar/companyProfile')
            .subscribe(function (response) {
            console.log(response);
            _this.loading.dismiss();
            _this.profile_data = response.getData;
        });
    };
    AdvanceTextPage.prototype.presentLoading = function () {
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
    AdvanceTextPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-advance-text',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/advance-text/advance-text.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'About Us\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    \n\n    <div class="text-center pt24">\n\n        <img [src]="profile_data.profile_banner" alt="" style="height: 50px;">\n\n    </div>\n\n    <!-- (click)="presentAboutModal()" -->\n\n    <div class="policy-text"  padding [innerHTML]="profile_data.about">\n\n        <!-- <p>Advance Decorative Laminates has set a quality benchmark in the interior designing industry. It offers some of the finest grade compact and durable laminates in India. Incepted in 2016, the company is headquartered in Hapur and is a subsidiary of highly renowned Amba Group (established in 1991). </p> <p>Laminates are resilient and flexible products with unlimited potential in interior designing. However, it shares an invisible background. We work towards not only reinventing the way laminates are looked at, but also how they look.</p><p> Using vibrant colours and finishes, we try to give laminates a complete makeover like never before. We conceive laminates not just as an economical countertop, but also an unparalleled design element that can add character to any décor. Our textured, feature rich, luxuriously designed laminates can enhance the visual appeal of your space. They are not just products, but application based collections which meet varying needs of architects, interior designers as well as consumers. Our laminates can also be customized to complement the colour and theme of your interior.</p>\n\n            <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p> -->\n\n        </div>\n\n    </ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/advance-text/advance-text.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], AdvanceTextPage);
    return AdvanceTextPage;
}());

//# sourceMappingURL=advance-text.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams, app, service, storage, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.service = service;
        this.storage = storage;
        this.translate = translate;
        this.tokenInfo = {};
        this.lang = '';
        this.karigar_id = "";
        this.data_list = [];
        this.flag = '';
        this.get_user_lang();
        this.storage.get('token')
            .then(function (resp) {
            console.log(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__(resp));
            var tokendata = __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(resp);
            console.log(tokendata);
            _this.karigar_id = tokendata.sub;
            console.log(_this.karigar_id);
            _this.get_notification();
        });
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    NotificationPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    NotificationPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    NotificationPage.prototype.get_notification = function () {
        var _this = this;
        this.service.post_rqst({ "karigar_id": this.karigar_id, "limit": this.data_list.length }, "app_karigar/get_notification")
            .subscribe(function (resp) {
            console.log(resp);
            _this.data_list = resp['notification'];
        });
    };
    NotificationPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.service.post_rqst({ "karigar_id": this.karigar_id, "limit": this.data_list.length }, 'app_karigar/get_notification')
            .subscribe(function (resp) {
            console.log(resp);
            if (resp == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.data_list = _this.data_list.concat(resp['notification']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/notification/notification.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'Notification\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="main-backgroung">\n\n \n\n\n\n    <div class="notification {{row.active ? \'active\' : \'\'}}" *ngFor="let row of data_list" [ngClass]="{\'disable\':row.read}" (click)="row.active=!row.active">\n\n        <!-- <h1>{{lang == \'en\' ? row.notification : row.hindi_notification}}</h1> -->\n\n        <h1>{{row.notification}}</h1>\n\n\n\n        <p>{{row.date_created}}</p>\n\n\n\n    </div>\n\n\n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, app, db, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.db = db;
        this.storage = storage;
        this.translate = translate;
        this.tokenInfo = {};
        this.lang = '';
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.go_to_map = function () {
        console.log('map');
        var destination = 28.679192 + ',' + 77.211820;
        // this.get_user_lang();    
        var label = encodeURI('A Bunglow, near Petrol Pump, Malka Ganj, New Delhi, Delhi 110007');
        window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
    };
    ContactPage.prototype.ionViewDidLeave = function () {
        this.get_user_lang();
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    ContactPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    ContactPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/contact/contact.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>{{\'Contact Us\' | translate}}</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div class="nev-adjust">\n\n		<div class="background hp100">\n\n			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.166817100827!2d76.69133289999999!3d30.713710400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee544da69a71%3A0x747bc8a0dfbc1c1b!2sJAL%20Bath%20Fittings!5e0!3m2!1sen!2sin!4v1679465889567!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n\n\n\n		</div>\n\n		\n\n		<div class="cs-nevigation">\n\n			<div class="map-main" >\n\n				<div class="map-content"  >\n\n					<!-- <div class="nevigation"  (click)="go_to_map()">\n\n						<i class="material-icons">near_me</i>\n\n					</div> -->\n\n					<div class="location brd-btm" >\n\n						<i class="material-icons">location_on</i>\n\n						<p>{{\'Plot No. - D192, Phase 8B, Industrial Area, Mohali, SAS Nagar, Punjab - 160071\' | translate}}</p>\n\n					</div>\n\n					<div class="location">\n\n						<i class="material-icons">phone</i>\n\n						<a href="tel:1800 212 0192">1800 212 0192</a>\n\n\n\n					</div>\n\n					<div class="location">\n\n						<i class="material-icons">email</i>\n\n						<a href="mailto:jal@jaljoy.com">jal@jaljoy.com</a>\n\n\n\n					</div>\n\n				</div>\n\n			</div>\n\n		</div>\n\n	</div>	\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VideoPage = /** @class */ (function () {
    function VideoPage(navCtrl, navParams, service, loadingCtrl, dom, app, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.dom = dom;
        this.app = app;
        this.storage = storage;
        this.translate = translate;
        this.filter = {};
        this.video_list = [];
        this.tokenInfo = {};
        this.lang = '';
        this.ok = "";
        this.flag = '';
    }
    VideoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoPage');
        this.get_user_lang();
        this.getVideoList();
        this.presentLoading();
    };
    VideoPage.prototype.getVideoList = function () {
        var _this = this;
        this.filter.limit = 0;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/videoList').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.video_list = r['video'];
            for (var i = 0; i < _this.video_list.length; i++) {
                _this.video_list[i].url = _this.dom.bypassSecurityTrustResourceUrl(_this.video_list[i].url);
            }
        });
    };
    VideoPage.prototype.presentLoading = function () {
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
    VideoPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    VideoPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_4_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    VideoPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.video_list.length;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/videoList').subscribe(function (r) {
            console.log(r);
            if (r['video'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    for (var i = 0; i < _this.video_list.length; i++) {
                        _this.video_list[i].url = _this.dom.bypassSecurityTrustResourceUrl(_this.video_list[i].url);
                    }
                    console.log('Asyn operation has stop');
                    _this.video_list = _this.video_list.concat(r['video']);
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    VideoPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    VideoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-video',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/video/video.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'Videos\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding  >\n\n    <div class="m16">\n\n    <div  class="video" *ngFor="let list of video_list;let i=index">\n\n        <iframe [src]="list.url" width="100%" height="180" rameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\n        <div class="vid-text">\n\n            <P>{{lang != \'en\' ? list.hin_desc : list.desc}}</P>\n\n        </div>\n\n    </div>\n\n    </div>\n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n\n        <ion-infinite-scroll-content\n\n        loadingSpinner="bubbles"\n\n        loadingText="{{\'Loading more data...\' | translate}}">\n\n    </ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/video/video.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], VideoPage);
    return VideoPage;
}());

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_detail_news_detail__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, service, loadingCtrl, app, translate, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.translate = translate;
        this.storage = storage;
        this.filter = {};
        this.news_list = '';
        this.lang = '';
        this.tokenInfo = {};
        this.flag = '';
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
        this.get_user_lang();
        this.getNewsList();
        this.presentLoading();
    };
    NewsPage.prototype.goOnNewsDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__news_detail_news_detail__["a" /* NewsDetailPage */], { 'id': id });
    };
    NewsPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    NewsPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    NewsPage.prototype.getNewsList = function () {
        var _this = this;
        this.filter.limit = 0;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/newsList').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.news_list = r['news'];
        });
    };
    NewsPage.prototype.presentLoading = function () {
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
    NewsPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.news_list.length;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/newsList').subscribe(function (r) {
            console.log(r);
            if (r['news'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.news_list = _this.news_list.concat(r['news']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    NewsPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                this.navCtrl.popToRoot();
            }
        }
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/news/news.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'Latest News\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="latest-news">\n\n        <div class="news-list" *ngFor="let list of news_list;let i=index" (click)="goOnNewsDetailPage(list.id)">\n\n            <div class="thumb"><img src={{list.image}} alt=""></div>\n\n            <div class="desc">\n\n                <div class="d-data">\n\n                    <p>{{list.source}}</p>\n\n                    <p><i class="material-icons">date_range</i> {{list.date_created | date:\'d MMMM y\'}}</p>\n\n                </div>\n\n\n\n                <div class="description">\n\n                    <p>{{lang !=\'en\' ? list.hin_title : list.title | lowercase |titlecase}}</p>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)" *ngIf="flag!=1">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_answer_faq_answer__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, navParams, db, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.storage = storage;
        this.translate = translate;
        this.tokenInfo = {};
        this.lang = '';
        this.question_list = [];
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        this.get_user_lang();
        this.get_question();
    };
    FaqPage.prototype.get_question = function () {
        var _this = this;
        this.db.post_rqst("", "app_karigar/getQuestions")
            .subscribe(function (resp) {
            console.log(resp);
            _this.question_list = resp['question_list'];
            _this.question_list.map(function (resp) {
                resp.active = false;
            });
        });
    };
    FaqPage.prototype.goOnfaqanswerPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__faq_answer_faq_answer__["a" /* FaqAnswerPage */], { data: data });
    };
    FaqPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    FaqPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/faq/faq.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'FAQ\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="image-detail" *ngIf="question_list.length == 0">\n\n        <img src="assets/imgs/no_found.svg">\n\n    </div>\n\n    \n\n    <div class="clcsd">\n\n        <ul class="collapsible">\n\n            <li *ngFor="let row of question_list;let i=index" class="{{row.active ? \'active\' : \'\'}}">\n\n                <div class="collapsible-header" (click)="row.active = !row.active">\n\n                    <div class="counter">{{i+1}}</div>\n\n                    <div [innerHTML]="row.question"></div>\n\n                </div>\n\n                <div class="collapsible-body">\n\n                    <div [innerHTML]="row.answer"></div>\n\n                </div>\n\n            </li>\n\n        </ul> \n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offers_offers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OfferListPage = /** @class */ (function () {
    function OfferListPage(navCtrl, navParams, service, loadingCtrl, app, db, translate, storage, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.db = db;
        this.translate = translate;
        this.storage = storage;
        this.constant = constant;
        this.offer_list = [];
        this.filter = {};
        this.flag = '';
        this.lang = '';
        this.tokenInfo = {};
        this.uploadUrl = '';
        this.uploadUrl = constant.upload_url;
    }
    OfferListPage.prototype.ionViewDidLoad = function () {
        this.uploadUrl = this.constant.upload_url;
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        this.get_user_lang();
        console.log('ionViewDidLoad OfferListPage');
        this.getofferList();
        this.presentLoading();
    };
    OfferListPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    OfferListPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    OfferListPage.prototype.goOnOffersPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__offers_offers__["a" /* OffersPage */], { 'id': id });
    };
    OfferListPage.prototype.getofferList = function () {
        var _this = this;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/offerList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.offer_list = r['offer'];
            console.log(_this.offer_list);
        });
    };
    OfferListPage.prototype.presentLoading = function () {
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
    OfferListPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                this.navCtrl.popToRoot();
            }
        }
    };
    OfferListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-list',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/offer-list/offer-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title> {{\'My Offer\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="Product m16">\n\n        <button ion-item class="bg-product mb16" *ngFor="let list of offer_list;let i=index" (click)="goOnOffersPage(list.id)">\n\n            <div class="thumbnail">\n\n                <!-- <img src="{{uploadUrl}}{{list.offer_banner}}"> -->\n\n                <img src="{{uploadUrl + list.offer_banner}}">\n\n\n\n            </div>\n\n            <div class="errow">\n\n                <div class="list-tags">\n\n                    <h1>{{lang != \'en\'? list.hin_title : list.title |titlecase}}</h1>\n\n                    <p>{{\'Valid Upto\' | translate}} : {{list.end_date | date:\'d MMMM y\'}}</p>\n\n                </div>\n\n                <i class="material-icons mr10">trending_flat</i>\n\n            </div>\n\n        </button>\n\n    </div>\n\n\n\n    <div class="image-detail" *ngIf="offer_list.length == 0">\n\n        <img src="assets/imgs/no_found.svg">\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/offer-list/offer-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__["a" /* ConstantProvider */]])
    ], OfferListPage);
    return OfferListPage;
}());

//# sourceMappingURL=offer-list.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSubdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_profile_view_profile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductSubdetailPage = /** @class */ (function () {
    function ProductSubdetailPage(navCtrl, navParams, service, loadingCtrl, app, translate, storage, modalCtrl, con) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.translate = translate;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.con = con;
        this.prod_id = '';
        this.prod_detail = {};
        this.assign_prod = [];
        this.sizeData = [];
        this.prod_detail_image = {};
        this.lang = '';
        this.tokenInfo = {};
        this.upload_url = "";
        this.presentLoading();
    }
    ProductSubdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductSubdetailPage');
        this.prod_id = this.navParams.get('id');
        console.log(this.prod_id);
        this.get_user_lang();
        this.getProductDetail(this.prod_id);
        this.upload_url = this.con.upload_url;
    };
    ProductSubdetailPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    ProductSubdetailPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ProductSubdetailPage.prototype.getProductDetail = function (id) {
        var _this = this;
        console.log(id);
        this.service.post_rqst({ 'product_id': id }, 'app_master/productDetail')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.prod_detail = r['product'];
            _this.sizeData = r['product']['sizes'];
            _this.getRelatedProduct(_this.prod_detail['master_category_id']);
            // this.assign_prod=r['assigned_product_data'];
            console.log(_this.assign_prod);
            console.log(_this.prod_detail['image']);
            _this.prod_detail_image = _this.prod_detail['image'];
            console.log(_this.prod_detail_image[0].image_name);
            console.log(_this.prod_detail_image.length);
        });
    };
    ProductSubdetailPage.prototype.getRelatedProduct = function (id) {
        var _this = this;
        console.log(id);
        var data = { id: id, search: "", limit: 0 };
        this.service.post_rqst({ 'filter': data }, 'app_master/productList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            // this.prod_detail=r['product'];
            _this.assign_prod = r['products'];
            // console.log(this.assign_prod);
            // console.log(this.prod_detail['image']);
            // this.prod_detail_image=this.prod_detail['image'];
            // console.log(this.prod_detail_image[0].image_name);
            // console.log(this.prod_detail_image.length);
        });
    };
    ProductSubdetailPage.prototype.presentLoading = function () {
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
    ProductSubdetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    ProductSubdetailPage.prototype.viewDetail = function (image) {
        console.log("clicked");
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": image }).present();
    };
    ProductSubdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-subdetail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/product-subdetail/product-subdetail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'Product Detail\' | translate}} - {{prod_detail.category_name | titlecase}}</ion-title>\n\n        <!-- <h1>{{prod_detail.product_name | titlecase}}</h1> -->\n\n        <!-- <p *ngIf="prod_detail.desc!=\'\'"><strong>{{\'Description\' | translate}}</strong> : {{prod_detail.desc}}</p> -->\n\n        \n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n    <div class="slide-image h200">\n\n        <!-- zoom="true" -->\n\n        <ion-slides class="cs-slide" *ngIf="prod_detail.image && prod_detail.image.length>1" [initialSlide]="0" pager autoplay="1000" speed="1000" loop="true">\n\n            <ion-slide *ngFor="let row of prod_detail.image; let i=index" (click)="viewDetail(row.image_name)">\n\n                <div class="swiper-zoom-container">\n\n                    <img [src]="upload_url+row.image_name">\n\n                </div>\n\n            </ion-slide>\n\n        </ion-slides>\n\n        <div class="swiper-zoom-container pr_wd" *ngIf="prod_detail.image && prod_detail.image.length==1">\n\n            <img [src]="upload_url+prod_detail_image[0].image_name">\n\n        </div>\n\n    </div>\n\n    \n\n    <!-- <div class="fix">\n\n        <div class="pr-img">\n\n            <ion-slides class="cs-slide"  pager autoplay="1000" speed="1000" loop="true" *ngIf="prod_detail.image && prod_detail.image.length" >\n\n                <ion-slide *ngFor="let row of prod_detail.image; let i=index" (click)="viewDetail(row.image_name)">\n\n                    <img [src]="upload_url+row.image_name">\n\n                </ion-slide>\n\n            </ion-slides>\n\n        </div>\n\n    </div> -->\n\n    \n\n    <div class="item-table">\n\n        <table>\n\n            <tr>\n\n                <td class="w85 wdth">Product Name :-</td>\n\n                <th>{{prod_detail.product_name | titlecase}}</th>\n\n            </tr>\n\n\n\n            <tr>\n\n                <td class="w100 wdth">Category Name :-</td>\n\n                <th>{{prod_detail.category_name | titlecase}}</th>\n\n            </tr>\n\n            <tr>\n\n                <td class="w85 wdth">Product Code :-</td>\n\n                <th>{{prod_detail.product_code }}</th>\n\n            </tr>\n\n\n\n            <tr>\n\n                <td class="w85 wdth">Mrp :-</td>\n\n                <th>{{prod_detail.mrp | titlecase}}</th>\n\n            </tr>\n\n            <tr>\n\n                <td class="w85 wdth">Length :-</td>\n\n                <th>{{prod_detail.length }}</th>\n\n            </tr>\n\n            <tr>\n\n                <td class="w85 wdth">Width :-</td>\n\n                <th>{{prod_detail.width }}</th>\n\n            </tr>\n\n\n\n\n\n            <tr *ngIf="prod_detail.desc!=\'\'">\n\n                <td class="w85">{{\'Description\' | translate}} :-</td>\n\n                <th>{{prod_detail.desc}}</th>\n\n            </tr>\n\n        </table>\n\n    </div>\n\n\n\n\n\n    <!-- <div class="sizes-table mb16">\n\n        <table>\n\n            <tr>\n\n                <th>Size</th>\n\n                <th class="w100 text-right">Points</th>\n\n            </tr>\n\n            <tr *ngFor="let row of sizeData">\n\n                <td>{{row.length}}*{{row.width}}</td>\n\n                <td>{{row.points}}</td>\n\n            </tr>\n\n        </table>\n\n    </div> -->\n\n    \n\n    \n\n    \n\n    <!-- <div class="heading line mt0 mb10">\n\n        <p>Related Products</p>\n\n    </div>\n\n    \n\n    <div class="carousel sm-label-font" *ngIf="assign_prod && assign_prod.length" >\n\n        \n\n        <div class="carousel-item" *ngFor="let row of assign_prod; let i=index"  (click)="getProductDetail(row.id)">\n\n            <div class="img-section">\n\n                <img [src]="upload_url+row.image_name">\n\n            </div>\n\n            <label>{{row.product_name}}</label>\n\n            <label>{{row.product_code}}</label>\n\n            <label>{{row.mrp}}</label>\n\n        </div>\n\n    </div> -->\n\n    \n\n    \n\n    \n\n    <!-- <div class="slide-image h100" style="display: none;">\n\n        <ion-slides class="cs-slide" *ngIf="assign_prod && assign_prod.length">\n\n            <ion-slide *ngFor="let row of assign_prod; let i=index" >\n\n                <ng-container >\n\n                    <div class="swiper-zoom-container">\n\n                        <img [src]="upload_url+row[0].image_name">\n\n                    </div>\n\n                    <p>{{row[0].product_name}}</p>\n\n                    <p>{{row[0].product_code}}</p>\n\n                    <p>{{row[0].mrp}}</p>\n\n                </ng-container>\n\n            </ion-slide>\n\n        </ion-slides>\n\n    </div> -->\n\n    <!-- <div class="" *ngFor="let val of assign_prod">\n\n        {{val[0].product_code}}\n\n    </div> -->\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/product-subdetail/product-subdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__["a" /* ConstantProvider */]])
    ], ProductSubdetailPage);
    return ProductSubdetailPage;
}());

//# sourceMappingURL=product-subdetail.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contractor_add_contractor_add__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contractor_detail_contractor_detail__ = __webpack_require__(288);
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
* Generated class for the ContractorListPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ContractorListPage = /** @class */ (function () {
    function ContractorListPage(navCtrl, navParams, dbService, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.data = [];
        this.filter = {};
        this.filterType = {};
        this.all_count = 0;
        this.pending_count = 0;
        this.approved_count = 0;
        this.reject_count = 0;
        this.details = "Pending";
        this.filter = this.dbService.get_filters();
        if (this.filter.status == undefined) {
            this.filter.status = 'All';
        }
        this.contractorList(this.details);
    }
    ContractorListPage.prototype.ionViewDidLoad = function () {
        this.presentLoading();
        this.contractorList(this.details);
    };
    ContractorListPage.prototype.doRefresh = function (refresher) {
        this.contractorList(this.details);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    ContractorListPage.prototype.presentLoading = function () {
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
    ContractorListPage.prototype.goOnContractorAdd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contractor_add_contractor_add__["a" /* ContractorAddPage */]);
    };
    ContractorListPage.prototype.goOnContractorDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contractor_detail_contractor_detail__["a" /* ContractorDetailPage */], { 'id': id });
    };
    ContractorListPage.prototype.contractorList = function (status) {
        var _this = this;
        this.filter.mode = 0;
        this.filter.status = status;
        this.dbService.post_rqst({ 'contractor_id': this.dbService.karigar_id, 'filter': this.filter }, 'app_karigar/get_contractor_request').subscribe(function (r) {
            _this.loading.dismiss();
            console.log(r.request_list.data);
            _this.data = r.request_list.data;
            _this.filter.mode = 1;
            _this.all_count = r.all_count;
            _this.pending_count = r.pending_count;
            _this.approved_count = r.approved_count;
            _this.reject_count = r.reject_count;
            // console.log(this.meetData);
        });
    };
    ContractorListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contractor-list',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/contractor/contractor-list/contractor-list.html"*/'<!--\n\n  Generated template for the ContractorListPage page.\n\n  \n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'Channel Partner Points List\' | translate }} </ion-title>\n\n  </ion-navbar>\n\n\n\n  <div class="ion-tab-btn" style="margin-top:1px;">\n\n    <ion-segment [(ngModel)]="details" >\n\n      <!-- <ion-segment-button (click)="filter = {}; filter.status = \'All\'; contractorList()" [ngClass]="{\'active\': filter.status == \'All\'}">\n\n        {{ \'All\' | translate }}  ({{all_count}})\n\n      </ion-segment-button> -->\n\n      <!-- click)="filter = {}; filter.status = \'Pending\'; contractorList()" [ngClass]="{\'active\': filter.status == \'Pending\'}" -->\n\n      <ion-segment-button  value="Pending"  (click)="contractorList(details)">\n\n        {{ \'Pending\' | translate }}   ({{pending_count}})\n\n      </ion-segment-button>\n\n      <ion-segment-button  value="Approved" (click)="contractorList(details)">\n\n        {{ \'Approved\' | translate }}  ({{approved_count}})\n\n      </ion-segment-button>\n\n      <ion-segment-button  value="Reject"  (click)="contractorList(details)">\n\n        {{ \'Reject\' | translate }} ({{reject_count}})\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n  \n\n \n\n</ion-header>\n\n\n\n<ion-content >\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  \n\n  \n\n  \n\n  <!-- [ngSwitch]="list" -->\n\n  <div class="padding16" >\n\n    \n\n    <div class="cs-list" *ngFor="let row of data; let i = index;" (click)="goOnContractorDetail(row.id)">\n\n      <div class="top-block">\n\n        <p>{{row.company_name | titlecase}}</p>\n\n        <ion-icon name="arrow-forward" color="primary"  ios="ios-arrow-forward"></ion-icon>\n\n      </div>\n\n      <div class="middle-block">\n\n        <div class="three-block">\n\n          <p>{{\'Date\' | translate}} : <strong>{{row.date_created |  date:\'d MMMM y\'}}</strong></p>\n\n          <p>{{\'Status\' | translate}} : <strong class="{{row.status}}">{{row.status}}</strong> </p>\n\n\n\n        </div>\n\n        <div class="three-block" *ngIf="row.total_items || row.total_qty">\n\n          <p>{{\'Quantity\' | translate}} : <strong>{{row.total_qty}}</strong></p>\n\n          <!-- <p>{{\'Total Item\' | translate}} : <strong>{{row.total_items}}</strong></p> -->\n\n          <p *ngIf="row.status ==\'Reject\'"><strong>{{\'Reason\' | translate}}:</strong>  {{row.status_reason ? row.status_reason :\'N/A\'}}</p>\n\n\n\n        </div>\n\n      </div>\n\n      <div class="top-block footer-block" *ngIf="row.status ==\'Approved\'">\n\n        <p>{{\'Points Earned\' | translate}}: <strong style="font-size: 14px; color: #2e5ea2;">{{row.points}}</strong></p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="image-detail"  *ngIf="!data.length && ( (filter.status == \'All\' && all_count ==0 ) || (filter.status == \'Pending\' && pending_count == 0 ) || (filter.status == \'Approved\' && approved_count == 0 ) || (filter.status == \'Reject\' && reject_count ==0 ))">\n\n    <img src="assets/imgs/no_found.svg">\n\n  </div>\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="secondary" (click)="goOnContractorAdd()"> <ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/contractor/contractor-list/contractor-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], ContractorListPage);
    return ContractorListPage;
}());

//# sourceMappingURL=contractor-list.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FurnitureIdeasdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furniture_ideasshare_furniture_ideasshare__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__furniture_ideas_furniture_ideas__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FurnitureIdeasdetailPage = /** @class */ (function () {
    function FurnitureIdeasdetailPage(navCtrl, navParams, service, db, loadingCtrl, translate, constn, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.constn = constn;
        this.storage = storage;
        this.data = {};
        this.upload_url = '';
        this.filter = {};
        this.flag = '';
        this.tokenInfo = {};
        this.lang = '';
        this.karigar_detail = {};
        this.productDataImg = [];
        this.sub_cat_list = [];
        this.data = this.navParams.get("data");
        this.presentLoading();
        this.getShopDetail();
        this.upload_url = constn.upload_url;
        // this.lang = this.navParams.get("lang");
        // this.translate.setDefaultLang(this.lang);
        // this.translate.use(this.lang);
        // console.log(this.karigar_detail.edit_profile);
    }
    FurnitureIdeasdetailPage.prototype.ionViewDidLoad = function () {
        this.upload_url = this.constn.upload_url;
        console.log('ionViewDidLoad FurnitureIdeasdetailPage');
        this.get_subFurniture_cat();
    };
    FurnitureIdeasdetailPage.prototype.goOnfurnituresharePage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__furniture_ideasshare_furniture_ideasshare__["a" /* FurnitureIdeassharePage */], { data: data, list: this.sub_cat_list });
    };
    FurnitureIdeasdetailPage.prototype.get_subFurniture_cat = function () {
        var _this = this;
        this.filter.limit = 0;
        this.db.post_rqst({ data: this.data, 'filter': this.filter }, "app_karigar/get_subfurniture_cat")
            .subscribe(function (resp) {
            console.log(resp);
            _this.sub_cat_list = resp['sub_cat_list'];
            _this.loading.dismiss();
        });
    };
    FurnitureIdeasdetailPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.sub_cat_list.length;
        this.db.post_rqst({ data: this.data, 'filter': this.filter }, 'app_karigar/get_subfurniture_cat')
            .subscribe(function (r) {
            console.log(r);
            if (r['sub_cat_list'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.sub_cat_list = _this.sub_cat_list.concat(r['sub_cat_list']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    FurnitureIdeasdetailPage.prototype.presentLoading = function () {
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
    FurnitureIdeasdetailPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    FurnitureIdeasdetailPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    FurnitureIdeasdetailPage.prototype.getShopDetail = function () {
        var _this = this;
        console.log('karigar');
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/shop_image')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            // this.karigar_detail=r['karigar'];
            _this.productDataImg = r['shop_image'];
            // this.language=r['language'];
        });
    };
    FurnitureIdeasdetailPage.prototype.updateShopImage = function () {
        console.log(this.productDataImg);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__furniture_ideas_furniture_ideas__["a" /* FurnitureIdeasPage */], { 'data': this.productDataImg });
    };
    FurnitureIdeasdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-furniture-ideasdetail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/furniture-ideasdetail/furniture-ideasdetail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title> {{\'Shop Image\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- <ion-content>\n\n    <div class="furn-container" >\n\n        <div class="furn-imgs" *ngFor="let row of sub_cat_list;let i=index" (click)="goOnfurnituresharePage(i)">\n\n            <img src="{{upload_url+row.image_name}}">\n\n        </div>\n\n    </div>\n\n    \n\n    <div class="image-detail" *ngIf="sub_cat_list.length == 0">\n\n        <img src="assets/imgs/no_found.svg">\n\n    </div>\n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content> -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-content>\n\n\n\n    \n\n\n\n\n\n\n\n\n\n    <div class="profile-card">\n\n\n\n        <div class="text-center">\n\n            <!-- <h2 class="shp_fnt">{{ \'Shop Image\' | translate }}</h2> -->\n\n        </div>\n\n        <div class="pr16 pl16" *ngFor="let row of productDataImg; let i = index">\n\n          <div class="bill_img ">\n\n            <img src="{{upload_url + row.image}}">\n\n          </div>\n\n        </div>\n\n    </div>\n\n\n\n    <ion-fab right bottom >\n\n        <button ion-fab color="secondary" (click)="updateShopImage()"> <ion-icon name="add"></ion-icon></button>\n\n      </ion-fab>\n\n      \n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/furniture-ideasdetail/furniture-ideasdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], FurnitureIdeasdetailPage);
    return FurnitureIdeasdetailPage;
}());

//# sourceMappingURL=furniture-ideasdetail.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConstantProvider = /** @class */ (function () {
    function ConstantProvider(http) {
        this.http = http;
        // live url
        this.rootUrl = 'https://jaluphaar.in/dd_api/';
        this.server_url = this.rootUrl + 'index.php/app/';
        this.upload_url = 'https://jaluphaar.in/dd_api/app/uploads/';
        // Testing url
        // public rootUrl: string = 'https://devcrm.abacusdesk.com/jupiteraqualines/dd_api/';  
        // public server_url: string = this.rootUrl + 'index.php/app/';
        // public upload_url: string ='https://devcrm.abacusdesk.com/jupiteraqualines/dd_api/app/uploads/';
        // clonned url
        // public rootUrl: string = 'http://phpstack-83335-1175063.cloudwaysapps.com/dd_api/';  
        // public server_url: string = this.rootUrl + 'index.php/app/';
        // public upload_url: string ='http://phpstack-83335-1175063.cloudwaysapps.com/dd_api/app/uploads/';
        this.backButton = 0;
        console.log('Hello ConstantProvider Provider');
    }
    ConstantProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], ConstantProvider);
    return ConstantProvider;
}());

//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__aboutus_modal_aboutus_modal__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mobile_login_mobile_login__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__language_language__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { TabsPage } from './../../../pages/tabs/tabs';






var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, navParams, service, alertCtrl, modalCtrl, storage, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.karigar_detail = {};
        this.otp = '';
        this.lang = '';
        this.otp_value = '';
        this.data = {};
        this.mobile_no = '';
        this.tokan_value = '';
        this.tokenInfo = '';
        this.user_type = '';
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OtpPage');
        this.mobile_no = this.navParams.get('mobile_no');
        this.otp = this.navParams.get('otp');
        this.lang = this.navParams.get('lang');
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
    };
    OtpPage.prototype.otpvalidation = function () {
        this.otp_value = false;
        if (this.data.otp == this.otp) {
            this.otp_value = true;
        }
        console.log(this.otp);
        console.log(this.otp_value);
    };
    OtpPage.prototype.submit = function () {
        var _this = this;
        this.presentLoading();
        console.log('data');
        console.log(this.data);
        this.service.post_rqst({ 'mobile_no': this.mobile_no, 'mode': 'App', "lang": this.lang }, 'auth/login')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            if (r['status'] == 'NOT FOUND') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registration_registration__["a" /* RegistrationPage */], { 'mobile_no': _this.mobile_no, "lang": _this.lang });
                return;
            }
            else if (r['status'] == 'ACCOUNT SUSPENDED') {
                _this.translate.get("Your account has been suspended")
                    .subscribe(function (resp) {
                    _this.showAlert(resp);
                });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__mobile_login_mobile_login__["a" /* MobileLoginPage */]);
                return;
            }
            else if (r['status'] == 'SUCCESS') {
                _this.storage.set('token', r['token']);
                _this.service.karigar_id = r['user'].id;
                _this.service.karigar_status = r['user'].status;
                console.log(_this.service.karigar_id);
                if (r['user'].status != 'Verified' && r['user'].user_type != 3) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__aboutus_modal_aboutus_modal__["a" /* AboutusModalPage */]);
                    // let contactModal = this.modalCtrl.create(AboutusModalPage);
                    // contactModal.present();
                    return;
                }
            }
            _this.storage.set('token', r['token']);
            _this.service.karigar_id = r['user'].id;
            console.log(_this.service.karigar_id);
            _this.service.post_rqst({ "data": { 'id': _this.service.karigar_id, 'language': _this.lang } }, "app_karigar/update_language")
                .subscribe(function (resp) {
                console.log(resp);
                // this.navCtrl.push(HomePage);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
            });
            // this.navCtrl.push(TabsPage);
        });
    };
    OtpPage.prototype.resendOtp = function () {
        var _this = this;
        this.service.post_rqst({ 'mobile_no': this.mobile_no }, 'app_karigar/karigarLoginOtp').subscribe(function (r) {
            if (r['status'] == "SUCCESS") {
                _this.translate.get("OTP has been send")
                    .subscribe(function (resp) {
                    _this.showSuccess(resp);
                    _this.otp = r['otp'];
                });
            }
        });
    };
    OtpPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_4_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    OtpPage.prototype.showAlert = function (text) {
        var _this = this;
        this.translate.get("Alert")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    OtpPage.prototype.showSuccess = function (text) {
        var _this = this;
        this.translate.get("Success")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    OtpPage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get("Please wait...")
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: "",
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    OtpPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__mobile_login_mobile_login__["a" /* MobileLoginPage */]);
    };
    OtpPage.prototype.languageBack = function () {
        console.log(this.lang);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__language_language__["a" /* LanguagePage */]);
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/login-section/otp/otp.html"*/'\n\n<ion-header no-border>\n\n    <ion-toolbar color="white" style="min-height:50px">\n\n        <ion-buttons class="back-btns" (click)="languageBack()">\n\n            <button ion-button icon-only>\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        \n\n        <ion-title>\n\n            <div class="logo no-margin" >\n\n                <img  style="margin-top:8px;"src="assets/imgs/logo.png">\n\n            </div>\n\n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<form  #f="ngForm" (ngSubmit)="f.form.valid && submit()" class="hp100">\n\n		<div class="center-block">\n\n		<div class="mobile-login">\n\n			<div class="text">\n\n				<p>{{\'Enter your 4 digit number that has been send to \' | translate}} <span class="blue-color lineh24">+91 {{mobile_no}}</span></p>\n\n			</div>\n\n			<div class="input-section">\n\n				<div class="input-adjust m16 mb0">\n\n					<input class="pl16 radius-none" type="tel" name="otp" placeholder="{{\'Enter OTP\' | translate}}" #otp="ngModel" [(ngModel)]="data.otp" minlength="4" maxlength="4" (ngModelChange)="otpvalidation()" required>\n\n					<div class="otp-error" *ngIf="!otp_value && otp?.touched">\n\n						<p>{{\'Wrong OTP value\' | translate}}</p>\n\n					</div>\n\n				</div>\n\n				<div class="resend" >	\n\n					<a (click)="resendOtp()">{{\'Resend\' | translate}}</a>\n\n				</div>	\n\n			</div>\n\n			\n\n			<div class="login-btn" >\n\n				<button [disabled]="!otp_value">{{\'Continue\' | translate}}</button>\n\n			</div>\n\n			\n\n		</div>\n\n		</div>\n\n	</form>\n\n	\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/login-section/otp/otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_subdetail_product_subdetail__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(navCtrl, navParams, service, loadingCtrl, app, translate, storage, con) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.translate = translate;
        this.storage = storage;
        this.con = con;
        this.cat_id = '';
        this.filter = {};
        this.prod_list = [];
        this.prod_cat = '';
        this.lang = '';
        this.tokenInfo = {};
        this.upload_url = '';
    }
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        this.cat_id = this.navParams.get('id');
        console.log(this.cat_id);
        this.presentLoading();
        this.get_user_lang();
        this.getProductList(this.cat_id, '');
        this.upload_url = this.con.upload_url;
    };
    ProductDetailPage.prototype.goOnProductSubDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_subdetail_product_subdetail__["a" /* ProductSubdetailPage */], { 'id': id });
    };
    ProductDetailPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    ProductDetailPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ProductDetailPage.prototype.getProductList = function (id, search) {
        var _this = this;
        console.log(search);
        this.filter.search = search;
        this.filter.limit = 0;
        this.filter.id = id;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/productList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.prod_list = r['products'];
            _this.prod_cat = r['category_name'];
        });
    };
    ProductDetailPage.prototype.presentLoading = function () {
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
    ProductDetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                this.navCtrl.popToRoot();
            }
        }
    };
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/product-detail/product-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <!-- For hindi -->\n\n        <!-- {{lang != \'en\' ? prod_cat.hin_category_name : prod_cat.category_name |titlecase}} -->\n\n        <ion-title>{{prod_cat.category_name |titlecase}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="fix" style="margin-top:40px">\n\n        <div class="search">\n\n            <ion-searchbar type=\'text\' placeholder="{{\'Search\' | translate}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" (ngModelChange)="getProductList(cat_id,filter.search)"></ion-searchbar>\n\n        </div>\n\n    </div>\n\n    <div class="pr-list" (click)="goOnProductSubDetailPage(list.id)" *ngFor="let list of prod_list;let i=index">\n\n        <button ion-item>\n\n			<div class="main-bx">\n\n				<div class="bx-left">\n\n					<img src={{upload_url+list.image_name}}>\n\n				</div>\n\n				<div class="bx-right">\n\n					<!-- For Hindi -->\n\n					<!-- {{lang != \'en\' ? list.hin_product_name : list.product_name |titlecase}} -->\n\n					<h2>{{list.product_name |titlecase}}</h2>\n\n					<!-- <h2>Code : {{list.product_code |titlecase}}</h2> -->\n\n				</div>\n\n			</div>  \n\n			<i class="material-icons">trending_flat</i>\n\n		</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/product-detail/product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__["a" /* ConstantProvider */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointtransferremarkPageModule", function() { return PointtransferremarkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redeem_type_redeem_type_module__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pointtransferremark__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PointtransferremarkPageModule = /** @class */ (function () {
    function PointtransferremarkPageModule() {
    }
    PointtransferremarkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__pointtransferremark__["a" /* PointtransferremarkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__pointtransferremark__["a" /* PointtransferremarkPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: __WEBPACK_IMPORTED_MODULE_4__redeem_type_redeem_type_module__["createTranslateLoader"],
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], PointtransferremarkPageModule);
    return PointtransferremarkPageModule;
}());

//# sourceMappingURL=pointtransferremark.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus-modal/aboutus-modal.module": [
		255
	],
	"../pages/advance-text/advance-text.module": [
		292
	],
	"../pages/arrival-detail/arrival-detail.module": [
		293
	],
	"../pages/arrival-product/arrival-product.module": [
		294
	],
	"../pages/cancelation-policy/cancelation-policy.module": [
		295
	],
	"../pages/cancelpolicy-modal/cancelpolicy-modal.module": [
		296
	],
	"../pages/chating/chating.module": [
		297
	],
	"../pages/compass/compass.module": [
		298
	],
	"../pages/contact/contact.module": [
		299
	],
	"../pages/contractor/contractor-add/contractor-add.module": [
		300
	],
	"../pages/contractor/contractor-detail/contractor-detail.module": [
		301
	],
	"../pages/contractor/contractor-list/contractor-list.module": [
		302
	],
	"../pages/description-model/description-model.module": [
		303
	],
	"../pages/digitalcatalog/digitalcatalog.module": [
		304
	],
	"../pages/faq-answer/faq-answer.module": [
		305
	],
	"../pages/faq/faq.module": [
		306
	],
	"../pages/feedback/feedback.module": [
		307
	],
	"../pages/filter-product/filter-product.module": [
		308
	],
	"../pages/furniture-ideas/furniture-ideas.module": [
		309
	],
	"../pages/furniture-ideasdetail/furniture-ideasdetail.module": [
		310
	],
	"../pages/furniture-ideasshare/furniture-ideasshare.module": [
		311
	],
	"../pages/gift-gallery/gift-detail/gift-detail.module": [
		312
	],
	"../pages/gift-gallery/gift-list/gift-list.module": [
		313
	],
	"../pages/language/language.module": [
		808,
		8
	],
	"../pages/login-section/login-screen/login-screen.module": [
		809,
		7
	],
	"../pages/login-section/mobile-login/mobile-login.module": [
		314
	],
	"../pages/login-section/otp/otp.module": [
		810,
		6
	],
	"../pages/login-section/registration/registration.module": [
		315
	],
	"../pages/main-category/main-category.module": [
		811,
		4
	],
	"../pages/main-home/main-home.module": [
		404
	],
	"../pages/news-detail/news-detail.module": [
		405
	],
	"../pages/news/news.module": [
		406
	],
	"../pages/notification/notification.module": [
		407
	],
	"../pages/offer-list/offer-list.module": [
		408
	],
	"../pages/offer-product-detail/offer-product-detail.module": [
		409
	],
	"../pages/offer-product/offer-product.module": [
		410
	],
	"../pages/offers/offers.module": [
		98
	],
	"../pages/plumberadd/plumberadd.module": [
		411
	],
	"../pages/plumberdetail/plumberdetail.module": [
		412
	],
	"../pages/plumberlist/plumberlist.module": [
		413
	],
	"../pages/points/point-detail/point-detail.module": [
		414
	],
	"../pages/points/point-list/point-list.module": [
		415
	],
	"../pages/pointtransferremark/pointtransferremark.module": [
		208
	],
	"../pages/product-detail/product-detail.module": [
		416
	],
	"../pages/product-subdetail/product-subdetail.module": [
		417
	],
	"../pages/products/products.module": [
		418
	],
	"../pages/profile-edit-modal/profile-edit-modal.module": [
		812,
		3
	],
	"../pages/profile/profile.module": [
		419
	],
	"../pages/receive-remark-modal/receive-remark-modal.module": [
		420
	],
	"../pages/redeem-type/redeem-type.module": [
		60
	],
	"../pages/scane-pages/coupan-code/coupan-code.module": [
		421
	],
	"../pages/scane-pages/scan/scan.module": [
		422
	],
	"../pages/shipping-detail/shipping-detail.module": [
		423
	],
	"../pages/shop-image/shop-image.module": [
		813,
		2
	],
	"../pages/site-popover/site-popover.module": [
		814,
		5
	],
	"../pages/success-modal/success-modal.module": [
		815,
		1
	],
	"../pages/terms/terms.module": [
		424
	],
	"../pages/transaction/transaction.module": [
		425
	],
	"../pages/updatebankdetail/updatebankdetail.module": [
		816,
		0
	],
	"../pages/video/video.module": [
		426
	],
	"../pages/view-profile/view-profile.module": [
		427
	],
	"../pages/working-site/working-site.module": [
		429
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 254;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusModalPageModule", function() { return AboutusModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus_modal__ = __webpack_require__(58);
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
var AboutusModalPageModule = /** @class */ (function () {
    function AboutusModalPageModule() {
    }
    AboutusModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aboutus_modal__["a" /* AboutusModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aboutus_modal__["a" /* AboutusModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], AboutusModalPageModule);
    return AboutusModalPageModule;
}());

//# sourceMappingURL=aboutus-modal.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointtransferremarkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plumberlist_plumberlist__ = __webpack_require__(92);
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
 * Generated class for the PointtransferremarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PointtransferremarkPage = /** @class */ (function () {
    function PointtransferremarkPage(navCtrl, navParams, viewCtrl, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.data = {};
        this.saveFlag = false;
        this.karigar_id = this.navParams.get('id');
        console.log(this.karigar_id);
    }
    PointtransferremarkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PointtransferremarkPage');
    };
    PointtransferremarkPage.prototype.showAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    cssClass: 'close-action-sheet',
                    handler: function () {
                        // this.navCtrl.push(PlumberlistPage);
                    }
                }]
        });
        alert.present();
    };
    PointtransferremarkPage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    PointtransferremarkPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    PointtransferremarkPage.prototype.submit = function () {
        var _this = this;
        if (!this.data.points) {
            this.showAlert('Please enter points');
            return;
        }
        this.saveFlag = true;
        this.service.post_rqst({ 'karigar_id': this.karigar_id, 'dealer_id': this.service.karigar_id, 'points': this.data.points, 'remark': this.data.remark }, 'app_karigar/plumber_points_transfer').subscribe(function (r) {
            console.log(r);
            if (r['status'] == 'SUCCESS') {
                _this.showSuccess('Plumber Point Transfer Successfully');
                _this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_3__plumberlist_plumberlist__["a" /* PlumberlistPage */]);
                //   this.showSuccess( 'Plumber Point Transfer Successfully');
                // this.navCtrl.setRoot(PlumberlistPage);
                return;
            }
            if (r['status'] == 'INSUFFICIENTBALANCE') {
                _this.showAlert('Insufficient Balance');
                return;
            }
        });
    };
    PointtransferremarkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pointtransferremark',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/pointtransferremark/pointtransferremark.html"*/'\n\n<ion-content padding class="popup-modal">\n\n  <div class="modal-center">\n\n    <div class="modal-content in-modal">\n\n      <p>{{\'Transfer Points\' | translate}} </p>\n\n      \n\n      <div class="input-section">\n\n        <div class="input-adjust m0">\n\n          <input class="radius-none" style="padding-left: 12px ! important;" type="number" placeholder="{{\'Enter Points\' | translate}}" name="points"  #points="ngModel" [(ngModel)]="data.points"  required>\n\n        </div>\n\n      </div>\n\n\n\n      <div class="input-section">\n\n        <div class="input-adjust m0">\n\n          <textarea class="radius-none" type="text" placeholder="{{\'Enter Remark\' | translate}}" name="remark"  #remark="ngModel" [(ngModel)]="data.remark"  ></textarea>\n\n        </div>\n\n      </div>\n\n      \n\n      <div class="footer-btn">\n\n        <button class="outline-btn" (click)="dismiss()">{{\'Cancel\' | translate}}</button>	\n\n        <button class="fill-btn"  [disabled]="saveFlag == true" (click)="submit()">{{\'Save\' | translate}}</button>\n\n      </div>	\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/pointtransferremark/pointtransferremark.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PointtransferremarkPage);
    return PointtransferremarkPage;
}());

//# sourceMappingURL=pointtransferremark.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlumberaddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plumberlist_plumberlist__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__ = __webpack_require__(6);
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
 * Generated class for the PlumberaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlumberaddPage = /** @class */ (function () {
    function PlumberaddPage(navCtrl, navParams, alertCtrl, dbService, actionSheetController, camera, loadingCtrl, modalCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dbService = dbService;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.data = {};
        this.saveFlag = false;
        this.district_list = [];
        this.city_list = [];
        this.pincode_list = [];
        this.cam = "";
        this.gal = "";
        this.cancl = "";
        this.ok = "";
        this.save_succ = "";
        this.upl_file = "";
        this.flag = true;
        this.state_list = [];
        this.getstatelist();
        this.data.document_image = '';
        console.log(this.data.profile);
        this.data.document_type = 'Aadharcard';
        this.today_date = new Date().toISOString().slice(0, 10);
    }
    PlumberaddPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PlumberaddPage');
        if (this.data.state) {
            this.getDistrictList(this.data.state);
        }
        this.translate.get("Camera")
            .subscribe(function (resp) {
            _this.cam = resp;
        });
        this.translate.get("Gallery")
            .subscribe(function (resp) {
            _this.gal = resp;
        });
        this.translate.get("Cancel")
            .subscribe(function (resp) {
            _this.cancl = resp;
        });
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.translate.get("Upload File")
            .subscribe(function (resp) {
            _this.upl_file = resp;
        });
        this.translate.get("Registered Successfully")
            .subscribe(function (resp) {
            _this.save_succ = resp;
        });
    };
    PlumberaddPage.prototype.onUploadChange = function (evt) {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: this.upl_file,
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takeDocPhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getDocImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        _this.data.doc_edit_id = _this.data.id;
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    PlumberaddPage.prototype.takeDocPhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 90,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 800,
            targetHeight: 600
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.doc_edit_id = '',
                _this.data.document_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.document_image);
        }, function (err) {
        });
    };
    PlumberaddPage.prototype.getDocImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.doc_edit_id = '';
            _this.data.document_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.document_image);
        }, function (err) {
        });
    };
    PlumberaddPage.prototype.namecheck = function (event) {
        console.log("called");
        var pattern = /[A-Z\+\-\a-z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    PlumberaddPage.prototype.caps_add = function (add) {
        this.data.address = add.replace(/\b\w/g, function (l) { return l.toUpperCase(); });
    };
    PlumberaddPage.prototype.MobileNumber = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    PlumberaddPage.prototype.presentLoading = function () {
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
    PlumberaddPage.prototype.showAlert = function (text) {
        var _this = this;
        this.translate.get("Alert")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    PlumberaddPage.prototype.submit = function () {
        var _this = this;
        console.log('data');
        console.log(this.data);
        // if(!this.data.whatsapp_mobile_no){
        //     this.data.whatsapp_mobile_no="";
        // }
        // if(!this.data.document_image){
        //     this.presentToast();
        //     return
        // }
        this.saveFlag = true;
        this.presentLoading();
        console.log(this.data);
        this.data.user_type = 1;
        this.dbService.post_rqst({ 'karigar': this.data, 'dealer_id': this.dbService.karigar_id }, 'app_karigar/addplumber')
            .subscribe(function (r) {
            _this.loading.dismiss();
            console.log(r);
            if (r['status'] == "SUCCESS") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__plumberlist_plumberlist__["a" /* PlumberlistPage */]);
                return;
            }
            else if (r['status'] == "EXIST") {
                _this.translate.get("Already Registered")
                    .subscribe(function (resp) {
                    _this.showAlert(resp + "!");
                });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__plumberlist_plumberlist__["a" /* PlumberlistPage */]);
            }
        });
    };
    PlumberaddPage.prototype.getDistrictList = function (state_name) {
        var _this = this;
        console.log(state_name);
        this.dbService.post_rqst({ 'state_name': state_name }, 'app_master/getDistrict')
            .subscribe(function (r) {
            console.log(r);
            _this.district_list = r['districts'];
            console.log(_this.district_list);
        });
    };
    PlumberaddPage.prototype.getCityList = function (district_name) {
        var _this = this;
        console.log(district_name);
        this.dbService.post_rqst({ 'district_name': district_name }, 'app_master/getCity')
            .subscribe(function (r) {
            console.log(r);
            _this.city_list = r['cities'];
            _this.pincode_list = r['pins'];
            console.log(_this.pincode_list);
        });
    };
    PlumberaddPage.prototype.getstatelist = function () {
        var _this = this;
        this.dbService.get_rqst('app_master/getStates').subscribe(function (r) {
            console.log(r);
            _this.state_list = r['states'];
            _this.karigar_id = r['id'];
            console.log(_this.state_list);
        });
    };
    PlumberaddPage.prototype.getaddress = function (pincode) {
        var _this = this;
        if (this.data.pincode.length == '6') {
            this.dbService.post_rqst({ 'pincode': pincode }, 'app_karigar/getAddress')
                .subscribe(function (result) {
                console.log(result);
                var address = result.address;
                if (address != null) {
                    _this.data.state = result.address.state_name;
                    console.log(_this.data.state);
                    _this.getDistrictList(_this.data.state);
                    _this.data.district = result.address.district_name;
                    _this.data.city = result.address.city;
                    console.log(_this.data);
                }
            });
        }
    };
    PlumberaddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-plumberadd',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/plumberadd/plumberadd.html"*/'<!--\n\n  Generated template for the ContractorAddPage page.\n\n  \n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'Add New Plumber\' | translate }} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="main-field ">\n\n    <!-- <h3>{{ \'Basic information\' | translate}} </h3> -->\n\n    <div class="cs-form ">\n\n      \n\n      <form  (ngSubmit)="f.form.valid && submit() " #f="ngForm" >      \n\n        \n\n        <div class="heading line" >\n\n          <p>{{\'Basic Information\' | translate}}</p>\n\n      </div>\n\n      <div class="ragistration-fields">\n\n          <div class="left-right align-in-center">\n\n              <div class="right-part cs-form ml0">\n\n                  <ion-list>\n\n                      <!-- <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && Company_name?.invalid}" *ngIf="data.type==\'Retailer\' && data.type==\'Mechanic\'">\n\n                          <ion-label floating>{{\'Company Name\'}}*</ion-label>\n\n                          <ion-input type="text" name="Company_name" #Company_name="ngModel" [(ngModel)]="data.Company_name" (ngModelChange)="(data.Company_name!=null)?data.Company_name[0] = data.Company_name[0].toUpperCase():\'\'" (keypress)="namecheck($event)" required></ion-input>\n\n                      </ion-item> -->\n\n                      <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && first_name?.invalid}">\n\n                          <ion-label floating>{{\'First Name\' | translate}}*</ion-label>\n\n                          <ion-input type="text" name="first_name" #first_name="ngModel" [(ngModel)]="data.first_name" (ngModelChange)="(data.first_name!=null)?data.first_name[0] = data.first_name[0].toUpperCase():\'\'" (keypress)="namecheck($event)" required></ion-input>\n\n                      </ion-item>\n\n                      <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && last_name?.invalid}">\n\n                          <ion-label floating>{{\'Last Name\' | translate}}*</ion-label>\n\n                          <ion-input type="text" name="last_name" #last_name="ngModel" [(ngModel)]="data.last_name" (ngModelChange)="(data.last_name!=null)?data.last_name[0] = data.last_name[0].toUpperCase():\'\'" (keypress)="namecheck($event)" required [ngClass]="{\'error\':f.submitted && last_name?.invalid}"\n\n                          maxlength="10"></ion-input>\n\n                      </ion-item>\n\n                  </ion-list>\n\n              </div>\n\n          </div>\n\n          <!--//////////////// importaint //////////////-->\n\n          \n\n          \n\n          \n\n          \n\n          <div class="cs-form">\n\n              <ion-list>\n\n                 \n\n                  \n\n                  <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && mobile_no?.invalid}">\n\n                      <ion-label floating>{{\'Mobile No\' | translate}}.*</ion-label>\n\n                      <ion-input type="tel" name="mobile_no" #mobile_no="ngModel" [(ngModel)]="data.mobile_no" min="0" maxlength="10" minlength="10" required  ></ion-input>\n\n                  </ion-item>\n\n                  \n\n                  <!-- <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && whatsapp_mobile_no\n\n                  ?.invalid}">\n\n                  <ion-label floating>{{\'Whatsapp No\' | translate}}.</ion-label>\n\n                  <ion-input type="tel" name="whatsapp_mobile_no\n\n                  " #whatsapp_mobile_no="ngModel" [(ngModel)]="data.whatsapp_mobile_no\n\n                  "  min="0" maxlength="10" minlength="10"></ion-input>\n\n              </ion-item> -->\n\n             \n\n\n\n              <!--//////////////// importaint //////////////-->\n\n              \n\n              <ion-item class="cs-input" [ngClass]="{\'error\':(f.submitted && email?.invalid) || (f.submitted && !email.valid)}">\n\n                  <ion-label floating>{{\'Email ID\' | translate}}</ion-label>\n\n                  <ion-input type="email" name="email" #email="ngModel" [(ngModel)]="data.email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"></ion-input>\n\n              </ion-item>\n\n              <p class="alert-line"  style="color: #e62e2d;" *ngIf="email.errors?.pattern">{{\'Invaild Email ID\'  | translate}}</p>\n\n              \n\n              <ion-item class="cs-date mb0" [ngClass]="{\'error\':f.submitted && dob?.invalid}">\n\n                  <ion-label>{{\'Date of Birth\' | translate}}*</ion-label>\n\n                  <ion-datetime displayFormat="DD/MM/YYYY" max={{today_date}} type="text" name="dob" #dob="ngModel" [(ngModel)]="data.dob" required>\n\n                  </ion-datetime>\n\n              </ion-item>\n\n\n\n             \n\n          </ion-list>\n\n      </div>\n\n  </div>\n\n  \n\n  <div class="heading line">\n\n      <p>{{\'Address Information\' | translate}}</p>\n\n  </div>\n\n  \n\n  <div class="ragistration-fields">\n\n      <div class="cs-form">\n\n          <ion-list>\n\n              <ion-item class="cs-input" [ngClass]="{\'error\':(f.submitted && address?.invalid) || (f.submitted && !address.valid)}">\n\n                  <ion-label floating>{{\'Address\' | translate}}*</ion-label>\n\n                  \n\n                  <ion-input type="text" name="address" #address="ngModel" [(ngModel)]="data.address" (ngModelChange)="caps_add(data.address)" required></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && pincode?.invalid}">\n\n                  <ion-label floating>{{\'Pincode\' | translate}}*</ion-label>\n\n                  <ion-input type="tel" name="pincode" [(ngModel)]="data.pincode" #pincode="ngModel" required maxlength="6" minlength="6" (input)="getaddress(data.pincode)"></ion-input>\n\n              </ion-item>\n\n              \n\n              \n\n              <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && state?.invalid}">\n\n                  <ion-label>{{\'State\' | translate}}*</ion-label>\n\n                  <ion-select name="state" [(ngModel)]="data.state" #state="ngModel" (ngModelChange)="getDistrictList(data.state)" required>\n\n                      <ion-option *ngFor="let row of state_list" value="{{row.state_name}}">{{row.state_name}}</ion-option>\n\n                  </ion-select>\n\n              </ion-item>\n\n              \n\n              <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && state?.invalid}">\n\n                  <ion-label>{{\'District\' | translate}}*</ion-label>\n\n                  <ion-select name="district" [(ngModel)]="data.district" #district="ngModel" (ngModelChange)="getCityList(data.district)" required>\n\n                      <ion-option *ngFor="let row of district_list" value="{{row.district_name}}">{{row.district_name}}</ion-option>\n\n                  </ion-select>\n\n              </ion-item>\n\n              \n\n              <ion-item class="cs-input mb0" [ngClass]="{\'error\':f.submitted && city?.invalid}">\n\n                  <ion-label floating>{{\'City\' | translate}}*</ion-label>\n\n                  <ion-input type="text" name="city" [(ngModel)]="data.city" #city="ngModel" required></ion-input>\n\n              </ion-item>\n\n              \n\n          </ion-list>\n\n      </div>\n\n  </div>\n\n          \n\n  <div class="heading line">\n\n    <p>{{\'Document Information\' | translate}}</p>\n\n</div>\n\n\n\n<div class="ragistration-fields">\n\n    <div class="cs-form">\n\n        <ion-list>\n\n            <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && document_type?.invalid}">\n\n                <ion-label>{{\'Select Document\' | translate}}</ion-label>\n\n                <ion-select name="document_type" [(ngModel)]="data.document_type" #document_type="ngModel">\n\n                    <ion-option value="Aadharcard">{{\'Aadhar card\' | translate}}</ion-option>\n\n                    <ion-option value="PanCard">{{\'Pan Card\' | translate}}</ion-option>\n\n                    <ion-option value="VoterCard">{{\'Voter Card\' | translate}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            \n\n            \n\n            <div class="upload-document" (click)="onUploadChange()">\n\n                <p *ngIf="data.document_image==\'\'"><i class="material-icons">add_circle</i><br>{{\'Upload Document\'}}</p>\n\n                <!-- <img *ngIf="data.document_image != \'\'" [src]="data.document_image" alt="" required> -->\n\n\n\n                <img src="{{ data.document_image}}" *ngIf="data.document_image != \'\'">\n\n\n\n            </div>\n\n            \n\n            \n\n            \n\n            <ion-item class="cs-input mb0 mt10" *ngIf="data.document_type==\'Adharcard\'" [ngClass]="{\'error\':f.submitted && document_no?.invalid}">\n\n                <ion-label floating>{{\'Aadhar card Number\' | translate}}*</ion-label>\n\n                <ion-input type="tel" name="document_no" #document_no="ngModel" [(ngModel)]="data.document_no" maxlength="12" minlength="12" required></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item class="cs-input mb0 mt10" *ngIf="data.document_type==\'PanCard\'" [ngClass]="{\'error\':f.submitted && document_no?.invalid}">\n\n                <ion-label floating>{{\'Pan Card Number\' | translate}}*</ion-label>\n\n                <ion-input type="text" name="document_no" #document_no="ngModel" [(ngModel)]="data.document_no" required></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item class="cs-input mb0 mt10" *ngIf="data.document_type==\'VoterCard\'" [ngClass]="{\'error\':f.submitted && document_no?.invalid}">\n\n                <ion-label floating>{{\'Voter Card Number\' | translate}}*</ion-label>\n\n                <ion-input type="text" name="document_no" #document_no="ngModel" [(ngModel)]="data.document_no" required></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</div>\n\n         \n\n          <div class="pt32 pb16">\n\n            <button [disabled]="saveFlag" ion-button full >{{ \'Save\' | translate }}</button>\n\n          </div>\n\n        </form>\n\n        \n\n        \n\n        \n\n      </div>\n\n    </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/plumberadd/plumberadd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], PlumberaddPage);
    return PlumberaddPage;
}());

//# sourceMappingURL=plumberadd.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlumberdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
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
 * Generated class for the PlumberdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlumberdetailPage = /** @class */ (function () {
    function PlumberdetailPage(navCtrl, navParams, dbService, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.karigar_detail = {};
        this.point_received = {};
        this.information = "Basic_Details";
    }
    PlumberdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlumberdetailPage');
        this.id = this.navParams.get('id');
        this.presentLoading();
        this.PlumberDetail();
    };
    PlumberdetailPage.prototype.presentLoading = function () {
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
    PlumberdetailPage.prototype.PlumberDetail = function () {
        var _this = this;
        this.dbService.post_rqst({ 'karigar_id': this.id }, 'app_karigar/karigarDetail').subscribe(function (r) {
            _this.loading.dismiss();
            _this.karigar_detail = r['karigar'];
            _this.point_received = r['point_received'];
        });
    };
    PlumberdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-plumberdetail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/plumberdetail/plumberdetail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>{{\'Plumber Profile\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<ion-toolbar class="ion-stc">\n\n    <div class="ion-tab-btn" style="margin: 5px;">\n\n        <ion-segment [(ngModel)]="information">\n\n          \n\n          <ion-segment-button  value="Basic_Details">\n\n            <span >{{ \'Basic Details\' | translate }}</span>\n\n  \n\n          </ion-segment-button>\n\n          \n\n          <ion-segment-button  value="Transaction">\n\n            <span >{{ \'Point Transaction\' | translate }}</span>\n\n\n\n          </ion-segment-button>\n\n          \n\n          \n\n        </ion-segment>\n\n      </div>\n\n    </ion-toolbar>  \n\n      <div [ngSwitch]="information" class="pl16 pr16 ">\n\n        <ng-container *ngSwitchCase="\'Basic_Details\'">\n\n          <div class="profile-container">\n\n              <div class="background-white hero"></div>\n\n              <div class="user-profile">\n\n                 \n\n                  <h2>{{karigar_detail.first_name |titlecase}}</h2>\n\n                  <h6>{{karigar_detail.type}}</h6>\n\n                  <p class="{{karigar_detail.status}}">\n\n                      {{karigar_detail.status}}\n\n                      <i class="material-icons Verified " *ngIf="karigar_detail.status ==\'Verified\'">verified_user </i>\n\n                      <i class="material-icons Pending " *ngIf="karigar_detail.status ==\'Pending\'">update</i>\n\n                      <i class="material-icons Suspect " *ngIf="karigar_detail.status ==\'Suspect\'">help</i>\n\n                      <i class="material-icons Reject " *ngIf="karigar_detail.status ==\'Reject\'">cancel</i>\n\n                  </p>\n\n                  \n\n                  <!-- <button class="edit" (click)="updateProfile()"> <i class="material-icons">edit</i></button> -->\n\n                  \n\n              </div>\n\n              \n\n              \n\n              <div class="padding16">\n\n                  <div class="profile-card">\n\n                      <div class="text-box">\n\n                          <p>{{ \'Mobile No\' | translate }}</p>\n\n                          <h6>{{karigar_detail.mobile_no}}</h6>\n\n                      </div>\n\n                      <div class="text-box" *ngIf="karigar_detail.whatsapp_mobile_no">\n\n                          <p>{{ \'Whats App Number\' | translate }}</p>\n\n                          <h6>{{karigar_detail.whatsapp_mobile_no}}</h6>\n\n                      </div>\n\n                      <div class="text-box"  >\n\n                          <p>{{ \'Email ID\' | translate }}</p>\n\n                          <h6>{{karigar_detail.email ? karigar_detail.email :\'N/A\'}}</h6>\n\n                      </div>\n\n                      <div class="text-box">\n\n                          <p>{{ \'Date of Birth\' | translate}}</p>\n\n                          <h6>{{(karigar_detail.dob !=\'\') ? (karigar_detail.dob| date:\'d MMM,y\'):(\'----\')}}</h6>\n\n                      </div>\n\n                      <!-- <div class="text-box" >\n\n                          <p>{{ \'Date of Anniversary\' | translate}}</p>\n\n                          <h6>{{(karigar_detail.doa !=\'0000-00-00\') ? (karigar_detail.doa| date:\'d MMM,y\'):(\'N/A\')}}</h6>\n\n                      </div> -->\n\n                      \n\n                      <div class="text-box">\n\n                          <p>{{ \'Address\' | translate}}</p>\n\n                          <h6>{{karigar_detail.address |titlecase}} {{karigar_detail.state |titlecase}} {{karigar_detail.district |titlecase}} {{karigar_detail.city |titlecase}} {{karigar_detail.pincode }}</h6>\n\n                      </div>\n\n                  </div>\n\n                \n\n                  \n\n                  <div class="profile-card"  *ngIf="karigar_detail.document_image && karigar_detail.document_type && karigar_detail.document_no">\n\n                      <div class="text-center">\n\n                          <h2>{{ \'Document Information\' | translate }}</h2>\n\n                      </div>\n\n                      <div class="text-box">\n\n                          <div class="doc-box">\n\n                              <img src="{{upload_url + karigar_detail.document_image}}" (click)="viewDoc()">\n\n                          </div>\n\n                      </div>\n\n                      <div class="text-box">\n\n                          <p>{{karigar_detail.document_type}}</p>\n\n                          <h6>{{karigar_detail.document_no}}</h6>\n\n                      </div>\n\n                  </div>\n\n                  \n\n                 \n\n              </div>\n\n          </div>\n\n        </ng-container>\n\n          <ng-container *ngSwitchCase="\'Transaction\'">\n\n         \n\n           \n\n                <div class="no-history" *ngIf="point_received.length == 0">\n\n                  <img src="assets/imgs/history.png">\n\n                  <p>{{\'No History\' | translate}}</p>\n\n                </div>\n\n                <div class="point-block" *ngFor="let list of point_received; let i=index" >\n\n                  <div class="point-content">\n\n                    <p>{{list.summary | translate}}</p>\n\n                    <span>{{list.date_created | date:\'d MMMM y\'}}</span>\n\n                  </div>\n\n                  <div class="pts">{{list.points}} PT</div>\n\n                </div>\n\n              \n\n              \n\n             \n\n          </ng-container>\n\n\n\n        </div>\n\n      </ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/plumberdetail/plumberdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], PlumberdetailPage);
    return PlumberdetailPage;
}());

//# sourceMappingURL=plumberdetail.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedeemTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cancelpolicy_modal_cancelpolicy_modal__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gift_gallery_gift_list_gift_list__ = __webpack_require__(73);
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
* Generated class for the RedeemTypePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var RedeemTypePage = /** @class */ (function () {
    function RedeemTypePage(navCtrl, navParams, alertCtrl, modalCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.data = {};
        this.formData = new FormData();
        console.log(navParams);
        this.walletBal = navParams.data.balance_point;
        this.redeem_point = navParams.data.redeem_point;
    }
    RedeemTypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RedeemTypePage');
        this.cashPointLimit();
    };
    RedeemTypePage.prototype.showAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    cssClass: 'close-action-sheet',
                    handler: function () {
                        // this.navCtrl.push(TransactionP age);
                    }
                }]
        });
        alert.present();
    };
    RedeemTypePage.prototype.cashPointLimit = function () {
        var _this = this;
        this.service.post_rqst({}, 'app_karigar/cash_limit')
            .subscribe(function (r) {
            console.log(r);
            _this.limit = r['cash_limit']['cash_redemption_limit'];
            console.log(_this.limit);
        });
    };
    RedeemTypePage.prototype.submit = function () {
        console.log(this.data.redeem_type);
        if (!this.data.redeem_type) {
            this.showAlert('Please select request Type');
            return;
        }
        else if (this.data.redeem_type == 'Cash') {
            if (!this.data.redeem_amount) {
                this.showAlert('Please fill redeem cash value');
                return;
            }
            else if (this.data.redeem_amount < this.limit) {
                this.showAlert('You cannot send redeem request below ' + this.limit + ' ' + 'points');
                return;
            }
            else if (this.data.redeem_amount > this.redeem_point) {
                this.showAlert('insufficient points to redeem');
                return;
            }
            var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cancelpolicy_modal_cancelpolicy_modal__["a" /* CancelpolicyModalPage */], { 'karigar_id': this.service.karigar_id, 'redeem_type': this.data.redeem_type, 'redeem_point': this.data.redeem_amount });
            contactModal.present();
            console.log('otp');
        }
        else if (this.data.redeem_type == 'gift') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__gift_gallery_gift_list_gift_list__["a" /* GiftListPage */], { 'redeem_type': this.data.redeem_type });
        }
    };
    RedeemTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-redeem-type',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/redeem-type/redeem-type.html"*/'<ion-header >\n\n  <ion-toolbar color="primary">\n\n    <ion-navbar>\n\n      <ion-title>{{ \'Redeem Request\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <div class="padding16">\n\n    <div class="card-list"> \n\n      <div class="card-content">\n\n        <img src="assets/icons/wallet.png">\n\n        <p>{{ \'Total Balance\' | translate }}</p>\n\n      </div>\n\n      <div class="points flat">\n\n        {{walletBal}}\n\n      </div>\n\n    </div>\n\n\n\n    <div class="card-list"> \n\n      <div class="card-content">\n\n        <img src="assets/icons/wallet.png">\n\n        <p>{{ \'Redeemable Points\' | translate }}</p>\n\n      </div>\n\n      <div class="points flat">\n\n        {{redeem_point}}\n\n      </div>\n\n    </div>\n\n    \n\n    \n\n    <form #f="ngForm" (ngSubmit)="f.form.valid && submit()">\n\n      \n\n      <ion-list  radio-group name="redeem_type" [(ngModel)]="data.redeem_type" #redeem_type="ngModel" >\n\n        \n\n        <h2 class="ml18">{{\'Request Type\' | translate}}</h2>\n\n        \n\n        <ion-item>\n\n          <ion-label>{{\'Gift\' | translate}}</ion-label>\n\n          <ion-radio value="gift"></ion-radio>\n\n        </ion-item>\n\n        \n\n        <ion-item>\n\n          <ion-label>{{\'Cash\' | translate}}</ion-label>\n\n          <ion-radio value="Cash"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n      \n\n      <ng-container *ngIf="data.redeem_type == \'Cash\'">\n\n        <ion-item >\n\n          <ion-label>{{\'Redeem Point\' | translate}}</ion-label>\n\n          <ion-input type="tel" placeholder="{{\'Enter Point\' | translate}}" name="redeem_amount" [(ngModel)]="data.redeem_amount" #redeem_amount="ngModel"></ion-input>\n\n        </ion-item>\n\n      </ng-container>\n\n      \n\n      \n\n      <button class="mt30" (click)="cashPointLimit()" ion-button color="primary" block  round  outline>{{\'NEXT\' | translate}}</button>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/redeem-type/redeem-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], RedeemTypePage);
    return RedeemTypePage;
}());

//# sourceMappingURL=redeem-type.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelationPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CancelationPolicyPage = /** @class */ (function () {
    function CancelationPolicyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CancelationPolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancelationPolicyPage');
    };
    CancelationPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cancelation-policy',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/cancelation-policy/cancelation-policy.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Cancelation policy</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div class="policy-text">\n\n		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, </p>\n\n		<p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/cancelation-policy/cancelation-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], CancelationPolicyPage);
    return CancelationPolicyPage;
}());

//# sourceMappingURL=cancelation-policy.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_feedback__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__receive_remark_modal_receive_remark_modal__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { InAppBrowser } from '@ionic-native/in-app-browser'



var ShippingDetailPage = /** @class */ (function () {
    function ShippingDetailPage(navCtrl, navParams, service, loadingCtrl, alertCtrl, app, modalCtrl, con, constn) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.con = con;
        this.constn = constn;
        this.karigar_gift_id = '';
        this.shipped_detail = {};
        this.gift_detail = {};
        this.gift_id = '';
        this.redeem_type = '';
        this.receive_status = '';
        this.karigar_gift = {};
        this.edit = '';
        this.giftimg = [];
        this.upload_url = '';
        this.upload_url = this.con.upload_url;
    }
    ShippingDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShippingDetailPage');
        this.upload_url = this.constn.upload_url;
        this.karigar_gift_id = this.navParams.get('id');
        this.gift_id = this.navParams.get('gift_id');
        this.redeem_type = this.navParams.get('redeem_type');
        console.log(this.redeem_type);
        this.getShippedDetail();
        this.getGiftDetail();
        this.presentLoading();
    };
    ShippingDetailPage.prototype.getShippedDetail = function () {
        var _this = this;
        this.service.post_rqst({ 'karigar_gift_id': this.karigar_gift_id }, 'app_karigar/shippedDetail').subscribe(function (r) {
            console.log(r);
            if (r['shipped'])
                _this.shipped_detail = r['shipped'];
        });
    };
    ShippingDetailPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    ShippingDetailPage.prototype.getGiftDetail = function () {
        var _this = this;
        console.log();
        this.service.post_rqst({ 'id': this.karigar_gift_id, 'gift_id': this.gift_id, 'karigar_id': this.service.karigar_id }, 'app_karigar/giftDetail').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.gift_detail = r['gift'];
            _this.giftimg = r['gift_images'];
            _this.karigar_gift = r['karigar_gift'];
            if (r['karigar_gift'] != null) {
                _this.receive_status = r['karigar_gift'].receive_status;
            }
            console.log(_this.receive_status);
            console.log(_this.gift_detail);
            _this.gift_detail.coupon_points = parseInt(_this.gift_detail.coupon_points);
        });
    };
    // recvConfirmation(gift_id, redeem_type)
    // {
    //   let alert=this.alertCtrl.create({
    //     title:'Confirmation!',
    //     subTitle: 'Did you receive this ' + redeem_type + ' ?' ,
    //     cssClass:'action-close',
    //     buttons: [{
    //       text: 'No',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text:'Yes',
    //       cssClass: 'close-action-sheet',
    //       handler:()=>
    //       {
    //         console.log(gift_id);
    //         this.service.post_rqst({'id':this.karigar_gift.id,'karigar_id':this.service.karigar_id},'app_karigar/redeemReceiveStatus').subscribe(r=>
    //           {
    //             console.log(r);
    //             this.showSuccess('You have receive ' + redeem_type  + ' successfully')
    //             // this.navCtrl.setRoot(TabsPage,{index:'3'});
    //             this.navCtrl.push(TabsPage);
    //           });
    //         }
    //       }]
    //     });
    //     alert.present();
    //   }
    ShippingDetailPage.prototype.recvConfirmation = function (gift_id, redeem_type) {
        console.log(gift_id);
        var ReceiveModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__receive_remark_modal_receive_remark_modal__["a" /* ReceiveRemarkModalPage */], { 'gift_id': gift_id, 'redeem_type': redeem_type });
        ReceiveModal.present();
    };
    ShippingDetailPage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ShippingDetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    ShippingDetailPage.prototype.goto_link = function (url) {
        console.log(url);
        //  this.InAppBrowser.create(url);
    };
    ShippingDetailPage.prototype.editAddress = function () {
        var _this = this;
        this.service.post_rqst({ 'id': this.karigar_gift.id, 'shipping_address': this.karigar_gift.shipping_address }, 'app_karigar/editAddress').subscribe(function (result) {
            if (result['status'] = 'SUCCESS')
                _this.edit = '';
            _this.showSuccess("Shipping Address Updated !");
            _this.getGiftDetail();
        });
    };
    ShippingDetailPage.prototype.openChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__feedback_feedback__["a" /* FeedbackPage */]);
    };
    ShippingDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shipping-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/shipping-detail/shipping-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <!-- <ion-title *ngIf="redeem_type == \'gift\'">{{\'Gift Request Status\' | translate}}</ion-title> -->\n\n        <ion-title>{{\'Redeem Request Detail\' | translate}}</ion-title>\n\n        \n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding *ngIf="redeem_type == \'gift\'">\n\n    \n\n    <div class="shipped-detail" >\n\n        <div class="content edit-content">\n\n            <p>{{\'Shipping address\' | translate}}</p>\n\n            <a *ngIf="!shipped_detail.shipped_type && edit==\'\' && karigar_gift.gift_status==\'Pending\'" class="edit-field" (click)="edit=\'1\'">\n\n                <i class="material-icons">create</i>\n\n            </a>\n\n            <h1 *ngIf="edit==\'\'">{{karigar_gift.shipping_address}}</h1>\n\n            <div *ngIf="edit==\'1\'">\n\n                <textarea palceholder="Shipping address" name="shipping_address " #shipping_address ="ngModel" [(ngModel)]="karigar_gift.shipping_address" ></textarea>\n\n                <button  ion-button color="success" round small  block [disabled]="karigar_gift.shipping_address==\'\'" (click)="editAddress()">Save</button>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    \n\n    \n\n    <div class="phone">\n\n        <img src="{{upload_url + gift_detail.image}}">\n\n    </div>\n\n    \n\n    <table>\n\n        <tr>\n\n            <td>{{\'Date\' | translate}}</td>\n\n            <td>{{karigar_gift.date_created | date:\'d MMM y\'}}</td>\n\n        </tr>\n\n        <tr>\n\n            <td>{{\'Req. ID\' | translate}}</td>\n\n            <td>{{karigar_gift.invoice_id}}</td>\n\n        </tr>\n\n        <tr>\n\n            <td>{{\'Gift Title\' | translate}}</td>\n\n            <td>{{karigar_gift.gift_title}}</td>\n\n        </tr>\n\n        <tr *ngIf="karigar_gift.Specification">\n\n            <td>{{\'Specification\' | translate}}</td>\n\n            <td>\n\n                <p  [innerHTML]="karigar_gift.Specification"></p>\n\n            </td>\n\n        </tr>\n\n        <tr>\n\n            <td>{{\'Points\' | translate}}</td>\n\n            <td>{{karigar_gift.gift_points}}</td>\n\n        </tr>\n\n        <tr>\n\n            <td>{{\'Redeem Type\' | translate}}</td>\n\n            <td>{{karigar_gift.redeem_type | titlecase}}</td>\n\n        </tr>\n\n        \n\n        <tr *ngIf="karigar_gift.gift_status">\n\n            <td>{{\'Redeem Status\' | translate}}</td>\n\n            <td class="{{karigar_gift.gift_status}}"><strong>{{karigar_gift.gift_status}}</strong></td>\n\n        </tr>\n\n\n\n        <tr *ngIf="karigar_gift.receive_status">\n\n            <td>{{\'Gift Status\' | translate}}</td>\n\n            <td class="{{karigar_gift.gift_status}}"><strong>{{karigar_gift.receive_status}}</strong></td>\n\n        </tr>\n\n        <tr *ngIf="karigar_gift.reject_reason">\n\n            <td>{{\'Reject Reason\' | translate}}</td>\n\n            <td >{{karigar_gift.reject_reason}}</td>\n\n        </tr>\n\n        \n\n        <ng-container *ngIf="shipped_detail.shipped_type">\n\n            <tr>\n\n                <td>{{\'Shipped by\' | translate}}</td>\n\n                <td>{{shipped_detail.shipped_type}}</td>\n\n            </tr>\n\n            <tr>\n\n                <td *ngIf="shipped_detail.estimated_date != \'0000-00-00\'">{{\'Estimate delivery Date\' | translate}}</td>\n\n                <td>{{shipped_detail.estimated_date | date:\'d MMM y\'}}</td>\n\n            </tr>\n\n            <tr>\n\n                <td>{{\'Shipping information\' | translate}}</td>\n\n                <td>\n\n                    <p [innerHTML]="shipped_detail.shipping_information" ></p>\n\n                </td>\n\n            </tr>\n\n        </ng-container>\n\n        \n\n        <tr *ngIf="karigar_gift.received_date != \'0000-00-00\'">\n\n            <td>{{\'Receive Date\' | translate}}</td>\n\n            <td>{{karigar_gift.received_date | date:\'d MMM y\'}}</td>\n\n        </tr>\n\n        \n\n        <tr *ngIf="karigar_gift.receive_remark != \'\'">\n\n            <td>{{\'Receiving Remark\' | translate}}</td>\n\n            <td>{{karigar_gift.receive_remark}}</td>\n\n        </tr>\n\n        \n\n    </table>\n\n    \n\n    <div class="padding16" *ngIf="receive_status == \'Shipped\'">\n\n        <button ion-button color="success" round  block (click)="recvConfirmation(karigar_gift.id,karigar_gift.redeem_type)">{{\'Click here if you recieve\' | translate}}</button>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-content padding *ngIf="redeem_type == \'Cash\'">\n\n    <div>\n\n        <table>\n\n            <tr>\n\n                <td>{{\'Date\' | translate}}</td>\n\n                <td>{{karigar_gift.date_created | date:\'d MMM y\'}}</td>\n\n            </tr>\n\n            <tr>\n\n                <td>{{\'Req. ID\' | translate}}</td>\n\n                <td>{{karigar_gift.invoice_id}}</td>\n\n            </tr>\n\n            <tr>\n\n                <td>{{\'Title\' | translate}}</td>\n\n                <td>{{karigar_gift.gift_title}}</td>\n\n            </tr>\n\n            <tr>\n\n                <td>{{\'Points\' | translate}}</td>\n\n                <td>{{karigar_gift.gift_points}}</td>\n\n            </tr>\n\n            <tr>\n\n                <td>{{\'Redeem Type\' | translate}}</td>\n\n                <td>{{karigar_gift.redeem_type}}</td>\n\n            </tr>\n\n            <tr *ngIf="karigar_gift.payment_type">\n\n                <td>{{\'Payment Type\' | translate}}</td>\n\n                <td>{{karigar_gift.payment_type}}</td>\n\n            </tr>\n\n            <tr *ngIf="karigar_gift.payment_number">\n\n                <td>{{\'Payment Number\' | translate}}</td>\n\n                <td>{{karigar_gift.payment_number}}</td>\n\n            </tr>\n\n            <tr *ngIf="karigar_gift.account_holder_name">\n\n                <td>{{\'Account Holder Name\' | translate}}</td>\n\n                <td>{{karigar_gift.account_holder_name}}</td>\n\n            </tr>\n\n            <tr *ngIf="karigar_gift.bank_name">\n\n                <td>{{\'Bank Name\' | translate}}</td>\n\n                <td>{{karigar_gift.bank_name}}</td>\n\n            </tr>\n\n            <tr *ngIf="karigar_gift.account_no">\n\n                <td>{{\'Account Number\' | translate}}</td>\n\n                <td>{{karigar_gift.account_no}}</td>\n\n            </tr>\n\n            <tr *ngIf="karigar_gift.ifsc_code">\n\n                <td>{{\'IFSC Code\' | translate}}</td>\n\n                <td>{{karigar_gift.ifsc_code}}</td>\n\n            </tr>\n\n            <tr *ngIf="karigar_gift.gift_status">\n\n                <td>{{\'Redeem Status\' | translate}}</td>\n\n                <td class="{{karigar_gift.gift_status}}"><strong>{{karigar_gift.gift_status}}</strong></td>\n\n            </tr>\n\n            <tr *ngIf="karigar_gift.reject_reason">\n\n                <td>{{\'Reject Reason\' | translate}}</td>\n\n                <td >{{karigar_gift.reject_reason}}</td>\n\n            </tr>\n\n            <tr  *ngIf="karigar_gift.receive_status">\n\n                <td>{{\'Payment Status\' | translate}}</td>\n\n                <td class="{{karigar_gift.gift_status}}"><strong>{{karigar_gift.receive_status}}</strong></td>\n\n            </tr>\n\n            \n\n            \n\n            <tr *ngIf="shipped_detail.estimated_date != \'0000-00-00\'">\n\n                <td>{{\'Transfer Date\' | translate}}</td>\n\n                <td>{{shipped_detail.estimated_date | date:\'d MMM y\'}}</td>\n\n            </tr>\n\n            <tr *ngIf="shipped_detail.shipping_information != \'\'">\n\n                <td>{{\'Transfer Remark\' | translate}}</td>\n\n                <td>{{shipped_detail.shipping_information}}</td>\n\n            </tr>\n\n            \n\n            <tr *ngIf="karigar_gift.received_date != \'0000-00-00\'">\n\n                <td>{{\'Receive Date\' | translate}}</td>\n\n                <td>{{karigar_gift.received_date | date:\'d MMM y\'}}</td>\n\n            </tr>\n\n            \n\n            <tr *ngIf="karigar_gift.receive_remark != \'\'">\n\n                <td>{{\'Receiving Remark\' | translate}}</td>\n\n                <td>{{karigar_gift.receive_remark}}</td>\n\n            </tr>\n\n            \n\n        </table>\n\n        \n\n        \n\n        \n\n        \n\n        <div class="padding16" *ngIf="receive_status == \'Transfer\'">\n\n            <button ion-button color="success" round  block (click)="recvConfirmation(karigar_gift.id, karigar_gift.redeem_type)">{{\'Click here if you recieve\' | translate}}</button>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/shipping-detail/shipping-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */]])
    ], ShippingDetailPage);
    return ShippingDetailPage;
}());

//# sourceMappingURL=shipping-detail.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
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
 * Generated class for the ChatingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatingPage = /** @class */ (function () {
    function ChatingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatingPage');
    };
    ChatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chating',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/chating/chating.html"*/'<!--\n\n  Generated template for the ChatingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <img src="assets/imgs/bill.jpg">\n\n            <div class="profile-text">\n\n                <h1>Trendy Trucks</h1>\n\n                <p>last seen today at 12:30</p>\n\n            </div>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="main-backgroung">\n\n    <div class="chat-main">\n\n        <div class="cs-flexright">\n\n            <div class="chat other-chat">\n\n                <p>09:11 PM</p>\n\n                <div class="content">\n\n                    <span>Gastroenteritis means \n\n						inflammation of stomach as well \n\n					as the gastrointestinal tract.</span>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="cs-flexleft">\n\n            <div class="chat">\n\n                <p>09:11 PM</p>\n\n                <div class="content">\n\n                    <span>Gastroenteritis means \n\n						inflammation of stomach as well \n\n					as the gastrointestinal tract.</span>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="cs-flexright">\n\n            <div class="chat other-chat">\n\n                <p>09:11 PM</p>\n\n                <div class="content">\n\n                    <span>Gastroenteritis means \n\n						inflammation of stomach as well \n\n					as the gastrointestinal tract.</span>\n\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class="cs-flexleft">\n\n            <div class="chat">\n\n                <p>09:11 PM</p>\n\n                <div class="content">\n\n                    <span>Gastroenteritis means \n\n						inflammation of stomach as well \n\n					as the gastrointestinal tract.</span>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n\n    </div>\n\n</ion-content>\n\n<ion-footer>\n\n    <div class="say-something">\n\n        <ion-input type="text" placeholder="Say something…" value=""></ion-input>\n\n        <i class="material-icons">arrow_forward</i>\n\n    </div>\n\n</ion-footer>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/chating/chating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], ChatingPage);
    return ChatingPage;
}());

//# sourceMappingURL=chating.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigitalcatalogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
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
 * Generated class for the DigitalcatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DigitalcatalogPage = /** @class */ (function () {
    function DigitalcatalogPage(navCtrl, navParams, con, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.con = con;
        this.dbService = dbService;
        this.pdf = [];
        this.uploadUrl = '';
        this.filter = {};
        this.flag = '';
        this.uploadUrl = con.upload_url;
        this.getpdflist();
    }
    DigitalcatalogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DigitalcatalogPage');
    };
    DigitalcatalogPage.prototype.getpdflist = function () {
        var _this = this;
        this.filter.limit = 0;
        this.dbService.post_rqst({ "login_id": this.dbService.karigar_id, "filter": this.filter }, "app_karigar/product_catalogue_list")
            .subscribe(function (r) {
            console.log(r);
            _this.pdf = r['pdf'];
        });
    };
    DigitalcatalogPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.filter.limit = this.pdf.length;
        this.dbService.post_rqst({ 'filter': this.filter, 'login_id': this.dbService.karigar_id }, 'app_karigar/product_catalogue_list')
            .subscribe(function (r) {
            console.log(r);
            if (r == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.pdf = _this.pdf.concat(r['pdf']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    DigitalcatalogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-digitalcatalog',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/digitalcatalog/digitalcatalog.html"*/'<!--\n\n  Generated template for the BillhistoryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header class="main-header remove" >\n\n  <ion-navbar>\n\n    <ion-title>{{ \'Downloads\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div class="container padding16">\n\n      \n\n      <div class="main" *ngFor="let list of pdf">\n\n        <a href="{{uploadUrl + list.pdf}}">\n\n        <div class="part1">\n\n          <img  src="assets/imgs/pdf.png" alt="#">\n\n          <span>{{list.pdf_name}} / {{list.cat_code}}</span>\n\n         \n\n        </div>\n\n        </a>  \n\n      </div>\n\n    </div>\n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)" *ngIf="flag!=1">\n\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data...">\n\n      </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/digitalcatalog/digitalcatalog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], DigitalcatalogPage);
    return DigitalcatalogPage;
}());

//# sourceMappingURL=digitalcatalog.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupan_code_coupan_code__ = __webpack_require__(111);
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
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanPage = /** @class */ (function () {
    function ScanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ScanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScanPage');
    };
    ScanPage.prototype.goOnCoupanCodePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__coupan_code_coupan_code__["a" /* CoupanCodePage */]);
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/scane-pages/scan/scan.html"*/'<!--\n\n  Generated template for the ScanePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>scan</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="scan-bg" (click)="goOnCoupanCodePage()">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/scane-pages/scan/scan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], ScanPage);
    return ScanPage;
}());

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gift_gallery_gift_list_gift_list__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_home_main_home__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transaction_transaction__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_section_mobile_login_mobile_login__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_dbservice_dbservice__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var TabsPage = /** @class */ (function () {
    function TabsPage(storage, navParams, translate, db) {
        var _this = this;
        this.storage = storage;
        this.navParams = navParams;
        this.translate = translate;
        this.db = db;
        this.index = '';
        this.tokenInfo = {};
        this.lang = "";
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__gift_gallery_gift_list_gift_list__["a" /* GiftListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__main_home_main_home__["a" /* MainHomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__transaction_transaction__["a" /* TransactionPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        this.index = this.navParams.get('index');
        storage.get('token_value').then(function (val) {
            console.log(val);
            if (val == '') {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__login_section_mobile_login_mobile_login__["a" /* MobileLoginPage */];
            }
            else {
                _this.rootPage = TabsPage_1;
            }
        });
        this.get_user_lang();
    }
    TabsPage_1 = TabsPage;
    TabsPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    TabsPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_10_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
    ], TabsPage.prototype, "nav", void 0);
    TabsPage = TabsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex= {{index}}>\n\n  <ion-tab [root]="tab1Root" tabTitle="{{\'HOME\' | translate}}" tabIcon="tab-home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="{{\'GIFT GALLERY\' | translate}}" tabIcon="tab-gift"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon="center-tab"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="{{\'HISTORY\' | translate}}" tabIcon="tab-history"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="{{\'PROFILE\' | translate}}" tabIcon="tab-profile"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_11__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], TabsPage);
    return TabsPage;
    var TabsPage_1;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advance_text_advance_text__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_notification__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_video__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_news__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__faq_faq__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MainHomePage = /** @class */ (function () {
    function MainHomePage(navCtrl, navParams, storage, translate, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.items = [
            'Advance Decorative Laminates'
        ];
        this.tokenInfo = {};
        this.lang = '';
        this.inputs = [];
    }
    MainHomePage.prototype.ionViewDidLoad = function () {
        this.get_user_lang();
        console.log('ionViewDidLoad MainHomePage');
    };
    MainHomePage.prototype.goOnAdvanceTextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__advance_text_advance_text__["a" /* AdvanceTextPage */]);
    };
    MainHomePage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    MainHomePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_9_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    MainHomePage.prototype.goOnNotificationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__notification_notification__["a" /* NotificationPage */]);
    };
    MainHomePage.prototype.goOnContactPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
    };
    MainHomePage.prototype.goOnVideoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__video_video__["a" /* VideoPage */]);
    };
    MainHomePage.prototype.goOnNewsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__news_news__["a" /* NewsPage */]);
    };
    MainHomePage.prototype.goOnfaqPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__faq_faq__["a" /* FaqPage */]);
    };
    MainHomePage.prototype.goOnlanguage = function () {
        var _this = this;
        this.inputs = [];
        this.db.get_rqst("app_karigar/get_languages")
            .subscribe(function (resp) {
            console.log(resp);
            _this.inputs = resp;
            console.log(_this.inputs);
            for (var i = 0; i < _this.inputs.length; i++) {
                _this.inputs[i]['type'] = "radio";
                _this.inputs[i]['checked'] = _this.inputs[i]['value'] == _this.lang ? true : false;
            }
            console.log(_this.inputs);
            if (_this.inputs.length > 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Choose your Language',
                    inputs: _this.inputs,
                    buttons: [
                        {
                            text: 'OK',
                            handler: function (data) {
                                console.log(data);
                                _this.lang = data;
                                _this.db.post_rqst({ "login_id": _this.tokenInfo.sub, "lang": _this.lang }, "app_karigar/change_language")
                                    .subscribe(function (resp) {
                                    console.log(resp);
                                    _this.translate.use(_this.lang);
                                });
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    MainHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-home',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/main-home/main-home.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<div class="header-logo">\n\n    <img src="assets/imgs/logo.png">\n\n</div>\n\n\n\n<ion-content padding>\n\n    <div class="list-adjust">\n\n        <ion-list>\n\n            <button ion-item (click)="goOnAdvanceTextPage()">\n\n                {{\'Advance Decorative Laminates\' | translate}}<i class="material-icons">\n\n                    keyboard_arrow_right\n\n                </i>\n\n            </button>  \n\n            <button ion-item (click)="goOnNewsPage()">\n\n                {{\'Latest News\' | translate}}<i class="material-icons">\n\n                    keyboard_arrow_right\n\n                </i>\n\n            </button>  \n\n            <button ion-item (click)="goOnVideoPage()">\n\n                {{\'Videos\' | translate}}<i class="material-icons">\n\n                    keyboard_arrow_right\n\n                </i>\n\n            </button>  \n\n            <button ion-item (click)="goOnContactPage()">\n\n                {{\'Contact Us\' | translate}}<i class="material-icons">\n\n                    keyboard_arrow_right\n\n                </i>\n\n            </button>\n\n            <button ion-item (click)="goOnfaqPage()">\n\n                {{\'FAQ\' | translate}}\n\n                <i class="material-icons">keyboard_arrow_right</i>\n\n            </button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/main-home/main-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_10__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MainHomePage);
    return MainHomePage;
}());

//# sourceMappingURL=main-home.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsDetailPage = /** @class */ (function () {
    function NewsDetailPage(navCtrl, navParams, service, loadingCtrl, app, translate, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.translate = translate;
        this.storage = storage;
        this.news_id = '';
        this.news_detail = {};
        this.lang = '';
        this.tokenInfo = {};
    }
    NewsDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsDetailPage');
        this.news_id = this.navParams.get('id');
        this.get_user_lang();
        this.getNewsDetail(this.news_id);
        this.presentLoading();
    };
    NewsDetailPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    NewsDetailPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    NewsDetailPage.prototype.getNewsDetail = function (news_id) {
        var _this = this;
        this.service.post_rqst({ 'news_id': news_id }, 'app_master/newsDetail').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.news_detail = r['news'];
        });
    };
    NewsDetailPage.prototype.presentLoading = function () {
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
    NewsDetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    NewsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/news-detail/news-detail.html"*/'\n\n<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>{{\'News Detail\' | translate}}</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<div class="fix">\n\n		<div class="pr-img">\n\n			<img src={{news_detail.image}}>\n\n		</div>\n\n	</div>\n\n	<div class="box">\n\n		<div class="date">\n\n			<span><i class="material-icons">date_range</i></span>\n\n			<p>{{news_detail.date_created |date:\'d MMM, y\'}}</p>\n\n		</div>\n\n		<div class="social">\n\n			<span><i class="material-icons">public</i></span>\n\n			<p>{{news_detail.source}}</p>\n\n		</div>\n\n	</div>\n\n	<div class="pr-about">\n\n		<h1>{{lang != \'en\' ? news_detail.hin_title : news_detail.title |titlecase}}</h1>\n\n		<p><strong>{{\'Description\' | translate}}</strong> : {{lang != \'en\' ? news_detail.hin_desc : news_detail.desc}}</p>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/news-detail/news-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], NewsDetailPage);
    return NewsDetailPage;
}());

//# sourceMappingURL=news-detail.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqAnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FaqAnswerPage = /** @class */ (function () {
    function FaqAnswerPage(navCtrl, navParams, db, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.storage = storage;
        this.translate = translate;
        this.tokenInfo = {};
        this.lang = '';
        this.data = {};
    }
    FaqAnswerPage.prototype.ionViewDidLoad = function () {
        this.data = this.navParams.get('data');
    };
    FaqAnswerPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    FaqAnswerPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    FaqAnswerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq-answer',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/faq-answer/faq-answer.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'FAQ Answer\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="faq-answer">\n\n        <div class="faq-top">\n\n            <img src="assets/imgs/question.png">\n\n            <p [innerHTML]="data.question"></p>\n\n        </div>\n\n        <div class="faq-bottom">\n\n            <img src="assets/imgs/ans.png">\n\n            <p [innerHTML]="data.answer"></p>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/faq-answer/faq-answer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], FaqAnswerPage);
    return FaqAnswerPage;
}());

//# sourceMappingURL=faq-answer.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point_detail_point_detail__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PointListPage = /** @class */ (function () {
    function PointListPage(navCtrl, navParams, service, loadingCtrl, app, storage, translate, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.coupon_list = [];
        this.company_point_transfer = [];
        this.karigar_point = {};
        this.filter = {};
        this.history = "scanned";
        this.last_scanned_date = '';
        this.tokenInfo = {};
        this.lang = '';
        this.total_balance_point = 0;
        this.flag = '';
        console.log(this.db);
        console.log(this.db.karigar_info.status);
    }
    PointListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PointListPage');
        this.getCoupanHistory();
        this.presentLoading();
        this.get_user_lang();
    };
    PointListPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getCoupanHistory();
        refresher.complete();
    };
    PointListPage.prototype.goOnPointDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__point_detail_point_detail__["a" /* PointDetailPage */], { 'id': id });
    };
    PointListPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    PointListPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    PointListPage.prototype.getCoupanHistory = function () {
        var _this = this;
        console.log('coupan');
        this.filter.limit = 0;
        this.service.post_rqst({ 'filter': this.filter, 'karigar_id': this.service.karigar_id }, 'app_karigar/couponHistory').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.coupon_list = r['coupon'];
            _this.welcomePoint = r['welcome_points'];
            _this.company_point_transfer = r['company_point_transfer'];
            _this.karigar_point = r['karigar'];
            _this.point_transfer = r['coupon'];
            _this.ref_kar = r['ref_kar'];
            _this.welcomePoint = r['welcome_points'].welcome_points;
            _this.welcomePoint_date = r['welcome_points'].date_updated;
            _this.total_balance_point = parseInt(_this.karigar_point.balance_point) + parseInt(_this.karigar_point.referal_point_balance);
            console.log(_this.total_balance_point);
        });
    };
    PointListPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    PointListPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        if (this.company_point_transfer.length) {
            this.filter.limit = this.company_point_transfer.length;
            this.service.post_rqst({ 'filter': this.filter, 'karigar_id': this.service.karigar_id }, 'app_karigar/couponHistory').subscribe(function (r) {
                console.log(r);
                if (r['company_point_transfer'] == '') {
                    _this.flag = 1;
                }
                else {
                    setTimeout(function () {
                        _this.company_point_transfer = _this.company_point_transfer.concat(r['company_point_transfer']);
                        console.log('Asyn operation has stop');
                        infiniteScroll.complete();
                    }, 1000);
                }
            });
        }
        else if (this.point_transfer.length) {
            this.filter.limit = this.point_transfer.length;
            this.service.post_rqst({ 'filter': this.filter, 'karigar_id': this.service.karigar_id }, 'app_karigar/couponHistory').subscribe(function (r) {
                console.log(r);
                if (r['coupon'] == '') {
                    _this.flag = 1;
                }
                else {
                    setTimeout(function () {
                        _this.point_transfer = _this.point_transfer.concat(r['coupon']);
                        console.log('Asyn operation has stop');
                        infiniteScroll.complete();
                    }, 1000);
                }
            });
        }
    };
    PointListPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    PointListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-point-list',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/points/point-list/point-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{\'My Points\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    \n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="{{\'Pull to refresh\' | translate}}" refreshingSpinner="circles" refreshingText="{{\'Refreshing...\' | translate}}">\n\n      </ion-refresher-content>\n\n    </ion-refresher>\n\n    \n\n    \n\n    <div class="bal-column pb30">\n\n      <p>{{\'Balance Points\' | translate}}</p>\n\n      <h2>{{total_balance_point}} <span>Pts</span></h2>\n\n      <span>{{\'Last updated\' | translate}} {{ (karigar_point.balance_update!=\'0000-00-00\') ? (karigar_point.balance_update | date:\'d MMMM y\') : (\'\') }}</span>\n\n    </div>\n\n    \n\n    <div class="ion-tab-btn" style="top: -20px;">\n\n      <ion-segment [(ngModel)]="history">\n\n        \n\n        <ion-segment-button  value="scanned">\n\n          <span *ngIf="karigar_point.user_type == 1">{{ \'Scan Points\' | translate }}</span>\n\n          <span *ngIf="karigar_point.user_type == 2">{{ \'Earn Points\' | translate }}</span>\n\n\n\n        </ion-segment-button>\n\n        \n\n        <ion-segment-button  value="referral">\n\n          <span>{{ \'Other Points\' | translate }}</span>\n\n        </ion-segment-button>\n\n        \n\n        \n\n      </ion-segment>\n\n    </div>\n\n    \n\n    <div [ngSwitch]="history" class="pl16 pr16 ">\n\n      \n\n      <ng-container *ngSwitchCase="\'scanned\'">\n\n\n\n        <ng-container *ngIf="karigar_point.user_type == 2">\n\n          <div class="no-history" *ngIf="company_point_transfer.length == 0">\n\n            <img src="assets/imgs/history.png">\n\n            <p>{{\'No History\' | translate}}</p>\n\n          </div>\n\n          <!-- (click)="goOnPointDetailPage(list.id)" -->\n\n          \n\n          <div class="point-block" *ngFor="let list of company_point_transfer; let i=index" >\n\n              <div class="point-content">\n\n                <p>{{list.summary | translate}}</p>\n\n                <span>{{list.date_created | date:\'d MMMM y\'}}</span>\n\n              </div>\n\n              <div class="pts">{{list.points}} PT</div>\n\n            </div>\n\n\n\n        </ng-container>\n\n        \n\n      \n\n          <ng-container *ngIf="karigar_point.user_type == 1">\n\n            <div class="no-history" *ngIf="point_transfer.length == 0">\n\n              <img src="assets/imgs/history.png">\n\n              <p>{{\'No History\' | translate}}</p>\n\n            </div>\n\n            <div class="point-block" *ngFor="let list of point_transfer; let i=index" >\n\n              <div class="point-content">\n\n                <p> <span style="color:#a79e9e">{{\'Coupon Code\' | translate}}:</span>{{list.coupon_code | translate}}</p>\n\n                <p> <span style="color:#a79e9e" *ngIf="list.scan_by_karigar_date !=\'0000-00-00 00:00:00\'">{{\'Scanned Date\' | translate}}:</span>{{list.scan_by_karigar_date | date:\'d MMMM y, hh:mm a\'}}</p>\n\n                <!-- <p>{{list.karigar_coupon_value | translate}}</p> -->\n\n                <!-- <span>{{list.date_created | date:\'d MMMM y\'}}</span> -->\n\n              </div>\n\n              <div class="pts">{{list.karigar_coupon_value}} PT</div>\n\n            </div>\n\n          </ng-container>\n\n          \n\n         \n\n      </ng-container>\n\n      \n\n     \n\n      \n\n      <ng-container  *ngSwitchCase="\'referral\'">\n\n        <div class="no-history" *ngIf="ref_kar.length == 0">\n\n          <img src="assets/imgs/history.png">\n\n          <p>{{\'No History\' | translate}}</p>\n\n        </div>\n\n        \n\n        <div class="point-block" *ngFor="let row of ref_kar;">\n\n          <div class="point-content">\n\n            <p>{{row.summary | translate}}</p>\n\n            <span>{{row.date_refered | date:\'d MMMM y\'}}</span>\n\n          </div>\n\n          <div class="pts">{{row.coupon_value}} PT</div>\n\n        </div>\n\n      </ng-container>\n\n\n\n     \n\n    </div>\n\n    \n\n    \n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)" *ngIf="flag!=1">\n\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n\n      </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n  </ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/points/point-list/point-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], PointListPage);
    return PointListPage;
}());

//# sourceMappingURL=point-list.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offers_offers__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PointDetailPage = /** @class */ (function () {
    function PointDetailPage(navCtrl, navParams, service, loadingCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.coupon_id = '';
        this.coupon_detail = '';
        this.offer_detail = {};
    }
    PointDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PointDetailPage');
        this.coupon_id = this.navParams.get('id');
        this.getCouponDetail(this.coupon_id);
        this.presentLoading();
    };
    PointDetailPage.prototype.getCouponDetail = function (coupon_id) {
        var _this = this;
        this.service.post_rqst({ 'coupon_id': coupon_id, 'karigar_id': this.service.karigar_id }, 'app_karigar/couponDetail').subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.coupon_detail = r['coupon'];
            _this.offer_detail = r['offer_detail'];
        });
    };
    PointDetailPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    PointDetailPage.prototype.goOnOffersPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__offers_offers__["a" /* OffersPage */], { 'id': id });
    };
    PointDetailPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    PointDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-point-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/points/point-detail/point-detail.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Points Detail</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="Product no-margin">\n\n        <button ion-item class="bg-product mb16" (click)="goOnOffersPage(offer_detail.id)">\n\n            <div class="thumbnail" style="height: inherit;">\n\n                <img src="{{offer_detail.offer_banner}}">\n\n            </div>\n\n            <div class="errow">\n\n                <div class="list-tags wthspan">\n\n                    <h1>{{offer_detail.title}}</h1>\n\n                    <p>{{offer_detail.offer_code}}</p>\n\n                </div>\n\n                <i class="material-icons">trending_flat</i>\n\n            </div>\n\n        </button>\n\n    </div>\n\n    \n\n    <div class="detail-content">\n\n        <h1>Get Point</h1>\n\n        <p>{{coupon_detail.scan_date | date:\'d MMMM y\'}}</p>\n\n        <img src="assets/imgs/gift-1.svg">\n\n        <h2>{{coupon_detail.actual_coupon_point}} Point</h2>\n\n        <h3>{{coupon_detail.coupon_code}}</h3>\n\n        <p><strong>Product Code : </strong>{{coupon_detail.product_code ? coupon_detail.product_code : \'N/A\'}}</p>\n\n        <p><strong>Finish : </strong>{{coupon_detail.finish ? coupon_detail.finish : \'N/A\'}}</p>\n\n    </div>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/points/point-detail/point-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], PointDetailPage);
    return PointDetailPage;
}());

//# sourceMappingURL=point-detail.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device_orientation__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompassPage = /** @class */ (function () {
    function CompassPage(navCtrl, navParams, deviceOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deviceOrientation = deviceOrientation;
        this.location = 0;
        this.deg = 0;
    }
    CompassPage.prototype.ionViewDidLoad = function () {
        // this.get_cur_loc();
        console.log('ionViewDidLoad CompassPage');
    };
    CompassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compass',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/compass/compass.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>compass</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="compass">\n\n        <div class="arrow"></div>\n\n        <div class="disc" [ngStyle]="{\'transform\': deg}"></div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/compass/compass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device_orientation__["a" /* DeviceOrientation */]])
    ], CompassPage);
    return CompassPage;
}());

//# sourceMappingURL=compass.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__description_model_description_model__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_product_filter_product__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { ViewProfilePage } from '../view-profile/view-profile';


var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, service, con, loadingCtrl, app, modalCtrl, translate, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.con = con;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.storage = storage;
        this.prod_cat_list = [];
        this.filter = {};
        this.flag = '';
        this.cat_images = [];
        this.lang = '';
        this.tokenInfo = {};
        this.uploadUrl = "";
    }
    ProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
        this.get_user_lang();
        this.uploadUrl = this.con.upload_url;
    };
    ProductsPage.prototype.ionViewWillEnter = function () {
        this.getProductCategoryList();
        this.presentLoading();
    };
    ProductsPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    ProductsPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ProductsPage.prototype.goOnProductDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__["a" /* ProductDetailPage */], { 'id': id });
    };
    ProductsPage.prototype.getProductCategoryList = function () {
        var _this = this;
        console.log('catagorylist');
        this.filter.limit = 0;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/categoryList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.prod_cat_list = r['categories'];
        });
    };
    ProductsPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.prod_cat_list.length;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/categoryList')
            .subscribe(function (r) {
            console.log(r);
            if (r['categories'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.prod_cat_list = _this.prod_cat_list.concat(r['categories']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    ProductsPage.prototype.presentLoading = function () {
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
    ProductsPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    ProductsPage.prototype.view_description = function (value, id) {
        console.log(value);
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__description_model_description_model__["a" /* DescriptionModelPage */], { 'description': value, 'id': id });
        contactModal.present();
        console.log('otp');
    };
    ProductsPage.prototype.getProductList = function (search) {
        var _this = this;
        console.log(search);
        this.filter.search = search;
        // this.filter.limit = 0;
        // this.filter.id=id;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/categoryList')
            .subscribe(function (r) {
            console.log(r);
            _this.prod_cat_list = r['categories'];
            // this.new_arrival_prod_list=r['category_name'];
        });
    };
    ProductsPage.prototype.gotoProductFilterPage = function (search) {
        console.log("clicked View Products");
        console.log(search);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__filter_product_filter_product__["a" /* FilterProductPage */], { 'search': search });
        // this.filter.type=2;
        // this.service.post_rqst({'filter':search},'app_master/productList').subscribe(r=>{
        //     console.log(r);
        // })
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/products/products.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'Products\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="fix" style="margin-top:40px">\n\n        <div class="search">\n\n            <ion-searchbar type=\'text\' placeholder="{{\'Search\' | translate}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" \n\n            (ngModelChange)="getProductList(filter.search)"></ion-searchbar>\n\n        </div>\n\n        <!-- <div class="link-btn">\n\n            <a (click)="gotoProductFilterPage(filter.search)">View Product</a>\n\n        </div> -->\n\n    </div>\n\n    <div class="Product grid-list" >\n\n        <div ion-item class="bg-product" (click)="goOnProductDetailPage(list.id)" *ngFor="let list of prod_cat_list; let i=index">\n\n            <div class="thumbnail">\n\n                <ion-slides class="cs-slide" pager autoplay="1000" speed="1000" loop="true" *ngIf="list.image && list.image.length>2" >\n\n                    <ion-slide *ngFor="let image of list.image; let i=index">\n\n                        <img [src]="uploadUrl+image.image_name">\n\n                    </ion-slide>\n\n                </ion-slides>\n\n                <div *ngIf=" list.image.length==1">\n\n                        <img [src]="uploadUrl+list.image[0].image_name">\n\n                </div>\n\n            </div>\n\n            \n\n            <div class="errow">\n\n                <!-- For Hindi -->\n\n                <!-- {{lang !=\'en\' ? list.hin_category_name : list.category_name |titlecase}} -->\n\n                <p >{{list.category_name |titlecase}}</p>\n\n                <i  (click)="goOnProductDetailPage(list.id)" class="material-icons">trending_flat</i>\n\n                \n\n                <!-- <p class="view-btn" *ngIf="list.description" (click)="view_description(lang !=\'en\' ? list.hin_description : list.description, \'category description\')">{{\'View Description\' | translate}}</p> -->\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n    <!-- <div class="bg-outer padding0">\n\n        <div class="bg-inner">\n\n            <div class="head">\n\n                <h2>Related Products</h2>\n\n            </div>\n\n            <div class="carousel sm-label-font">\n\n    \n\n                <div class="carousel-item">\n\n                      <img src="https://www.logaster.com/blog/wp-content/uploads/2020/04/banner-example-2.jpg" alt="">\n\n                      <label>Toyzone My Little Kitchen</label>\n\n                      <label>Toyzone My Little Kitchen</label>\n\n                    </div>\n\n                    \n\n                    <div class="carousel-item">\n\n                      <img src="https://www.logaster.com/blog/wp-content/uploads/2020/04/banner-example-2.jpg" alt="">\n\n                      <label>Toyzone 4 in 1 My School Desk</label>\n\n                    </div>\n\n                    \n\n                    <div class="carousel-item">\n\n                      <img src="https://www.logaster.com/blog/wp-content/uploads/2020/04/banner-example-2.jpg" alt="">\n\n                      <label>Intex Fancy Stars Pool Set With Ball & Ring (Multicolor)</label>\n\n                    </div>\n\n                    \n\n                    <div class="carousel-item">\n\n                      <img src="https://www.logaster.com/blog/wp-content/uploads/2020/04/banner-example-2.jpg" alt="">\n\n                      <label>Intex Arm Band</label>\n\n                    </div> \n\n    \n\n            </div>\n\n        </div>\n\n    </div> -->\n\n    \n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n\n        <ion-infinite-scroll-content\n\n        loadingSpinner="bubbles"\n\n        loadingText="{{\'Loading more data...\' | translate}}">\n\n    </ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/products/products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionModelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ViewProfilePage } from '../view-profile/view-profile';


var DescriptionModelPage = /** @class */ (function () {
    function DescriptionModelPage(navCtrl, navParams, loadingCtrl, viewCtrl, translate, storage, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.storage = storage;
        this.service = service;
        this.description = '';
        this.description_id = '';
        this.lang = '';
        this.tokenInfo = {};
    }
    DescriptionModelPage.prototype.ionViewDidLoad = function () {
        this.description = this.navParams.get('description');
        console.log(this.description);
        this.description_id = this.navParams.get('id');
        console.log(this.description_id);
        this.get_user_lang();
    };
    DescriptionModelPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    DescriptionModelPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    DescriptionModelPage.prototype.ionViewDidLeave = function () {
        console.log('leave');
    };
    DescriptionModelPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    DescriptionModelPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    DescriptionModelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-description-model',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/description-model/description-model.html"*/'\n\n\n\n<ion-content padding class="popup-modal" style="background: rgba(0, 0, 0, 0.5);">\n\n  \n\n  <div class="modal-center">\n\n    <!-- <div class="modal-body">\n\n      <div class="heading">\n\n        Description\n\n        <a (click)="dismiss()" class="close"><i class="material-icons">clear</i></a>	\n\n      </div>\n\n      <p>{{description}}</p>\n\n    </div>\n\n    \n\n     -->\n\n    <div class="modal-content in-modal">\n\n      <h1> {{\'Description\' | translate}}</h1>\n\n      <a (click)="dismiss()" class="close"><i class="material-icons">clear</i></a>	\n\n      <p [innerHTML]="description"></p>\n\n      \n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/description-model/description-model.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], DescriptionModelPage);
    return DescriptionModelPage;
}());

//# sourceMappingURL=description-model.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_subdetail_product_subdetail__ = __webpack_require__(165);
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
 * Generated class for the FilterProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterProductPage = /** @class */ (function () {
    function FilterProductPage(navCtrl, navParams, service, con, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.con = con;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.search = '';
        this.filter = {};
        this.upload_url = '';
        this.prod_list = [];
        this.presentLoading();
    }
    FilterProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterProductPage');
        this.search = this.navParams.get('search');
        console.log(this.search);
        this.upload_url = this.con.upload_url;
        this.filterProduct();
    };
    FilterProductPage.prototype.filterProduct = function () {
        var _this = this;
        console.log("Api called");
        this.filter.search = this.search;
        if (this.search != undefined) {
            this.service.post_rqst({ 'filter': this.filter }, 'app_master/searchList').subscribe(function (r) {
                console.log(r);
                _this.prod_list = r['products'];
                _this.loading.dismiss();
            });
        }
        else {
            this.loading.dismiss();
        }
    };
    FilterProductPage.prototype.goOnProductSubDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_subdetail_product_subdetail__["a" /* ProductSubdetailPage */], { 'id': id });
    };
    FilterProductPage.prototype.presentLoading = function () {
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
    FilterProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter-product',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/filter-product/filter-product.html"*/'<!--\n\n  Generated template for the FilterProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Searched Product List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="image-detail" *ngIf="search==undefined">\n\n    <img src="assets/imgs/no_found.svg">\n\n  </div>\n\n  <div *ngIf="search!=\'\'">\n\n    <div class="pr-list" (click)="goOnProductSubDetailPage(list.id)" *ngFor="let list of prod_list;let i=index">\n\n      <button ion-item>\n\n    <div class="main-bx">\n\n      <div class="bx-left">\n\n        <img src={{upload_url+list.image_name}}>\n\n      </div>\n\n      <div class="bx-right">\n\n        <h2>{{list.product_name |titlecase}}</h2>\n\n        <h2>Code : {{list.product_code |titlecase}}</h2>\n\n      </div>\n\n    </div>  \n\n    <i class="material-icons">trending_flat</i>\n\n  </button>\n\n  </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/filter-product/filter-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], FilterProductPage);
    return FilterProductPage;
}());

//# sourceMappingURL=filter-product.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkingSitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__site_popover_site_popover__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_profile_view_profile__ = __webpack_require__(50);
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
* Generated class for the WorkingSitePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var WorkingSitePage = /** @class */ (function () {
    function WorkingSitePage(navCtrl, popoverCtrl, navParams, actionSheetController, translate, camera, db, storage, loadingCtrl, transfer, constant, modalCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.actionSheetController = actionSheetController;
        this.translate = translate;
        this.camera = camera;
        this.db = db;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.constant = constant;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.lang = "en";
        this.data = {};
        this.karigar_id = '';
        this.tokenInfo = {};
        this.formdata = new FormData();
        this.cam = "";
        this.gal = "";
        this.cancl = "";
        this.ok = "";
        this.upl_file = "";
        this.save_succ = "";
        this.image = '';
        this.image_list = [];
        this.inserted_id = '';
        this.delete_array = [];
        this.action = '';
        this.del_per = false;
        this.get_user_lang();
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        console.log(this.db.tokenInfo);
        this.storage.get('token')
            .then(function (resp) {
            console.log(__WEBPACK_IMPORTED_MODULE_7_jwt_decode__(resp));
            var tokendata = __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(resp);
            _this.karigar_id = tokendata.sub;
            _this.get_siteImages();
        });
    }
    WorkingSitePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WorkingSitePage');
        this.translate.get("Camera")
            .subscribe(function (resp) {
            _this.cam = resp;
        });
        this.translate.get("Gallery")
            .subscribe(function (resp) {
            _this.gal = resp;
        });
        this.translate.get("Cancel")
            .subscribe(function (resp) {
            _this.cancl = resp;
        });
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.translate.get("Upload File")
            .subscribe(function (resp) {
            _this.upl_file = resp;
        });
        this.translate.get("Registered Successfully")
            .subscribe(function (resp) {
            _this.save_succ = resp;
        });
    };
    WorkingSitePage.prototype.get_siteImages = function () {
        var _this = this;
        this.presentLoading();
        this.db.post_rqst({ "karigar_id": this.karigar_id }, "app_karigar/get_site_pics")
            .subscribe(function (resp) {
            console.log(resp);
            _this.loading.dismiss();
            _this.image_list = resp['site_image'];
        });
    };
    WorkingSitePage.prototype.open_camera = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Select An Option",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takePhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    WorkingSitePage.prototype.takePhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 800,
            targetHeight: 700
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.image);
            _this.save_picture();
        });
    };
    WorkingSitePage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.image = 'data:image/jpeg;base64,' + imageData;
            _this.formdata.append("image", _this.image);
            console.log(_this.image);
            _this.save_picture();
        });
    };
    WorkingSitePage.prototype.save_picture = function () {
        var _this = this;
        this.db.post_rqst({ "karigar_id": this.karigar_id }, "app_karigar/saveSitePicture")
            .subscribe(function (resp) {
            console.log(resp);
            _this.inserted_id = resp['inserted_id'];
            _this.formdata.append("last_id", _this.inserted_id);
            if (_this.formdata) {
                var loader_1 = _this.loadingCtrl.create({
                    content: "Uploading..."
                });
                loader_1.present();
                var fileTransfer = _this.transfer.create();
                var random = Math.floor(Math.random() * 100);
                var options = {
                    fileKey: 'photo',
                    fileName: "myImage_" + random + ".jpg",
                    chunkedMode: false,
                    mimeType: "image/jpeg",
                };
                fileTransfer.upload(_this.image, _this.constant.rootUrl + 'woking_site_pics?id=' + _this.inserted_id, options)
                    .then(function (data) {
                    console.log(data);
                    loader_1.dismiss();
                    _this.get_siteImages();
                });
            }
        });
    };
    WorkingSitePage.prototype.ngOnInit = function () {
    };
    WorkingSitePage.prototype.filter_array = function (args) {
        var _this = this;
        this.delete_array = [];
        this.image_list.forEach(function (element) {
            console.log(element);
            element.site_images.forEach(function (row) {
                if (args == 'selectAll') {
                    row.checked = true;
                }
                if (args == 'delete') {
                    if (row.checked && row.checked == true) {
                        _this.delete_array.push(row);
                    }
                }
            });
        });
        if (args == 'selectAll') {
            this.del_per = true;
        }
    };
    WorkingSitePage.prototype.presentPopover = function () {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__site_popover_site_popover__["a" /* SitePopoverPage */], {
            data: this.action,
            delete: this.del_per
        });
        popover.present();
        popover.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                _this.action = data;
            }
            console.log(_this.action);
            if (_this.action == 'Select All') {
                _this.filter_array('selectAll');
            }
            if (_this.action == 'Deselect') {
                _this.action = '';
                _this.del_per = false;
            }
            if (_this.action == "Delete") {
                _this.filter_array('delete');
                console.log(_this.image_list);
                console.log(_this.delete_array);
                var updateAlert = _this.alertCtrl.create({
                    title: 'Delete',
                    message: 'Are you sure,want to delete this!',
                    buttons: [
                        {
                            text: 'No',
                            handler: function () {
                                _this.action = 'Select';
                            }
                        },
                        {
                            text: 'Yes',
                            handler: function () {
                                console.log(_this.delete_array);
                                _this.db.post_rqst({ "data": _this.delete_array }, "app_karigar/delete_site_pics")
                                    .subscribe(function (resp) {
                                    console.log(resp);
                                    _this.get_siteImages();
                                });
                            }
                        }
                    ]
                });
                updateAlert.present();
            }
        });
    };
    WorkingSitePage.prototype.viewDetail = function (image) {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": image }).present();
    };
    WorkingSitePage.prototype.presentLoading = function () {
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
    WorkingSitePage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    WorkingSitePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_7_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    WorkingSitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-working-site',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/working-site/working-site.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'Working Site\' | translate}}</ion-title>\n\n        <div class="header-icons">\n\n            <button *ngIf="image_list.length > 0" ion-button class="cs-hdr-icons mr5" (click)="presentPopover()">\n\n                <i class="material-icons">more_vert</i>\n\n            </button>\n\n        </div>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-backgroung">\n\n    <div class="gal-div" *ngFor="let row of image_list">\n\n        <div class="border-section">\n\n            <p>{{row.date_created | date:\'d MMM y\'}}</p>\n\n        </div>\n\n        <div class="site-gallery">\n\n            <label *ngFor="let data of row.site_images;let i=index">\n\n                <div class="st-box" *ngIf="data.image_name">\n\n                    <img src="{{db.constant.upload_url+data.image_name}}" (click)="action == \'Select\' || action == \'Select All\' ? \'\' : viewDetail(data.image_name)">\n\n                    \n\n                    <input *ngIf="action == \'Select\' || action == \'Select All\'" type="checkbox" (click)="del_per = true" name="checked{{i}}" [(ngModel)]="data.checked">\n\n                    \n\n                    <a *ngIf="action == \'Select\' || action == \'Select All\'" class="zoom-image" (click)="viewDetail(data.image_name)"><i class="material-icons">zoom_out_map</i></a>\n\n                </div>\n\n            </label>\n\n        </div>\n\n    </div>\n\n    <ion-fab class="fab-btn" bottom right edge>\n\n        <button ion-fab mini (click)="open_camera()"><i class="material-icons">camera_alt</i></button>\n\n    </ion-fab>\n\n    \n\n    <div class="image-detail" *ngIf="image_list.length == 0">\n\n        <img src="assets/imgs/no_found.svg">\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/working-site/working-site.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], WorkingSitePage);
    return WorkingSitePage;
}());

//# sourceMappingURL=working-site.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitePopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
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
* Generated class for the SitePopoverPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var SitePopoverPage = /** @class */ (function () {
    function SitePopoverPage(navCtrl, navParams, popoverCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.action = '';
        this.del_per = '';
    }
    SitePopoverPage.prototype.ionViewDidLoad = function () {
        this.action = this.navParams.get('data');
        this.del_per = this.navParams.get('delete');
        console.log(this.action);
        console.log(this.del_per);
        console.log('ionViewDidLoad SitePopoverPage');
    };
    SitePopoverPage.prototype.select_opt = function (args) {
        this.action = args;
        this.viewCtrl.dismiss(this.action);
    };
    SitePopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-site-popover',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/site-popover/site-popover.html"*/'<ion-content>\n\n  <div class="Selection-delete">\n\n    <p *ngIf="!action" (click)="select_opt(\'Select\')">Select</p>\n\n    <p *ngIf="action && !del_per" (click)="select_opt(\'Select All\')">Select All</p>\n\n    <p *ngIf="del_per" (click)="select_opt(\'Deselect\')">Deselect</p>\n\n    <p *ngIf="action && del_per" (click)="select_opt(\'Delete\')">Delete</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/site-popover/site-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], SitePopoverPage);
    return SitePopoverPage;
}());

//# sourceMappingURL=site-popover.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrivalProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__arrival_detail_arrival_detail__ = __webpack_require__(284);
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
 * Generated class for the ArrivalProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArrivalProductPage = /** @class */ (function () {
    function ArrivalProductPage(navCtrl, navParams, service, translate, con) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translate = translate;
        this.con = con;
        this.new_arrival_prod_list = [];
        this.upload_url = '';
        this.filter = {};
        this.cat_id = '';
    }
    ArrivalProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArrivalProductPage');
        this.cat_id = this.navParams.get('id');
        console.log(this.cat_id);
        this.get_new_arrival_product();
        // this.getProductList(this.cat_id,'');
        this.upload_url = this.con.upload_url;
    };
    ArrivalProductPage.prototype.get_new_arrival_product = function () {
        var _this = this;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/newArrival')
            .subscribe(function (r) {
            console.log(r);
            _this.new_arrival_prod_list = r['products'];
            console.log(_this.new_arrival_prod_list);
        });
    };
    ArrivalProductPage.prototype.getProductList = function (search) {
        var _this = this;
        console.log(search);
        this.filter.search = search;
        // this.filter.limit = 0;
        // this.filter.id=id;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/newArrival')
            .subscribe(function (r) {
            console.log(r);
            _this.new_arrival_prod_list = r['products'];
            // this.new_arrival_prod_list=r['category_name'];
        });
    };
    ArrivalProductPage.prototype.goOnArrivalProductDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__arrival_detail_arrival_detail__["a" /* ArrivalDetailPage */], { 'id': id });
    };
    ArrivalProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-arrival-product',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/arrival-product/arrival-product.html"*/'<!--\n\n  Generated template for the ArrivalProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'New Arrival Products\'}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="fix" style="margin-top:40px">\n\n      <div class="search">\n\n          <ion-searchbar type=\'text\' placeholder="{{\'Search\'}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" \n\n          (ngModelChange)="getProductList(filter.search)"></ion-searchbar>\n\n      </div>\n\n  </div>\n\n  <div class="pr-list"  (click)="goOnArrivalProductDetailPage(list.id)" *ngFor="let list of new_arrival_prod_list;let i=index">\n\n      <button ion-item>\n\n    <div class="main-bx">\n\n      <div class="bx-left">\n\n        <img src={{upload_url+list.image_name}}>\n\n      </div>\n\n      <div class="bx-right">\n\n        <!-- For Hindi -->\n\n        <!-- {{lang != \'en\' ? list.hin_product_name : list.product_name |titlecase}} -->\n\n        <h2>{{list.product_name}}</h2>\n\n        <h2>{{list.product_code}}</h2>\n\n\n\n      </div>\n\n    </div>  \n\n    <i class="material-icons">trending_flat</i>\n\n  </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/arrival-product/arrival-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__["a" /* ConstantProvider */]])
    ], ArrivalProductPage);
    return ArrivalProductPage;
}());

//# sourceMappingURL=arrival-product.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrivalDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__ = __webpack_require__(50);
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
 * Generated class for the ArrivalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArrivalDetailPage = /** @class */ (function () {
    function ArrivalDetailPage(navCtrl, navParams, service, translate, con, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translate = translate;
        this.con = con;
        this.modalCtrl = modalCtrl;
        this.upload_url = "";
        this.arrival_prod_id = '';
        this.arrival_prod_detail = {};
    }
    ArrivalDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArrivalDetailPage');
        this.arrival_prod_id = this.navParams.get('id');
        console.log(this.arrival_prod_id);
        this.getArrivalProductDetail(this.arrival_prod_id);
        this.upload_url = this.con.upload_url;
    };
    ArrivalDetailPage.prototype.getArrivalProductDetail = function (id) {
        var _this = this;
        this.service.post_rqst({ 'product_id': id }, 'app_master/productDetail')
            .subscribe(function (r) {
            console.log(r);
            _this.arrival_prod_detail = r['product'];
            console.log(_this.arrival_prod_detail);
        });
    };
    ArrivalDetailPage.prototype.viewDetail = function (image) {
        console.log("clicked");
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": image }).present();
    };
    ArrivalDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-arrival-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/arrival-detail/arrival-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'New Arrival Product Details\'}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="slide-image h200">\n\n      <!-- <ion-slides class="cs-slide" *ngIf="arrival_prod_detail.image" [initialSlide]="0" pager autoplay="1000" speed="1000" loop="true">\n\n          <ion-slide *ngFor="let row of arrival_prod_detail.image; let i=index" (click)="viewDetail(row.image_name)">\n\n              <div class="swiper-zoom-container">\n\n                  <img [src]="upload_url+row.image_name">\n\n              </div>\n\n          </ion-slide>\n\n      </ion-slides> -->\n\n      <div class="swiper-zoom-container" *ngIf="arrival_prod_detail.image">\n\n        <img [src]="upload_url+arrival_prod_detail.image[0].image_name">\n\n      </div>\n\n  </div>\n\n\n\n  <div class="item-table">\n\n    <table>\n\n      <tr>\n\n        <td class="w85">Category</td>\n\n        <th>{{arrival_prod_detail.category_name}}</th>\n\n      </tr>\n\n      <tr>\n\n        <td class="w85">Name</td>\n\n        <th>{{arrival_prod_detail.product_name | titlecase}}</th>\n\n      </tr>\n\n    \n\n      <tr *ngIf="arrival_prod_detail.desc!=\'\'">\n\n        <td class="w85">Description</td>\n\n        <th>{{arrival_prod_detail.desc}}</th>\n\n      </tr>\n\n      \n\n    </table>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/arrival-detail/arrival-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], ArrivalDetailPage);
    return ArrivalDetailPage;
}());

//# sourceMappingURL=arrival-detail.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offer_product_detail_offer_product_detail__ = __webpack_require__(286);
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
 * Generated class for the OfferProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferProductPage = /** @class */ (function () {
    function OfferProductPage(navCtrl, navParams, service, translate, con) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translate = translate;
        this.con = con;
        this.offer_prod_list = [];
        this.upload_url = '';
        this.filter = {};
    }
    OfferProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfferProductPage');
        this.get_offer_products();
        this.upload_url = this.con.upload_url;
    };
    OfferProductPage.prototype.get_offer_products = function () {
        var _this = this;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/offerProduct')
            .subscribe(function (r) {
            console.log(r);
            _this.offer_prod_list = r['products'];
            console.log(_this.offer_prod_list);
        });
    };
    OfferProductPage.prototype.goOnOfferProductDetailPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offer_product_detail_offer_product_detail__["a" /* OfferProductDetailPage */], { 'id': id });
    };
    OfferProductPage.prototype.getProductList = function (search) {
        var _this = this;
        console.log(search);
        this.filter.search = search;
        // this.filter.limit = 0;
        // this.filter.id=id;
        this.service.post_rqst({ 'filter': this.filter }, 'app_master/offerProduct')
            .subscribe(function (r) {
            console.log(r);
            _this.offer_prod_list = r['products'];
            // this.new_arrival_prod_list=r['category_name'];
        });
    };
    OfferProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-product',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/offer-product/offer-product.html"*/'<!--\n\n  Generated template for the OfferProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'Offer Products\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="fix" style="margin-top:40px">\n\n      <div class="search">\n\n          <ion-searchbar type=\'text\' placeholder="{{\'Search\' | translate}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" \n\n          (ngModelChange)="getProductList(filter.search)"></ion-searchbar>\n\n      </div>\n\n  </div>\n\n  <div class="pr-list"  (click)="goOnOfferProductDetailPage(list.id)" *ngFor="let list of offer_prod_list;let i=index">\n\n      <button ion-item>\n\n    <div class="main-bx">\n\n      <div class="bx-left">\n\n        <img src={{upload_url+list.image_name}}>\n\n      </div>\n\n      <div class="bx-right">\n\n        <!-- For Hindi -->\n\n        <!-- {{lang != \'en\' ? list.hin_product_name : list.product_name |titlecase}} -->\n\n        <h2>{{list.product_name}}</h2>\n\n        <h2>{{list.product_code}}</h2>\n\n\n\n      </div>\n\n    </div>  \n\n    <i class="material-icons">trending_flat</i>\n\n  </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/offer-product/offer-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */]])
    ], OfferProductPage);
    return OfferProductPage;
}());

//# sourceMappingURL=offer-product.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__ = __webpack_require__(50);
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
 * Generated class for the OfferProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferProductDetailPage = /** @class */ (function () {
    function OfferProductDetailPage(navCtrl, navParams, service, translate, con, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.translate = translate;
        this.con = con;
        this.modalCtrl = modalCtrl;
        this.offer_detail_prod_id = '';
        this.upload_url = "";
        this.offer_prod_detail = {};
    }
    OfferProductDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfferProductDetailPage');
        this.offer_detail_prod_id = this.navParams.get('id');
        console.log(this.offer_detail_prod_id);
        this.getOfferProductDetail(this.offer_detail_prod_id);
        this.upload_url = this.con.upload_url;
    };
    OfferProductDetailPage.prototype.getOfferProductDetail = function (id) {
        var _this = this;
        this.service.post_rqst({ 'product_id': id }, 'app_master/productDetail')
            .subscribe(function (r) {
            console.log(r);
            _this.offer_prod_detail = r['product'];
            console.log(_this.offer_prod_detail);
        });
    };
    OfferProductDetailPage.prototype.viewDetail = function (image) {
        console.log("clicked");
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": image }).present();
    };
    OfferProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-product-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/offer-product-detail/offer-product-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'Offer Product Details\'}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <div class="slide-image h200">\n\n    <!-- <ion-slides class="cs-slide" *ngIf="offer_prod_detail.image" [initialSlide]="0" pager autoplay="1000" speed="1000" loop="true">\n\n      <ion-slide *ngFor="let row of offer_prod_detail.image; let i=index" (click)="viewDetail(row.image_name)">\n\n        <div class="swiper-zoom-container">\n\n          <img [src]="upload_url+row.image_name">\n\n        </div>\n\n      </ion-slide>\n\n    </ion-slides> -->\n\n    <div class="swiper-zoom-container" *ngIf="offer_prod_detail.image">\n\n      <img [src]="upload_url+offer_prod_detail.image[0].image_name">\n\n    </div>\n\n  </div>\n\n  \n\n  <div class="item-table">\n\n    <table>\n\n      <tr>\n\n        <td class="w85">Category</td>\n\n        <th>{{offer_prod_detail.category_name}}</th>\n\n      </tr>\n\n      <tr>\n\n        <td class="w85">Name</td>\n\n        <th>{{offer_prod_detail.product_name | titlecase}}</th>\n\n      </tr>\n\n      <tr *ngIf="offer_prod_detail.desc!=\'\'">\n\n        <td class="w85">Description</td>\n\n        <th>{{offer_prod_detail.desc}}</th>\n\n      </tr>\n\n      <!-- <tr>\n\n        <td class="w85">Karigar Point</td>\n\n        <th>{{offer_prod_detail.karigar_point}}</th>\n\n      </tr> -->\n\n     \n\n    </table>\n\n  </div>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/offer-product-detail/offer-product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */]])
    ], OfferProductDetailPage);
    return OfferProductDetailPage;
}());

//# sourceMappingURL=offer-product-detail.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractorAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contractor_list_contractor_list__ = __webpack_require__(166);
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
* Generated class for the ContractorAddPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ContractorAddPage = /** @class */ (function () {
    function ContractorAddPage(navCtrl, navParams, camera, actionSheetController, toastCtrl, dbService, loadingCtrl, translate) {
        // this.dbService.karigar_id;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.toastCtrl = toastCtrl;
        this.dbService = dbService;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.conData = {};
        this.conData1 = {};
        this.today_date = {};
        this.contractorData = [];
        this.flag = '';
        this.pointValue = {};
        this.saveFlag = false;
        this.cam = "";
        this.gal = "";
        this.cancl = "";
        this.ok = "";
        this.upl_file = "";
        this.save_succ = "";
        this.karigar_detail = {};
        this.category = [];
        this.product_code = [];
        this.product_size = [];
        this.image_data = [];
        // filter:any={};
        this.distributor_list = [];
        this.today_date = new Date().toISOString().slice(0, 10);
    }
    ContractorAddPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getData();
        this.getCategory();
        this.getProduct();
        this.translate.get("Camera")
            .subscribe(function (resp) {
            _this.cam = resp;
        });
        this.translate.get("Gallery")
            .subscribe(function (resp) {
            _this.gal = resp;
        });
        this.translate.get("Cancel")
            .subscribe(function (resp) {
            _this.cancl = resp;
        });
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.translate.get("Upload File")
            .subscribe(function (resp) {
            _this.upl_file = resp;
        });
    };
    ContractorAddPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Delete successfully',
            duration: 3000
        });
        toast.present();
    };
    ContractorAddPage.prototype.getData = function () {
        var _this = this;
        console.log("Check");
        this.dbService.post_rqst({ 'karigar_id': this.dbService.karigar_id }, 'app_karigar/karigarHome')
            .subscribe(function (r) {
            console.log(r);
            _this.karigar_detail = r['karigar'];
            _this.state = _this.karigar_detail.state;
            console.log(_this.state);
            _this.distributorList();
            console.log(_this.karigar_detail.state);
        });
    };
    ContractorAddPage.prototype.presentLoading = function () {
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
    ContractorAddPage.prototype.getCategory = function () {
        var _this = this;
        this.dbService.get_rqst('app_karigar/getCategory')
            .subscribe(function (d) {
            console.log(d);
            _this.category = d.category;
            console.log(_this.category);
        });
    };
    ContractorAddPage.prototype.getProduct = function () {
        // let id
        // id = val.id
        // console.log(id);
        var _this = this;
        // this.conData1.product_point_group = val.product_point_group;
        this.dbService.post_rqst({}, 'app_karigar/get_product?page=').subscribe(function (r) {
            console.log(r);
            _this.product_code = r['productData'];
            console.log(_this.product_code);
        });
    };
    ContractorAddPage.prototype.getSize = function (val) {
        var _this = this;
        var id;
        id = val.id;
        this.conData1.product_name = val.product_name;
        this.dbService.post_rqst({ 'product_id': id }, 'app_karigar/coupon_product_size?page=').subscribe(function (r) {
            console.log(r);
            _this.product_size = r['product_sizes'];
        });
    };
    // let getData
    // getData = this.product_code.filter( x => x.id==event.value)[0];
    ContractorAddPage.prototype.getpoint = function (point) {
        console.log(point);
        this.pointValue = point;
        console.log(this.pointValue);
    };
    ContractorAddPage.prototype.addItem = function () {
        var val = JSON.parse(JSON.stringify(this.conData1));
        console.log(val);
        if (this.conData1.product_point_group != '' && this.conData1.qty != '') {
            this.contractorData.push(val);
        }
        console.log(this.contractorData);
        this.conData1.product_point_group = '';
        this.conData1.qty = '';
        // this.conData1.bill_no='';
        // this.conData1.bill_date='';
        // this.conData1.bill_amount='';
    };
    ContractorAddPage.prototype.totalPoint = function (event) {
        console.log(event);
        this.conData1.totalPoint = event * this.pointValue;
        console.log(this.conData1.totalPoint);
    };
    ContractorAddPage.prototype.deleteItem = function (i) {
        this.contractorData.splice(i, 1);
        this.presentToast();
    };
    ContractorAddPage.prototype.onUploadChange = function (evt) {
        // this.flag=false;
        // const file = evt.target.files[0];
        var _this = this;
        // if (file) {
        //   const reader = new FileReader();
        //   reader.onload = this.handleReaderLoaded.bind(this);
        //   reader.readAsBinaryString(file);
        // }
        var actionsheet = this.actionSheetController.create({
            title: " Upload File",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takeDocPhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: 'Gallery',
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getDocImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    ContractorAddPage.prototype.takeDocPhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 90,
            destinationType: this.camera.DestinationType.DATA_URL,
            // allowEdit:true,
            targetWidth: 1050,
            targetHeight: 1000,
            cameraDirection: 1,
            correctOrientation: true,
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.conData1.image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.conData1.image, 'line number 236');
        }, function (err) {
        });
    };
    ContractorAddPage.prototype.getDocImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.conData1.image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.conData1.image, 'line number 252');
        }, function (err) {
        });
    };
    ContractorAddPage.prototype.alertToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    ContractorAddPage.prototype.fileChange = function (image) {
        this.image_data.push({ 'image': image });
        // if(this.image_data.length >0){
        //   this.alertToast('Bill image required')
        //   return
        // }
        console.log(this.image_data);
        this.image = '';
    };
    ContractorAddPage.prototype.remove_image = function (i) {
        this.image_data.splice(i, 1);
    };
    ContractorAddPage.prototype.captureImage = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Bill Upload Media",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takePhoto1();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: 'Gallery',
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getImage1();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    ContractorAddPage.prototype.takePhoto1 = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.image = 'data:image/jpeg;base64,' + imageData;
            //   this.image=  imageData;
            console.log(_this.image);
            if (_this.image) {
                _this.fileChange(_this.image);
            }
        }, function (err) {
        });
    };
    ContractorAddPage.prototype.getImage1 = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.image = 'data:image/jpeg;base64,' + imageData;
            //   this.image=  imageData;
            //   this.image= imageData.substr(imageData.lastIndexOf('/') + 1);
            console.log(_this.image);
            if (_this.image) {
                _this.fileChange(_this.image);
            }
        }, function (err) {
        });
    };
    ContractorAddPage.prototype.submit = function () {
        // if(this.contractorData < 1){
        //     this.alertToast('Please add one item at least!')
        //     return
        //    }
        var _this = this;
        //    if (!this.conData1.image) {
        //     this.alertToast("Please fill the Image")
        //     return
        // }
        console.log(this.image_data.length <= 0);
        if (this.image_data.length <= 0) {
            this.alertToast('Please add one image at least!');
            return;
        }
        this.presentLoading();
        this.saveFlag = true;
        this.conData1.part = this.contractorData;
        this.conData1.contractor_id = this.dbService.karigar_id;
        this.conData1.image = this.image_data ? this.image_data : [];
        // if(this.conData1.image=='' || this.conData1.image == undefined){
        //   this.alertToast('Bill image required')
        //   return
        // }
        console.log(this.image_data);
        console.log(this.conData1.image);
        this.dbService.post_rqst(this.conData1, 'app_karigar/add_contractor_request ').subscribe(function (r) {
            console.log(r);
            if (r['status'] == 'SUCCESS') {
                _this.loading.dismiss();
                _this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_5__contractor_list_contractor_list__["a" /* ContractorListPage */]);
            }
        });
    };
    ContractorAddPage.prototype.distributorList = function () {
        var _this = this;
        this.dbService.post_rqst({ 'filter': { 'state': this.state } }, 'app_karigar/distributorList').subscribe(function (r) {
            console.log(r);
            _this.distributor_list = r['karigars'];
        });
    };
    ContractorAddPage.prototype.MobileNumber = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ContractorAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-contractor-add',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/contractor/contractor-add/contractor-add.html"*/'<!--\n\n  Generated template for the ContractorAddPage page.\n\n  \n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'Add New Request\' | translate }} </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="main-field padding16">\n\n    <!-- <h3>{{ \'Basic information\' | translate}} </h3> -->\n\n    <div class="cs-form mb10">\n\n      \n\n      <form  (ngSubmit)="f.form.valid && submit() " #f="ngForm" >      \n\n        \n\n        <ion-list>\n\n       \n\n        <ion-item class="cs-input mt0" [ngClass]="{\'error\':f.submitted && distributor_id?.invalid}">\n\n          <ion-label floating>{{\'Select Distributor\' | translate}}<span>*</span></ion-label>\n\n          <ion-select name="distributor_id" [(ngModel)]="conData1.distributor_id" #distributor_id="ngModel" required >\n\n            <ion-option *ngFor="let row of distributor_list" value="{{row.id}}">{{row.company_name | titlecase}} {{row.mobile_no}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n\n\n\n\n\n\n  <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && bill_no?.invalid}" >\n\n              <ion-label floating>{{\'Bill No.\' | translate}}<span>*</span></ion-label>\n\n              <ion-input type="text"   [(ngModel)]="conData1.bill_no" name="bill_no" #bill_no="ngModel"  autocorrect="off" required></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item class="cs-date mb0" [ngClass]="{\'error\':f.submitted && bill_date?.invalid}">\n\n              <ion-label>{{\'Bill Date\' | translate}}<span>*</span></ion-label>\n\n              <ion-datetime displayFormat="DD/MM/YYYY" max={{today_date}} type="text" name="bill_date" #bill_date="ngModel" [(ngModel)]="conData1.bill_date" required>\n\n              </ion-datetime>\n\n          </ion-item>\n\n\n\n            <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && bill_amount?.invalid}">\n\n              <ion-label floating>{{\'Bill Amount Without Gst\' | translate}}<span>*</span></ion-label>\n\n              <ion-input type="text"   [(ngModel)]="conData1.bill_amount" name="bill_amount" #bill_amount="ngModel"  autocorrect="off"  required></ion-input>\n\n            </ion-item>\n\n\n\n\n\n\n\n        </ion-list>\n\n        \n\n\n\n         <!-- <div *ngIf="f.submitted && dealer_name.invalid" class="invalid-feedback">\n\n                <div *ngIf="dealer_name.errors.required">{{\'Field is Required\' | translate}}</div>\n\n              </div> -->\n\n\n\n                   <!-- <ion-item class="cs-input" >\n\n              <ion-label floating>{{\'Total Point\' | translate}}</ion-label>\n\n              <ion-input type="tel"   [(ngModel)]="conData1.totalPoint" name="totalPoint" #qty="ngModel" autocomplete="off" autocorrect="off"   readonly></ion-input>\n\n            </ion-item> -->\n\n\n\n        <!-- <div class="sprate-block" >\n\n          <ion-list>\n\n            <ion-item class="cs-input mt0">\n\n              <ion-label floating>{{\'Product Name\' | translate}}</ion-label>\n\n              <ion-select name="product_point_group"  [(ngModel)]="conData1.product_point_group"  #product_point_group="ngModel">\n\n                <ion-option  *ngFor="let val of product_code" value={{val.product_point_group}} >{{val.product_point_group}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            \n\n            <ion-item class="cs-input" >\n\n              <ion-label floating>{{\'Quantity\' | translate}}</ion-label>\n\n              <ion-input type="tel"   [(ngModel)]="conData1.qty" name="qty" #qty="ngModel" autocomplete="off" autocorrect="off" min="0"  maxlength="5" minlength="1" ></ion-input>\n\n            </ion-item>\n\n            \n\n          \n\n              <button type="text"  ion-button full color="secondary" [disabled]="!conData1.product_point_group  || !conData1.qty"   (click)="addItem()" >{{\'Add To List\' | translate}}</button>\n\n            </ion-list>\n\n\n\n            <div class="card-list">\n\n              <div class="card-item" *ngFor="let row of contractorData; let i = index">\n\n                <div class="data-content">\n\n                  <p><strong>{{\'Product\' | translate}}: </strong> {{row.product_point_group}}</p>\n\n                  <div class="item-flex">\n\n                    <p><strong>{{\'Quantity\' | translate}}: </strong> {{row.qty}}</p>\n\n\n\n                  </div>\n\n\n\n                </div>\n\n                <div class="data-action">\n\n                  <a ion-fab mini color="danger" (click)="deleteItem(i)"><ion-icon name="trash"></ion-icon></a>\n\n                </div>\n\n              </div>\n\n              \n\n            </div>\n\n         \n\n          </div> -->\n\n\n\n\n\n\n\n\n\n          <!-- <div class="sprate-block" >\n\n            <div class="upload-document" (click)="onUploadChange()" >\n\n              <p *ngIf="conData1.image==\'\' || conData1.image== undefined"><i class="material-icons">add_circle</i><br>{{ \'Upload Bill\' | translate}}</p>\n\n              <img *ngIf="conData1.image != \'\'"[src]="conData1.image" alt="">\n\n            </div>\n\n            \n\n          </div> -->\n\n\n\n              <ion-item>\n\n                    <div class="add-new padding0" >\n\n                        <div class="uplode-image">\n\n                            <ul>\n\n                                <li *ngFor="let pic of image_data;let i = index;" >\n\n                                    <img src="{{pic.image}}" >\n\n                                    <button><i class="material-icons" (click)="remove_image(i)">clear</i></button>\n\n                                </li>\n\n                                \n\n                                <li (click)="captureImage()">\n\n                                    <label>\n\n                                        <input type="file" style="display: none;">\n\n                                        <div class="other">\n\n                                            <a ><i class="material-icons" >camera_alt</i></a>\n\n                                        </div>\n\n                                    </label>\n\n                                </li>\n\n                            </ul>\n\n                            \n\n                        </div>\n\n                    </div>\n\n                    \n\n                    \n\n                </ion-item>\n\n          \n\n         \n\n          <div class="pt32 pb16">\n\n            <button [disabled]="saveFlag" ion-button full >{{ \'Save\' | translate }}</button>\n\n          </div>\n\n        </form>\n\n        \n\n        \n\n        \n\n      </div>\n\n    </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/contractor/contractor-add/contractor-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], ContractorAddPage);
    return ContractorAddPage;
}());

//# sourceMappingURL=contractor-add.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractorDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
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
* Generated class for the ContractorDetailPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ContractorDetailPage = /** @class */ (function () {
    function ContractorDetailPage(navCtrl, cons, navParams, dbService, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.cons = cons;
        this.navParams = navParams;
        this.dbService = dbService;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.conDetail = {};
        this.productData = [];
        this.productDataImg = [];
        this.upload_url = '';
        this.upload_url = cons.upload_url;
    }
    ContractorDetailPage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get('id');
        this.presentLoading();
        this.contractorDetail();
    };
    ContractorDetailPage.prototype.presentLoading = function () {
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
    ContractorDetailPage.prototype.contractorDetail = function () {
        var _this = this;
        this.dbService.post_rqst({ 'id': this.id }, 'app_karigar/get_contractor_request_detail').subscribe(function (r) {
            _this.loading.dismiss();
            _this.conDetail = r.request_detail[0];
            _this.productData = _this.conDetail.parts;
            _this.productDataImg = _this.conDetail.image;
            console.log(_this.productDataImg);
        });
    };
    ContractorDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contractor-detail',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/contractor/contractor-detail/contractor-detail.html"*/'<!--\n\n  Generated template for the ContractorDetailPage page.\n\n  \n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'Channel Partner Points Detail\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="cs-list">\n\n    <div class="top-block">\n\n      <p> {{\'Company Name\' | translate}} : {{conDetail.distributor_company_name | titlecase}}</p>\n\n      <p>{{conDetail.distributor_mobile}}</p>\n\n\n\n    </div>\n\n    <div class="middle-block">\n\n      <div class="three-block bil_dtls">\n\n        <p>{{\'Date\' | translate}} : <strong>{{conDetail.date_created |  date:\'d MMMM y\'}}</strong></p>\n\n\n\n\n\n        <p>{{\'Bill No.\' | translate}} : <strong>{{conDetail.bill_no}}</strong></p>\n\n        <p>{{\'Bill Date\' | translate}} : <strong>{{conDetail.bill_date |  date:\'d MMMM y\'}}</strong></p>\n\n        <p>{{\'Bill Amount Without Gst\' | translate}} : <strong>{{conDetail.bill_amount}}</strong></p>\n\n\n\n        <p>{{\'Status\' | translate}} : <strong class="{{conDetail.status}}">{{conDetail.status}}</strong> </p>\n\n      </div>\n\n    </div>\n\n    <div class="top-block footer-block">\n\n      <p>{{\'Points Earned\' | translate}}: <strong style="font-size: 14px; color: #2e5ea2;">{{conDetail.points}}</strong></p>\n\n    </div>\n\n  </div>\n\n  \n\n  <!-- <ng-container *ngIf="productData.length">\n\n    <h2>{{\'Items Detail\' | translate}}</h2>\n\n    \n\n    <ion-item  *ngFor="let row of productData; let i = index">\n\n      <p><strong>{{\'Product Detail\' | translate}}:</strong> {{row.product_point_group | titlecase}}</p>\n\n      <p><strong>{{\'Quantity\' | translate}}:</strong>  {{row.qty}}</p>\n\n\n\n      <p *ngIf="conDetail.status ==\'Reject\'"><strong>{{\'Reason\' | translate}}:</strong>  {{conDetail.status_reason ? conDetail.status_reason :\'N/A\'}}</p>\n\n    </ion-item>\n\n  </ng-container> -->\n\n  \n\n  \n\n  <ng-container >\n\n    <h2>{{\'Bill Image\' | translate}}</h2>\n\n    <div class="pr16 pl16" *ngFor="let row of productDataImg; let i = index">\n\n      <div class="bill_img">\n\n        <img src="{{upload_url + row.image}}">\n\n      </div>\n\n    </div>\n\n  </ng-container>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/contractor/contractor-detail/contractor-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], ContractorDetailPage);
    return ContractorDetailPage;
}());

//# sourceMappingURL=contractor-detail.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FurnitureIdeassharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FurnitureIdeassharePage = /** @class */ (function () {
    function FurnitureIdeassharePage(navCtrl, navParams, socialShar, db, loadingCtrl, translate, constn, transfer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialShar = socialShar;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.constn = constn;
        this.transfer = transfer;
        this.file = file;
        this.data = {};
        this.image_list = [];
        this.upload_url = "";
        this.index = 0;
        this.index = this.navParams.get("data");
        this.image_list = this.navParams.get("list");
        console.log(this.index);
    }
    FurnitureIdeassharePage.prototype.download = function (name, fileUrl) {
        console.log("clicked");
        console.log(this.file.externalRootDirectory);
        console.log(this.file);
        window.open(fileUrl, '_system', 'location=yes');
        // const fileTransfer: FileTransferObject = this.transfer.create();
        // const url = 'http://www.example.com/file.pdf';
        // console.log("after url");
        // fileTransfer.download(fileUrl, this.file.externalRootDirectory+'DCIM/Camera/'+ name)
        // .then((entry) => {
        //     console.log(entry);
        //     console.log('download complete: ' + entry.toURL());
        //     // this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesn\'t exist'));
        // }, (error) => {
        //     // handle error
        // });
    };
    FurnitureIdeassharePage.prototype.ionViewDidLoad = function () {
        this.upload_url = this.constn.upload_url;
        console.log('ionViewDidLoad FurnitureIdeassharePage');
    };
    FurnitureIdeassharePage.prototype.share = function (image) {
        var _this = this;
        this.presentLoading();
        this.socialShar.share("", "", this.upload_url + image, "")
            .then(function (resp) {
            console.log(resp);
            _this.loading.dismiss();
        }).catch(function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    FurnitureIdeassharePage.prototype.presentLoading = function () {
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
    FurnitureIdeassharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-furniture-ideasshare',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/furniture-ideasshare/furniture-ideasshare.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{data.category}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background: #000;">\n\n    <div class="slide-image">\n\n        <ion-slides [initialSlide]="index" paginationType="progress" loop="true" zoom="true">\n\n            <ion-slide *ngFor="let row of image_list; let i=index">\n\n                <div class="swiper-zoom-container">\n\n                    <img [src]="upload_url+row.image_name">\n\n                </div>\n\n                <div class="two-fields">\n\n                    <a (click)="share(row.image_name)">Share</a>\n\n                    <!-- <a target="_parent" href="{{upload_url+row.image_name}}">Download</a> -->\n\n                    <a (click)="download(row.image_name,upload_url+row.image_name)">Download</a>\n\n                </div>\n\n            </ion-slide>\n\n        </ion-slides>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/furniture-ideasshare/furniture-ideasshare.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_5__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
    ], FurnitureIdeassharePage);
    return FurnitureIdeassharePage;
}());

//# sourceMappingURL=furniture-ideasshare.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FurnitureIdeasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furniture_ideasdetail_furniture_ideasdetail__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FurnitureIdeasPage = /** @class */ (function () {
    function FurnitureIdeasPage(navCtrl, navParams, db, actionSheetController, alertCtrl, camera, toastCtrl, loadingCtrl, translate, constn, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.actionSheetController = actionSheetController;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.constn = constn;
        this.storage = storage;
        this.upload_url = '';
        this.tokenInfo = {};
        this.lang = '';
        this.filter = {};
        this.flag = '';
        this.data = {};
        this.karigar_id = '';
        this.category_list = [];
        this.productDataImg = [];
        this.image_data = [];
        this.save_succ = "";
        this.ok = "";
        this.saveFlag = false;
        this.presentLoading();
        this.data = this.navParams.get('data');
        console.log(this.data);
        if (this.navParams.get('data')) {
            this.data = navParams.data.data;
            this.image_data = this.data;
            console.log(this.image_data);
            for (var i = 0; i < this.image_data.length; i++) {
                this.data.doc_id = this.image_data[i].id;
                console.log(this.data.doc_id);
            }
            this.data.doc_id = this.image_data.id;
            this.data.karigar_edit_id = this.data.id;
            this.data.profile_edit_id = this.data.id;
            this.data.doc_edit_id = this.data.id;
            console.log(this.data.status);
        }
    }
    FurnitureIdeasPage.prototype.ionViewDidLoad = function () {
        this.get_user_lang();
        console.log('ionViewDidLoad FurnitureIdeasPage');
        this.upload_url = this.constn.upload_url;
        this.get_category();
    };
    FurnitureIdeasPage.prototype.goOnfurnituredetailPage = function (data) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__furniture_ideasdetail_furniture_ideasdetail__["a" /* FurnitureIdeasdetailPage */], { data: data });
    };
    FurnitureIdeasPage.prototype.scrollUp = function () {
        this.content.scrollToTop();
    };
    FurnitureIdeasPage.prototype.get_category = function () {
        var _this = this;
        this.filter.limit = 0;
        this.db.post_rqst({ 'filter': this.filter }, "app_karigar/get_furniture_cat")
            .subscribe(function (resp) {
            console.log(resp);
            _this.category_list = resp['category_list'];
            _this.loading.dismiss();
        });
    };
    FurnitureIdeasPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.category_list.length;
        this.db.post_rqst({ 'filter': this.filter }, 'app_karigar/get_furniture_cat')
            .subscribe(function (r) {
            console.log(r);
            if (r['category_list'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.category_list = _this.category_list.concat(r['category_list']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    FurnitureIdeasPage.prototype.presentLoading = function () {
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
    FurnitureIdeasPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    FurnitureIdeasPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    FurnitureIdeasPage.prototype.getShopDetail = function () {
        var _this = this;
        console.log('karigar');
        this.db.post_rqst({ 'karigar_id': this.db.karigar_id }, 'app_karigar/shop_image')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            // this.karigar_detail=r['karigar'];
            _this.productDataImg = r['shop_image'];
            // this.language=r['language'];
        });
    };
    FurnitureIdeasPage.prototype.fileChange = function (image) {
        console.log('all image', image);
        this.image_data.push({ 'image': image });
        // if(this.image_data.length >0){
        //   this.alertToast('Bill image required')
        //   return
        // }
        console.log('Image array ', this.image_data);
        this.image = '';
    };
    FurnitureIdeasPage.prototype.remove_image = function (i) {
        this.image_data.splice(i, 1);
    };
    FurnitureIdeasPage.prototype.captureImage = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Shop Upload Media",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takePhoto1();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: 'Gallery',
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getImage1();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    FurnitureIdeasPage.prototype.takePhoto1 = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            // this.data.doc_id ='';
            _this.image = 'data:image/jpeg;base64,' + imageData;
            //   this.image=  imageData;
            console.log(_this.image);
            if (_this.image) {
                _this.fileChange(_this.image);
            }
        }, function (err) {
        });
    };
    FurnitureIdeasPage.prototype.getImage1 = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            // this.data.doc_id ='';
            _this.image = 'data:image/jpeg;base64,' + imageData;
            //   this.image=  imageData;
            //   this.image= imageData.substr(imageData.lastIndexOf('/') + 1);
            console.log(_this.image);
            if (_this.image) {
                _this.fileChange(_this.image);
            }
        }, function (err) {
        });
    };
    FurnitureIdeasPage.prototype.alertToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    FurnitureIdeasPage.prototype.showSuccess = function (text) {
        var _this = this;
        this.translate.get("Image Save Successfully")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    FurnitureIdeasPage.prototype.submit = function () {
        var _this = this;
        if (this.image_data.length <= 0) {
            this.alertToast('Please add one image at least!');
            return;
        }
        // if(!this.data.document_image){
        //     this.presentToast();
        //     return
        // }
        this.saveFlag = true;
        this.presentLoading();
        this.data.shop_image = this.image_data ? this.image_data : [];
        this.karigar_id = this.db.karigar_id;
        this.db.post_rqst({ 'karigar_id': this.db.karigar_id, 'data': this.data.shop_image }, 'app_karigar/add_shop_image')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.karigar_id = r['id'];
            console.log(_this.karigar_id);
            if (r['status'] == "SUCCESS") {
                _this.showSuccess(_this.save_succ);
            }
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], FurnitureIdeasPage.prototype, "content", void 0);
    FurnitureIdeasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-furniture-ideas',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/furniture-ideas/furniture-ideas.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'Shop Image\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- <ion-content>\n\n    <div class="img-container" (click)="goOnfurnituredetailPage(row)" *ngFor="let row of category_list">\n\n        <img src="{{upload_url+row.image_name}}">\n\n        <div class="content-box">\n\n            <p>{{row.category}}</p>\n\n        </div>\n\n    </div>\n\n    \n\n    <div class="image-detail" *ngIf="category_list.length == 0">\n\n        <img src="assets/imgs/no_found.svg">\n\n    </div>\n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n\n        </ion-infinite-scroll-content>\n\n    </ion-infinite-scroll>\n\n</ion-content> -->\n\n\n\n\n\n\n\n<ion-content>\n\n    <form #f="ngForm" (ngSubmit)="f.form.valid ? submit() : scrollUp()">\n\n\n\n      \n\n            <ion-item>\n\n                <div class="uploade-image">\n\n                    <ul>\n\n                        <li *ngFor="let pic of image_data;let i = index;">\n\n                            <!-- <h1>check{{pic.id}}</h1> -->\n\n                            <img src="{{pic.id ? upload_url+pic.image : pic.image}}">\n\n                            <!-- <img src="{{uploadurl+pic.image}}" > -->\n\n\n\n                            <!-- <button class="bn_clr"><i class="material-icons cmr_ghr" (click)="remove_image(i)">clear</i></button> -->\n\n                            <span class="cancel-icon">\n\n                                <i class="material-icons crose-icon" (click)="remove_image(i)">clear</i>\n\n                            </span>\n\n                        </li>\n\n\n\n                        <li class="add-bg-1" (click)="captureImage()" *ngIf="image_data.length < 5">\n\n                            <i class="material-icons">camera_alt</i>\n\n                                    <p>{{\'Upload Image\' | translate}}</p>\n\n\n\n                        </li>\n\n                    </ul>\n\n\n\n                </div>\n\n\n\n            </ion-item>\n\n\n\n       \n\n\n\n\n\n\n\n\n\n        <button ion-button full color="primary"  [disabled]="saveFlag == true">{{\'Save\' |\n\n            translate}}</button>\n\n       \n\n\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/furniture-ideas/furniture-ideas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], FurnitureIdeasPage);
    return FurnitureIdeasPage;
}());

//# sourceMappingURL=furniture-ideas.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceTextPageModule", function() { return AdvanceTextPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__advance_text__ = __webpack_require__(157);
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
var AdvanceTextPageModule = /** @class */ (function () {
    function AdvanceTextPageModule() {
    }
    AdvanceTextPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__advance_text__["a" /* AdvanceTextPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__advance_text__["a" /* AdvanceTextPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], AdvanceTextPageModule);
    return AdvanceTextPageModule;
}());

//# sourceMappingURL=advance-text.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrivalDetailPageModule", function() { return ArrivalDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrival_detail__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArrivalDetailPageModule = /** @class */ (function () {
    function ArrivalDetailPageModule() {
    }
    ArrivalDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__arrival_detail__["a" /* ArrivalDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__arrival_detail__["a" /* ArrivalDetailPage */]),
            ],
        })
    ], ArrivalDetailPageModule);
    return ArrivalDetailPageModule;
}());

//# sourceMappingURL=arrival-detail.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrivalProductPageModule", function() { return ArrivalProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrival_product__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArrivalProductPageModule = /** @class */ (function () {
    function ArrivalProductPageModule() {
    }
    ArrivalProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__arrival_product__["a" /* ArrivalProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__arrival_product__["a" /* ArrivalProductPage */]),
            ],
        })
    ], ArrivalProductPageModule);
    return ArrivalProductPageModule;
}());

//# sourceMappingURL=arrival-product.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelationPolicyPageModule", function() { return CancelationPolicyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancelation_policy__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CancelationPolicyPageModule = /** @class */ (function () {
    function CancelationPolicyPageModule() {
    }
    CancelationPolicyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cancelation_policy__["a" /* CancelationPolicyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cancelation_policy__["a" /* CancelationPolicyPage */]),
            ],
        })
    ], CancelationPolicyPageModule);
    return CancelationPolicyPageModule;
}());

//# sourceMappingURL=cancelation-policy.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelpolicyModalPageModule", function() { return CancelpolicyModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancelpolicy_modal__ = __webpack_require__(151);
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
var CancelpolicyModalPageModule = /** @class */ (function () {
    function CancelpolicyModalPageModule() {
    }
    CancelpolicyModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cancelpolicy_modal__["a" /* CancelpolicyModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cancelpolicy_modal__["a" /* CancelpolicyModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], CancelpolicyModalPageModule);
    return CancelpolicyModalPageModule;
}());

//# sourceMappingURL=cancelpolicy-modal.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatingPageModule", function() { return ChatingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chating__ = __webpack_require__(267);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatingPageModule = /** @class */ (function () {
    function ChatingPageModule() {
    }
    ChatingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chating__["a" /* ChatingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chating__["a" /* ChatingPage */]),
            ],
        })
    ], ChatingPageModule);
    return ChatingPageModule;
}());

//# sourceMappingURL=chating.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompassPageModule", function() { return CompassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compass__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompassPageModule = /** @class */ (function () {
    function CompassPageModule() {
    }
    CompassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__compass__["a" /* CompassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__compass__["a" /* CompassPage */]),
            ],
        })
    ], CompassPageModule);
    return CompassPageModule;
}());

//# sourceMappingURL=compass.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(159);
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
var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractorAddPageModule", function() { return ContractorAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contractor_add__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_3__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var ContractorAddPageModule = /** @class */ (function () {
    function ContractorAddPageModule() {
    }
    ContractorAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contractor_add__["a" /* ContractorAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contractor_add__["a" /* ContractorAddPage */]),
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ContractorAddPageModule);
    return ContractorAddPageModule;
}());

//# sourceMappingURL=contractor-add.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractorDetailPageModule", function() { return ContractorDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contractor_detail__ = __webpack_require__(288);
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
var ContractorDetailPageModule = /** @class */ (function () {
    function ContractorDetailPageModule() {
    }
    ContractorDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contractor_detail__["a" /* ContractorDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contractor_detail__["a" /* ContractorDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ContractorDetailPageModule);
    return ContractorDetailPageModule;
}());

//# sourceMappingURL=contractor-detail.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractorListPageModule", function() { return ContractorListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contractor_list__ = __webpack_require__(166);
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
var ContractorListPageModule = /** @class */ (function () {
    function ContractorListPageModule() {
    }
    ContractorListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contractor_list__["a" /* ContractorListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contractor_list__["a" /* ContractorListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ContractorListPageModule);
    return ContractorListPageModule;
}());

//# sourceMappingURL=contractor-list.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionModelPageModule", function() { return DescriptionModelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__description_model__ = __webpack_require__(279);
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
var DescriptionModelPageModule = /** @class */ (function () {
    function DescriptionModelPageModule() {
    }
    DescriptionModelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__description_model__["a" /* DescriptionModelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__description_model__["a" /* DescriptionModelPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], DescriptionModelPageModule);
    return DescriptionModelPageModule;
}());

//# sourceMappingURL=description-model.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalcatalogPageModule", function() { return DigitalcatalogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__digitalcatalog__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offers_offers_module__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DigitalcatalogPageModule = /** @class */ (function () {
    function DigitalcatalogPageModule() {
    }
    DigitalcatalogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__digitalcatalog__["a" /* DigitalcatalogPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__digitalcatalog__["a" /* DigitalcatalogPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: __WEBPACK_IMPORTED_MODULE_5__offers_offers_module__["createTranslateLoader"],
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], DigitalcatalogPageModule);
    return DigitalcatalogPageModule;
}());

//# sourceMappingURL=digitalcatalog.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqAnswerPageModule", function() { return FaqAnswerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq_answer__ = __webpack_require__(273);
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
var FaqAnswerPageModule = /** @class */ (function () {
    function FaqAnswerPageModule() {
    }
    FaqAnswerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq_answer__["a" /* FaqAnswerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq_answer__["a" /* FaqAnswerPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], FaqAnswerPageModule);
    return FaqAnswerPageModule;
}());

//# sourceMappingURL=faq-answer.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq__ = __webpack_require__(162);
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
var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], FaqPageModule);
    return FaqPageModule;
}());

//# sourceMappingURL=faq.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback__ = __webpack_require__(152);
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
var FeedbackPageModule = /** @class */ (function () {
    function FeedbackPageModule() {
    }
    FeedbackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__feedback__["a" /* FeedbackPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], FeedbackPageModule);
    return FeedbackPageModule;
}());

//# sourceMappingURL=feedback.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProductPageModule", function() { return FilterProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_product__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterProductPageModule = /** @class */ (function () {
    function FilterProductPageModule() {
    }
    FilterProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter_product__["a" /* FilterProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter_product__["a" /* FilterProductPage */]),
            ],
        })
    ], FilterProductPageModule);
    return FilterProductPageModule;
}());

//# sourceMappingURL=filter-product.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureIdeasPageModule", function() { return FurnitureIdeasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furniture_ideas__ = __webpack_require__(291);
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
var FurnitureIdeasPageModule = /** @class */ (function () {
    function FurnitureIdeasPageModule() {
    }
    FurnitureIdeasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__furniture_ideas__["a" /* FurnitureIdeasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__furniture_ideas__["a" /* FurnitureIdeasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], FurnitureIdeasPageModule);
    return FurnitureIdeasPageModule;
}());

//# sourceMappingURL=furniture-ideas.module.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plumberlist_plumberlist__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redeem_type_redeem_type__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__digitalcatalog_digitalcatalog__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scane_pages_scan_scan__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offer_list_offer_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__points_point_list_point_list__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__offers_offers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gift_gallery_gift_list_gift_list__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view_profile_view_profile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_push__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__scane_pages_coupan_code_coupan_code__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__terms_terms__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__aboutus_modal_aboutus_modal__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__compass_compass__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__products_products__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__working_site_working_site__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__feedback_feedback__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__news_news__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__video_video__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__faq_faq__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__transaction_transaction__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__advance_text_advance_text__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_social_sharing__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__notification_notification__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__language_language__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__arrival_product_arrival_product__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__offer_product_offer_product__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__contractor_contractor_list_contractor_list__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__furniture_ideasdetail_furniture_ideasdetail__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






































// import { ShopImagePage } from '../shop-image/shop-image';

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, app, service, loadingCtrl, storage, barcodeScanner, alertCtrl, modalCtrl, push, translate, constant, socialSharing) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.push = push;
        this.translate = translate;
        this.constant = constant;
        this.socialSharing = socialSharing;
        this.offer_list = [];
        this.karigar_detail = {};
        this.last_point = '';
        this.plumber_point_transfer = '';
        this.feedback_count = '';
        this.today_point = '';
        this.appbanner = {};
        this.qr_code = '';
        this.coupon_value = '';
        this.uploadUrl = '';
        this.tokenInfo = {};
        this.lang = "";
        this.active = false;
        this.offer_detail = {};
        this.language = [];
        this.upload_url = '';
        this.notifications = '';
        this.sharepoint = 0;
        this.notify_cn = 0;
        this.testRadioOpen = '';
        this.value = '';
        this.qr_count = 0;
        this.qr_limit = 0;
        this.title = "";
        this.no = "";
        this.yes = "";
        this.content = "";
        this.presentLoading();
        this.initPushNotification();
        this.upload_url = constant.upload_url;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.initPushNotification();
        this.uploadUrl = this.constant.upload_url;
        console.log('ionViewDidLoad HomePage');
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        this.getData();
        this.get_user_lang();
        this.getofferBannerList();
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getData();
        refresher.complete();
    };
    HomePage.prototype.getData = function () {
        var _this = this;
        console.log("Check");
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/karigarHome')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.language = r['language'];
            _this.karigar_detail = r['karigar'];
            _this.appbanner = r['appbanner'];
            console.log(_this.appbanner);
            console.log(_this.karigar_detail.status);
            if (_this.karigar_detail.user_type != 3) {
                _this.offer_detail = r['offer'];
                _this.feedback_count = r['feedback_count'];
                _this.last_point = r['last_point'];
                _this.plumber_point_transfer = r['karigar'].plumber_purchase_point;
                console.log(_this.plumber_point_transfer);
                _this.notify_cn = r['notifications'];
                _this.today_point = r['today_point'];
                _this.total_balance_point = parseInt(_this.karigar_detail.balance_point) + parseInt(_this.karigar_detail.referal_point_balance);
                _this.sharepoint = r['points']['owner_ref_point'];
                _this.notification();
            }
        });
    };
    HomePage.prototype.getofferBannerList = function () {
        var _this = this;
        console.log(this.service.karigar_id);
        console.log('offerbanner');
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/offerList')
            .subscribe(function (r) {
            console.log(r);
            _this.offer_list = r['offer'];
            console.log(_this.offer_list);
        });
    };
    HomePage.prototype.scanCoupon = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Coupon');
        alert.addInput({
            type: 'radio',
            label: 'Coupon Scan',
            value: 'scan',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Enter Coupon Code',
            value: 'code',
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.testRadioOpen = false;
                // this.testRadioResult = data;
                _this.value = data;
                console.log("redio val =====>", _this.value);
                if (_this.value == 'scan') {
                    _this.scan();
                }
                else if (_this.value == 'code') {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__scane_pages_coupan_code_coupan_code__["a" /* CoupanCodePage */]);
                }
            }
        });
        alert.present();
    };
    HomePage.prototype.scan_tips = function () {
        // let contactModal = this.modalCtrl.create(AboutPage);
        // contactModal.present();
        // contactModal.onDidDismiss(resp=>{
        // console.log(resp);
        this.scan();
        // })
    };
    HomePage.prototype.scan = function () {
        var _this = this;
        if (this.karigar_detail.manual_permission == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__scane_pages_coupan_code_coupan_code__["a" /* CoupanCodePage */]);
        }
        else {
            this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, "app_karigar/get_qr_permission")
                .subscribe(function (resp) {
                console.log(resp);
                _this.qr_count = resp['karigar_daily_count'];
                _this.qr_limit = resp['qr_limit'];
                console.log(_this.qr_count);
                console.log(_this.qr_limit);
                if (parseInt(_this.qr_count) <= parseInt(_this.qr_limit)) {
                    var options = {
                        // prompt : "लैमिनेट शीट के स्टीकर को स्कैन करते समय, लाल रंग की लाइन को बारकोड स्टीकर की सभी लाइनों पर डालें स्कैन न होने पर संपर्क करें। कॉल करें- +91-9773897370"
                        prompt: ""
                    };
                    _this.barcodeScanner.scan(options).then(function (resp) {
                        console.log(resp);
                        _this.qr_code = resp.text;
                        console.log(_this.qr_code);
                        if (resp.text != '') {
                            _this.service.post_rqst({ 'karigar_id': _this.service.karigar_id, 'qr_code': _this.qr_code }, 'app_karigar/karigarCoupon')
                                .subscribe(function (r) {
                                console.log(r);
                                if (r['status'] == 'INVALID') {
                                    _this.translate.get("Invalid Coupon Code")
                                        .subscribe(function (resp) {
                                        _this.showAlert(resp);
                                    });
                                    return;
                                }
                                else if (r['status'] == 'USED') {
                                    _this.translate.get("Coupon Already Used")
                                        .subscribe(function (resp) {
                                        _this.showAlert(resp);
                                    });
                                    return;
                                }
                                else if (r['status'] == 'UNASSIGNED OFFER') {
                                    _this.translate.get("Your Account Under Verification")
                                        .subscribe(function (resp) {
                                        _this.showAlert(resp);
                                    });
                                    return;
                                }
                                _this.translate.get("points has been added into your wallet")
                                    .subscribe(function (resp) {
                                    _this.showSuccess(r['coupon_value'] + resp);
                                });
                                _this.getData();
                            });
                        }
                        else {
                            console.log('not scanned anything');
                        }
                    });
                }
                else {
                    _this.translate.get("You have exceed the daily QR scan limit")
                        .subscribe(function (resp) {
                        _this.showAlert(resp);
                    });
                }
            });
        }
    };
    HomePage.prototype.viewProfiePic = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": this.karigar_detail.profile, type: "normal" }).present();
    };
    HomePage.prototype.viewProfie = function () {
        console.log(this.lang);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__profile_profile__["a" /* ProfilePage */], { 'lang': this.lang });
    };
    HomePage.prototype.goOnScanePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__scane_pages_scan_scan__["a" /* ScanPage */]);
    };
    HomePage.prototype.goOnPlumberList = function () {
        if (this.karigar_detail.status == 'Suspect') {
            var alert_1 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close',
                subTitle: "Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only plumber add when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_1.present();
            return;
        }
        else if (this.karigar_detail.status == 'Pending') {
            var alert_2 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only plumber add when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_2.present();
            return;
        }
        else if (this.karigar_detail.status == 'Reject') {
            var alert_3 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only plumber add when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_3.present();
            return;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__plumberlist_plumberlist__["a" /* PlumberlistPage */]);
        }
    };
    HomePage.prototype.goOnOffersListPage = function () {
        if (this.karigar_detail.status == 'Suspect') {
            var alert_4 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close',
                subTitle: "Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only see your offers when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_4.present();
            return;
        }
        else if (this.karigar_detail.status == 'Pending') {
            var alert_5 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only see your offers when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_5.present();
            return;
        }
        else if (this.karigar_detail.status == 'Reject') {
            var alert_6 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only see your offers when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_6.present();
            return;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__offer_list_offer_list__["a" /* OfferListPage */]);
        }
    };
    HomePage.prototype.goOnOffersPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__offers_offers__["a" /* OffersPage */], { 'id': id });
    };
    HomePage.prototype.goOnPointeListPage = function () {
        if (this.karigar_detail.status == 'Suspect') {
            var alert_7 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close',
                subTitle: "Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only see your points history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_7.present();
            return;
        }
        else if (this.karigar_detail.status == 'Pending') {
            var alert_8 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only see your points history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_8.present();
            return;
        }
        else if (this.karigar_detail.status == 'Reject') {
            var alert_9 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only see your points history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_9.present();
            return;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__points_point_list_point_list__["a" /* PointListPage */]);
        }
    };
    HomePage.prototype.goOnWorkingSitePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_24__working_site_working_site__["a" /* WorkingSitePage */]);
    };
    HomePage.prototype.gotoCompass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_22__compass_compass__["a" /* CompassPage */]);
    };
    HomePage.prototype.goOntermsPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__terms_terms__["a" /* TermsPage */], { 'id': id });
    };
    HomePage.prototype.goOnFeedbackPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_25__feedback_feedback__["a" /* FeedbackPage */]);
    };
    HomePage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    HomePage.prototype.goOnGiftListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__gift_gallery_gift_list_gift_list__["a" /* GiftListPage */], { 'mode': 'home' });
    };
    HomePage.prototype.goOnDigitalcatPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__digitalcatalog_digitalcatalog__["a" /* DigitalcatalogPage */]);
    };
    HomePage.prototype.goOnProductPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_23__products_products__["a" /* ProductsPage */]);
    };
    HomePage.prototype.goOnShopImagePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_38__furniture_ideasdetail_furniture_ideasdetail__["a" /* FurnitureIdeasdetailPage */]);
    };
    // goOnFurniturePage()
    // {
    //     this.navCtrl.push(FurnitureIdeasPage);
    // }
    HomePage.prototype.goOnProductsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_23__products_products__["a" /* ProductsPage */]);
    };
    HomePage.prototype.goOnArrivalProductsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_35__arrival_product_arrival_product__["a" /* ArrivalProductPage */]);
    };
    HomePage.prototype.goOnOfferProductsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_36__offer_product_offer_product__["a" /* OfferProductPage */]);
    };
    HomePage.prototype.goOnContractorPage = function () {
        if (this.karigar_detail.status == 'Suspect') {
            var alert_10 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close',
                subTitle: "Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only earn your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_10.present();
            return;
        }
        else if (this.karigar_detail.status == 'Pending') {
            var alert_11 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only earn your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_11.present();
            return;
        }
        else if (this.karigar_detail.status == 'Reject') {
            var alert_12 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only earn your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_12.present();
            return;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_37__contractor_contractor_list_contractor_list__["a" /* ContractorListPage */]);
        }
    };
    HomePage.prototype.viewDetail = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": this.lang != 'en' ? this.offer_detail.hin_term_image : this.offer_detail.term_image }).present();
    };
    HomePage.prototype.gotoHistory = function () {
        if (this.karigar_detail.status == 'Suspect') {
            var alert_13 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close',
                subTitle: "Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only see your points redeem history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_13.present();
            return;
        }
        else if (this.karigar_detail.status == 'Pending') {
            var alert_14 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only see your points redeem history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_14.present();
            return;
        }
        else if (this.karigar_detail.status == 'Reject') {
            var alert_15 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only see your points redeem history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_15.present();
            return;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_30__transaction_transaction__["a" /* TransactionPage */]);
        }
    };
    HomePage.prototype.goOnGiftGallary = function () {
        if (this.karigar_detail.status == 'Suspect') {
            var alert_16 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close',
                subTitle: "Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only see your gift gallery when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_16.present();
            return;
        }
        else if (this.karigar_detail.status == 'Pending') {
            var alert_17 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only see your gift gallery when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_17.present();
            return;
        }
        else if (this.karigar_detail.status == 'Reject') {
            var alert_18 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only see your gift gallery when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_18.present();
            return;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__gift_gallery_gift_list_gift_list__["a" /* GiftListPage */]);
        }
    };
    HomePage.prototype.goOnNewsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_26__news_news__["a" /* NewsPage */]);
    };
    HomePage.prototype.goOnVideoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_27__video_video__["a" /* VideoPage */]);
    };
    HomePage.prototype.goOnContactPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_28__contact_contact__["a" /* ContactPage */]);
    };
    HomePage.prototype.goOnfaqPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_29__faq_faq__["a" /* FaqPage */]);
    };
    HomePage.prototype.goOnAdvanceTextPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_31__advance_text_advance_text__["a" /* AdvanceTextPage */]);
    };
    HomePage.prototype.gotoNotification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_33__notification_notification__["a" /* NotificationPage */]);
    };
    HomePage.prototype.gotoChangeLang = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_34__language_language__["a" /* LanguagePage */], { "come_from": "homepage" });
    };
    HomePage.prototype.goRedeemType = function () {
        if (this.karigar_detail.status == 'Suspect') {
            var alert_19 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close',
                subTitle: "Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only redeem your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_19.present();
            return;
        }
        else if (this.karigar_detail.status == 'Pending') {
            var alert_20 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only redeem your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_20.present();
            return;
        }
        else if (this.karigar_detail.status == 'Reject') {
            var alert_21 = this.alertCtrl.create({
                title: 'Sorry!',
                cssClass: 'action-close status-alert',
                subTitle: "Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only redeem your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {},
                    {
                        text: 'Okay',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_21.present();
            return;
        }
        else if (this.karigar_detail.user_type == 1 && this.karigar_detail.status == 'Verified') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__redeem_type_redeem_type__["a" /* RedeemTypePage */], { 'mode': 'home', "balance_point": this.total_balance_point, "redeem_point": this.karigar_detail.redeem_balance });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__gift_gallery_gift_list_gift_list__["a" /* GiftListPage */], { 'mode': 'home' });
        }
    };
    HomePage.prototype.share = function () {
        console.log("share and earn");
        // let image = "https://play-lh.googleusercontent.com/FEDtMP_dyMgM8rJtp4MFdp60g0fLuBYNbu3pBNsNH52knTsG1yDuNs56CFYu_X3XqYk=s180-rw";
        var image = "";
        var app_url = "https://apps.apple.com/us/app/jupiter-aqua-lines/id6449290209";
        this.socialSharing.share("Hey there join me (" + this.karigar_detail.full_name + "-" + this.karigar_detail.mobile_no + ") on  Jal Uphaar, app. Enter my code *" + this.karigar_detail.referral_code + "* to earn points back in your wallet!", "Karigar Reffral", image, app_url)
            .then(function (resp) {
            console.log(resp);
        }).catch(function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.showAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.notification = function () {
        var _this = this;
        console.log("notification called");
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        var options = {
            android: {
                senderID: '893824522432',
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'true'
            },
            windows: {},
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) { return console.log('Received a notification', notification); });
        pushObject.on('registration').subscribe(function (registration) {
            console.log('Device registered', registration);
            _this.service.post_rqst({ 'id': _this.service.karigar_id, 'registration_id': registration.registrationId }, 'app_karigar/update_token').subscribe(function (r) {
                console.log(r);
                console.log("tokken saved");
            });
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    HomePage.prototype.openModal = function () {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_18__aboutus_modal_aboutus_modal__["a" /* AboutusModalPage */]);
        contactModal.present();
        return;
    };
    HomePage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.service.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                console.log(_this.lang);
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                console.log(_this.lang);
                _this.translate.use(_this.lang);
            });
        });
    };
    HomePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_19_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.translate.get('Logout!')
            .subscribe(function (resp) {
            _this.Logout = resp;
        });
        this.translate.get('Are you sure you want Logout?')
            .subscribe(function (resp) {
            _this.sure = resp;
        });
        this.translate.get('No')
            .subscribe(function (resp) {
            _this.no = resp;
        });
        this.translate.get('Yes')
            .subscribe(function (resp) {
            _this.yes = resp;
        });
        var alert = this.alertCtrl.create({
            title: this.Logout,
            message: this.sure,
            buttons: [
                {
                    text: this.no,
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.d.('Action Cancelled!')
                    }
                },
                {
                    text: this.yes,
                    handler: function () {
                        _this.storage.set('token', '');
                        _this.service.karigar_info = '';
                        var alert2 = _this.alertCtrl.create({
                            title: 'Success!',
                            subTitle: 'Logout Successfully',
                            buttons: [{
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        });
                        alert2.present();
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_34__language_language__["a" /* LanguagePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.initPushNotification = function () {
        var _this = this;
        this.push.hasPermission().then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We don\'t have permission to send push notifications');
            }
        });
        var options = {
            android: {
                senderID: '849648964768',
                icon: './assets/imgs/logo_small',
                forceShow: true
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            console.log('Received a notification', notification);
            console.log("error1", notification.additionalData.type);
            console.log("error1", notification.additionalData);
            if (notification.additionalData.type == "message") {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_25__feedback_feedback__["a" /* FeedbackPage */]);
            }
            else if (notification.additionalData.type == 'offer') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__offer_list_offer_list__["a" /* OfferListPage */]);
            }
            else if (notification.additionalData.type == 'redeem') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_30__transaction_transaction__["a" /* TransactionPage */]);
            }
            else if (notification.additionalData.type == 'catalogue') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_23__products_products__["a" /* ProductsPage */]);
            }
            else if (notification.additionalData.type == 'product') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_23__products_products__["a" /* ProductsPage */]);
            }
            else if (notification.additionalData.type == 'video') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_27__video_video__["a" /* VideoPage */]);
            }
            else if (notification.additionalData.type == 'profile') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__profile_profile__["a" /* ProfilePage */]);
            }
            else if (notification.additionalData.type == 'gift') {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__gift_gallery_gift_list_gift_list__["a" /* GiftListPage */]);
            }
        });
        pushObject.on('registration')
            .subscribe(function (registration) {
            console.log('Device registered', registration);
            console.log('Device Token', registration.registrationId);
            _this.storage.set('fcmId', registration);
            // console.log( this.tokenInfo);
            console.log(_this.storage);
            _this.storage.get('user_type').then(function (user_type) {
                _this.user_type = user_type;
                console.log(_this.user_type);
                console.log(user_type);
            });
            _this.storage.get('userId').then(function (userId) {
                _this.idlogin = userId;
                console.log(_this.idlogin);
                console.log(userId);
            });
            _this.registration = registration.registrationId;
            _this.registrationid(registration.registrationId);
        });
        pushObject.on('error')
            .subscribe(function (error) {
            return console.error('Error with Push plugin', error);
        });
    };
    HomePage.prototype.registrationid = function (registrationId) {
        var _this = this;
        console.log(" enter registration home");
        console.log(registrationId);
        this.storage.get('user_type').then(function (user_type) {
            _this.user_type = user_type;
            console.log(_this.user_type);
            console.log(user_type);
            console.log("user_type");
        });
        this.storage.get('userId').then(function (userId) {
            _this.idlogin = userId;
            console.log(_this.idlogin, _this.idlogin);
            console.log("userId");
            console.log(userId);
        });
        setTimeout(function () {
            _this.service.post_rqst({ 'registration_id': registrationId, 'karigar_id': _this.service.karigar_id }, 'app_karigar/add_registration_id')
                .subscribe(function (r) {
                console.log("success");
                console.log(r);
            });
        }, 5000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-toolbar color="white">\n\n        <div class="company-logo">\n\n            <img src="assets/imgs/logo.png">\n\n        </div>\n\n        <!-- <ion-buttons end (click)="share()" *ngIf="karigar_detail.user_type!=3">\n\n            <button ion-button icon-only class="share-text">\n\n                <ion-icon name="share" color="primary" ></ion-icon> {{\'Share App\' | translate}}\n\n            </button>\n\n        </ion-buttons> -->\n\n\n\n        <ion-buttons end class="mr10">\n\n            <button ion-button icon-only (click)="gotoNotification()">\n\n                <ion-icon name="notifications"></ion-icon>\n\n                <span *ngIf="notify_cn > 0" class="custom-point notification-count">{{notify_cn}}</span>\n\n            </button>\n\n\n\n            <button ion-button icon-only (click)="logout()">\n\n                <ion-icon name="power"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="{{\'Pull to refresh\' | translate}}"\n\n            refreshingSpinner="circles" refreshingText="{{\'Refreshing...\'| translate}}">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n\n\n    <div class="slide-image sld_im">\n\n        <ion-slides *ngIf="appbanner.length && appbanner.length>1 " [initialSlide]="0" pager autoplay="1000"\n\n            speed="1000" loop="true">\n\n            <ion-slide *ngFor="let row of appbanner">\n\n                <img [src]="uploadUrl+row.banner">\n\n            </ion-slide>\n\n        </ion-slides>\n\n        <div *ngIf="appbanner.length==1">\n\n            <img [src]="uploadUrl+appbanner[0].banner">\n\n        </div>\n\n        <div *ngIf="appbanner.length==0">\n\n            <img src="../../assets/imgs/appbanner.png">\n\n        </div>\n\n    </div>\n\n\n\n    <!-- <div class="pr-grid">\n\n        <div class="le-ft" (click)="viewProfiePic()">\n\n            <img src="{{upload_url+karigar_detail.profile}}">\n\n        </div>\n\n        <div class="ri-ght">\n\n            <div class="align-ri">\n\n                <h1>{{karigar_detail.full_name | titlecase}}</h1>\n\n                <p>{{karigar_detail.city | titlecase}}\n\n                    <span *ngIf="karigar_detail.status ==\'Pending\'" style="color:rgb(255, 234, 0)">\n\n                        <i class="material-icons" style="color:rgb(255, 234, 0)">hourglass_full</i>{{\'Pending For Verification\' | translate}}\n\n                    </span>\n\n                    <span *ngIf="karigar_detail.status ==\'Verified\'">\n\n                        <i class="material-icons" >check_circle</i>{{\'Verified\' | translate}}\n\n                    </span>\n\n                    <span *ngIf="karigar_detail.status ==\'Suspect\'">\n\n                        <i class="material-icons" >info</i>{{\'Suspected\' | translate}}\n\n                    </span>\n\n                    <span *ngIf="karigar_detail.status ==\'Reject\'">\n\n                        <i class="material-icons" >cancel</i>{{\'Rejected\' | translate}}\n\n                    </span>\n\n                </p>\n\n            </div>\n\n        </div>\n\n    </div> -->\n\n\n\n    <div class="pl16 pr16 ">\n\n        <div class="center-card">\n\n            <div class="cs-profile" >\n\n                <img src="{{upload_url+karigar_detail.profile}}"  (click)="viewProfiePic()" >\n\n                <ion-icon name="person" *ngIf="upload_url+karigar_detail.profile"></ion-icon>\n\n                <img src="assets/imgs/mansecond.png" *ngIf="upload_url+karigar_detail.profile ==\'\'">\n\n            </div>\n\n            \n\n            <div class="profile-progress">\n\n                <h1>{{\'Welcome\' | translate}}</h1>\n\n                <h2>{{karigar_detail.full_name | titlecase}}</h2>\n\n\n\n\n\n                <!-- <p>{{karigar_detail.city | titlecase}}\n\n                    <span *ngIf="karigar_detail.status ==\'Pending\'" style="color:rgb(255, 234, 0)">\n\n                        <i class="material-icons" style="color:rgb(255, 234, 0)">hourglass_full</i>{{\'Pending For Verification\' | translate}}\n\n                    </span>\n\n                    <span *ngIf="karigar_detail.status ==\'Verified\'">\n\n                        <i class="material-icons" >check_circle</i>{{\'Verified\' | translate}}\n\n                    </span>\n\n                    <span *ngIf="karigar_detail.status ==\'Suspect\'">\n\n                        <i class="material-icons" >info</i>{{\'Suspected\' | translate}}\n\n                    </span>\n\n                    <span *ngIf="karigar_detail.status ==\'Reject\'">\n\n                        <i class="material-icons" >cancel</i>{{\'Rejected\' | translate}}\n\n                    </span>\n\n                </p> -->\n\n            </div>\n\n            \n\n            \n\n            <div class="top-block mb16">\n\n\n\n\n\n\n\n                <div class="cs-name" *ngIf="karigar_detail.user_type ==1">\n\n                    <h2>{{last_point}}</h2>\n\n                    <p>{{\'Last 7 Days point\' | translate}}</p>\n\n                </div>\n\n                <div class="cs-name" *ngIf="karigar_detail.user_type ==1">\n\n                    <h2>{{total_balance_point}}</h2>\n\n                    <p>{{\'Wallet Balance Points\' | translate }}</p>\n\n                </div>\n\n\n\n\n\n\n\n\n\n                <div class="cs-name" *ngIf="karigar_detail.user_type ==2">\n\n                    <h2>{{last_point}}</h2>\n\n                    <p>{{\'Current Financial Year Sale\' | translate}}</p>\n\n                </div>\n\n                <div class="cs-name" *ngIf="karigar_detail.user_type ==2">\n\n                    <h2>{{today_point}}</h2>\n\n                    <p>{{\'Current Month Sale\' | translate }}</p>\n\n                </div>\n\n                \n\n            </div>\n\n        </div>\n\n</div>\n\n\n\n\n\n    <div class="home-grid hm_one" [ngClass]="{\'list-view\': active}">\n\n\n\n\n\n        <!-- <div class="count-info">\n\n            <div class="left-count lft_cntss" *ngIf="karigar_detail.user_type ==1">\n\n                <h2>{{last_point}}</h2>\n\n                <p>{{\'Last 7 Days point\' | translate}}</p>\n\n            </div>\n\n            <div class="left-count lft_cntss" *ngIf="karigar_detail.user_type ==1 ">\n\n                <h2>{{total_balance_point}}</h2>\n\n                <p>{{\'WALLET BALANCE POINTS\' | translate}}</p>\n\n\n\n            </div>\n\n\n\n            <div class="left-count lft_cntss" *ngIf="karigar_detail.user_type ==2">\n\n                <h2>{{last_point}}</h2>\n\n                <p>{{\'TOTAL APPROVED SALE\' | translate}}</p>\n\n            </div>\n\n            <div class="left-count lft_cntss" *ngIf="karigar_detail.user_type ==2 ">\n\n                <h2>{{today_point}}</h2>\n\n                <p>{{\'CURRENT MONTH SALE\' | translate}}</p>\n\n\n\n            </div>\n\n        </div> -->\n\n\n\n        <ul class="wdt_y">\n\n            <li (click)="viewProfie()">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/profiless.png">\n\n                </div>\n\n                <p>{{\'My Profile\' | translate}}</p>\n\n            </li>\n\n            <li (click)="scanCoupon()" *ngIf="karigar_detail.user_type == 1  && karigar_detail.status ==\'Verified\'">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/qr_jal.png">\n\n                </div>\n\n                <p>{{\'Scan\' | translate}}</p>\n\n            </li>\n\n\n\n\n\n\n\n            <li (click)="goOnContractorPage()"\n\n                *ngIf="karigar_detail.user_type == 2 && karigar_detail.status ==\'Verified\'">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/upload_bill.png">\n\n                </div>\n\n                <p>{{\'Upload Bill Option\' | translate}}</p>\n\n            </li>\n\n            <li (click)="goOnPointeListPage()" *ngIf="karigar_detail.user_type !=3">\n\n                <div class="img-view pntss mr_tp">\n\n                    <img src="assets/imgs/home-icon/point_jal.png">\n\n                </div>\n\n                <p>{{\'Point History\' | translate}}</p>\n\n            </li>\n\n            <li (click)="gotoChangeLang()">\n\n                <div class="img-view gft_gal lg_mr">\n\n                    <img src="assets/imgs/home-icon/lan_jal.png">\n\n                </div>\n\n                <p>{{\'Change Language\' | translate}}</p>\n\n            </li>\n\n            <li (click)="goOnDigitalcatPage()">\n\n                <div class="img-view gft_gal pdf_mr">\n\n                    <img src="assets/imgs/home-icon/pad_jal.png">\n\n                </div>\n\n                <p>{{\'Downloads\' | translate}}</p>\n\n            </li>\n\n\n\n            <!-- Pdf Catalogues -->\n\n\n\n            <!-- <li (click)="goOnProductsPage()" >\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/product.svg">\n\n                </div>\n\n                <p>{{\'Digital catalogues\' | translate}}</p>\n\n            </li>\n\n            <li (click)="goOnArrivalProductsPage()" *ngIf="karigar_detail.status ==\'Verified\'">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/new-arrivals.svg">\n\n                </div>\n\n                <p>{{\'New Arrivals\' | translate}}</p>\n\n            </li> -->\n\n            <!-- <li (click)="goOnPlumberList()" *ngIf="karigar_detail.user_type == 2">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/plumber.svg">\n\n                </div>\n\n                <p>{{\'Plumber\' | translate}}</p>\n\n            </li> -->\n\n            <li (click)="goOnOffersListPage()" *ngIf="karigar_detail.user_type!=3">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/offers.png">\n\n                </div>\n\n                <p>{{\'Offers\' | translate}}</p>\n\n            </li>\n\n            <li (click)="goOnGiftGallary()" *ngIf="karigar_detail.user_type!=3">\n\n                <div class="img-view gft_gal gft_mr">\n\n                    <img src="assets/imgs/home-icon/gift_jal.png">\n\n                </div>\n\n                <p>{{\'Gift Gallery\' | translate}}</p>\n\n            </li>\n\n            <!-- goOnGiftListPage -->\n\n            <li (click)="goRedeemType()" *ngIf="karigar_detail.user_type!=3">\n\n                <div class="img-view rdm_mr">\n\n                    <img src="assets/imgs/home-icon/redeem.png">\n\n                </div>\n\n                <p>{{\'Redeem My Points\' | translate}}</p>\n\n            </li>\n\n\n\n            <!-- *ngIf="karigar_detail.user_type!=3" -->\n\n\n\n            <!-- <li (click)="gotoNotification()"> \n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/notify.svg">\n\n                    <span *ngIf="notify_cn" class="custom-point notification-count">{{notify_cn}}</span>\n\n                </div>\n\n                <p>{{\'Notification\' | translate}}</p>\n\n            </li> -->\n\n\n\n\n\n            <li (click)="gotoHistory()" *ngIf="karigar_detail.user_type!=3">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/gift_gal.png">\n\n                </div>\n\n                <p>{{\'Gift Tracker\' | translate}}</p>\n\n            </li>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n            <li class="transparent" (click)="goOnProductPage();">\n\n                <div class="img-view gft_gal">\n\n                    <img src="assets/imgs/home-icon/productjal.png">\n\n                </div>\n\n                <p>{{\'Products\' | translate}}</p>\n\n            </li>\n\n\n\n\n\n\n\n            <li (click)="share()" *ngIf="karigar_detail.user_type!=3">\n\n                <div class="img-view gft_gal shr_mr">\n\n                    <img src="assets/imgs/home-icon/share_png.png">\n\n                    <!-- <span class="custom-point">{{sharepoint}}</span> -->\n\n                </div>\n\n                <p>{{\'Share App\' | translate}}</p>\n\n            </li>\n\n            <!-- <li (click)="goOnFurniturePage()">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/furniture.svg">\n\n                </div>\n\n                <p>{{\'Furniture Ideas\' | translate}}</p>\n\n            </li> -->\n\n\n\n            <li (click)="goOnFeedbackPage()" *ngIf="karigar_detail.user_type!=3">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/chatw.png">\n\n                    <span class="chat-count" *ngIf="feedback_count">{{feedback_count}}</span>\n\n                </div>\n\n                <p>{{\'Chat with us\' | translate}}</p>\n\n            </li>\n\n            <li (click)="goOnVideoPage()">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/vdio.png">\n\n                </div>\n\n                <p>{{\'Videos\' | translate}}</p>\n\n            </li>\n\n            <!-- <li (click)="goOnNewsPage()">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/news.svg">\n\n                </div>\n\n                <p>{{\'Latest News\' | translate}}</p>\n\n            </li> -->\n\n            <!-- <li (click)="goOnOfferProductsPage()" *ngIf="karigar_detail.status ==\'Verified\' && karigar_detail.user_type!=3">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/box.svg">\n\n                </div>\n\n                <p>{{\'Offer Products\' | translate}}</p>\n\n            </li> -->\n\n            <li (click)="goOnfaqPage()">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/faqqq.png">\n\n                </div>\n\n                <p>{{\'FAQ\' | translate}}</p>\n\n            </li>\n\n            <li (click)="goOnAdvanceTextPage()">\n\n                <div class="img-view gft_gal abt_mr">\n\n                    <img src="assets/imgs/home-icon/about_jal.png">\n\n                </div>\n\n                <p>{{\'About Us\' | translate}}</p>\n\n            </li>\n\n\n\n\n\n\n\n            <li (click)="goOnShopImagePage()" *ngIf="karigar_detail.user_type == 2 ">\n\n                <div class="img-view gft_gal sh_mr">\n\n                    <img src="assets/imgs/home-icon/shop_jal.png">\n\n                </div>\n\n                <p>{{\'Shop Image\' | translate}}</p>\n\n            </li>\n\n\n\n\n\n\n\n            <li (click)="goOnContactPage()">\n\n                <div class="img-view">\n\n                    <img src="assets/imgs/home-icon/cntact.png">\n\n                </div>\n\n                <p>{{\'Contact Us\' | translate}}</p>\n\n            </li>\n\n        </ul>\n\n        <!-- <div class="radio-fixed">\n\n            <div class="heading line mt1">\n\n                <p>{{\'Change Language\' | translate}}</p>\n\n            </div>\n\n            <div class="radio-section">\n\n                <ion-list class="choose" radio-group name="language" [(ngModel)]="karigar_detail.language" > \n\n                    <ion-item *ngFor="let row of language">\n\n                        <ion-radio (click)="update_lang()" checked="{{row.prefix == karigar_detail.language}}" value="{{row.prefix}}"></ion-radio>\n\n                        <ion-label>{{karigar_detail.language != \'en\' ? row.hin_language_name : row.language_name}}</ion-label>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div> \n\n        </div> -->\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_8__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_20__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_21__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_32__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureIdeasdetailPageModule", function() { return FurnitureIdeasdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furniture_ideasdetail__ = __webpack_require__(167);
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
var FurnitureIdeasdetailPageModule = /** @class */ (function () {
    function FurnitureIdeasdetailPageModule() {
    }
    FurnitureIdeasdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__furniture_ideasdetail__["a" /* FurnitureIdeasdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__furniture_ideasdetail__["a" /* FurnitureIdeasdetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], FurnitureIdeasdetailPageModule);
    return FurnitureIdeasdetailPageModule;
}());

//# sourceMappingURL=furniture-ideasdetail.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureIdeassharePageModule", function() { return FurnitureIdeassharePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furniture_ideasshare__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FurnitureIdeassharePageModule = /** @class */ (function () {
    function FurnitureIdeassharePageModule() {
    }
    FurnitureIdeassharePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__furniture_ideasshare__["a" /* FurnitureIdeassharePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__furniture_ideasshare__["a" /* FurnitureIdeassharePage */]),
            ],
        })
    ], FurnitureIdeassharePageModule);
    return FurnitureIdeassharePageModule;
}());

//# sourceMappingURL=furniture-ideasshare.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftDetailPageModule", function() { return GiftDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gift_detail__ = __webpack_require__(154);
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
var GiftDetailPageModule = /** @class */ (function () {
    function GiftDetailPageModule() {
    }
    GiftDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gift_detail__["a" /* GiftDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gift_detail__["a" /* GiftDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], GiftDetailPageModule);
    return GiftDetailPageModule;
}());

//# sourceMappingURL=gift-detail.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftListPageModule", function() { return GiftListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gift_list__ = __webpack_require__(73);
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
var GiftListPageModule = /** @class */ (function () {
    function GiftListPageModule() {
    }
    GiftListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gift_list__["a" /* GiftListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gift_list__["a" /* GiftListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], GiftListPageModule);
    return GiftListPageModule;
}());

//# sourceMappingURL=gift-list.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLoginPageModule", function() { return MobileLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobile_login__ = __webpack_require__(97);
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
var MobileLoginPageModule = /** @class */ (function () {
    function MobileLoginPageModule() {
    }
    MobileLoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mobile_login__["a" /* MobileLoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mobile_login__["a" /* MobileLoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], MobileLoginPageModule);
    return MobileLoginPageModule;
}());

//# sourceMappingURL=mobile-login.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var RegistrationPageModule = /** @class */ (function () {
    function RegistrationPageModule() {
    }
    RegistrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registration__["a" /* RegistrationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], RegistrationPageModule);
    return RegistrationPageModule;
}());

//# sourceMappingURL=registration.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHomePageModule", function() { return MainHomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_home__ = __webpack_require__(271);
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
var MainHomePageModule = /** @class */ (function () {
    function MainHomePageModule() {
    }
    MainHomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_home__["a" /* MainHomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main_home__["a" /* MainHomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], MainHomePageModule);
    return MainHomePageModule;
}());

//# sourceMappingURL=main-home.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailPageModule", function() { return NewsDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_detail__ = __webpack_require__(272);
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
var NewsDetailPageModule = /** @class */ (function () {
    function NewsDetailPageModule() {
    }
    NewsDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_detail__["a" /* NewsDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news_detail__["a" /* NewsDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], NewsDetailPageModule);
    return NewsDetailPageModule;
}());

//# sourceMappingURL=news-detail.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(161);
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
var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], NewsPageModule);
    return NewsPageModule;
}());

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(158);
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
var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferListPageModule", function() { return OfferListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_list__ = __webpack_require__(163);
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
var OfferListPageModule = /** @class */ (function () {
    function OfferListPageModule() {
    }
    OfferListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer_list__["a" /* OfferListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer_list__["a" /* OfferListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], OfferListPageModule);
    return OfferListPageModule;
}());

//# sourceMappingURL=offer-list.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferProductDetailPageModule", function() { return OfferProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_product_detail__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfferProductDetailPageModule = /** @class */ (function () {
    function OfferProductDetailPageModule() {
    }
    OfferProductDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer_product_detail__["a" /* OfferProductDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer_product_detail__["a" /* OfferProductDetailPage */]),
            ],
        })
    ], OfferProductDetailPageModule);
    return OfferProductDetailPageModule;
}());

//# sourceMappingURL=offer-product-detail.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferProductPageModule", function() { return OfferProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_product__ = __webpack_require__(285);
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
var OfferProductPageModule = /** @class */ (function () {
    function OfferProductPageModule() {
    }
    OfferProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer_product__["a" /* OfferProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer_product__["a" /* OfferProductPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], OfferProductPageModule);
    return OfferProductPageModule;
}());

//# sourceMappingURL=offer-product.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlumberaddPageModule", function() { return PlumberaddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redeem_type_redeem_type_module__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plumberadd__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PlumberaddPageModule = /** @class */ (function () {
    function PlumberaddPageModule() {
    }
    PlumberaddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__plumberadd__["a" /* PlumberaddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__plumberadd__["a" /* PlumberaddPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: __WEBPACK_IMPORTED_MODULE_4__redeem_type_redeem_type_module__["createTranslateLoader"],
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], PlumberaddPageModule);
    return PlumberaddPageModule;
}());

//# sourceMappingURL=plumberadd.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlumberdetailPageModule", function() { return PlumberdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redeem_type_redeem_type_module__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plumberdetail__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PlumberdetailPageModule = /** @class */ (function () {
    function PlumberdetailPageModule() {
    }
    PlumberdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__plumberdetail__["a" /* PlumberdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__plumberdetail__["a" /* PlumberdetailPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: __WEBPACK_IMPORTED_MODULE_4__redeem_type_redeem_type_module__["createTranslateLoader"],
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], PlumberdetailPageModule);
    return PlumberdetailPageModule;
}());

//# sourceMappingURL=plumberdetail.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlumberlistPageModule", function() { return PlumberlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redeem_type_redeem_type_module__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plumberlist__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PlumberlistPageModule = /** @class */ (function () {
    function PlumberlistPageModule() {
    }
    PlumberlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__plumberlist__["a" /* PlumberlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__plumberlist__["a" /* PlumberlistPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: __WEBPACK_IMPORTED_MODULE_4__redeem_type_redeem_type_module__["createTranslateLoader"],
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], PlumberlistPageModule);
    return PlumberlistPageModule;
}());

//# sourceMappingURL=plumberlist.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointDetailPageModule", function() { return PointDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point_detail__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PointDetailPageModule = /** @class */ (function () {
    function PointDetailPageModule() {
    }
    PointDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__point_detail__["a" /* PointDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__point_detail__["a" /* PointDetailPage */]),
            ],
        })
    ], PointDetailPageModule);
    return PointDetailPageModule;
}());

//# sourceMappingURL=point-detail.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointListPageModule", function() { return PointListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__point_list__ = __webpack_require__(274);
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
var PointListPageModule = /** @class */ (function () {
    function PointListPageModule() {
    }
    PointListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__point_list__["a" /* PointListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__point_list__["a" /* PointListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], PointListPageModule);
    return PointListPageModule;
}());

//# sourceMappingURL=point-list.module.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail__ = __webpack_require__(197);
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
var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_detail__["a" /* ProductDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());

//# sourceMappingURL=product-detail.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSubdetailPageModule", function() { return ProductSubdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_subdetail__ = __webpack_require__(165);
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
var ProductSubdetailPageModule = /** @class */ (function () {
    function ProductSubdetailPageModule() {
    }
    ProductSubdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_subdetail__["a" /* ProductSubdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_subdetail__["a" /* ProductSubdetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ProductSubdetailPageModule);
    return ProductSubdetailPageModule;
}());

//# sourceMappingURL=product-subdetail.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(278);
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
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(94);
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
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveRemarkModalPageModule", function() { return ReceiveRemarkModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receive_remark_modal__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReceiveRemarkModalPageModule = /** @class */ (function () {
    function ReceiveRemarkModalPageModule() {
    }
    ReceiveRemarkModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__receive_remark_modal__["a" /* ReceiveRemarkModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__receive_remark_modal__["a" /* ReceiveRemarkModalPage */]),
            ],
        })
    ], ReceiveRemarkModalPageModule);
    return ReceiveRemarkModalPageModule;
}());

//# sourceMappingURL=receive-remark-modal.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoupanCodePageModule", function() { return CoupanCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupan_code__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoupanCodePageModule = /** @class */ (function () {
    function CoupanCodePageModule() {
    }
    CoupanCodePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__coupan_code__["a" /* CoupanCodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__coupan_code__["a" /* CoupanCodePage */]),
            ],
        })
    ], CoupanCodePageModule);
    return CoupanCodePageModule;
}());

//# sourceMappingURL=coupan-code.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scan__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScanPageModule = /** @class */ (function () {
    function ScanPageModule() {
    }
    ScanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__scan__["a" /* ScanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scan__["a" /* ScanPage */]),
            ],
        })
    ], ScanPageModule);
    return ScanPageModule;
}());

//# sourceMappingURL=scan.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingDetailPageModule", function() { return ShippingDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shipping_detail__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offers_offers_module__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ShippingDetailPageModule = /** @class */ (function () {
    function ShippingDetailPageModule() {
    }
    ShippingDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__shipping_detail__["a" /* ShippingDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__shipping_detail__["a" /* ShippingDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: __WEBPACK_IMPORTED_MODULE_5__offers_offers_module__["createTranslateLoader"],
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], ShippingDetailPageModule);
    return ShippingDetailPageModule;
}());

//# sourceMappingURL=shipping-detail.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(155);
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
var TermsPageModule = /** @class */ (function () {
    function TermsPageModule() {
    }
    TermsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], TermsPageModule);
    return TermsPageModule;
}());

//# sourceMappingURL=terms.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction__ = __webpack_require__(72);
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
var TransactionPageModule = /** @class */ (function () {
    function TransactionPageModule() {
    }
    TransactionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction__["a" /* TransactionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction__["a" /* TransactionPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], TransactionPageModule);
    return TransactionPageModule;
}());

//# sourceMappingURL=transaction.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPageModule", function() { return VideoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video__ = __webpack_require__(160);
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
var VideoPageModule = /** @class */ (function () {
    function VideoPageModule() {
    }
    VideoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__video__["a" /* VideoPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], VideoPageModule);
    return VideoPageModule;
}());

//# sourceMappingURL=video.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfilePageModule", function() { return ViewProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_profile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pinch_zoom__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViewProfilePageModule = /** @class */ (function () {
    function ViewProfilePageModule() {
    }
    ViewProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_profile__["a" /* ViewProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ngx_pinch_zoom__["a" /* PinchZoomModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_profile__["a" /* ViewProfilePage */]),
            ],
        })
    ], ViewProfilePageModule);
    return ViewProfilePageModule;
}());

//# sourceMappingURL=view-profile.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingSitePageModule", function() { return WorkingSitePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__working_site__ = __webpack_require__(281);
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
var WorkingSitePageModule = /** @class */ (function () {
    function WorkingSitePageModule() {
    }
    WorkingSitePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__working_site__["a" /* WorkingSitePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__working_site__["a" /* WorkingSitePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], WorkingSitePageModule);
    return WorkingSitePageModule;
}());

//# sourceMappingURL=working-site.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(477);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_pointtransferremark_pointtransferremark_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_plumberlist_plumberlist_module__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_plumberdetail_plumberdetail_module__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_plumberadd_plumberadd_module__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_redeem_type_redeem_type_module__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_digitalcatalog_digitalcatalog_module__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_section_otp_otp__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_section_login_screen_login_screen__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_pinch_zoom__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_scane_pages_coupan_code_coupan_code_module__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_scane_pages_scan_scan_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_gift_gallery_gift_detail_gift_detail_module__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_gift_gallery_gift_list_gift_list_module__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_offers_offers_module__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cancelpolicy_modal_cancelpolicy_modal_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cancelation_policy_cancelation_policy_module__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_points_point_list_point_list_module__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_points_point_detail_point_detail_module__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile_module__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_main_home_main_home_module__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_products_products_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_terms_terms_module__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_advance_text_advance_text_module__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_product_detail_product_detail_module__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_product_subdetail_product_subdetail_module__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_transaction_transaction_module__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_shipping_detail_shipping_detail_module__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_notification_notification_module__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_contact_contact_module__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_video_video_module__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_news_news_module__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_news_detail_news_detail_module__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_feedback_feedback_module__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_chating_chating_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_aboutus_modal_aboutus_modal_module__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_http__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_offer_list_offer_list_module__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pipes_safe_safe__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_barcode_scanner__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_view_profile_view_profile_module__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_push__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_in_app_browser__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_description_model_description_model_module__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_receive_remark_modal_receive_remark_modal_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_app_version__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ngx_translate_http_loader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_language_language__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_social_sharing__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_compass_compass_module__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ionic_native_device_orientation__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_working_site_working_site_module__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_site_popover_site_popover__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_furniture_ideas_furniture_ideas_module__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_faq_faq_module__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_faq_answer_faq_answer_module__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_furniture_ideasdetail_furniture_ideasdetail_module__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_furniture_ideasshare_furniture_ideasshare_module__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__ionic_native_file_transfer__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ionic_native_file__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_login_section_mobile_login_mobile_login_module__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_arrival_product_arrival_product_module__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_arrival_detail_arrival_detail_module__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_offer_product_offer_product_module__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_offer_product_detail_offer_product_detail_module__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__pages_filter_product_filter_product_module__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pages_contractor_contractor_list_contractor_list_module__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_contractor_contractor_add_contractor_add_module__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__pages_contractor_contractor_detail_contractor_detail_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83_ionic_selectable__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__pages_login_section_registration_registration_module__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__ionic_native_market__ = __webpack_require__(471);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































































// import { CompassPage } from '../pages/compass/compass';























// import { ShopImagePage } from '../pages/shop-image/shop-image';
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_60__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                // ShopImagePage,
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_section_otp_otp__["a" /* OtpPage */],
                // RegistrationPage,
                __WEBPACK_IMPORTED_MODULE_14__pages_login_section_login_screen_login_screen__["a" /* LoginScreenPage */],
                __WEBPACK_IMPORTED_MODULE_51__pipes_safe_safe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_61__pages_language_language__["a" /* LanguagePage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_site_popover_site_popover__["a" /* SitePopoverPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aboutus-modal/aboutus-modal.module#AboutusModalPageModule', name: 'AboutusModalPage', segment: 'aboutus-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/advance-text/advance-text.module#AdvanceTextPageModule', name: 'AdvanceTextPage', segment: 'advance-text', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/arrival-detail/arrival-detail.module#ArrivalDetailPageModule', name: 'ArrivalDetailPage', segment: 'arrival-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/arrival-product/arrival-product.module#ArrivalProductPageModule', name: 'ArrivalProductPage', segment: 'arrival-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cancelation-policy/cancelation-policy.module#CancelationPolicyPageModule', name: 'CancelationPolicyPage', segment: 'cancelation-policy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cancelpolicy-modal/cancelpolicy-modal.module#CancelpolicyModalPageModule', name: 'CancelpolicyModalPage', segment: 'cancelpolicy-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chating/chating.module#ChatingPageModule', name: 'ChatingPage', segment: 'chating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compass/compass.module#CompassPageModule', name: 'CompassPage', segment: 'compass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contractor/contractor-add/contractor-add.module#ContractorAddPageModule', name: 'ContractorAddPage', segment: 'contractor-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contractor/contractor-detail/contractor-detail.module#ContractorDetailPageModule', name: 'ContractorDetailPage', segment: 'contractor-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contractor/contractor-list/contractor-list.module#ContractorListPageModule', name: 'ContractorListPage', segment: 'contractor-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/description-model/description-model.module#DescriptionModelPageModule', name: 'DescriptionModelPage', segment: 'description-model', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/digitalcatalog/digitalcatalog.module#DigitalcatalogPageModule', name: 'DigitalcatalogPage', segment: 'digitalcatalog', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq-answer/faq-answer.module#FaqAnswerPageModule', name: 'FaqAnswerPage', segment: 'faq-answer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-product/filter-product.module#FilterProductPageModule', name: 'FilterProductPage', segment: 'filter-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/furniture-ideas/furniture-ideas.module#FurnitureIdeasPageModule', name: 'FurnitureIdeasPage', segment: 'furniture-ideas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/furniture-ideasdetail/furniture-ideasdetail.module#FurnitureIdeasdetailPageModule', name: 'FurnitureIdeasdetailPage', segment: 'furniture-ideasdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/furniture-ideasshare/furniture-ideasshare.module#FurnitureIdeassharePageModule', name: 'FurnitureIdeassharePage', segment: 'furniture-ideasshare', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gift-gallery/gift-detail/gift-detail.module#GiftDetailPageModule', name: 'GiftDetailPage', segment: 'gift-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gift-gallery/gift-list/gift-list.module#GiftListPageModule', name: 'GiftListPage', segment: 'gift-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/language/language.module#LanguagePageModule', name: 'LanguagePage', segment: 'language', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-section/login-screen/login-screen.module#LoginScreenPageModule', name: 'LoginScreenPage', segment: 'login-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-section/mobile-login/mobile-login.module#MobileLoginPageModule', name: 'MobileLoginPage', segment: 'mobile-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-section/otp/otp.module#OtpPageModule', name: 'OtpPage', segment: 'otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-section/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-category/main-category.module#MainCategoryPageModule', name: 'MainCategoryPage', segment: 'main-category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-home/main-home.module#MainHomePageModule', name: 'MainHomePage', segment: 'main-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-detail/news-detail.module#NewsDetailPageModule', name: 'NewsDetailPage', segment: 'news-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-list/offer-list.module#OfferListPageModule', name: 'OfferListPage', segment: 'offer-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-product-detail/offer-product-detail.module#OfferProductDetailPageModule', name: 'OfferProductDetailPage', segment: 'offer-product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-product/offer-product.module#OfferProductPageModule', name: 'OfferProductPage', segment: 'offer-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offers/offers.module#OffersPageModule', name: 'OffersPage', segment: 'offers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plumberadd/plumberadd.module#PlumberaddPageModule', name: 'PlumberaddPage', segment: 'plumberadd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plumberdetail/plumberdetail.module#PlumberdetailPageModule', name: 'PlumberdetailPage', segment: 'plumberdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plumberlist/plumberlist.module#PlumberlistPageModule', name: 'PlumberlistPage', segment: 'plumberlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/points/point-detail/point-detail.module#PointDetailPageModule', name: 'PointDetailPage', segment: 'point-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/points/point-list/point-list.module#PointListPageModule', name: 'PointListPage', segment: 'point-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pointtransferremark/pointtransferremark.module#PointtransferremarkPageModule', name: 'PointtransferremarkPage', segment: 'pointtransferremark', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-subdetail/product-subdetail.module#ProductSubdetailPageModule', name: 'ProductSubdetailPage', segment: 'product-subdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-edit-modal/profile-edit-modal.module#ProfileEditModalPageModule', name: 'ProfileEditModalPage', segment: 'profile-edit-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receive-remark-modal/receive-remark-modal.module#ReceiveRemarkModalPageModule', name: 'ReceiveRemarkModalPage', segment: 'receive-remark-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/redeem-type/redeem-type.module#RedeemTypePageModule', name: 'RedeemTypePage', segment: 'redeem-type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scane-pages/coupan-code/coupan-code.module#CoupanCodePageModule', name: 'CoupanCodePage', segment: 'coupan-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scane-pages/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shipping-detail/shipping-detail.module#ShippingDetailPageModule', name: 'ShippingDetailPage', segment: 'shipping-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shop-image/shop-image.module#ShopImagePageModule', name: 'ShopImagePage', segment: 'shop-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/site-popover/site-popover.module#SitePopoverPageModule', name: 'SitePopoverPage', segment: 'site-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/success-modal/success-modal.module#SuccessModalPageModule', name: 'SuccessModalPage', segment: 'success-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms/terms.module#TermsPageModule', name: 'TermsPage', segment: 'terms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction/transaction.module#TransactionPageModule', name: 'TransactionPage', segment: 'transaction', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updatebankdetail/updatebankdetail.module#UpdatebankdetailPageModule', name: 'UpdatebankdetailPage', segment: 'updatebankdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video/video.module#VideoPageModule', name: 'VideoPage', segment: 'video', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-profile/view-profile.module#ViewProfilePageModule', name: 'ViewProfilePage', segment: 'view-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/working-site/working-site.module#WorkingSitePageModule', name: 'WorkingSitePage', segment: 'working-site', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__pages_scane_pages_scan_scan_module__["ScanPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_scane_pages_coupan_code_coupan_code_module__["CoupanCodePageModule"],
                __WEBPACK_IMPORTED_MODULE_83_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_84__pages_login_section_registration_registration_module__["RegistrationPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_gift_gallery_gift_detail_gift_detail_module__["GiftDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_gift_gallery_gift_list_gift_list_module__["GiftListPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_offers_offers_module__["OffersPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__pages_pointtransferremark_pointtransferremark_module__["PointtransferremarkPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_cancelpolicy_modal_cancelpolicy_modal_module__["CancelpolicyModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_53__pages_view_profile_view_profile_module__["ViewProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_cancelation_policy_cancelation_policy_module__["CancelationPolicyPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_points_point_list_point_list_module__["PointListPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_points_point_detail_point_detail_module__["PointDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_3__pages_plumberadd_plumberadd_module__["PlumberaddPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__pages_plumberdetail_plumberdetail_module__["PlumberdetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_plumberlist_plumberlist_module__["PlumberlistPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_main_home_main_home_module__["MainHomePageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_products_products_module__["ProductsPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_terms_terms_module__["TermsPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_advance_text_advance_text_module__["AdvanceTextPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_product_detail_product_detail_module__["ProductDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_product_subdetail_product_subdetail_module__["ProductSubdetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_transaction_transaction_module__["TransactionPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_shipping_detail_shipping_detail_module__["ShippingDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_notification_notification_module__["NotificationPageModule"],
                __WEBPACK_IMPORTED_MODULE_5__pages_digitalcatalog_digitalcatalog_module__["DigitalcatalogPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_contact_contact_module__["ContactPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__pages_redeem_type_redeem_type_module__["RedeemTypePageModule"],
                __WEBPACK_IMPORTED_MODULE_63__pages_compass_compass_module__["CompassPageModule"],
                // LanguagePageModule,
                __WEBPACK_IMPORTED_MODULE_38__pages_video_video_module__["VideoPageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_news_news_module__["NewsPageModule"],
                __WEBPACK_IMPORTED_MODULE_16_ngx_pinch_zoom__["a" /* PinchZoomModule */],
                __WEBPACK_IMPORTED_MODULE_40__pages_news_detail_news_detail_module__["NewsDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_feedback_feedback_module__["FeedbackPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_chating_chating_module__["ChatingPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_47__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_43__pages_aboutus_modal_aboutus_modal_module__["AboutusModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_50__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_49__pages_offer_list_offer_list_module__["OfferListPageModule"],
                __WEBPACK_IMPORTED_MODULE_56__pages_description_model_description_model_module__["DescriptionModelPageModule"],
                __WEBPACK_IMPORTED_MODULE_57__pages_receive_remark_modal_receive_remark_modal_module__["ReceiveRemarkModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_65__pages_working_site_working_site_module__["WorkingSitePageModule"],
                __WEBPACK_IMPORTED_MODULE_67__pages_furniture_ideas_furniture_ideas_module__["FurnitureIdeasPageModule"],
                __WEBPACK_IMPORTED_MODULE_68__pages_faq_faq_module__["FaqPageModule"],
                __WEBPACK_IMPORTED_MODULE_69__pages_faq_answer_faq_answer_module__["FaqAnswerPageModule"],
                __WEBPACK_IMPORTED_MODULE_74__pages_login_section_mobile_login_mobile_login_module__["MobileLoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_70__pages_furniture_ideasdetail_furniture_ideasdetail_module__["FurnitureIdeasdetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_71__pages_furniture_ideasshare_furniture_ideasshare_module__["FurnitureIdeassharePageModule"],
                __WEBPACK_IMPORTED_MODULE_75__pages_arrival_product_arrival_product_module__["ArrivalProductPageModule"],
                __WEBPACK_IMPORTED_MODULE_76__pages_arrival_detail_arrival_detail_module__["ArrivalDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_77__pages_offer_product_offer_product_module__["OfferProductPageModule"],
                __WEBPACK_IMPORTED_MODULE_78__pages_offer_product_detail_offer_product_detail_module__["OfferProductDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_79__pages_filter_product_filter_product_module__["FilterProductPageModule"],
                __WEBPACK_IMPORTED_MODULE_80__pages_contractor_contractor_list_contractor_list_module__["ContractorListPageModule"],
                __WEBPACK_IMPORTED_MODULE_81__pages_contractor_contractor_add_contractor_add_module__["ContractorAddPageModule"],
                __WEBPACK_IMPORTED_MODULE_82__pages_contractor_contractor_detail_contractor_detail_module__["ContractorDetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_59__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_59__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_45__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_section_otp_otp__["a" /* OtpPage */],
                // RegistrationPage,
                __WEBPACK_IMPORTED_MODULE_14__pages_login_section_login_screen_login_screen__["a" /* LoginScreenPage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_language_language__["a" /* LanguagePage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_site_popover_site_popover__["a" /* SitePopoverPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_44__providers_dbservice_dbservice__["a" /* DbserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_46__providers_constant_constant__["a" /* ConstantProvider */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_72__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_64__ionic_native_device_orientation__["a" /* DeviceOrientation */],
                __WEBPACK_IMPORTED_MODULE_58__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_62__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_72__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_73__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_85__ionic_native_market__["a" /* Market */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_constant_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewProfilePage = /** @class */ (function () {
    function ViewProfilePage(navCtrl, navParams, viewCtrl, storage, db, translate, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.db = db;
        this.translate = translate;
        this.constant = constant;
        this.lang = '';
        this.tokenInfo = {};
        this.profile_pic = '';
        this.type = '';
        this.uploadUrl = '';
    }
    ViewProfilePage.prototype.ionViewDidLoad = function () {
        this.uploadUrl = this.constant.upload_url;
        this.get_user_lang();
        this.profile_pic = this.navParams.get("Image");
        this.type = this.navParams.get("type");
    };
    ViewProfilePage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ViewProfilePage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.setDefaultLang(_this.lang);
                _this.translate.use(_this.lang);
            });
        });
    };
    ViewProfilePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ViewProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-profile',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/view-profile/view-profile.html"*/'\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar (click)="closeModal()">\n\n      <ion-title ><i class="material-icons" style="padding-top: 6px;">arrow_back</i></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding style="background: #000;">\n\n  <div class="modal-center">\n\n    <div class="cs-model-body">\n\n      <!-- <div class="heading-section">\n\n        <p></p>\n\n        <a (click)="closeModal()" class="cs-close"><i class="material-icons">clear</i></a>	\n\n      </div> -->\n\n      <div class="img-radius flat-img">\n\n        <pinch-zoom *ngIf="type != \'base_64\'" class="pinch-big_zoom">\n\n          <img  [src]="uploadUrl+profile_pic">\n\n        </pinch-zoom>\n\n        <pinch-zoom *ngIf="type == \'base_64\'" class="zoom-img">\n\n          <img  [src]="profile_pic">\n\n        </pinch-zoom>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/view-profile/view-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__providers_constant_constant__["a" /* ConstantProvider */]])
    ], ViewProfilePage);
    return ViewProfilePage;
}());

//# sourceMappingURL=view-profile.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { TabsPage } from '../tabs/tabs';





var AboutusModalPage = /** @class */ (function () {
    function AboutusModalPage(navCtrl, navParams, viewCtrl, platform, db, storage, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.platform = platform;
        this.db = db;
        this.storage = storage;
        this.translate = translate;
        this.tokenInfo = {};
        this.lang = '';
    }
    AboutusModalPage.prototype.ionViewDidLoad = function () {
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        console.log(this.translate.get("if you any question"));
        this.translate.get("if you any question")
            .subscribe(function (resp) {
            console.log(resp);
        });
        this.get_user_lang();
    };
    AboutusModalPage.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    AboutusModalPage.prototype.exitapp = function () {
        console.log('exit');
        this.platform.exitApp();
    };
    AboutusModalPage.prototype.gotoHomePage = function () {
        // this.navCtrl.setRoot(TabsPage,{index:'0'});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    AboutusModalPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    AboutusModalPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_4_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
    ], AboutusModalPage.prototype, "nav", void 0);
    AboutusModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus-modal',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/aboutus-modal/aboutus-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>aboutus-modal</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="main-modal">\n\n        <div class="modal-box">\n\n            <h1> {{\'Jupiter AquaLines\' | translate}}</h1>\n\n            <h2>{{\'Your request to access the  Jupiter AquaLines is under review. You will be able to log in as soon as the overseeing Admin acknowledges your application\' | translate}}.</h2>\n\n            <p>{{\'Meanwhile, you can contact us\' | translate}} <a href="tel:1800 212 0192">1800 212 0192</a> {{\'or mail us\' | translate}} <span>jal@jaljoy.com</span> {{\'if you any question\' | translate}}.</p>\n\n            <div class="modal-cls" (click)="gotoHomePage()">\n\n                <i class="material-icons">cancel</i>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/aboutus-modal/aboutus-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], AboutusModalPage);
    return AboutusModalPage;
}());

//# sourceMappingURL=aboutus-modal.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_section_mobile_login_mobile_login__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LanguagePage = /** @class */ (function () {
    function LanguagePage(navCtrl, navParams, db, storage, translate, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.storage = storage;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.come_from = "";
        this.karigar_id = "";
        this.lang = 'en';
        this.inputs = [];
        this.tokenInfo = {};
        this.karigar_detail = {};
        this.chs_lng = "";
        this.no = "";
        this.yes = "";
        this.sure = "";
    }
    LanguagePage.prototype.ionViewDidLoad = function () {
        // commented
        // this.presentLoading();
        // this.change_language();
        var _this = this;
        this.storage.get('token')
            .then(function (resp) {
            console.log(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__(resp));
            var tokendata = __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(resp);
            console.log(tokendata);
            _this.karigar_id = tokendata.sub;
            _this.get_user_lang();
        });
        this.come_from = this.navParams.get("come_from");
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        console.log('ionViewDidLoad LanguagePage');
    };
    LanguagePage.prototype.presentLoading = function () {
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
    LanguagePage.prototype.change_language = function () {
        var _this = this;
        this.inputs = [];
        this.db.get_rqst("app_karigar/get_languages")
            .subscribe(function (resp) {
            console.log(resp);
            _this.inputs = resp;
            _this.loading.dismiss();
            console.log(_this.inputs);
        });
    };
    LanguagePage.prototype.continue = function () {
        console.log(this.lang);
        console.log(this.come_from);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_section_mobile_login_mobile_login__["a" /* MobileLoginPage */], { "lang": this.lang });
    };
    LanguagePage.prototype.set_lang = function () {
        this.translate.use(this.lang);
    };
    LanguagePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_5_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    LanguagePage.prototype.update_lang = function () {
        var _this = this;
        this.translate.get("Change Language")
            .subscribe(function (resp) {
            _this.chs_lng = resp;
        });
        this.translate.get("No")
            .subscribe(function (resp) {
            _this.no = resp;
        });
        this.translate.get("Yes")
            .subscribe(function (resp) {
            _this.yes = resp;
        });
        this.translate.get("Are you sure")
            .subscribe(function (resp) {
            _this.chs_lng = resp;
        });
        var updateAlert = this.alertCtrl.create({
            title: this.chs_lng,
            message: this.sure,
            buttons: [
                {
                    text: this.no,
                },
                {
                    text: this.yes,
                    handler: function () {
                        _this.karigar_detail.language = _this.lang;
                        _this.karigar_detail.id = _this.karigar_id;
                        _this.db.post_rqst({ "data": _this.karigar_detail }, "app_karigar/update_language")
                            .subscribe(function (resp) {
                            console.log(resp);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                        });
                    }
                }
            ]
        });
        updateAlert.present();
    };
    LanguagePage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.karigar_id }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    LanguagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-language',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/language/language.html"*/'\n\n<ion-header no-border>\n\n  <ion-toolbar color="white" style="min-height:50px">\n\n    <ion-title>\n\n      <div class="logo no-margin" >\n\n        <img  style="margin-top:8px;" src="assets/imgs/logo.png">\n\n      </div>\n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <div class="heading line mt18 mb16">\n\n    <p class="font16">भाषा चुनिए / Choose Your Language</p>\n\n  </div>\n\n  <ion-list radio-group class="mt15" name="lang" [(ngModel)]="lang">\n\n    <ion-item>\n\n      <ion-label>अंग्रेज़ी  (English)</ion-label>\n\n      <ion-radio (click)="set_lang()" checked="{{\'en\' == lang}}" value="en"></ion-radio>\n\n    </ion-item>    \n\n    \n\n    <ion-item>\n\n      <ion-label>हिंदी (Hindi)</ion-label>\n\n      <ion-radio (click)="set_lang()" checked="{{\'hin\' == lang}}" value="hin"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <!-- <button ion-button full>Full Button</button> -->\n\n  <button ion-button full color="primary" *ngIf="lang!=\'\'" (click)="karigar_id ? update_lang() : continue()">{{\'Continue\' | translate}}</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/language/language.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LanguagePage);
    return LanguagePage;
}());

//# sourceMappingURL=language.js.map

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DbserviceProvider = /** @class */ (function () {
    function DbserviceProvider(http, constant, http1, storage) {
        this.http = http;
        this.constant = constant;
        this.http1 = http1;
        this.storage = storage;
        this.token_value = "";
        this.karigar_id = '';
        this.karigar_status = '';
        this.karigar_info = '';
        this.filters = {};
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        console.log('Hello DbserviceProvider Provider');
        this.token();
    }
    DbserviceProvider.prototype.set_token_value = function (value) {
        this.token_data = value;
    };
    DbserviceProvider.prototype.get_token_data = function () {
        return this.token_data;
    };
    DbserviceProvider.prototype.token = function () {
        var _this = this;
        console.log('token');
        this.storage.get('token').then(function (val) {
            _this.token_value = val;
            _this.tokenInfo = _this.getDecodedAccessToken(_this.token_value);
            if (_this.tokenInfo) {
                _this.karigar_id = _this.tokenInfo.sub;
                console.log(_this.karigar_id);
            }
        });
    };
    DbserviceProvider.prototype.get_rqst = function (fn) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        headers = headers.set('Token', 'Bearer ' + this.token_value);
        return this.http.get(this.constant.rootUrl + fn, { headers: headers });
    };
    DbserviceProvider.prototype.post_rqst = function (request_data, fn) {
        this.token_value = this.get_token_data();
        this.tokenInfo = this.getDecodedAccessToken(this.token_value); // decode token
        if (this.tokenInfo) {
            this.karigar_id = this.tokenInfo.sub;
            console.log(this.karigar_id);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        headers = headers.set('Token', 'Bearer ' + this.token_value);
        return this.http.post(this.constant.rootUrl + fn, JSON.stringify(request_data), { headers: headers });
    };
    DbserviceProvider.prototype.fileData = function (request_data, fn) {
        this.headers.append('Content-Type', undefined);
        return this.http.post(this.constant.rootUrl + fn, request_data, { headers: this.headers });
    };
    DbserviceProvider.prototype.get_filters = function () {
        return this.filters;
    };
    DbserviceProvider.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_3_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    DbserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], DbserviceProvider);
    return DbserviceProvider;
}());

//# sourceMappingURL=dbservice.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemTypePageModule", function() { return RedeemTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redeem_type__ = __webpack_require__(264);
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
var RedeemTypePageModule = /** @class */ (function () {
    function RedeemTypePageModule() {
    }
    RedeemTypePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__redeem_type__["a" /* RedeemTypePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__redeem_type__["a" /* RedeemTypePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], RedeemTypePageModule);
    return RedeemTypePageModule;
}());

//# sourceMappingURL=redeem-type.module.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipping_detail_shipping_detail__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chating_chating__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__receive_remark_modal_receive_remark_modal__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TransactionPage = /** @class */ (function () {
    function TransactionPage(navCtrl, navParams, service, loadingCtrl, app, alertCtrl, modalCtrl, storage, translate, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.transaction_detail = [];
        this.balance_point = '';
        this.filter = {};
        this.tokenInfo = {};
        this.lang = '';
        this.flag = '';
        // this.presentLoading();
    }
    TransactionPage.prototype.ionViewWillEnter = function () {
        this.get_user_lang();
        console.log('ionViewDidLoad TransactionPage');
        this.getTransactionDetail();
    };
    TransactionPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getTransactionDetail();
        refresher.complete();
    };
    TransactionPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    TransactionPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_8_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    TransactionPage.prototype.goOnShippingPage = function (id, gift_id, type) {
        console.log('shipping');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__shipping_detail_shipping_detail__["a" /* ShippingDetailPage */], { 'id': id, 'gift_id': gift_id, 'redeem_type': type });
        // this.navCtrl.push(ShippingDetailPage,{'id':id,'gift_id':gift_id, 'type':type});
    };
    TransactionPage.prototype.goOnChatingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chating_chating__["a" /* ChatingPage */]);
    };
    TransactionPage.prototype.getTransactionDetail = function () {
        var _this = this;
        this.presentLoading();
        this.filter.limit = 0;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'filter': this.filter }, 'app_karigar/transaction')
            .subscribe(function (r) {
            console.log(r);
            if (r) {
                _this.loading.dismiss();
                _this.transaction_detail = r['transaction'];
                _this.balance_point = r['karigar'].balance_point;
                _this.total_balance_point = parseInt(r['karigar'].balance_point) + parseInt(r['karigar'].referal_point_balance);
            }
        });
    };
    TransactionPage.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    };
    TransactionPage.prototype.recvConfirmation = function (gift_id, redeem_type) {
        var ReceiveModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__receive_remark_modal_receive_remark_modal__["a" /* ReceiveRemarkModalPage */], { 'gift_id': gift_id, 'redeem_type': redeem_type });
        ReceiveModal.present();
    };
    TransactionPage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    TransactionPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        console.log('loading');
        this.filter.limit = this.transaction_detail.length;
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'filter': this.filter }, 'app_karigar/transaction')
            .subscribe(function (r) {
            console.log(r);
            if (r['transaction'] == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.transaction_detail = _this.transaction_detail.concat(r['transaction']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    TransactionPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/transaction/transaction.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'Transaction\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content  pullingIcon="arrow-dropdown"\n\n        pullingText="{{\'Pull to refresh\' | translate}}"\n\n        refreshingSpinner="circles"\n\n        refreshingText="{{\'Refreshing...\' | translate}}">\n\n    </ion-refresher-content>\n\n</ion-refresher>\n\n\n\n<div class="top-nav nav-adjust">\n\n    <p>{{\'Balance Points\' | translate}}</p>\n\n    <h1>{{total_balance_point}}</h1>\n\n</div>\n\n<div class="transaction-list"  >\n\n    <div class="his-listing" *ngFor="let list of transaction_detail; let i=index">\n\n        <button ion-item class="main-list" (click)=" goOnShippingPage(list.id,list.offer_gift_id,list.redeem_type) " >\n\n            <div class="tr-content">\n\n                <div class="inner">\n\n                    <div class="tr-cicle">\n\n                        <i class="material-icons">call_made</i>\n\n                    </div>\n\n                    <div class="tr-tags">\n\n                        <h2>{{\'Request Send\' | translate}}</h2>\n\n                        <h1>{{list.gift_title | titlecase}}</h1>\n\n                        <p> {{\'Req Id\' | translate}} : {{list.invoice_id }}</p>\n\n                        <p> {{\'Req Type\' | translate}} : {{list.payment_type }}</p>\n\n\n\n                        <span *ngIf="list.gift_status==\'Reject\' && receive_status != \'\'">{{list.reject_reason | titlecase}}</span>\n\n                    </div>\n\n                </div>			\n\n                <div class="tr-points"  >\n\n                    <h2>{{list.coupon_points}}</h2>\n\n                    <p>{{\'Points\' | translate}}</p>\n\n                    <span class="refund" *ngIf="list.gift_status==\'Reject\' && receive_status != \'\'">{{\'Refunded\' | translate}}</span>\n\n                </div>\n\n            </div>\n\n        </button>\n\n        \n\n        <div class="tr-status" *ngIf="list.gift_status==\'Pending\' && list.receive_status==\'\'" >\n\n            <div class="tag">\n\n                <h1>{{list.date_created |date:\'d MMMM y\'}}</h1>\n\n            </div>\n\n            <div class="pending">\n\n                <p>{{list.gift_status}}</p>\n\n            </div>\n\n        </div>\n\n        <div class="tr-status" *ngIf="list.gift_status==\'Reject\' && list.receive_status==\'\' " >\n\n            <div class="tag">\n\n                <h1>{{list.date_created |date:\'d MMMM y\'}}</h1>\n\n            </div>\n\n            <div class="reject">\n\n                <p>{{list.gift_status}}</p>\n\n            </div>\n\n        </div>\n\n        <div class="tr-status" *ngIf="list.gift_status==\'Approved\' && list.receive_status==\'\'">\n\n            <div class="tag">\n\n                <h1>{{list.date_created |date:\'d MMMM y\'}}</h1>\n\n            </div>\n\n            <div class="approved">\n\n                <p>{{list.gift_status}}</p>\n\n            </div>\n\n        </div> \n\n        <div class="tr-status" *ngIf="list.receive_status==\'Transfer\' || list.receive_status==\'Shipped\'"  >\n\n            <div class="tag btn-received">\n\n                <button (click)="recvConfirmation(list.id, list.redeem_type)">{{\'Receive\' | translate}}</button>\n\n            </div>\n\n            <div class="transfer" >\n\n                <p  *ngIf="list.receive_status==\'Transfer\'">{{\'Transfer\' | translate}}</p>\n\n                <p  *ngIf="list.receive_status==\'Shipped\'">{{\'Shipped\' | translate}}</p>\n\n\n\n            </div>\n\n        </div>\n\n        <div class="tr-status"  *ngIf="list.receive_status==\'Received\'">\n\n            <div class="tag">\n\n                <h1>{{\'Receive on\' | translate}} : {{list.received_date | date:\'d MMMM y\'}}</h1>\n\n            </div>\n\n            <div class="received">\n\n                <p>{{\'Receive\' | translate}}</p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)"  *ngIf="flag!=1">\n\n        <ion-infinite-scroll-content\n\n        loadingSpinner="bubbles"\n\n        loadingText="{{\'Loading more data...\' | translate}}">\n\n    </ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n<div class="h100"></div>\n\n</div>		\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/transaction/transaction.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gift_detail_gift_detail__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GiftListPage = /** @class */ (function () {
    function GiftListPage(navCtrl, navParams, service, loadingCtrl, app, storage, translate, db, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.constant = constant;
        this.filter = {};
        this.id = '';
        this.gift_list = [];
        this.balance_point = '';
        this.mode = '';
        this.tokenInfo = {};
        this.lang = '';
        this.uploadUrl = '';
        this.redeemable_amount = '';
        this.total_balance_point = 0;
        this.flag = '';
        console.log(navParams);
        this.mode = this.navParams.get('mode');
        if (this.mode) {
            this.mode = this.mode;
            console.log(this.mode);
        }
        else {
            this.mode = '';
            console.log(this.mode);
        }
        this.uploadUrl = this.constant.upload_url;
    }
    GiftListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GiftListPage');
        this.uploadUrl = this.constant.upload_url;
        this.get_user_lang();
        this.presentLoading();
    };
    GiftListPage.prototype.ionViewWillEnter = function () {
        this.get_user_lang();
        this.getGiftList('');
    };
    GiftListPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    GiftListPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_6_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    GiftListPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getGiftList('');
        refresher.complete();
    };
    GiftListPage.prototype.goOnGiftDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gift_detail_gift_detail__["a" /* GiftDetailPage */], { 'id': id });
    };
    GiftListPage.prototype.getGiftList = function (search) {
        var _this = this;
        this.filter.limit = 0;
        this.filter.search = search;
        this.filter.redeemable = this.mode;
        console.log(this.filter.search);
        this.service.post_rqst({ 'filter': this.filter, 'karigar_id': this.service.karigar_id }, 'app_karigar/giftList')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.gift_list = r['gift'];
            // this.balance_point=parseInt(r['karigar'].balance_point);
            // this.total_balance_point = parseInt( r['karigar'].balance_point) + parseInt(r['karigar'].referal_point_balance );
            // var referral_per = r['referral_point_per'].one_time_percentage;
            // var referral_amount = ((r['karigar'].referal_point_balance * referral_per)/100);
            // var offer_balance = this.balance_point;
            // for gift active class
            _this.redeemable_amount = parseInt(r['redeemable_amount']);
            for (var i = 0; i < _this.gift_list.length; i++) {
                _this.gift_list[i].coupon_points = parseInt(_this.gift_list[i].coupon_points);
                // this.gift_list[i].offer_balance = parseInt( this.gift_list[i].offer_balance) + (referral_amount);
                _this.gift_list[i].offer_balance = parseInt(_this.gift_list[i].offer_balance);
            }
            // end
        });
    };
    GiftListPage.prototype.intVal = function (arsg) {
        return parseInt(arsg);
    };
    GiftListPage.prototype.presentLoading = function () {
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
    GiftListPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.filter.limit = this.gift_list.length;
        this.service.post_rqst({ 'filter': this.filter, 'karigar_id': this.service.karigar_id }, 'app_karigar/giftList')
            .subscribe(function (r) {
            console.log(r);
            if (r == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.gift_list = _this.gift_list.concat(r['gift']);
                    //          this.balance_point=parseInt(r['karigar'].balance_point);
                    // this.total_balance_point = parseInt( r['karigar'].balance_point) + parseInt(r['karigar'].referal_point_balance );
                    // var referral_per = r['referral_point_per'].one_time_percentage;
                    // var referral_amount = ((r['karigar'].referal_point_balance * referral_per)/100);
                    // var offer_balance = this.balance_point;
                    // for gift active class
                    _this.redeemable_amount = parseInt(r['redeemable_amount']);
                    for (var i = 0; i < _this.gift_list.length; i++) {
                        _this.gift_list[i].coupon_points = parseInt(_this.gift_list[i].coupon_points);
                        // this.gift_list[i].offer_balance = parseInt( this.gift_list[i].offer_balance) + (referral_amount);
                        _this.gift_list[i].offer_balance = parseInt(_this.gift_list[i].offer_balance);
                    }
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    GiftListPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                console.log(previuosView);
                this.navCtrl.popToRoot();
            }
        }
    };
    GiftListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gift-list',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/gift-gallery/gift-list/gift-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'Gift Gallery\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="{{\'Pull to refresh\' | translate}}" refreshingSpinner="circles" refreshingText="{{\'Refreshing...\' | translate}}">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <div class="fix">\n\n        <div class="top-nav">\n\n            <p>{{\'Balance Points\' | translate}}</p>\n\n            <h1>{{redeemable_amount}}</h1>\n\n        </div>\n\n        <div class="search">\n\n            <ion-searchbar type=\'text\' placeholder="{{\'Search\' | translate}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" (ngModelChange)="getGiftList(filter.search)"></ion-searchbar>\n\n        </div>\n\n    </div>\n\n    <div class="listing ">\n\n        <button ion-item [ngClass]="{\'verified\' : intVal(list.coupon_points) <= intVal(list.offer_balance)  }" *ngFor="let list of gift_list; let i=index" (click)="goOnGiftDetail(list.id)">\n\n        <div class="head-detail" >\n\n            <div class="head">\n\n                <h1>{{list.coupon_points}}</h1>\n\n                <p>{{\'Points\' | translate}}</p>\n\n            </div>\n\n            <div class="detail">\n\n                <h1>{{lang !=\'en\' ? list.hin_gift_title : list.gift_title | titlecase}}</h1>\n\n                <!-- <p><span>{{\'Offer Points\' | translate}}:</span>{{list.offer_balance  || 0  }}</p> -->\n\n                <p>{{lang != \'en\' ? list.hin_title : list.title | titlecase}} | {{list.end_date | date:\'d MMMM y\'}}</p>\n\n            </div>\n\n        </div>  \n\n        <div class="product-img">\n\n            <img src="{{uploadUrl+list.image}}">\n\n        </div>\n\n    </button>\n\n        <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)" *ngIf="flag!=1">\n\n            <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n\n            </ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/gift-gallery/gift-list/gift-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_constant_constant__["a" /* ConstantProvider */]])
    ], GiftListPage);
    return GiftListPage;
}());

//# sourceMappingURL=gift-list.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_terms__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gift_gallery_gift_detail_gift_detail__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_constant_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OffersPage = /** @class */ (function () {
    function OffersPage(navCtrl, navParams, service, loadingCtrl, app, modalCtrl, storage, translate, db, constant) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.translate = translate;
        this.db = db;
        this.constant = constant;
        this.offer_id = '';
        this.offer_detail = {};
        this.gift_list = '';
        this.balance_point = '';
        this.offer_balance = '';
        this.tokenInfo = {};
        this.lang = '';
        this.filter = {};
        this.uploadUrl = '';
        this.flag = '';
        this.uploadUrl = this.constant.upload_url;
    }
    OffersPage.prototype.ionViewDidLoad = function () {
        this.uploadUrl = this.constant.upload_url;
        console.log('ionViewDidLoad OffersPage');
        this.presentLoading();
        this.offer_id = this.navParams.get('id');
        console.log(this.offer_id);
        this.getofferDetail(this.offer_id);
        this.get_user_lang();
    };
    OffersPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getofferDetail(this.offer_id);
        refresher.complete();
    };
    OffersPage.prototype.goOntermsPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__terms_terms__["a" /* TermsPage */], { 'id': id });
    };
    OffersPage.prototype.goOnGiftDetail = function (id) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__gift_gallery_gift_detail_gift_detail__["a" /* GiftDetailPage */], { 'id': id });
    };
    OffersPage.prototype.get_user_lang = function () {
        var _this = this;
        this.storage.get("token")
            .then(function (resp) {
            _this.tokenInfo = _this.getDecodedAccessToken(resp);
            _this.db.post_rqst({ "login_id": _this.tokenInfo.sub }, "app_karigar/get_user_lang")
                .subscribe(function (resp) {
                console.log(resp);
                _this.lang = resp['language'];
                if (_this.lang == "") {
                    _this.lang = "en";
                }
                _this.translate.use(_this.lang);
            });
        });
    };
    OffersPage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_8_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    OffersPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.filter.limit = this.gift_list.length;
        this.service.post_rqst({ 'filter': this.filter, 'offer_id': this.offer_id, 'karigar_id': this.service.karigar_id }, 'app_karigar/offerDetail')
            .subscribe(function (r) {
            console.log(r);
            if (r == '') {
                _this.flag = 1;
            }
            else {
                setTimeout(function () {
                    _this.gift_list = _this.gift_list.concat(r['gift']);
                    console.log('Asyn operation has stop');
                    infiniteScroll.complete();
                }, 1000);
            }
        });
    };
    OffersPage.prototype.getofferDetail = function (offer_id) {
        var _this = this;
        this.filter.limit = 0;
        console.log(offer_id);
        this.service.post_rqst({ 'filter': this.filter, 'offer_id': offer_id, 'karigar_id': this.service.karigar_id }, 'app_karigar/offerDetail')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.offer_detail = r['offer'];
            _this.gift_list = r['gift'];
            var referral_per = r['referral_percentage'];
            var referral_per_amt = ((r['karigar'].referal_point_balance * referral_per.one_time_percentage) / 100);
            _this.balance_point = parseInt(r['karigar'].balance_point);
            // this.offer_balance=parseInt(r['gift'][0].offer_balance ) + (referral_per_amt);
            _this.offer_balance = _this.balance_point + (referral_per_amt);
            console.log(_this.offer_balance);
            // for gift active class
            for (var i = 0; i < _this.gift_list.length; i++) {
                _this.gift_list[i].coupon_points = parseInt(_this.gift_list[i].coupon_points);
                _this.gift_list[i].offer_balance = _this.offer_balance;
                console.log(_this.gift_list[i].offer_balance);
                console.log(_this.gift_list[i].coupon_points);
            }
            // end
        });
    };
    OffersPage.prototype.presentLoading = function () {
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
    OffersPage.prototype.ionViewDidLeave = function () {
        var nav = this.app.getActiveNav();
        if (nav && nav.getActive()) {
            var activeView = nav.getActive().name;
            var previuosView = '';
            if (nav.getPrevious() && nav.getPrevious().name) {
                previuosView = nav.getPrevious().name;
            }
            console.log(previuosView);
            console.log(activeView);
            console.log('its leaving');
            if ((activeView == 'HomePage' || activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') && (previuosView != 'HomePage' && previuosView != 'GiftListPage' && previuosView != 'TransactionPage' && previuosView != 'ProfilePage' && previuosView != 'MainHomePage')) {
                this.navCtrl.popToRoot();
            }
        }
    };
    OffersPage.prototype.viewDetail = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": this.lang != 'en' ? this.offer_detail.hin_term_image : this.offer_detail.term_image }).present();
    };
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offers',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/offers/offers.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{offer_detail.title| titlecase}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="{{\'Pull to refresh\' | translate}}" refreshingSpinner="circles" refreshingText="{{\'Refreshing...\' | translate}}">\n\n        </ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <!-- <div class="fix"></div> -->\n\n    <div class="bg-banner">\n\n        <img src="{{uploadUrl + offer_detail.offer_banner}}">\n\n    </div>\n\n    <div class="content-padding">\n\n        <div class="offer">\n\n            <div class="offer-detail">\n\n                <h1>{{lang != \'en\' ? offer_detail.hin_title :offer_detail.title| titlecase}}\n\n                </h1>\n\n                <p><span>{{\'Balance Points\' | translate}} : </span>{{offer_balance || 0}}</p>\n\n                <p><span>{{\'Valid Upto\' | translate}} :</span> {{offer_detail.end_date | date:\'d MMMM y\'}}</p>\n\n            </div>\n\n            <!-- <div class="terms" *ngIf="offer_detail.term_image!=\'\' || offer_detail.hin_term_image!=\'\'"  (click)="viewDetail()">\n\n                <a>{{\'A D Detail\' | translate}}</a>\n\n            </div> -->\n\n            <div class="terms" (click)="goOntermsPage(offer_detail.id)">\n\n                <a>{{\'Terms & Condition\' | translate}}</a>\n\n            </div>\n\n\n\n        </div>\n\n    </div>\n\n\n\n    <div class="listing mt0">\n\n        <!-- <div class="profile-detail point-detail" *ngIf="offer_detail.term_image!=\'\' || offer_detail.hin_term_image!=\'\'" (click)="viewDetail()">\n\n            <div class="deflex">\n\n                <ul>\n\n                    <li class="refcode">\n\n                        <h1>{{\'A D Detail\' | translate}}</h1>\n\n                        <i class="material-icons">arrow_right_alt</i>\n\n                    </li>\n\n                </ul>\n\n            </div>\n\n        </div> -->\n\n        <button ion-item [ngClass]="{\'verified\' : list.coupon_points <= offer_balance}" *ngFor="let list of gift_list;let i=index" (click)="goOnGiftDetail(list.id)">\n\n            <div class="head-detail">\n\n                <div class="head">\n\n                    <h1>{{list.coupon_points}}</h1>\n\n                    <p>{{\'Points\' | translate}}</p>\n\n                </div>\n\n                <div class="detail">\n\n                    <h1>{{lang !=\'en\' ? list.hin_gift_title : list.gift_title | titlecase}}</h1>\n\n                </div>\n\n            </div>  \n\n            <div class="product-img">\n\n                <img src="{{uploadUrl+list.image}}">\n\n            </div>\n\n        </button>\n\n        <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)" *ngIf="flag!=1">\n\n            <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="{{\'Loading more data...\' | translate}}">\n\n            </ion-infinite-scroll-content>\n\n        </ion-infinite-scroll>\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/offers/offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_constant_constant__["a" /* ConstantProvider */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_aboutus_modal_aboutus_modal__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_language_language__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_offer_list_offer_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_transaction_transaction__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_gift_gallery_gift_list_gift_list__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_market__ = __webpack_require__(471);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// import {Push } from '@ionic-native/push';
// import { MobileLoginPage } from '../pages/login-section/mobile-login/mobile-login';







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl, storage, events, constant, app, toastCtrl, service, alertCtrl, app_version, translate, push, market) {
        var _this = this;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.events = events;
        this.constant = constant;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.app_version = app_version;
        this.translate = translate;
        this.push = push;
        this.market = market;
        this.tokenInfo = '';
        this.lang = 'en';
        this.notifications = '';
        this.version = '';
        this.db_app_version = '';
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        // uncomment for logout
        // this.storage.set('token','');
        storage.get('token').then(function (val) {
            if (val == '' || val == null || val == undefined) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_language_language__["a" /* LanguagePage */];
            }
            else if (val) {
                _this.tokenInfo = _this.getDecodedAccessToken(val);
                _this.service.post_rqst({ 'karigar_id': _this.tokenInfo.sub }, 'app_karigar/profile')
                    .subscribe(function (r) {
                    console.log(r);
                    console.log(r['karigar'].user_type);
                    if (r['status'] == "SUCCESS") {
                        _this.service.karigar_info = r['karigar'];
                        console.log(_this.service.karigar_info, 'line number 66');
                        if (_this.service.karigar_info.del == '1') {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_language_language__["a" /* LanguagePage */];
                            _this.translate.get('Your Account has been suspended')
                                .subscribe(function (resp) {
                                _this.RequiredAlert(resp);
                            });
                            _this.storage.set('token', '');
                            _this.events.publish('data', '1', Date.now());
                            return;
                        }
                        else if (_this.service.karigar_info.status == 'Verified' || r['karigar'].user_type == 3) {
                            // this.rootPage=HomePage;
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]);
                            setTimeout(function () {
                                _this.initPushNotification();
                            }, 2000);
                            // this.rootPage=TabsPage;
                        }
                        else if (_this.service.karigar_info.status != 'Verified' && (_this.service.karigar_info.status != 'Verified' && r['karigar'].user_type != 3)) {
                            _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_aboutus_modal_aboutus_modal__["a" /* AboutusModalPage */]);
                            // let contactModal = this.modalCtrl.create(AboutusModalPage);
                            // contactModal.present();
                            return;
                        }
                    }
                    else {
                        _this.storage.set('token', '');
                        _this.events.publish('data', '1', Date.now());
                        return;
                    }
                });
            }
        });
        events.subscribe('data', function (data) {
            if (data == 1) {
                storage.get('token')
                    .then(function (val) {
                    console.log(val);
                    if (val == '' || val == null || val == undefined) {
                        console.log('if');
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_language_language__["a" /* LanguagePage */]);
                    }
                    else {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]);
                        setTimeout(function () {
                            _this.initPushNotification();
                        }, 2000);
                    }
                });
            }
            console.log(data);
        });
        platform.ready().then(function () {
            statusBar.overlaysWebView(false);
            splashScreen.hide();
            statusBar.backgroundColorByHexString('0084c9');
            _this.get_user_lang();
        });
        platform.registerBackButtonAction(function () {
            var overlayView = _this.app._appRoot._overlayPortal._views[0];
            if (overlayView && overlayView.dismiss) {
                overlayView.dismiss();
                return;
            }
            var nav = app.getActiveNav();
            var activeView = nav.getActive().name;
            console.log(activeView);
            console.log(nav.canGoBack());
            if (activeView == 'HomePage' || activeView == 'MobileLoginPage' || activeView == 'OtpPage') {
                if (_this.constant.backButton == 0) {
                    console.log('hello2');
                    _this.constant.backButton = 1;
                    var toast = _this.toastCtrl.create({
                        message: 'Press again to exit!',
                        duration: 2000
                    });
                    toast.present();
                    setTimeout(function () {
                        _this.constant.backButton = 0;
                    }, 2500);
                }
                else {
                    console.log('hello1');
                    _this.platform.exitApp();
                }
            }
            else if (nav.canGoBack()) {
                console.log('ok');
                nav.pop();
            }
            else if (activeView == 'GiftListPage' || activeView == 'TransactionPage' || activeView == 'ProfilePage' || activeView == 'MainHomePage') {
                nav.parent.select(0);
            }
            else if (nav.canGoBack() == false) {
                console.log('ok');
                var alert_1 = _this.alertCtrl.create({
                    title: 'App termination',
                    message: 'Are you sure you want Exit?',
                    buttons: [
                        {
                            text: 'Stay',
                            handler: function () {
                                console.log('Cancel clicked');
                                // this.d.('Action Cancelled!')
                            }
                        },
                        {
                            text: 'Exit',
                            handler: function () {
                                _this.platform.exitApp();
                            }
                        }
                    ]
                });
                alert_1.present();
                // nav.pop();
            }
        });
    }
    MyApp.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_8_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    MyApp.prototype.RequiredAlert = function (text) {
        var _this = this;
        this.translate.get("Alert")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    MyApp.prototype.check_version = function () {
        var _this = this;
        this.app_version.getVersionNumber()
            .then(function (resp) {
            console.log('front end v' + resp);
            _this.version = resp;
            _this.service.post_rqst("", "app_karigar/get_version")
                .subscribe(function (resp) {
                console.log(resp);
                _this.db_app_version = resp.version.ios_version;
                console.log('backend v' + _this.db_app_version);
                if (_this.version != _this.db_app_version) {
                    _this.translate.get("OK")
                        .subscribe(function (resp) {
                        _this.ok = resp;
                    });
                    _this.translate.get("Update Available")
                        .subscribe(function (resp) {
                        _this.avl_upd = resp;
                    });
                    _this.translate.get('Cancel')
                        .subscribe(function (resp) {
                        _this.cancl = resp;
                    });
                    _this.translate.get('Update Now')
                        .subscribe(function (resp) {
                        _this.upd_now = resp;
                    });
                    _this.translate.get("A newer version of this app is available for download. Please update it from AppStore")
                        .subscribe(function (resp) {
                        var updateAlert = _this.alertCtrl.create({
                            title: _this.avl_upd,
                            message: resp + '!',
                            buttons: [
                                { text: _this.cancl, },
                                { text: _this.upd_now,
                                    handler: function () {
                                        _this.market.open("id6449290209");
                                    }
                                }
                            ]
                        });
                        updateAlert.present();
                    });
                }
            });
        });
    };
    MyApp.prototype.get_user_lang = function () {
        this.check_version();
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        this.push.hasPermission().then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We don\'t have permission to send push notifications');
            }
        });
        var options = {
            android: {
                senderID: '849648964768',
                icon: './assets/imgs/logo_small',
                forceShow: true
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            _this.notifications = notification.additionalData.type;
            if (notification.additionalData.type == 'offer') {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_14__pages_offer_list_offer_list__["a" /* OfferListPage */]);
            }
            else if (notification.additionalData.type == 'redeem') {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_15__pages_transaction_transaction__["a" /* TransactionPage */]);
            }
            else if (notification.additionalData.type == 'gift') {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_16__pages_gift_gallery_gift_list_gift_list__["a" /* GiftListPage */]);
            }
            else if (notification.additionalData.type == 'profile') {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */]);
            }
        });
        pushObject.on('registration')
            .subscribe(function (registration) {
            console.log(_this.service.karigar_info, 'line number 355');
            console.log(_this.service.karigar_info.id, 'line number 356');
            console.log('Device registered', registration);
            console.log('Device Token', registration.registrationId);
            _this.storage.set('fcmId', registration);
            console.log(_this.tokenInfo);
            console.log(_this.storage);
            _this.storage.get('user_type').then(function (user_type) {
                _this.user_type = user_type;
                console.log(_this.user_type);
                console.log(user_type);
            });
            _this.storage.get('userId').then(function (userId) {
                _this.idlogin = userId;
                console.log(_this.idlogin);
                console.log(userId);
            });
            _this.registration = registration.registrationId;
            _this.registrationid(registration.registrationId);
        });
        pushObject.on('error')
            .subscribe(function (error) {
            return console.error('Error with Push plugin', error);
        });
    };
    MyApp.prototype.registrationid = function (registrationId) {
        var _this = this;
        console.log("app components enter registration");
        console.log(registrationId);
        console.log('karigar information 386 id', this.service.karigar_info.id);
        console.log('karigar information 387 id', this.service.karigar_info);
        this.storage.get('userId').then(function (userId) {
            _this.idlogin = userId;
            console.log(_this.idlogin, _this.idlogin);
            console.log("userId");
            console.log(userId);
        });
        console.log('karigar information 397 id', this.service.karigar_info);
        setTimeout(function () {
            _this.service.post_rqst({ 'registration_id': registrationId, 'karigar_id': _this.service.karigar_id }, 'app_karigar/add_registration_id')
                .subscribe(function (r) {
                console.log("success");
                console.log(r);
            });
        }, 5000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_market__["a" /* Market */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HomePage } from '../home/home';
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        setTimeout(function (resp) {
            _this.closeModel();
        }, 4000);
    }
    AboutPage.prototype.closeModel = function () {
        this.viewCtrl.dismiss();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/about/about.html"*/'<ion-content padding>\n\n      <div class="main-modal">\n\n            <div class="modal-box">\n\n                  <h1 style="margin-bottom: 16px !important;">{{\'Scan Tips\' | translate}}</h1>\n\n                  <img src="assets/imgs/scan-bar.png" alt="">\n\n                  <h2 style="margin: 0 !important;font-weight: 500;color: #ff0000;line-height: 24px;">{{\'Hold your phone according to the shown image while scanning the barcode\' | translate}}.</h2>\n\n                  <div class="modal-cls" (click)="closeModel()">\n\n                        <i class="material-icons">cancel</i>\n\n                  </div>\n\n            </div>\n\n      </div>	\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginScreenPage = /** @class */ (function () {
    function LoginScreenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginScreenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginScreenPage');
    };
    LoginScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-screen',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/login-section/login-screen/login-screen.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login-screen</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/login-section/login-screen/login-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], LoginScreenPage);
    return LoginScreenPage;
}());

//# sourceMappingURL=login-screen.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'safe',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=safe.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlumberlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointtransferremark_pointtransferremark__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plumberadd_plumberadd__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plumberdetail_plumberdetail__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dbservice_dbservice__ = __webpack_require__(6);
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
 * Generated class for the PlumberlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlumberlistPage = /** @class */ (function () {
    function PlumberlistPage(navCtrl, navParams, alertCtrl, modalCtrl, dbService, loadingCtrl, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.dbService = dbService;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.filter = {};
        this.filterType = {};
        this.all_count = 0;
        this.pending_count = 0;
        this.approved_count = 0;
        this.reject_count = 0;
        this.details = "Assign_Plumber";
        this.plumber_List = [];
        this.PlumberList(this.details);
    }
    PlumberlistPage_1 = PlumberlistPage;
    PlumberlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlumberlistPage');
        this.PlumberList(this.details);
    };
    PlumberlistPage.prototype.goOnPlumberDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__plumberdetail_plumberdetail__["a" /* PlumberdetailPage */], { 'id': id });
    };
    PlumberlistPage.prototype.goOnPlumberAdd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__plumberadd_plumberadd__["a" /* PlumberaddPage */]);
    };
    PlumberlistPage.prototype.doRefresh = function (refresher) {
        this.PlumberList(this.details);
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    PlumberlistPage.prototype.PlumberList = function (status) {
        var _this = this;
        console.log(status);
        this.filter.mode = 0;
        this.filter.status = status;
        this.dbService.post_rqst({ 'contractor_id': this.dbService.karigar_id, 'filter': this.filter }, 'app_karigar/karigarList').subscribe(function (r) {
            _this.plumber_List = r.karigars;
            console.log(_this.plumber_List);
            _this.loading.dismiss();
            _this.filter.mode = 1;
            _this.all_count = r.all_count;
            _this.pending_count = r.pending_count;
            _this.approved_count = r.approved_count;
            _this.reject_count = r.reject_count;
            // console.log(this.meetData);
        });
    };
    PlumberlistPage.prototype.PlumberList1 = function (search) {
        var _this = this;
        console.log(search);
        this.filter.mode = 0;
        this.filter.search = search;
        this.dbService.post_rqst({ 'contractor_id': this.dbService.karigar_id, 'filter': this.filter }, 'app_karigar/karigarList').subscribe(function (r) {
            _this.plumber_List = r.karigars;
            console.log(_this.plumber_List);
            _this.loading.dismiss();
            _this.filter.mode = 1;
            // this.all_count = r.all_count;
            // this.pending_count = r.pending_count;
            // this.approved_count = r.approved_count;
            // this.reject_count = r.reject_count;
            // console.log(this.meetData);
        });
    };
    PlumberlistPage.prototype.showSuccess = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Success!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    PlumberlistPage.prototype.AssignPlumber = function (id) {
        var _this = this;
        console.log(id);
        this.dbService.post_rqst({ 'dealer_id': this.dbService.karigar_id, 'karigar_id': id }, 'app_karigar/plumber_assign').subscribe(function (r) {
            console.log(r);
            if (r['status'] == "SUCCESS") {
                _this.showSuccess("Assign Plumber Successfully to this Channel Partner");
                _this.navCtrl.push(PlumberlistPage_1);
            }
            else if (r['status'] == "Already Assigned") {
                _this.showSuccess("Already Assigned this Plumber ");
            }
        });
    };
    PlumberlistPage.prototype.PlumberPointTrans = function (id, status) {
        if (status != 'Verified') {
            this.showAlert('Plumber status is not Verified');
        }
        else {
            var ReceiveModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__pointtransferremark_pointtransferremark__["a" /* PointtransferremarkPage */], { 'id': id });
            ReceiveModal.present();
        }
    };
    PlumberlistPage.prototype.showAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    cssClass: 'close-action-sheet',
                    handler: function () {
                        // this.navCtrl.push(TransactionP age);
                    }
                }]
        });
        alert.present();
    };
    PlumberlistPage = PlumberlistPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-plumberlist',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/plumberlist/plumberlist.html"*/'<!--\n\n  Generated template for the PlumberListPage page.\n\n  \n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header style="background-color: #ec3237 ;">\n\n  <ion-navbar>\n\n    <ion-title>{{ \'Plumber List\' | translate }} </ion-title>\n\n   \n\n  </ion-navbar>\n\n  <div class="fix" style="margin-top:23px">\n\n    <div class="search" style="margin-bottom: 14px !important;">\n\n        <ion-searchbar   type=\'text\' placeholder="{{\'Search\' | translate}}" name=\'search\' #search="ngModel" [(ngModel)]="filter.search" \n\n        (ngModelChange)="PlumberList1(filter.search)"></ion-searchbar>\n\n    </div>\n\n   \n\n</div>\n\n  <ion-toolbar color="white" >\n\n    <div class="ion-tab-btn">\n\n      <ion-segment [(ngModel)]="details" >\n\n        <!-- <ion-segment-button (click)="filter = {}; filter.status = \'All\'; PlumberList()" [ngClass]="{\'active\': filter.status == \'All\'}">\n\n          {{ \'All\' | translate }}  ({{all_count}})\n\n        </ion-segment-button> -->\n\n        <!-- click)="filter = {}; filter.status = \'Pending\'; PlumberList()" [ngClass]="{\'active\': filter.status == \'Pending\'}" -->\n\n        <!-- <ion-segment-button  value="Pending"  (click)="PlumberList(details)">\n\n          {{ \'Pending\' | translate }}  \n\n        </ion-segment-button> -->\n\n        <ion-segment-button  value="Assign_Plumber"  (click)="PlumberList(details)">\n\n          {{ \'Assign Plumber\' | translate }}  \n\n        </ion-segment-button>\n\n        <ion-segment-button  value="Verified" (click)="PlumberList(details)">\n\n          {{ \'Verified\' | translate }} \n\n        </ion-segment-button>\n\n        <ion-segment-button  value="Reject"  (click)="PlumberList(details)">\n\n          {{ \'Reject\' | translate }} \n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n\n\n \n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n  \n\n  \n\n  \n\n  <!-- [ngSwitch]="list" -->\n\n  <div  class="padding16">\n\n    \n\n    <div class="cs-list" *ngFor="let row of plumber_List; let i = index;">\n\n      <div class="top-block" (click)="goOnPlumberDetail(row.id)">\n\n        <p>{{row.full_name | titlecase}}</p>\n\n        <ion-icon name="arrow-forward" color="primary"  ios="ios-arrow-forward"></ion-icon>\n\n      </div>\n\n      <div class="middle-block" (click)="goOnPlumberDetail(row.id)">\n\n        <div class="three-block">\n\n          <p>{{\'Date\' | translate}} : <strong>{{row.date_created |  date:\'d MMMM y\'}}</strong></p>\n\n          <p>{{\'Status\' | translate}} : <strong class="{{row.status}}">{{row.status}}</strong> </p>\n\n        </div>\n\n        <div class="three-block" *ngIf="row.mobile_no">\n\n          <p>{{\'Mobile No\' | translate}} : <strong>{{row.mobile_no}}</strong></p>\n\n          <!-- <p>{{\'Total Item\' | translate}} : <strong>{{row.total_items}}</strong></p> -->\n\n\n\n        </div>\n\n        \n\n      </div>\n\n      <div class="tr-status" *ngIf="details==\'Verified\' || details !=\'Assign_Plumber\' && details!=\'Reject\'"  >\n\n        <div class="tag btn-received">\n\n            <button (click)="AssignPlumber(row.id)">{{\'Assign Plumber\' | translate}}</button>\n\n        </div>\n\n       \n\n    </div>\n\n    <div class="tr-status" *ngIf="details ==\'Assign_Plumber\'"  >\n\n      <div class="tag btn-received">\n\n          <button (click)="PlumberPointTrans(row.id,row.status)">{{\'Points Transfer\' | translate}}</button>\n\n      </div>\n\n     \n\n  </div>\n\n     \n\n    </div>\n\n  </div>\n\n  <!-- && ( (filter.status == \'Pending\' ) || (filter.status == \'Verified\') || (filter.status == \'Reject\'  )) -->\n\n  <div class="image-detail"  *ngIf="!plumber_List.length ">\n\n    <img src="assets/imgs/no_found.svg">\n\n  </div>\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="secondary" (click)="goOnPlumberAdd()"> <ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/plumberlist/plumberlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], PlumberlistPage);
    return PlumberlistPage;
    var PlumberlistPage_1;
}());

//# sourceMappingURL=plumberlist.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_section_registration_registration__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_profile_view_profile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__language_language__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_constant_constant__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { MobileLoginPage } from '../login-section/mobile-login/mobile-login';


// import { LanguagePage } from '../language/language';




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, app, navParams, service, loadingCtrl, storage, events, actionSheetController, camera, alertCtrl, modalCtrl, db, translate, platform, socialSharing, constant, app_version) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.events = events;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.db = db;
        this.translate = translate;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.constant = constant;
        this.app_version = app_version;
        this.karigar_detail = {};
        this.edit = '';
        this.edit1 = '';
        this.lang = '';
        this.upload_url = '';
        this.appVersion = '';
        this.version = '';
        this.tokenInfo = {};
        // productDataImg:any =[]
        this.conDetail = {};
        this.productData = [];
        // logout()
        // {
        //     this.storage.set('token','');
        //     this.service.karigar_info='';
        //     this.storage.get("token")
        //     .then(resp=>{
        //         console.log(resp);
        //     })
        //     this.platform.exitApp();
        // }
        this.title = "";
        this.no = "";
        this.yes = "";
        this.content = "";
        this.cam = "";
        this.gal = "";
        this.cancl = "";
        this.ok = "";
        this.upl_file = "";
        this.save_succ = "";
        this.language = [];
        this.data = {};
        this.flag = true;
        this.upload_url = constant.upload_url;
        this.lang = this.navParams.get("lang");
        this.check_version();
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        console.log(this.karigar_detail.edit_profile);
    }
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.translate.get("Logout")
            .subscribe(function (resp) {
            _this.title = resp;
        });
        this.translate.get("No")
            .subscribe(function (resp) {
            _this.no = resp;
        });
        this.translate.get("Yes")
            .subscribe(function (resp) {
            _this.yes = resp;
        });
        this.translate.get("Are you sure you want Logout?")
            .subscribe(function (resp) {
            _this.content = resp;
        });
        var alert = this.alertCtrl.create({
            title: this.title,
            message: this.content,
            buttons: [
                {
                    text: this.no,
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.d.('Action Cancelled!')
                    }
                },
                {
                    text: this.yes,
                    handler: function () {
                        _this.storage.set('token', '');
                        _this.service.karigar_info = '';
                        _this.storage.get("token")
                            .then(function (resp) {
                            console.log(resp);
                        });
                        var alert2 = _this.alertCtrl.create({
                            title: 'Success!',
                            subTitle: 'Logout Successfully',
                            buttons: [{
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        });
                        alert2.present();
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_10__language_language__["a" /* LanguagePage */]);
                        // this.app.getRootNav().setRoot(SelectRegistrationTypePage);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProfilePage');
        // this.get_user_lang();
        this.presentLoading();
        this.translate.get("Camera")
            .subscribe(function (resp) {
            _this.cam = resp;
        });
        this.translate.get("Gallery")
            .subscribe(function (resp) {
            _this.gal = resp;
        });
        this.translate.get("Cancel")
            .subscribe(function (resp) {
            _this.cancl = resp;
        });
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.translate.get("Upload File")
            .subscribe(function (resp) {
            _this.upl_file = resp;
        });
        this.translate.get("Registered Successfully")
            .subscribe(function (resp) {
            _this.save_succ = resp;
        });
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.getKarigarDetail();
    };
    ProfilePage.prototype.getKarigarDetail = function () {
        var _this = this;
        console.log('karigar');
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id }, 'app_karigar/profile')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.karigar_detail = r['karigar'];
            // this.productDataImg=r['karigar']['shop_image'];
            _this.language = r['language'];
        });
    };
    ProfilePage.prototype.update_lang = function () {
        var _this = this;
        console.log(this.karigar_detail);
        this.db.post_rqst({ "data": this.karigar_detail }, "app_karigar/update_language")
            .subscribe(function (resp) {
            console.log(resp);
            _this.getKarigarDetail();
            _this.translate.use(_this.karigar_detail.language);
        });
    };
    ProfilePage.prototype.openeditprofile = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Profile photo",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        _this.getImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                    }
                }]
        });
        actionsheet.present();
    };
    ProfilePage.prototype.takePhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400,
            cameraDirection: 1,
            correctOrientation: true
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.karigar_detail.profile = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.karigar_detail.profile);
            if (_this.karigar_detail.profile) {
                _this.uploadImage(_this.karigar_detail.profile);
            }
        }, function (err) {
        });
    };
    ProfilePage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.karigar_detail.profile = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.karigar_detail.profile);
            if (_this.karigar_detail.profile) {
                _this.uploadImage(_this.karigar_detail.profile);
            }
        }, function (err) {
        });
    };
    ProfilePage.prototype.uploadImage = function (profile) {
        var _this = this;
        console.log(profile);
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'profile': profile }, 'app_karigar/updateProfilePic')
            .subscribe(function (r) {
            console.log(r);
            _this.showSuccess("Profile Photo Updated");
        });
    };
    ProfilePage.prototype.viewProfiePic = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__view_profile_view_profile__["a" /* ViewProfilePage */], { "Image": this.karigar_detail.profile, "type": "base_64" }).present();
    };
    ProfilePage.prototype.showSuccess = function (text) {
        var _this = this;
        this.translate.get("Success")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    ProfilePage.prototype.presentLoading = function () {
        var _this = this;
        this.translate.get('Please wait...')
            .subscribe(function (resp) {
            _this.loading = _this.loadingCtrl.create({
                content: resp,
                dismissOnPageChange: false
            });
            _this.loading.present();
        });
    };
    ProfilePage.prototype.updateProfile = function () {
        this.karigar_detail.edit_profile = 'edit_profile';
        console.log(this.karigar_detail);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_section_registration_registration__["a" /* RegistrationPage */], { 'data': this.karigar_detail, "mode": 'edit_page' });
    };
    ProfilePage.prototype.editDealer = function () {
        var _this = this;
        console.log(this.karigar_detail);
        this.service.post_rqst({ 'karigar_detail': this.karigar_detail }, 'app_karigar/editKarigarDealer')
            .subscribe(function (result) {
            console.log(result);
            _this.edit = '';
            _this.translate.get("Dealer Information Updated")
                .subscribe(function (resp) {
                _this.showSuccess(resp);
                return;
            });
        });
    };
    ProfilePage.prototype.MobileNumber = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ProfilePage.prototype.showAlert = function (text) {
        var _this = this;
        this.translate.get("Alert")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    // get_user_lang()
    // {
    //     this.storage.get("token")
    //     .then(resp=>{
    //         this.tokenInfo = this.getDecodedAccessToken(resp );
    //         this.db.post_rqst({"login_id":this.tokenInfo.sub},"app_karigar/get_user_lang")
    //         .subscribe(resp=>{
    //             console.log(resp);
    //             this.lang = resp['language'];
    //             this.translate.setDefaultLang(this.lang)
    //             if(this.lang == "")
    //             {
    //                 this.lang = "en";
    //             }
    //             this.translate.use(this.lang);
    //         })
    //     })
    // }
    ProfilePage.prototype.getDecodedAccessToken = function (token) {
        try {
            return __WEBPACK_IMPORTED_MODULE_8_jwt_decode__(token);
        }
        catch (Error) {
            return null;
        }
    };
    ProfilePage.prototype.share_code = function () {
        console.log("share and earn");
        // let image = "https://play-lh.googleusercontent.com/FEDtMP_dyMgM8rJtp4MFdp60g0fLuBYNbu3pBNsNH52knTsG1yDuNs56CFYu_X3XqYk=s180-rw";
        var image = "";
        var app_url = "https://apps.apple.com/us/app/jupiter-aqua-lines/id6449290209";
        var msg = "Hey there join me (" + this.karigar_detail.full_name + "-" + this.karigar_detail.mobile_no + ") on  Jal Uphaar,  app.";
        if (this.karigar_detail.referral_code)
            msg += " Enter my code *" + this.karigar_detail.referral_code + "* to earn points back in your wallet!";
        this.socialSharing.share(msg, "Karigar Reffral", image, app_url)
            .then(function (resp) {
            console.log(resp);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.onUploadChange = function (evt) {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: this.upl_file,
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takeDocPhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getDocImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }]
        });
        actionsheet.present();
    };
    ProfilePage.prototype.takeDocPhoto = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400,
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.karigar_detail.document_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.karigar_detail.document_image);
            if (_this.karigar_detail.document_image) {
                _this.uploadDocImage(_this.karigar_detail.document_image, _this.karigar_detail.document_no);
            }
        }, function (err) {
        });
    };
    ProfilePage.prototype.getDocImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.karigar_detail.document_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.karigar_detail.document_image);
            if (_this.karigar_detail.document_image) {
                _this.uploadDocImage(_this.karigar_detail.document_image, _this.karigar_detail.document_no);
            }
        }, function (err) {
        });
    };
    ProfilePage.prototype.uploadDocImage = function (doc_image, doc_num) {
        var _this = this;
        console.log(doc_image);
        this.service.post_rqst({ 'karigar_id': this.service.karigar_id, 'doc_image': doc_image, 'doc_no': doc_num }, 'app_karigar/updateDocumnet')
            .subscribe(function (r) {
            _this.edit1 = '';
            _this.showSuccess("Document Updated");
        });
    };
    ProfilePage.prototype.check_version = function () {
        var _this = this;
        this.app_version.getVersionNumber()
            .then(function (resp) {
            console.log(resp);
            _this.version = resp;
        });
    };
    ProfilePage.prototype.deleteAccount = function () {
        var _this = this;
        this.translate.get("Alert!")
            .subscribe(function (resp) {
            _this.title = resp;
        });
        this.translate.get("No")
            .subscribe(function (resp) {
            _this.no = resp;
        });
        this.translate.get("Yes")
            .subscribe(function (resp) {
            _this.yes = resp;
        });
        this.translate.get("Are you sure you want permanent delete account?")
            .subscribe(function (resp) {
            _this.content = resp;
        });
        var alert = this.alertCtrl.create({
            title: this.title,
            message: this.content,
            buttons: [
                {
                    text: this.no,
                    handler: function () {
                        console.log('Cancel clicked');
                        // this.d.('Action Cancelled!')
                    }
                },
                {
                    text: this.yes,
                    handler: function () {
                        _this.db.post_rqst({ 'id': _this.karigar_detail.id }, 'app_master/delete_karigar_app')
                            .subscribe(function (resp) {
                            if (resp.status == 'success') {
                                _this.storage.set('token', '');
                                _this.service.karigar_info = '';
                                _this.storage.get("token")
                                    .then(function (resp) {
                                    console.log(resp);
                                });
                                var alert2 = _this.alertCtrl.create({
                                    title: 'Success!',
                                    subTitle: 'Delete Successfully',
                                    buttons: [{
                                            text: 'Ok',
                                            handler: function () {
                                                console.log('Cancel clicked');
                                            }
                                        }]
                                });
                                alert2.present();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__language_language__["a" /* LanguagePage */]);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Nav */])
    ], ProfilePage.prototype, "nav", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/profile/profile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'Profile\' | translate}}</ion-title>\n\n        <!-- <div class="header-icons">\n\n            <button ion-button class="cs-hdr-icons mr16" (click)="logout()">\n\n                <i class="material-icons">power_settings_new</i>\n\n            </button>\n\n        </div> -->\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n            \n\n            <div class="profile-container">\n\n                <div class="background-white hero"></div>\n\n                <div class="user-profile">\n\n                    <div class="dp">\n\n                        <div class="dp-hidden">\n\n                            <img src="assets/imgs/man.svg" *ngIf="karigar_detail.profile ==\'\'">\n\n                            <img src="{{upload_url+karigar_detail.profile}}" *ngIf="karigar_detail.profile" (click)="viewProfiePic()">\n\n                        </div>\n\n                        <a class="cmra-btn"><i class="material-icons" (click)="openeditprofile()">camera_alt</i></a>\n\n                    </div>\n\n                    <h2>{{karigar_detail.first_name |titlecase}}</h2>\n\n                    <h6>{{karigar_detail.type}}</h6>\n\n                    <p class="{{karigar_detail.status}}">\n\n                        {{karigar_detail.status}}\n\n                        <i class="material-icons Verified " *ngIf="karigar_detail.status ==\'Verified\'">verified_user </i>\n\n                        <i class="material-icons Pending " *ngIf="karigar_detail.status ==\'Pending\'">update</i>\n\n                        <i class="material-icons Suspect " *ngIf="karigar_detail.status ==\'Suspect\'">help</i>\n\n                        <i class="material-icons Reject " *ngIf="karigar_detail.status ==\'Reject\'">cancel</i>\n\n                    </p>\n\n                    \n\n                    <button class="edit" (click)="updateProfile()"> <i class="material-icons">edit</i></button>\n\n                    \n\n                </div>\n\n                \n\n                \n\n                <div class="padding16">\n\n                    <div class="profile-card">\n\n                        <div class="text-box">\n\n                            <p>{{ \'Mobile No.\' | translate }}</p>\n\n                            <h6>{{karigar_detail.mobile_no}}</h6>\n\n                        </div>\n\n                        <div class="text-box" *ngIf="karigar_detail.whatsapp_mobile_no">\n\n                            <p>{{ \'Whats App Number\' | translate }}</p>\n\n                            <h6>{{karigar_detail.whatsapp_mobile_no}}</h6>\n\n                        </div>\n\n\n\n\n\n\n\n                        <div class="text-box" *ngIf="karigar_detail.user_type!=\'1\'">\n\n                            <p>{{\'Alternate Mobile No.\' | translate}}</p>\n\n                            <h6>{{karigar_detail.alternate_mobile_no ? karigar_detail.alternate_mobile_no:\'N/A\'}}</h6>\n\n                        </div>\n\n\n\n                        <div class="text-box" *ngIf="karigar_detail.user_type==\'2\'">\n\n                            <p>{{\'GST Number\' | translate}}</p>\n\n                            <h6>{{karigar_detail.gst_number ? karigar_detail.gst_number:\'N/A\'}}</h6>\n\n                        </div>\n\n\n\n\n\n                        <div class="text-box"  *ngIf="karigar_detail.email">\n\n                            <p>{{ \'Email ID\' | translate }}</p>\n\n                            <h6>{{karigar_detail.email}}</h6>\n\n                        </div>\n\n                        <div class="text-box">\n\n                            <p>{{ \'Date of Birth\' | translate}}</p>\n\n                            <h6>{{(karigar_detail.dob !=\'0000-00-00\') ? (karigar_detail.dob| date:\'d MMM,y\'):(\'----\')}}</h6>\n\n                        </div>\n\n                        <div class="text-box" >\n\n                            <p>{{ \'Date of Anniversary\' | translate}}</p>\n\n                            <h6>{{(karigar_detail.doa !=\'0000-00-00\') ? (karigar_detail.doa| date:\'d MMM,y\'):(\'----\')}}</h6>\n\n                        </div>\n\n                        <div class="text-box">\n\n                            <p>{{ \'Address\' | translate}}</p>\n\n                            <h6>{{karigar_detail.address |titlecase}} {{karigar_detail.state |titlecase}} {{karigar_detail.district |titlecase}} {{karigar_detail.city |titlecase}} {{karigar_detail.pincode }}</h6>\n\n                        </div>\n\n                    </div>\n\n                    <!-- <div class="profile-card" >\n\n                        <div class="text-center">\n\n                            <h2>{{ \'Dealer Information\' | translate }}</h2>\n\n                        </div>\n\n                        <div class="text-box">\n\n                            <p>{{\'Counter Name\' | translate}}</p>\n\n                            <h6>{{karigar_detail.parent_counter_name ? karigar_detail.parent_counter_name:\'N/A\'}}</h6>\n\n                        </div>\n\n                        <div class="text-box">\n\n                            <p>{{\'Contact Person\' | translate}}</p>\n\n                            <h6>{{ karigar_detail.parent_counter_contact_person ? karigar_detail.parent_counter_contact_person:\'N/A\'}} </h6>\n\n                        </div>\n\n                        <div class="text-box">\n\n                            <p>{{\'Mobile No.\' | translate}}</p>\n\n                            <h6>{{karigar_detail.parent_counter_mobile ? karigar_detail.parent_counter_mobile:\'N/A\'}}</h6>\n\n                        </div>\n\n                   \n\n                    </div> -->\n\n                     <div class="profile-card" *ngIf="karigar_detail.user_type == \'2\'">\n\n                        <div class="text-center">\n\n                            <h2>{{ \'Distributor Information\' | translate }}</h2>\n\n                        </div>\n\n                        <div class="text-box">\n\n                            <p>{{\'Company Name\' | translate}}</p>\n\n                            <h6>{{karigar_detail.distributor_company_name ? karigar_detail.distributor_company_name:\'N/A\'}}</h6>\n\n                        </div>\n\n                        \n\n                        <div class="text-box">\n\n                            <p>{{\'Mobile No.\' | translate}}</p>\n\n                            <h6>{{karigar_detail.distributor_mobile_no ? karigar_detail.distributor_mobile_no:\'N/A\'}}</h6>\n\n                        </div>\n\n\n\n                   \n\n                    </div>\n\n                    \n\n                   \n\n                    <div class="profile-card"  *ngIf="karigar_detail.document_image && karigar_detail.document_type && karigar_detail.document_no">\n\n                        <div class="text-center">\n\n                            <h2>{{ \'Document Information\' | translate }}</h2>\n\n                        </div>\n\n                        <div class="text-box">\n\n                            <div class="doc-box dc_prt">\n\n                                <img src="{{upload_url + karigar_detail.document_image}}">\n\n                            </div>\n\n                        </div>\n\n\n\n                        <div class="text-box" *ngIf="karigar_detail.document_image_back !=\'\'">\n\n                            <div class="doc-box dc_prt">\n\n                                <img src="{{upload_url + karigar_detail.document_image_back}}">\n\n                            </div>\n\n                        </div>\n\n                        <div class="text-box">\n\n                            <p *ngIf="karigar_detail.document_type!=\'Adharcard\'">{{karigar_detail.document_type}}</p>\n\n                               <p *ngIf="karigar_detail.document_type==\'Adharcard\'">{{\'Aadhar card\' | translate}}</p>\n\n                            <h6>{{karigar_detail.document_no}}</h6>\n\n                        </div>\n\n                    </div>\n\n\n\n\n\n\n\n\n\n                    <div class="profile-card"  *ngIf="karigar_detail.pan_image  && karigar_detail.pan_no">\n\n                        <div class="text-center">\n\n                            <h2>{{ \'Pancard Document Information\' | translate }}</h2>\n\n                        </div>\n\n                        <div class="text-box">\n\n                            <div class="doc-box dc_prt">\n\n                                <img src="{{upload_url + karigar_detail.pan_image}}" (click)="viewDoc()">\n\n                            </div>\n\n                        </div>\n\n\n\n                \n\n                        <div class="text-box">\n\n                               <p>{{\'Pan card\' | translate}}</p>\n\n                            <h6>{{karigar_detail.pan_no}}</h6>\n\n                        </div>\n\n                    </div>\n\n\n\n                    <!-- <ng-container *ngIf="karigar_detail.user_type == \'2\'">\n\n\n\n                        <div class="profile-card">\n\n\n\n                        <div class="text-center">\n\n                            <h2 class="shp_fnt">{{ \'Shop Image\' | translate }}</h2>\n\n                        </div>\n\n                        <div class="pr16 pl16" *ngFor="let row of productDataImg; let i = index">\n\n                          <div class="bill_img ">\n\n                            <img src="{{upload_url + row.image}}">\n\n                          </div>\n\n                        </div>\n\n                    </div>\n\n                      </ng-container> -->\n\n                    \n\n                    <div class="profile-card">\n\n                        <div class="text-center">\n\n                            <h2>{{ \'Referral Code Information\' | translate }}</h2>\n\n                            <a class="share" (click)="share_code()"><i class="material-icons">share</i></a>\n\n                        </div>\n\n                        \n\n                        <div class="text-box">\n\n                            <p>{{\'Referral Code\' | translate}}</p>\n\n                            <h6 style="text-transform: uppercase;">{{karigar_detail.referral_code ? karigar_detail.referral_code : \'N/A\'}}</h6>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n            <div class="pl16 pr16 mb24" *ngIf="appVersion.version != version">\n\n                <button class="capitalize" (click)="deleteAccount()" ion-button color="primary" block round>Permanent Delete Account</button>\n\n            </div>\n\n        </ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_11__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__["a" /* AppVersion */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aboutus_modal_aboutus_modal__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { FileTransfer, } from '@ionic-native/file-transfer';
// import { TabsPage } from './../../../pages/tabs/tabs';








var RegistrationPage = /** @class */ (function () {
    // defaultSelectedRadio = "data.user_type=1";
    function RegistrationPage(navCtrl, constant, toastCtrl, navParams, service, alertCtrl, actionSheetController, camera, loadingCtrl, modalCtrl, storage, translate) {
        this.navCtrl = navCtrl;
        this.constant = constant;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.translate = translate;
        this.data = {};
        this.state_list = [];
        this.distributor_list = [];
        this.district_list = [];
        this.city_list = [];
        this.pincode_list = [];
        this.selectedFile = [];
        this.file_name = [];
        this.karigar_id = '';
        this.formData = new FormData();
        this.profile_data = '';
        this.lang = 'en';
        this.whatsapp_mobile_no = '';
        this.uploadurl = "";
        this.filter = {};
        this.state = '';
        this.contractorData = [];
        this.cam = "";
        this.gal = "";
        this.cancl = "";
        this.ok = "";
        this.upl_file = "";
        this.save_succ = "";
        this.saveFlag = false;
        this.flag = true;
        this.image_data = [];
        this.uploadurl = this.constant.upload_url;
        this.data.mobile_no = this.navParams.get('mobile_no');
        this.lang = this.navParams.get('lang');
        console.log(this.data.mobile_no);
        this.data.profile = '';
        this.data.document_image = '';
        console.log(this.data.profile);
        this.data.document_type = 'Aadharcard';
        this.today_date = new Date().toISOString().slice(0, 10);
        this.data.user_type = 1;
        console.log(this.data.user_type);
        this.getstatelist();
        if (navParams.data.data) {
            this.data = navParams.data.data;
            this.image_data = this.data.shop_image;
            console.log(this.image_data);
            for (var i = 0; i < this.image_data.length; i++) {
                this.data.doc_id = this.image_data[i].id;
                console.log(this.data.doc_id);
            }
            // this.data.doc_id=this.image_data.id
            this.data.karigar_edit_id = this.data.id;
            this.data.profile_edit_id = this.data.id;
            this.data.doc_edit_id = this.data.id;
            console.log(this.data.status);
            this.getdistributorlist(this.data.state);
            // this.data.profile= this.data.profile;
            // this.data.document_image = this.data.document_image
            // this.data.document_image_back = this.data.document_image_back
            // this.data.cheque_image = this.data.cheque_image
        }
        console.log(this.data.karigar_edit_id);
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RegistrationPage');
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        if (this.data.state) {
            console.log(this.data.state);
            this.getDistrictList(this.data.state);
            this.getdistributorlist(this.data.state);
        }
        this.translate.get("Camera")
            .subscribe(function (resp) {
            _this.cam = resp;
        });
        this.translate.get("Gallery")
            .subscribe(function (resp) {
            _this.gal = resp;
        });
        this.translate.get("Cancel")
            .subscribe(function (resp) {
            _this.cancl = resp;
        });
        this.translate.get("OK")
            .subscribe(function (resp) {
            _this.ok = resp;
        });
        this.translate.get("Upload File")
            .subscribe(function (resp) {
            _this.upl_file = resp;
        });
        this.translate.get("Registered Successfully")
            .subscribe(function (resp) {
            _this.save_succ = resp;
        });
    };
    RegistrationPage.prototype.getdistributorlist = function (state) {
        var _this = this;
        console.log(state);
        this.filter.state = state;
        console.log();
        if (this.data.user_type == '2') {
            console.log(this.data.user_type);
            this.service.post_rqst({ 'filter': this.filter }, 'app_karigar/distributorList').subscribe(function (r) {
                _this.distributor_list = r.karigars;
                console.log(_this.distributor_list);
            });
            // this.loading.dismiss();
        }
    };
    RegistrationPage.prototype.getstatelist = function () {
        var _this = this;
        this.service.get_rqst('app_master/getStates').subscribe(function (r) {
            console.log(r);
            _this.state_list = r['states'];
            _this.karigar_id = r['id'];
            console.log(_this.state_list);
            _this.getdistributorlist(_this.data.state);
        });
    };
    RegistrationPage.prototype.getDistrictList = function (state_name) {
        var _this = this;
        console.log(state_name);
        this.service.post_rqst({ 'state_name': state_name }, 'app_master/getDistrict')
            .subscribe(function (r) {
            console.log(r);
            _this.district_list = r['districts'];
            console.log(_this.state_list);
        });
        this.getdistributorlist(state_name);
    };
    RegistrationPage.prototype.getCityList = function (district_name) {
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
    RegistrationPage.prototype.RequiredAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    RegistrationPage.prototype.getaddress = function (pincode) {
        var _this = this;
        if (this.data.pincode.length == '6') {
            this.service.post_rqst({ 'pincode': pincode }, 'app_karigar/getAddress')
                .subscribe(function (result) {
                console.log(result);
                var address = result.address;
                if (address != null) {
                    _this.data.state = result.address.state_name;
                    _this.getDistrictList(_this.data.state);
                    _this.getdistributorlist(_this.data.state);
                    _this.data.district = result.address.district_name;
                    _this.data.city = result.address.city;
                    console.log(_this.data);
                }
                else if (address == null) {
                    _this.RequiredAlert("Please Enter Valid Pincode");
                    _this.data.state = '';
                    _this.data.district = '';
                    _this.data.city = '';
                    return;
                }
            });
        }
    };
    RegistrationPage.prototype.scrollUp = function () {
        this.content.scrollToTop();
    };
    RegistrationPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Document image required',
            duration: 3000
        });
        toast.present();
    };
    RegistrationPage.prototype.submit = function () {
        var _this = this;
        console.log('data');
        console.log(this.data);
        if (!this.data.whatsapp_mobile_no) {
            this.data.whatsapp_mobile_no = "";
        }
        // if(!this.data.document_image){
        //     this.presentToast();
        //     return
        // }
        this.data.lang = this.lang;
        this.data.created_by = '0';
        this.saveFlag = true;
        this.presentLoading();
        console.log(this.data);
        // if(this.contractorData < 1){
        //     this.alertToast('Please add one item at least!')
        //     return
        //    }
        // this.presentLoading();
        // this.saveFlag = true;
        // this.conData1.part = this.contractorData;
        // this.conData1.contractor_id = this.service.karigar_id;
        // this.conData1.image = this.image_data?this.image_data:[];
        this.data.shop_image = this.image_data ? this.image_data : [];
        console.log(this.image_data);
        this.service.post_rqst({ 'karigar': this.data }, 'app_karigar/addKarigar')
            .subscribe(function (r) {
            console.log(r);
            _this.loading.dismiss();
            _this.karigar_id = r['id'];
            console.log(_this.karigar_id);
            if (r['status'] == "SUCCESS") {
                _this.showSuccess(_this.save_succ + "!");
                _this.service.post_rqst({ 'mobile_no': _this.data.mobile_no, 'mode': 'App' }, 'auth/login')
                    .subscribe(function (r) {
                    console.log(r);
                    if (r['status'] == 'NOT FOUND') {
                        return;
                    }
                    else if (r['status'] == 'ACCOUNT SUSPENDED') {
                        _this.translate.get("Your account has been suspended")
                            .subscribe(function (resp) {
                            _this.showAlert(resp);
                        });
                        return;
                    }
                    else if (r['status'] == 'SUCCESS') {
                        _this.storage.set('token', r['token']);
                        _this.service.karigar_id = r['user'].id;
                        _this.service.karigar_status = r['user'].status;
                        console.log(_this.service.karigar_id);
                        if (r['user'].status != 'Verified' && r['user'].user_type != 3) {
                            // let contactModal = this.modalCtrl.create(AboutusModalPage);
                            // contactModal.present();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__aboutus_modal_aboutus_modal__["a" /* AboutusModalPage */]);
                            return;
                        }
                    }
                    // this.navCtrl.push(TabsPage);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                });
            }
            else if (r['status'] == "EXIST") {
                _this.translate.get("Already Registered")
                    .subscribe(function (resp) {
                    _this.showAlert(resp + "!");
                });
            }
        });
    };
    RegistrationPage.prototype.namecheck = function (event) {
        console.log("called");
        var pattern = /[A-Z\+\-\a-z ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    RegistrationPage.prototype.MobileNumber = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    RegistrationPage.prototype.caps_add = function (add) {
        this.data.address = add.replace(/\b\w/g, function (l) { return l.toUpperCase(); });
    };
    RegistrationPage.prototype.showSuccess = function (text) {
        var _this = this;
        this.translate.get("Success")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    RegistrationPage.prototype.showAlert = function (text) {
        var _this = this;
        this.translate.get("Alert")
            .subscribe(function (resp) {
            var alert = _this.alertCtrl.create({
                title: resp + '!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: [_this.ok]
            });
            alert.present();
        });
    };
    RegistrationPage.prototype.openeditprofile = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Profile photo",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takePhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        _this.data.profile_edit_id = _this.data.id;
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    RegistrationPage.prototype.takePhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400,
            cameraDirection: 1,
            correctOrientation: true
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.data.profile_edit_id = '';
            _this.data.profile = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.profile);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.data.profile_edit_id = '';
            _this.data.profile = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.profile);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.onUploadChange = function (evt) {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: this.upl_file,
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takeDocPhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getDocImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                        _this.data.doc_edit_id = _this.data.id;
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    RegistrationPage.prototype.takeDocPhoto = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 90,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 800,
            targetHeight: 600
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.doc_edit_id = '',
                _this.data.document_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.document_image);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.getDocImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.doc_edit_id = '';
            _this.data.document_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.document_image, 'add image');
            console.log(_this.data.doc_edit_id, 'previuos  image');
        }, function (err) {
        });
    };
    RegistrationPage.prototype.presentLoading = function () {
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
    RegistrationPage.prototype.onUploadBackChange = function (evt) {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: this.upl_file,
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        _this.backDocPhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        _this.backDocImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionsheet.present();
    };
    RegistrationPage.prototype.backDocPhoto = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.document_image_back = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.document_image_back);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.backDocImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.document_image_back = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.document_image_back);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.fileChange = function (image) {
        this.image_data.push({ 'image': image });
        // if(this.image_data.length >0){
        //   this.alertToast('Bill image required')
        //   return
        // }
        console.log(this.image_data);
        this.image = '';
    };
    RegistrationPage.prototype.remove_image = function (i) {
        this.image_data.splice(i, 1);
    };
    RegistrationPage.prototype.captureImage = function () {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: "Shop Upload Media",
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        _this.takePhoto1();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: 'Gallery',
                    icon: 'image',
                    handler: function () {
                        console.log("Gallery Clicked");
                        _this.getImage1();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    RegistrationPage.prototype.takePhoto1 = function () {
        var _this = this;
        console.log("i am in camera function");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.data.doc_id = '';
            _this.image = 'data:image/jpeg;base64,' + imageData;
            //   this.image=  imageData;
            console.log(_this.image);
            if (_this.image) {
                _this.fileChange(_this.image);
            }
        }, function (err) {
        });
    };
    RegistrationPage.prototype.getImage1 = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.data.doc_id = '';
            _this.image = 'data:image/jpeg;base64,' + imageData;
            //   this.image=  imageData;
            //   this.image= imageData.substr(imageData.lastIndexOf('/') + 1);
            console.log(_this.image);
            if (_this.image) {
                _this.fileChange(_this.image);
            }
        }, function (err) {
        });
    };
    RegistrationPage.prototype.alertToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    RegistrationPage.prototype.onUploadPancard = function (evt) {
        var _this = this;
        var actionsheet = this.actionSheetController.create({
            title: this.upl_file,
            cssClass: 'cs-actionsheet',
            buttons: [{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon: 'camera',
                    handler: function () {
                        _this.backDocPan();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon: 'image',
                    handler: function () {
                        _this.backDocPanimage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionsheet.present();
    };
    RegistrationPage.prototype.backDocPan = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 400
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.pan_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.pan_image);
        }, function (err) {
        });
    };
    RegistrationPage.prototype.backDocPanimage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        console.log(options);
        this.camera.getPicture(options).then(function (imageData) {
            _this.flag = false;
            _this.data.pan_image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.data.pan_image);
        }, function (err) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], RegistrationPage.prototype, "content", void 0);
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/login-section/registration/registration.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title *ngIf="data.id">{{\'Edit Profile\' | translate}}</ion-title>\n\n        <ion-title *ngIf="!data.id">{{\'Registration\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-backgroung">\n\n    <form #f="ngForm" (ngSubmit)="f.form.valid ? submit() : scrollUp()">\n\n\n\n\n\n        <div class="ragistration-fields pt10" *ngIf="!data.id">\n\n            <div class="heading line" style="margin: 0px 0px 10px -15px;">\n\n                <p>{{\'Choose Type\' | translate}}</p>\n\n            </div>\n\n\n\n            <div class="radio-section">\n\n                <ion-list radio-group name="user_type" [(ngModel)]="data.user_type" #user_type="ngModel"\n\n                    *ngIf="!data.id" required>\n\n                    <ion-item>\n\n                        <ion-radio value="1"></ion-radio>\n\n                        <ion-label>{{\'Plumber\' | translate}}</ion-label>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <ion-label>{{\'Channel Partner\' | translate}}</ion-label>\n\n                        <ion-radio value="2"></ion-radio>\n\n                    </ion-item>\n\n\n\n                    <!-- <ion-item>\n\n                        <ion-label>{{\'Distributor\'}}</ion-label>\n\n                        <ion-radio value="3"></ion-radio>\n\n                    </ion-item> -->\n\n                </ion-list>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="heading line">\n\n            <p>{{\'Basic Information\' | translate}}</p>\n\n        </div>\n\n        <div class="ragistration-fields">\n\n            <div class="left-right align-in-center">\n\n                <div class="left-part">\n\n                    <p class="cls-circle" (click)="openeditprofile()">\n\n                        <i class="material-icons" *ngIf="data.profile == \'\'">camera_alt</i>\n\n\n\n                        <img src="{{data.profile_edit_id ? uploadurl+data.profile : data.profile}}"\n\n                            *ngIf="data.profile != \'\'">\n\n                        <!-- <img [src]="data.profile" *ngIf="data.profile" required> -->\n\n                    </p>\n\n                </div>\n\n                <div class="right-part cs-form ml0">\n\n                    <ion-list>\n\n                        <!-- <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && Company_name?.invalid}" *ngIf="data.type==\'Retailer\' && data.type==\'Mechanic\'">\n\n                            <ion-label floating>{{\'Company Name\'}}*</ion-label>\n\n                            <ion-input type="text" name="Company_name" #Company_name="ngModel" [(ngModel)]="data.Company_name" (ngModelChange)="(data.Company_name!=null)?data.Company_name[0] = data.Company_name[0].toUpperCase():\'\'" (keypress)="namecheck($event)" required></ion-input>\n\n                        </ion-item> -->\n\n                        <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && first_name?.invalid}">\n\n                            <ion-label floating>{{\'First Name\' | translate}}*</ion-label>\n\n                            <ion-input type="text" name="first_name" #first_name="ngModel" [(ngModel)]="data.first_name"\n\n                                (ngModelChange)="(data.first_name!=null)?data.first_name[0] = data.first_name[0].toUpperCase():\'\'"\n\n                                (keypress)="namecheck($event)" required></ion-input>\n\n                        </ion-item>\n\n                        <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && last_name?.invalid}">\n\n                            <ion-label floating>{{\'Last Name\' | translate}}*</ion-label>\n\n                            <ion-input type="text" name="last_name" #last_name="ngModel" [(ngModel)]="data.last_name"\n\n                                (ngModelChange)="(data.last_name!=null)?data.last_name[0] = data.last_name[0].toUpperCase():\'\'"\n\n                                (keypress)="namecheck($event)" required\n\n                                [ngClass]="{\'error\':f.submitted && last_name?.invalid}" maxlength="10"></ion-input>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n            </div>\n\n            <!--//////////////// importaint //////////////-->\n\n\n\n            <div class="cs-form">\n\n                <ion-list>\n\n                    <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && company_name?.invalid}"\n\n                        *ngIf="data.user_type==\'2\'">\n\n                        <ion-label floating>{{\'Company Name\' | translate}}.*</ion-label>\n\n                        <ion-input type="text" name="company_name" #company_name="ngModel"\n\n                            [(ngModel)]="data.company_name" required (keypress)="namecheck($event)"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && mobile_no?.invalid}">\n\n                        <ion-label floating>{{\'Mobile No\' | translate}}.*</ion-label>\n\n                        <ion-input type="number" name="mobile_no" #mobile_no="ngModel" [(ngModel)]="data.mobile_no"\n\n                            required (keypress)="MobileNumber($event)" readonly></ion-input>\n\n                    </ion-item>\n\n\n\n\n\n                    <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && alternate_mobile_no?.invalid}"\n\n                        *ngIf="data.user_type!=\'1\'">\n\n                        <ion-label floating>{{\'Alternate Mobile No.\' | translate}}.</ion-label>\n\n                        <ion-input type="tel" name="alternate_mobile_no\n\n                        " #alternate_mobile_no="ngModel" [(ngModel)]="data.alternate_mobile_no\n\n                        " min="0" maxlength="10" minlength="10" (keypress)="MobileNumber($event)"></ion-input>\n\n                    </ion-item>\n\n\n\n\n\n                    <div *ngIf="data.user_type==\'2\'">\n\n                        <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && gst_number?.invalid}">\n\n                            <ion-label floating>{{\'GST Number\' | translate}}.</ion-label>\n\n                            <ion-input type="text" name="gst_number" #gst_number="ngModel" [(ngModel)]="data.gst_number"\n\n                                pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"></ion-input>\n\n\n\n                        </ion-item>\n\n\n\n                    </div>\n\n\n\n\n\n                    <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && whatsapp_mobile_no?.invalid}">\n\n                        <ion-label floating>{{\'Whatsapp No\' | translate}}.</ion-label>\n\n                        <ion-input type="tel" name="whatsapp_mobile_no\n\n                        " #whatsapp_mobile_no="ngModel" [(ngModel)]="data.whatsapp_mobile_no\n\n                        " min="0" maxlength="10" minlength="10" (keypress)="MobileNumber($event)"></ion-input>\n\n                    </ion-item>\n\n\n\n\n\n                    <!--//////////////// importaint //////////////-->\n\n\n\n                    <ion-item class="cs-input"\n\n                        [ngClass]="{\'error\':(f.submitted && email?.invalid) || (f.submitted && !email.valid)}">\n\n                        <ion-label floating>{{\'Email ID\' | translate}}</ion-label>\n\n                        <ion-input type="email" name="email" #email="ngModel" [(ngModel)]="data.email"\n\n                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item class="cs-date mb0" [ngClass]="{\'error\':f.submitted && dob?.invalid}">\n\n                        <ion-label>{{\'Date of Birth\' | translate}}*</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" max={{today_date}} type="text" name="dob"\n\n                            #dob="ngModel" [(ngModel)]="data.dob" required>\n\n                        </ion-datetime>\n\n                    </ion-item>\n\n\n\n                    <ion-item class="cs-date mb0" [ngClass]="{\'error\':f.submitted && doa?.invalid}">\n\n                        <ion-label>{{\'Date of Anniversary\' | translate}}</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" max={{today_date}} type="text" name="doa"\n\n                            #doa="ngModel" [(ngModel)]="data.doa">\n\n                        </ion-datetime>\n\n                    </ion-item>\n\n\n\n\n\n                </ion-list>\n\n            </div>\n\n        </div>\n\n\n\n        <div class="heading line">\n\n            <p>{{\'Address Information\' | translate}}</p>\n\n        </div>\n\n\n\n        <div class="ragistration-fields">\n\n            <div class="cs-form">\n\n                <ion-list>\n\n                    <ion-item class="cs-input"\n\n                        [ngClass]="{\'error\':(f.submitted && address?.invalid) || (f.submitted && !address.valid)}">\n\n                        <ion-label floating>{{\'Address\' | translate}}*</ion-label>\n\n\n\n                        <ion-input type="text" name="address" #address="ngModel" [(ngModel)]="data.address"\n\n                            (ngModelChange)="caps_add(data.address)" required></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item class="cs-input" [ngClass]="{\'error\':f.submitted && pincode?.invalid}">\n\n                        <ion-label floating>{{\'Pincode\' | translate}}*</ion-label>\n\n                        <ion-input type="tel" name="pincode" [(ngModel)]="data.pincode" #pincode="ngModel" required\n\n                            maxlength="6" minlength="6" (input)="getaddress(data.pincode)"></ion-input>\n\n                    </ion-item>\n\n\n\n\n\n                    <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && state?.invalid}">\n\n                        <ion-label>{{\'State\' | translate}}*</ion-label>\n\n                        <ion-select name="state" [(ngModel)]="data.state" #state="ngModel"\n\n                            (ngModelChange)="getDistrictList(data.state) || getdistributorlist(data.state)" required>\n\n                            <ion-option *ngFor="let row of state_list"\n\n                                value="{{row.state_name}}">{{row.state_name}}</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n\n\n                    <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && state?.invalid}">\n\n                        <ion-label>{{\'District\' | translate}}*</ion-label>\n\n                        <ion-select name="district" [(ngModel)]="data.district" #district="ngModel"\n\n                            (ngModelChange)="getCityList(data.district)" required>\n\n                            <ion-option *ngFor="let row of district_list"\n\n                                value="{{row.district_name}}">{{row.district_name}}</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n\n\n                    <ion-item class="cs-input mb0" [ngClass]="{\'error\':f.submitted && city?.invalid}">\n\n                        <ion-label floating>{{\'City\' | translate}}*</ion-label>\n\n                        <ion-input type="text" name="city" [(ngModel)]="data.city" #city="ngModel" required></ion-input>\n\n                    </ion-item>\n\n\n\n\n\n                    <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && distributor_id?.invalid}"\n\n                        *ngIf="data.user_type==\'2\'">\n\n                        <ion-label>{{\'Select Distributor\' | translate}}</ion-label>\n\n                        <ion-select name="distributor_id" [(ngModel)]="data.distributor_id" #distributor_id="ngModel">\n\n                            <ion-option *ngFor="let row of distributor_list" value="{{row.id}}">{{row.company_name |\n\n                                titlecase}} {{row.mobile_no}}</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n\n\n\n\n                    <!-- <ion-item class="multi-select"   [ngClass]="{\'error\':f.submitted && distributor_id?.invalid}" *ngIf="data.user_type==\'2\'" >\n\n                        <ion-label class="dst_lb">{{\'Select Distributor\' | translate}}</ion-label>\n\n                        <ionic-selectable\n\n                        item-content \n\n                        [(ngModel)]="data.distributor_id" \n\n                        #distributor_id="ngModel"\n\n                        name="distributor_id"\n\n                        [items]="distributor_list"\n\n                        itemValueField="distributor_id"\n\n                        itemTextField="distributor_id"\n\n                        [canSearch]="true" required>\n\n                    </ionic-selectable>\n\n                </ion-item> -->\n\n\n\n                </ion-list>\n\n            </div>\n\n        </div>\n\n\n\n        <!-- /////// Importaint //////////// -->\n\n\n\n        <div class="dchn" *ngIf="data.user_type==\'1\' ">\n\n\n\n            <div class="heading line" *ngIf="data.status!=\'Verified\'">\n\n                <p>{{\'Document Information\' | translate}}</p>\n\n            </div>\n\n\n\n            <div class="ragistration-fields rgs_adimg" *ngIf="data.status!=\'Verified\'">\n\n                <div class="cs-form">\n\n                    <ion-list>\n\n                        <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && document_type?.invalid}">\n\n                            <ion-label>{{\'Select Document\' | translate}}</ion-label>\n\n                            <ion-select name="document_type" [(ngModel)]="data.document_type" #document_type="ngModel">\n\n                                <ion-option value="Aadharcard">{{\'Aadhar card\' | translate}}</ion-option>\n\n                                <ion-option value="PanCard">{{\'Pan Card\' | translate}}</ion-option>\n\n                                <ion-option value="VoterCard">{{\'Voter Card\' | translate}}</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n\n\n                        <div class="upload-document up_im" (click)="onUploadChange()">\n\n                            <p *ngIf="data.document_image==\'\'"><i class="material-icons">add_circle</i><br>{{\'Upload Document\' | translate}}</p>\n\n                            <!-- <img *ngIf="data.document_image != \'\'" [src]="data.document_image" alt="" required> -->\n\n                            <img src="{{data.doc_edit_id ? uploadurl+data.document_image : data.document_image}}"\n\n                                *ngIf="data.document_image != \'\'">\n\n                        </div>\n\n\n\n                        <div class="aads" *ngIf="data.document_type==\'Aadharcard\'">\n\n\n\n                            <div class="upload-document up_im" (click)="onUploadBackChange()">\n\n                                <!-- <p *ngIf="data.document_image_back==\'\'"><i class="material-icons">add_circle</i><br>{{\'Upload Document\' | translate}}</p> -->\n\n                                <p><i class="material-icons">add_circle</i><br>{{\'Upload Document\' | translate}}</p>\n\n                                <img src="{{data.doc_edit_id ? uploadurl+data.document_image_back : data.document_image_back}}"\n\n                                    *ngIf="data.document_image_back != \'\'">\n\n                            </div>\n\n                        </div>\n\n\n\n                        <ion-item class="cs-input mb0 mt10" *ngIf="data.document_type==\'Aadharcard\'"\n\n                            [ngClass]="{\'error\':f.submitted && document_no?.invalid}">\n\n                            <ion-label floating>{{\'Aadhar card Number\' | translate}}</ion-label>\n\n                            <ion-input type="tel" name="document_no" #document_no="ngModel"\n\n                                [(ngModel)]="data.document_no" maxlength="12" minlength="12"></ion-input>\n\n                        </ion-item>\n\n\n\n                        <div *ngIf="data.document_type==\'PanCard\'"\n\n                            [ngClass]="{\'error\':f.submitted && document_no?.invalid}">\n\n\n\n\n\n                            <ion-item class="cs-input mb0 mt10">\n\n                                <ion-label floating>{{\'Pan Card Number\' | translate}}</ion-label>\n\n                                <ion-input type="text" name="document_no" #document_no="ngModel"\n\n                                    [(ngModel)]="data.document_no" pattern="[A-z]{5}[0-9]{4}[A-z]{1}" minlength="10"\n\n                                    maxlength="10"></ion-input>\n\n\n\n                            </ion-item>\n\n\n\n                            <div *ngIf="document_no.errors?.pattern" class="invalid-feedback">\n\n                                <div>{{\'Invaild Pan Card Number\' | translate}}</div>\n\n                            </div>\n\n                        </div>\n\n\n\n                        <ion-item class="cs-input mb0 mt10" *ngIf="data.document_type==\'VoterCard\'"\n\n                            [ngClass]="{\'error\':f.submitted && document_no?.invalid}">\n\n                            <ion-label floating>{{\'Voter Card Number\' | translate}}</ion-label>\n\n                            <ion-input type="text" name="document_no" #document_no="ngModel"\n\n                                [(ngModel)]="data.document_no"></ion-input>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n            </div>\n\n\n\n        </div>\n\n\n\n        <div class="dchn" *ngIf="data.user_type==\'2\' ">\n\n\n\n            <div class="heading line" *ngIf="data.status!=\'Verified\'">\n\n                <p>{{\'Document Information\' | translate}}</p>\n\n            </div>\n\n\n\n            <div class="ragistration-fields rgs_adimg" *ngIf="data.status!=\'Verified\'">\n\n                <div class="cs-form">\n\n                    <ion-list>\n\n                        <ion-item class="cs-select" [ngClass]="{\'error\':f.submitted && document_type?.invalid}">\n\n                            <ion-label>{{\'Select Document\' | translate}}</ion-label>\n\n                            <ion-select name="document_type" [(ngModel)]="data.document_type" #document_type="ngModel">\n\n                                <ion-option value="Aadharcard">{{\'Aadhar card\' | translate}}</ion-option>\n\n                                <ion-option value="VoterCard">{{\'Voter Card\' | translate}}</ion-option>\n\n                            </ion-select>\n\n                        </ion-item>\n\n\n\n\n\n                        <div class="upload-document up_im" (click)="onUploadChange()">\n\n                            <p *ngIf="data.document_image==\'\'"><i class="material-icons">add_circle</i><br>{{\'Upload Document\' | translate}}</p>\n\n                            <!-- <img *ngIf="data.document_image != \'\'" [src]="data.document_image" alt="" required> -->\n\n                            <img src="{{data.doc_edit_id ? uploadurl+data.document_image : data.document_image}}"\n\n                                *ngIf="data.document_image != \'\'">\n\n                        </div>\n\n\n\n                        <div class="aads" *ngIf="data.document_type==\'Aadharcard\'">\n\n\n\n                            <div class="upload-document up_im" (click)="onUploadBackChange()">\n\n                                <!-- <p *ngIf="data.document_image_back==\'\'"><i class="material-icons">add_circle</i><br>{{\'Upload Document\' | translate}}</p> -->\n\n                                <p><i class="material-icons">add_circle</i><br>{{\'Upload Document\' | translate}}</p>\n\n                                <img src="{{data.doc_edit_id ? uploadurl+data.document_image_back : data.document_image_back}}"\n\n                                    *ngIf="data.document_image_back != \'\'">\n\n                            </div>\n\n                        </div>\n\n\n\n                        <ion-item class="cs-input mb0 mt10" *ngIf="data.document_type==\'Aadharcard\'"\n\n                            [ngClass]="{\'error\':f.submitted && document_no?.invalid}">\n\n                            <ion-label floating>{{\'Aadhar card Number\' | translate}}*</ion-label>\n\n                            <ion-input type="tel" name="document_no" #document_no="ngModel"\n\n                                [(ngModel)]="data.document_no" maxlength="12" minlength="12" required></ion-input>\n\n                        </ion-item>\n\n\n\n                        <ion-item class="cs-input mb0 mt10" *ngIf="data.document_type==\'VoterCard\'"\n\n                            [ngClass]="{\'error\':f.submitted && document_no?.invalid}">\n\n                            <ion-label floating>{{\'Voter Card Number\' | translate}}</ion-label>\n\n                            <ion-input type="text" name="document_no" #document_no="ngModel"\n\n                                [(ngModel)]="data.document_no"></ion-input>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n            </div>\n\n\n\n            <div class="heading line" *ngIf="data.status!=\'Verified\'">\n\n                <p>{{\'Pancard Document Information\' | translate}}</p>\n\n            </div>\n\n\n\n            <div class="ragistration-fields" *ngIf="data.status!=\'Verified\'">\n\n                <div class="cs-form">\n\n                    <ion-list>\n\n\n\n                        <div class="upload-document up_im" (click)="onUploadPancard()">\n\n                            <p><i class="material-icons">add_circle</i><br>{{\'Upload Document\' | translate}}</p>\n\n                            <!-- <img *ngIf="data.pan_image != \'\'" [src]="data.pan_image" alt="" required> -->\n\n                            <img src="{{data.doc_edit_id ? uploadurl+data.pan_image : data.pan_image}}"\n\n                                *ngIf="data.pan_image != \'\'">\n\n                        </div>\n\n\n\n                        <ion-item class="cs-input mb0 mt10" [ngClass]="{\'error\':f.submitted && pan_no?.invalid}">\n\n                            <ion-label floating>{{\'Pan Card Number\' | translate}}*</ion-label>\n\n                            <ion-input type="text" name="pan_no" #pan_no="ngModel" [(ngModel)]="data.pan_no"\n\n                                pattern="[A-z]{5}[0-9]{4}[A-z]{1}" minlength="10" maxlength="10" required></ion-input>\n\n                        </ion-item>\n\n\n\n                        <div *ngIf="pan_no.errors?.pattern" class="invalid-feedback">\n\n                            <div>{{\'Invaild Pan Card Number\' | translate}}</div>\n\n                        </div>\n\n\n\n                    </ion-list>\n\n                </div>\n\n            </div>\n\n\n\n        </div>\n\n\n\n        <!-- \n\n<div class="shp" *ngIf="data.user_type==\'2\' ">\n\n\n\n        <div class="heading line" >\n\n            <p>{{\'Shop Image\' | translate}}</p>\n\n        </div>\n\n\n\n        <ion-item>\n\n            <div class="add-new padding0" >\n\n                <div class="uplode-image sml_img">\n\n                    <ul>\n\n                        <li *ngFor="let pic of image_data;let i = index;" >\n\n                            <img src="{{data.doc_id ? uploadurl+pic.image : pic.image}}" >\n\n\n\n                            <button class="bn_clr"><i class="material-icons cmr_ghr" (click)="remove_image(i)">clear</i></button>\n\n                        </li>\n\n                        \n\n                        <li (click)="captureImage()">\n\n                            <label>\n\n                                <input type="file" style="display: none;">\n\n                                <div class="other">\n\n                                    <a ><i class="material-icons  " >camera_alt</i></a>\n\n                                </div>\n\n                            </label>\n\n                        </li>\n\n                    </ul>\n\n                    \n\n                </div>\n\n            </div>\n\n            \n\n        </ion-item>\n\n  \n\n    </div>  -->\n\n\n\n        <!-- *ngIf="data.user_type==\'1\'" -->\n\n        <!-- <ng-container >\n\n            <div class="heading line" >\n\n                <p >{{\'Dealer Information\'}}</p>\n\n            </div>\n\n            \n\n            <div class="ragistration-fields">\n\n                <div class="cs-form">\n\n                    <ion-list>\n\n                        <ion-item class="cs-input">\n\n                            <ion-label floating>{{\'Counter Name\'}}</ion-label>\n\n                            <ion-input type="text" name="parent_counter_name " pattern="[a-zA-Z ]+" ng-pattern-restrict #parent_counter_name="ngModel" [(ngModel)]="data.parent_counter_name "></ion-input>\n\n                        </ion-item>\n\n                        \n\n                        <ion-item class="cs-input">\n\n                            <ion-label floating>{{\'Contact Person\'}}</ion-label>\n\n                            <ion-input type="text" name="parent_counter_contact_person " #parent_counter_contact_person="ngModel" [(ngModel)]="data.parent_counter_contact_person"></ion-input>\n\n                        </ion-item>\n\n                        <ion-item class="cs-input mb0" [ngClass]="{\'error\':f.submitted && parent_counter_mobile?.invalid}">\n\n                            <ion-label floating>{{\'Mobile No\'}}.</ion-label>\n\n                            <ion-input type="tel" name="parent_counter_mobile " #parent_counter_mobile="ngModel" [(ngModel)]="data.parent_counter_mobile" maxlength="10" minlength="10"></ion-input>\n\n                        </ion-item>\n\n                        <ion-item class="cs-input">\n\n                            <ion-label floating>{{\'Address\'}}</ion-label>\n\n                            <ion-input type="text" name="dealer_address " #dealer_address="ngModel" [(ngModel)]="data.dealer_address"></ion-input>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n            </div>\n\n        </ng-container> -->\n\n\n\n\n\n        <div class="heading line" *ngIf="!data.id">\n\n            <p>{{\'Referral Code\' | translate}}</p>\n\n        </div>\n\n        <div class="ragistration-fields" *ngIf="!data.id">\n\n            <div class="cs-form">\n\n                <ion-list>\n\n                    <ion-item class="cs-input mb0">\n\n                        <ion-label floating>{{\'Referral Code\' | translate}}</ion-label>\n\n                        <ion-input type="text" name="referral_code " #referral_code="ngModel"\n\n                            [(ngModel)]="data.referral_code "></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n        </div>\n\n        <button ion-button full color="primary" *ngIf="!data.id" [disabled]="saveFlag == true">{{\'Continue\' |\n\n            translate}}</button>\n\n        <button ion-button full color="primary" *ngIf="data.id">{{\'Update\' | translate}}</button>\n\n\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/login-section/registration/registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_constant_constant__["a" /* ConstantProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_otp__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__language_language__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { LanguagePageModule } from '../../language/language.module';
// import { LanguagePage } from '../../language/language';
// import * as jwt_decode from "jwt-decode";
var MobileLoginPage = /** @class */ (function () {
    function MobileLoginPage(navCtrl, navParams, service, alertCtrl, db, translate, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.data = {};
        this.otp = '';
        this.lang = 'en';
        this.user_type = '';
        this.maxtime = 30;
        this.maxTime = 0;
        this.hidevalue = false;
        this.lang = this.navParams.get("lang");
    }
    MobileLoginPage.prototype.ionViewDidLoad = function () {
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
    };
    MobileLoginPage.prototype.StartTimer = function () {
        var _this = this;
        this.timer = setTimeout(function (x) {
            if (_this.maxtime <= 0) { }
            _this.maxTime -= 1;
            if (_this.maxTime > 0) {
                _this.hidevalue = true;
                _this.StartTimer();
            }
            else {
                _this.maxtime = 30;
                _this.hidevalue = false;
            }
        }, 1000);
    };
    MobileLoginPage.prototype.submit = function () {
        var _this = this;
        this.maxTime = 30;
        this.StartTimer();
        console.log(this.data);
        this.service.post_rqst({ 'mobile_no': this.data.mobile_no }, 'app_karigar/karigarLoginOtp')
            .subscribe(function (r) {
            console.log(r);
            if (r['status'] == "SUCCESS") {
                _this.user_type = r['user_type'];
                console.log(_this.user_type);
                if (_this.user_type == '3') {
                    _this.RequiredAlert("It's number registered to Distributor");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__language_language__["a" /* LanguagePage */]);
                    return;
                }
            }
            if (r['status'] == "SUCCESS") {
                _this.otp = r['otp'];
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__otp_otp__["a" /* OtpPage */], { 'otp': _this.otp, 'mobile_no': _this.data.mobile_no, "lang": _this.lang });
            }
            if (r['status'] == 'REQUIRED MOBILE NO') {
                _this.RequiredAlert("Please enter Mobile No to continue.");
                return false;
            }
            // if (this.user_type == 3) {
            //     this.dialog.error("It's registered of Distributor")
            //     this.navCtrl.push(LanguagePage)
            //     console.log(this.user_type);
            //     return;
            // }
        });
    };
    MobileLoginPage.prototype.showAlert = function (text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Register',
                    cssClass: 'close-action-sheet',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registration_registration__["a" /* RegistrationPage */], { 'mobile_no': _this.data.mobile_no });
                    }
                }]
        });
        alert.present();
    };
    MobileLoginPage.prototype.RequiredAlert = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Alert!',
            cssClass: 'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    MobileLoginPage.prototype.presentLoading = function () {
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
    MobileLoginPage.prototype.languageBack = function () {
        console.log(this.lang);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__language_language__["a" /* LanguagePage */]);
    };
    MobileLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mobile-login',template:/*ion-inline-start:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/login-section/mobile-login/mobile-login.html"*/'\n\n<ion-header no-border>\n\n    <ion-toolbar color="white" style="min-height:50px">\n\n        <ion-buttons class="back-btns" (click)="languageBack()">\n\n            <button ion-button icon-only>\n\n                <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n        \n\n        <ion-title>\n\n            <div class="logo no-margin" >\n\n                <img  style="margin-top:8px;" src="assets/imgs/logo.png" >\n\n            </div>\n\n        </ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <form #f="ngForm" class="hp100">\n\n      <div class="center-block">\n\n        <div class="mobile-login">\n\n            <div class="text">\n\n                <p>{{\'Enter your mobile number to get started\' | translate}}!</p>\n\n              \n\n            </div>\n\n            <div class="input-section">\n\n                <div class="input-adjust">\n\n                    <input type="tel" name="" placeholder="{{\'Mobile number\' | translate}}" name="mobile_no" #mobile_no="ngModel" [(ngModel)]="data.mobile_no" [ngClass]="{\'is-invalid\':f.submitted && mobile_no?.invalid}" required min="0" maxlength="10" minlength="10">\n\n                    <div class="fixed-number">\n\n                        <p>+91</p>\n\n                    </div>\n\n                </div>\n\n                <i class="material-icons">local_phone</i>\n\n            </div>\n\n            <div *ngIf="data.mobile_no!=\'\'">\n\n                <div class="otp-error" *ngIf="!mobile_no.valid && mobile_no.touched">\n\n                    <p>{{\'Enter valid Mobile No.\' | translate}} </p>\n\n                </div>\n\n            </div>\n\n            <div class="login-btn">\n\n                <button (click)="f.valid && submit()" [disabled]="hidevalue">{{\'Continue\' | translate}} {{maxTime ? \'(\'+maxTime+\')\' : \'\'}}</button>\n\n            </div>\n\n        </div>\n\n      </div>\n\n    </form>\n\n    \n\n</ion-content>'/*ion-inline-end:"/Users/abacus/Downloads/Mohit_singh/Jupitar jal joy/src/pages/login-section/mobile-login/mobile-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_dbservice_dbservice__["a" /* DbserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], MobileLoginPage);
    return MobileLoginPage;
}());

//# sourceMappingURL=mobile-login.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["createTranslateLoader"] = createTranslateLoader;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offers__ = __webpack_require__(74);
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
var OffersPageModule = /** @class */ (function () {
    function OffersPageModule() {
    }
    OffersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offers__["a" /* OffersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offers__["a" /* OffersPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
        })
    ], OffersPageModule);
    return OffersPageModule;
}());

//# sourceMappingURL=offers.module.js.map

/***/ })

},[472]);
//# sourceMappingURL=main.js.map