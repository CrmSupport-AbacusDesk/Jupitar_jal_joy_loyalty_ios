import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController, Loading,Nav } from 'ionic-angular';
import { CancelationPolicyPage } from '../cancelation-policy/cancelation-policy';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { TransactionPage } from '../transaction/transaction';
// import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { TranslateService } from '@ngx-translate/core';



@IonicPage()
@Component({
    selector: 'page-cancelpolicy-modal',
    templateUrl: 'cancelpolicy-modal.html',
})
export class CancelpolicyModalPage {
    @ViewChild(Nav) nav: Nav;
    data:any={};
    otp_value:any='';
    karigar_id:any=''
    otp:any='';
    karigar_detail:any={};
    gift_id:any='';
    gift_detail:any='';
    loading:Loading;
    redeemPoint:any={};
    redeemType:any={};
    UserType:any ={}
    
    
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public service:DbserviceProvider,public alertCtrl:AlertController,public loadingCtrl:LoadingController, public translate:TranslateService) {
        
        
        console.log();
        
            
        this.redeemType = this.navParams.get('redeem_type');
        console.log(this.redeemType);
        
        this.redeemPoint = this.navParams.get('redeem_point');
        this.karigar_id = this.navParams.get('karigar_id');
        this.gift_id = this.navParams.get('gift_id');
        this.UserType=this.service.karigar_info.user_type;
        this.data.payment_type= "Paytm";
        if(this.redeemType == 'gift'){
            this.data.payment_type= "Gift";
        }
        
    }
    
    ionViewDidLoad() {
        this.karigar_id = this.navParams.get('karigar_id');
        this.gift_id = this.navParams.get('gift_id');
        this.getOtpDetail();
        this.presentLoading();
    }
    
    
    dismiss() {
        let data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    }
    
    goOnCancelationPolicy(){
        this.navCtrl.push(CancelationPolicyPage)
    }
    
    getOtpDetail()
    {
        this.service.post_rqst({'karigar_id':this.service.karigar_id,'gift_id':this.gift_id, "redeem_amount":this.redeemPoint},'app_karigar/sendOtp')
        .subscribe((r)=>
        {
            this.loading.dismiss();
            this.otp=r['otp'];
            this.karigar_detail=r['karigar'];
            this.gift_detail=r['gift'];
        });
    }
    resendOtp()
    {
        
        this.service.post_rqst({'karigar_id':this.service.karigar_id,'gift_id':this.gift_id, "redeem_amount":this.redeemPoint},'app_karigar/sendOtp')
        .subscribe((r)=>
        {
            this.otp=r['otp'];
            console.log(this.otp);
        });
    }
    otpvalidation() 
    {
        this.otp_value=false;
        if(this.data.otp==this.otp)
        {
            this.otp_value=true
        }
    }
    
    submit()
    {
        
        this.presentLoading();
        console.log('data');
        console.log(this.data);
        
        if(this.karigar_detail.user_type == 2){
            this.data.payment_type= "Gift";
        }
        this.data.karigar_id = this.service.karigar_id,
        this.data.gift_id = this.gift_id,
        this.data.redeem_type = this.redeemType
        this.data.redeem_amount=  this.redeemPoint
        this.data.offer_id = this.gift_detail.offer_id,
        console.log('data');
        this.service.post_rqst( {'data':this.data},'app_karigar/redeemRequest')
        .subscribe( (r) =>
        {
            this.loading.dismiss();
            console.log(r);
            if(r['status']=="SUCCESS")
            {
                // this.navCtrl.setRoot(TabsPage,{index:'3'});
                this.navCtrl.push(HomePage);
                this.showSuccess("Redeem Request Sent Successfully");
            }
            else if(r['status']=="EXIST")
            {
                this.showAlert(" Already Redeemed!");
            }
        });
    }
    showAlert(text) {
        let alert = this.alertCtrl.create({
            title:'Alert!',
            cssClass:'action-close',
            subTitle: text,
            buttons: [{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            },
            {
                text:'OK',
                cssClass: 'close-action-sheet',
                handler:()=>{
                    this.navCtrl.push(TransactionPage);
                }
            }]
        });
        alert.present();
    }
    showSuccess(text)
    {
        let alert = this.alertCtrl.create({
            title:'Success!',
            cssClass:'action-close',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }
    presentLoading() 
    {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    }
    ionViewDidLeave()
    {
        console.log('leave');
        this.dismiss()
    }
    
    myNumber()
    {
        console.log(this.data);
        if(this.data.check1==true)
        {
            this.data.payment_number=this.karigar_detail.mobile_no;
        }
        else{
            this.data.payment_number='';
        }
        
        
    }
    
    address()
    {
        console.log(this.data);
        if(this.data.check1==true)
        {
            this.data.shipping_address=this.karigar_detail.address + ' ,'+this.karigar_detail.city + ' ,'+this.karigar_detail.district +' ,'+ this.karigar_detail.state +' ,'+ this.karigar_detail.pincode;
        }
        else{
            this.data.shipping_address='';
        }
    }
    
    
    
    // $scope.validateMobile = function() {
    //     console.log("mobile validation");
    //     var input = document.getElementById('mobile_only');
    //     var pattern = /^[6-9][0-9]{0,9}$/;
    //     var value = input.value;
    //     !pattern.test(value) && (input.value = value = '');
    //     input.addEventListener('input', function() {
    //       var currentValue = this.value;
    //       if(currentValue && !pattern.test(currentValue)) this.value = value;
    //       else value = currentValue;
    //     });
    //   };
}
