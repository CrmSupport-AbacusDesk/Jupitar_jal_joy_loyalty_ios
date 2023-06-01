import { PlumberlistPage } from './../plumberlist/plumberlist';
import { RedeemTypePage } from './../redeem-type/redeem-type';
import { DigitalcatalogPage } from './../digitalcatalog/digitalcatalog';
import { Component } from '@angular/core';
import { NavController, Loading, LoadingController, AlertController, ModalController, App } from 'ionic-angular';
import { ScanPage } from '../scane-pages/scan/scan';
import { OfferListPage } from '../offer-list/offer-list';
import { PointListPage } from '../points/point-list/point-list';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { OffersPage } from '../offers/offers';
import { Storage } from '@ionic/storage';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { GiftListPage } from '../gift-gallery/gift-list/gift-list';
import { ViewProfilePage } from '../view-profile/view-profile';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { CoupanCodePage } from '../scane-pages/coupan-code/coupan-code';
import { ProfilePage } from '../profile/profile';
import { TermsPage } from '../terms/terms';
import { AboutusModalPage } from '../aboutus-modal/aboutus-modal';
import * as jwt_decode from "jwt-decode";
import { TranslateService } from '@ngx-translate/core';
import { ConstantProvider } from '../../providers/constant/constant';
import { CompassPage } from '../compass/compass';
// import { AboutPage } from '../about/about';
import { FurnitureIdeasPage } from '../furniture-ideas/furniture-ideas';
import { ProductsPage } from '../products/products';
import { WorkingSitePage } from '../working-site/working-site';
import { FeedbackPage } from '../feedback/feedback';
import { NewsPage } from '../news/news';
import { VideoPage } from '../video/video';
import { ContactPage } from '../contact/contact';
import { FaqPage } from '../faq/faq';
import { TransactionPage } from '../transaction/transaction';
import { AdvanceTextPage } from '../advance-text/advance-text';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NotificationPage } from '../notification/notification';
import { LanguagePage } from '../language/language';
import { ArrivalProductPage } from '../arrival-product/arrival-product';
import { OfferProductPage } from '../offer-product/offer-product';
import { ContractorListPage } from '../contractor/contractor-list/contractor-list';
// import { ShopImagePage } from '../shop-image/shop-image';
import { FurnitureIdeasdetailPage } from '../furniture-ideasdetail/furniture-ideasdetail';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    offer_list:any=[];
    loading:Loading;
    karigar_detail:any={};
    last_point:any='';
    plumber_point_transfer:any='';
    feedback_count:any =''
    today_point:any='';
    appbanner:any={};
    qr_code:any='';
    coupon_value:any='';
    uploadUrl:any='';
    tokenInfo:any = {};
    lang:any="";
    active:boolean = false;
    offer_detail:any={};
    language:any=[];
    upload_url:any ='';
    user_type:any;
    idlogin:any;
    registration:any;
    notifications:any='';



    constructor(public navCtrl: NavController, public app: App,public service:DbserviceProvider,public loadingCtrl:LoadingController,public storage:Storage, private barcodeScanner: BarcodeScanner,public alertCtrl:AlertController,public modalCtrl: ModalController,private push: Push,public translate:TranslateService,public constant:ConstantProvider,public socialSharing:SocialSharing) {
        this.presentLoading();
        
        this.initPushNotification();
        this.upload_url = constant.upload_url;
    }
    ionViewWillEnter()
    {
        this.initPushNotification()
        this.uploadUrl = this.constant.upload_url;
        console.log('ionViewDidLoad HomePage');
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        this.getData();
        this.get_user_lang();
        this.getofferBannerList();
    }
    
    doRefresh(refresher) 
    {
        console.log('Begin async operation', refresher);
        this.getData(); 
        refresher.complete();
    }
    
    total_balance_point:any;
    sharepoint:any=0;
    notify_cn=0;
    getData()
    {
        console.log("Check");
        this.service.post_rqst({'karigar_id':this.service.karigar_id},'app_karigar/karigarHome')
        .subscribe((r:any)=>
        {
            console.log(r);
            this.loading.dismiss();
            this.language=r['language'];
            this.karigar_detail=r['karigar'];
            this.appbanner=r['appbanner'];
            console.log(this.appbanner);
            
            console.log(this.karigar_detail.status);
            
            if(this.karigar_detail.user_type!=3){

            this.offer_detail=r['offer'];
            this.feedback_count=r['feedback_count'];
            this.last_point=r['last_point'];
            this.plumber_point_transfer=r['karigar'].plumber_purchase_point;
            console.log(this.plumber_point_transfer);
            

            this.notify_cn=r['notifications'];
            this.today_point=r['today_point'];
            this.total_balance_point = parseInt( this.karigar_detail.balance_point) + parseInt(this.karigar_detail.referal_point_balance );
            this.sharepoint=r['points']['owner_ref_point'];


            this.notification();
        }
        });
    }
    
    
    getofferBannerList()
    {
        console.log(this.service.karigar_id);
        console.log('offerbanner');
        this.service.post_rqst({'karigar_id':this.service.karigar_id},'app_karigar/offerList')
        .subscribe((r)=>
        {
            console.log(r);
            this.offer_list=r['offer'];
            console.log(this.offer_list);
        });
    } 
    
    testRadioOpen:any='';
    value:string='';
    qr_count:any=0;
    qr_limit:any=0;
    scanCoupon() {
        let alert = this.alertCtrl.create();
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
            handler: data => {
                this.testRadioOpen = false;
                // this.testRadioResult = data;
                this.value = data;
                console.log("redio val =====>",this.value)
                if(this.value == 'scan'){
                    this.scan();
                }else if(this.value == 'code'){
                    this.navCtrl.push(CoupanCodePage)
                }
                
            }
        });
        alert.present();
    }

    scan_tips()
    {
        // let contactModal = this.modalCtrl.create(AboutPage);
        // contactModal.present();
        // contactModal.onDidDismiss(resp=>{
            // console.log(resp);
            this.scan();
        // })
    }
    
    
    
    scan()
    {
        if( this.karigar_detail.manual_permission==1)
        {
            this.navCtrl.push(CoupanCodePage)
        }
        else
        {
            this.service.post_rqst({'karigar_id':this.service.karigar_id},"app_karigar/get_qr_permission")
            .subscribe(resp=>{
                console.log(resp);
                this.qr_count = resp['karigar_daily_count'];
                this.qr_limit = resp['qr_limit'];
                console.log(this.qr_count);
                console.log(this.qr_limit);
                
                if(parseInt(this.qr_count) <= parseInt(this.qr_limit) )
                {
                    const options:BarcodeScannerOptions =  { 
                        // prompt : "लैमिनेट शीट के स्टीकर को स्कैन करते समय, लाल रंग की लाइन को बारकोड स्टीकर की सभी लाइनों पर डालें स्कैन न होने पर संपर्क करें। कॉल करें- +91-9773897370"
                        prompt : ""
                    };
                    this.barcodeScanner.scan(options).then(resp => {
                        console.log(resp);
                        this.qr_code=resp.text;
                        console.log( this.qr_code);
                        if(resp.text != '')
                        {
                            this.service.post_rqst({'karigar_id':this.service.karigar_id,'qr_code':this.qr_code},'app_karigar/karigarCoupon')
                            .subscribe((r:any)=>
                            {
                                console.log(r);
                                
                                if(r['status'] == 'INVALID'){
                                    this.translate.get("Invalid Coupon Code")
                                    .subscribe(resp=>{
                                        this.showAlert(resp);
                                    })
                                    return;
                                }
                                else if(r['status'] == 'USED'){
                                    this.translate.get("Coupon Already Used")
                                    .subscribe(resp=>{
                                        this.showAlert(resp);
                                    })
                                    return;
                                }
                                else if(r['status'] == 'UNASSIGNED OFFER'){
                                    this.translate.get("Your Account Under Verification")
                                    .subscribe(resp=>{
                                        this.showAlert(resp);
                                    })
                                    return;
                                }
                                this.translate.get("points has been added into your wallet")
                                .subscribe(resp=>{
                                    this.showSuccess( r['coupon_value'] +resp)
                                })
                                this.getData();
                            });
                        }
                        else{
                            console.log('not scanned anything');
                        }
                    });
                }
                else
                {
                    this.translate.get("You have exceed the daily QR scan limit")
                    .subscribe(resp=>{
                        this.showAlert(resp);
                    })
                }
            })
        }
    }


   viewProfiePic()
    {
        this.modalCtrl.create(ViewProfilePage, {"Image": this.karigar_detail.profile,type:"normal"}).present();
    }
    
    viewProfie()
    {
        console.log(this.lang);
        
        this.navCtrl.push(ProfilePage,{'lang':this.lang})
    }
    
    goOnScanePage(){
        this.navCtrl.push(ScanPage);
    }
    goOnPlumberList(){
      
        
        
        if( this.karigar_detail.status =='Suspect'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close',
                subTitle:"Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only plumber add when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        
        else if(this.karigar_detail.status =='Pending'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only plumber add when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else if(this.karigar_detail.status =='Reject'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only plumber add when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else{

            this.navCtrl.push(PlumberlistPage);
        }

    }
    
    goOnOffersListPage(){
      
        

         if( this.karigar_detail.status =='Suspect'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close',
                subTitle:"Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only see your offers when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        
        else if(this.karigar_detail.status =='Pending'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only see your offers when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else if(this.karigar_detail.status =='Reject'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only see your offers when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else{

            this.navCtrl.push(OfferListPage);
        }
        
    }
    goOnOffersPage(id)
    {
        this.navCtrl.push(OffersPage,{'id':id});
    }
    
    goOnPointeListPage(){
      


        if( this.karigar_detail.status =='Suspect'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close',
                subTitle:"Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only see your points history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        
        else if(this.karigar_detail.status =='Pending'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only see your points history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else if(this.karigar_detail.status =='Reject'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only see your points history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else{

            this.navCtrl.push(PointListPage);
        }
        
    }
    goOnWorkingSitePage()
    {
        this.navCtrl.push(WorkingSitePage);
    }
    gotoCompass()
    {
        this.navCtrl.push(CompassPage);
    }
    
    goOntermsPage(id){
        this.navCtrl.push(TermsPage, {'id':id});
    }
    
    goOnFeedbackPage()
    {
        this.navCtrl.push(FeedbackPage);
    }
    presentLoading() 
    {
        this.loading = this.loadingCtrl.create({
            content: "Please wait...",
            dismissOnPageChange: false
        });
        this.loading.present();
    }
    goOnGiftListPage()
    {
        this.navCtrl.push(GiftListPage,{'mode':'home'});
    } 
    goOnDigitalcatPage()
    {
        this.navCtrl.push(DigitalcatalogPage);
    }


    goOnProductPage()
    {
        this.navCtrl.push(ProductsPage);
    }

    goOnShopImagePage()
    {
        this.navCtrl.push(FurnitureIdeasdetailPage);
    }
    
    
    // goOnFurniturePage()
    // {
    //     this.navCtrl.push(FurnitureIdeasPage);
    // }
    goOnProductsPage()
    {
        this.navCtrl.push(ProductsPage);
    }
    goOnArrivalProductsPage(){
        this.navCtrl.push(ArrivalProductPage);
    }
    goOnOfferProductsPage(){
        this.navCtrl.push(OfferProductPage);
    }
    goOnContractorPage(){
      
         if( this.karigar_detail.status =='Suspect'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close',
                subTitle:"Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only earn your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        
        else if(this.karigar_detail.status =='Pending'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only earn your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else if(this.karigar_detail.status =='Reject'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only earn your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else{

            this.navCtrl.push(ContractorListPage);
        }
    }
    viewDetail()
    {
        this.modalCtrl.create(ViewProfilePage, {"Image": this.lang !='en' ? this.offer_detail.hin_term_image : this.offer_detail.term_image}).present();
    }
    gotoHistory()
    {
        
        if( this.karigar_detail.status =='Suspect'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close',
                subTitle:"Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only see your points redeem history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        
        else if(this.karigar_detail.status =='Pending'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only see your points redeem history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else if(this.karigar_detail.status =='Reject'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only see your points redeem history when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else{

            this.navCtrl.push(TransactionPage)
        }
    }
    goOnGiftGallary()
    {
      
        if( this.karigar_detail.status =='Suspect'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close',
                subTitle:"Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only see your gift gallery when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        
        else if(this.karigar_detail.status =='Pending'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only see your gift gallery when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else if(this.karigar_detail.status =='Reject'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only see your gift gallery when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else{

            this.navCtrl.push(GiftListPage)
        }
    }
    goOnNewsPage()
    {
        this.navCtrl.push(NewsPage);
    }
    goOnVideoPage()
    {
        this.navCtrl.push(VideoPage);
    }
    goOnContactPage()
    {
        this.navCtrl.push(ContactPage);
    }
    goOnfaqPage()
    {
        this.navCtrl.push(FaqPage);
    }
    goOnAdvanceTextPage()
    {
        this.navCtrl.push(AdvanceTextPage);
    }
    gotoNotification()
    {
        this.navCtrl.push(NotificationPage);
    }
    gotoChangeLang()
    {
        this.navCtrl.push(LanguagePage,{"come_from":"homepage"});
    }

    goRedeemType(){

        if( this.karigar_detail.status =='Suspect'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close',
                subTitle:"Your current profile status is  <strong class=Suspect>“Suspect”</strong>. You can only redeem your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        
        else if(this.karigar_detail.status =='Pending'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Pending>“Pending”</strong>. You can only redeem your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else if(this.karigar_detail.status =='Reject'){
            let alert = this.alertCtrl.create({
                title:'Sorry!',
                cssClass:'action-close status-alert',
                subTitle:"Your current profile status is  <strong class=Reject>“Reject”</strong>. You can only redeem your points when your profile status is <strong class=Approved>“Verified”</strong>. To know more, you can call us at <a href=tel:1800 212 0192>1800 212 0192</a> or chat with us.",
                buttons: [
                    {
                        // text: 'Chat With Us',
                        //   role: 'cancel',
                        // handler: () => {
                        //     this.goChat();
                        // }
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();  
            return
        }
        else if(this.karigar_detail.user_type ==1 && this.karigar_detail.status =='Verified'){
            this.navCtrl.push(RedeemTypePage,{'mode':'home',"balance_point":this.total_balance_point, "redeem_point":this.karigar_detail.redeem_balance});

        }

        else {
            this.navCtrl.push(GiftListPage,{'mode':'home'});
        }
    }
    share()
    {
        console.log("share and earn");
        // let image = "https://play-lh.googleusercontent.com/FEDtMP_dyMgM8rJtp4MFdp60g0fLuBYNbu3pBNsNH52knTsG1yDuNs56CFYu_X3XqYk=s180-rw";

        let image = "";
        let app_url = "https://apps.apple.com/us/app/jupiter-aqua-lines/id6449290209";
        
        this.socialSharing.share("Hey there join me (" + this.karigar_detail.full_name + "-" + this.karigar_detail.mobile_no + ") on  Jal Uphaar, app. Enter my code *" + this.karigar_detail.referral_code + "* to earn points back in your wallet!", "Karigar Reffral", image, app_url)
        .then(resp=>{
            console.log(resp);
            
        }).catch(err=>{
            console.log(err);
        }) 
    }
    showAlert(text)
    {
        let alert = this.alertCtrl.create({
            title:'Alert!',
            cssClass:'action-close',
            subTitle: text,
            buttons: ['OK']
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
    
    notification()
    {
        console.log("notification called");
        
        this.push.hasPermission()
        .then((res: any) => {
            
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            } else {
                console.log('We do not have permission to send push notifications');
            }
        });
        
        
        const options: PushOptions = {
            android: {
                senderID:'893824522432',
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'true'
            },
            windows: {
                
            },
        };
        
        const pushObject: PushObject = this.push.init(options);

        pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
        pushObject.on('registration').subscribe((registration: any) => {
            console.log('Device registered', registration) 
            this.service.post_rqst({'id':this.service.karigar_id,'registration_id':registration.registrationId},'app_karigar/update_token').subscribe((r)=>
            {
                console.log(r);
                console.log("tokken saved");
                
            });
        }
        );
        
        pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    }
    
    openModal()
    {
        let contactModal = this.modalCtrl.create(AboutusModalPage);
        contactModal.present();
        return;
    }
    get_user_lang()
    {
        this.storage.get("token")
        .then(resp=>{
            this.tokenInfo = this.getDecodedAccessToken(resp );
            
            this.service.post_rqst({"login_id":this.tokenInfo.sub},"app_karigar/get_user_lang")
            .subscribe(resp=>{
                console.log(resp);
                this.lang = resp['language'];
                console.log(this.lang);
                
                if(this.lang == "")
                {
                    this.lang = "en";
                }
                console.log(this.lang);
                this.translate.use(this.lang);
            })
        })
    }
    getDecodedAccessToken(token: string): any 
    {
        try{
            return jwt_decode(token);
        }
        catch(Error){
            return null;
        }
    }    


    title:any=""
    no:any=""
    yes:any=""
    content:any=""
    Logout:any;
    sure:any;
    
    
    logout()
    {
        this.translate.get('Logout!')
        .subscribe(resp=>{
            this.Logout = resp;
        })
        this.translate.get('Are you sure you want Logout?')
        .subscribe(resp=>{
            this.sure = resp;
        })
        this.translate.get('No')
        .subscribe(resp=>{
            this.no = resp;
        })
        this.translate.get('Yes')
        .subscribe(resp=>{
            this.yes = resp;
        })
        let alert = this.alertCtrl.create({
            title: this.Logout,
            message: this.sure,
            buttons: [
                {
                    text: this.no,
                    handler: () => {
                        console.log('Cancel clicked');
                        // this.d.('Action Cancelled!')
                    }
                },
                {
                    text:this.yes ,
                    handler: () => {
                        this.storage.set('token', '');
                        this.service.karigar_info = '';
                        
                        let alert2 = this.alertCtrl.create({
                            title:'Success!',
                            subTitle: 'Logout Successfully',
                            buttons: [ {
                                text: 'Ok',
                                handler: () => {
                                    
                                    console.log('Cancel clicked');
                                }
                            }]
                        });
                        alert2.present();
                        this.app.getRootNav().setRoot(LanguagePage);
                    }
                }
            ]
        })
        
        alert.present();
        
    }

    initPushNotification()
    {
        
        this.push.hasPermission().then((res: any) => {
            if (res.isEnabled)
            {
                console.log('We have permission to send push notifications');
            }
            else
            {
                console.log('We don\'t have permission to send push notifications');
            }
        });
        
        const options: PushOptions = {
            android: {
                senderID: '849648964768',
                icon: './assets/imgs/logo_small',
                forceShow:true
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        
        const pushObject: PushObject = this.push.init(options);
        
        pushObject.on('notification').subscribe((notification: any) => {
            console.log('Received a notification', notification)
            console.log("error1",notification.additionalData.type );
            console.log("error1",notification.additionalData );
            
            if(notification.additionalData.type == "message"){
                this.navCtrl.push(FeedbackPage);
            }else if(notification.additionalData.type == 'offer'){
                this.navCtrl.push(OfferListPage);
            }
            else if(notification.additionalData.type == 'redeem'){
                this.navCtrl.push(TransactionPage);
            }else if(notification.additionalData.type == 'catalogue'){
                this.navCtrl.push(ProductsPage);
            }else if(notification.additionalData.type == 'product'){
                this.navCtrl.push(ProductsPage);
            }else if(notification.additionalData.type == 'video'){
                this.navCtrl.push(VideoPage);
            }else if(notification.additionalData.type == 'profile'){
                this.navCtrl.push(ProfilePage);
            }else if(notification.additionalData.type == 'gift'){
                this.navCtrl.push(GiftListPage);
            }
        });
        
        
        pushObject.on('registration')
        .subscribe((registration) =>{
            console.log('Device registered', registration);
            console.log('Device Token', registration.registrationId);
            this.storage.set('fcmId', registration);
            // console.log( this.tokenInfo);
            console.log(this.storage);
            this.storage.get('user_type').then((user_type) => {
                this.user_type = user_type;
                console.log(this.user_type);
                console.log(user_type);
            });
            this.storage.get('userId').then((userId) => {
                this.idlogin = userId;
                console.log(this.idlogin);
                console.log(userId);
            });
            this.registration=registration.registrationId;
            this.registrationid(registration.registrationId);
        });
        
        pushObject.on('error')
        .subscribe((error) =>
        console.error('Error with Push plugin', error));
    }
    registrationid(registrationId){
        console.log(" enter registration home");
        console.log(registrationId);
        
        
        this.storage.get('user_type').then((user_type) => {
            this.user_type = user_type;
            console.log(this.user_type);
            console.log(user_type);
            console.log("user_type");
            
        });
        this.storage.get('userId').then((userId) => {
            this.idlogin = userId;
            console.log(this.idlogin,  this.idlogin);
            console.log("userId");
            console.log(userId);
        });
        
        setTimeout(() =>{
            this.service.post_rqst({'registration_id':registrationId,'karigar_id':this.service.karigar_id},'app_karigar/add_registration_id')
            .subscribe((r)=>
            {
                console.log("success");
                console.log(r);
                
            });
        }, 5000);
        
        
    }
}
