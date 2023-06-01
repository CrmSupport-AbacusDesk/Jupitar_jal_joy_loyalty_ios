import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { TranslateService } from '@ngx-translate/core';
import { AlertController, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ConstantProvider } from '../../providers/constant/constant';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { HomePage } from '../home/home';
import { CoupanCodePage } from '../scane-pages/coupan-code/coupan-code';

/**
* Generated class for the SuccessModalPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-success-modal',
  templateUrl: 'success-modal.html',
})
export class SuccessModalPage {
  
  karigar_detail:any={};
  sucessData:any ={};
  uploadUrl:any="";
  value:string='';
  testRadioOpen:any='';
  testRadioResult:any='';
  qr_count:any=0;
  qr_limit:any=0;
  qr_code:any='';
  coupon_value:any='';
  constructor(public navCtrl: NavController, public service:DbserviceProvider, public navParams: NavParams, public alertCtrl:AlertController, public viewCtrl: ViewController, public con:ConstantProvider, private barcodeScanner: BarcodeScanner, public translate:TranslateService) {
    
    console.log(navCtrl);
    
    console.log(navParams);
    
    this.sucessData = navParams.data.data;
    this.uploadUrl = this.con.upload_url;
    
    console.log('sucees', this.sucessData);
    this.getData();
    
  }


  getData()
  {
      console.log("Check");
      this.service.post_rqst({'karigar_id':this.service.karigar_id},'app_karigar/karigarHome')
      .subscribe((r:any)=>
      {
          console.log(r);
          this.karigar_detail=r['karigar'];
      });
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

  
  dismiss(){
    // this.viewCtrl.dismiss();
    this.navCtrl.setRoot(HomePage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessModalPage');
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
                
                else if(r['status'] == 'VALID'){
                  let productData
                  productData =r['productdetail']
                  
                  if(productData.image != ''){
                    // this.presentCancelPolicyModal(r['productdetail']);

                    console.log('image Path',this.sucessData.image);
                    
                   this.sucessData.image = productData.image;

                   console.log('image Path',this.sucessData.image);

                   this.navCtrl.push(SuccessModalPage);

                  }
                  
                  else{
                    this.translate.get(" POINTS have been added into your wallet")
                    .subscribe(resp=>{
                      this.showSuccess( r['coupon_value'] + ' ' + resp);

                    })
                  }
                }
                
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
  
}
