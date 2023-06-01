import { Component } from '@angular/core';
import { AlertController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { CancelpolicyModalPage } from '../cancelpolicy-modal/cancelpolicy-modal';
import { GiftListPage } from '../gift-gallery/gift-list/gift-list';

/**
* Generated class for the RedeemTypePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-redeem-type',
  templateUrl: 'redeem-type.html',
})
export class RedeemTypePage {
  limit:any;
  walletBal:any;
  redeem_point:any;
  data:any={};
  formData= new FormData();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController,  public modalCtrl: ModalController, public service:DbserviceProvider) {
    console.log(navParams);
    
    this.walletBal = navParams.data.balance_point;
    this.redeem_point = navParams.data.redeem_point;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RedeemTypePage');
    this.cashPointLimit();
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
          // this.navCtrl.push(TransactionP age);
        }
      }]
    });
    alert.present();
  }

cashPointLimit(){

  this.service.post_rqst( {},'app_karigar/cash_limit')
  .subscribe((r) =>
  {
      console.log(r);
     
      this.limit=r['cash_limit'] ['cash_redemption_limit'];
      console.log(this.limit);
      
  });
}
  
  submit(){
    
    console.log(this.data.redeem_type);
    
    if(!this.data.redeem_type){
      this.showAlert('Please select request Type');
      return
    }
    else if(this.data.redeem_type == 'Cash'){
      if(!this.data.redeem_amount){
        this.showAlert('Please fill redeem cash value');
        return
      }
      
      else if(this.data.redeem_amount < this.limit){
        this.showAlert( 'You cannot send redeem request below ' + this.limit +' '+ 'points');
        return
      }

      else if(this.data.redeem_amount > this.redeem_point){
        this.showAlert( 'insufficient points to redeem');
        return
      }

      let contactModal = this.modalCtrl.create(CancelpolicyModalPage,{'karigar_id':this.service.karigar_id, 'redeem_type':this.data.redeem_type, 'redeem_point':this.data.redeem_amount});
      contactModal.present();
      console.log('otp');
    }

    else if (this.data.redeem_type == 'gift'){
      this.navCtrl.push(GiftListPage,{'redeem_type':this.data.redeem_type})
    }
  }
}
