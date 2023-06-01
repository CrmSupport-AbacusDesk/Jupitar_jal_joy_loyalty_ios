import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ViewController, Loading } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { PlumberlistPage } from '../plumberlist/plumberlist';

/**
 * Generated class for the PointtransferremarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pointtransferremark',
  templateUrl: 'pointtransferremark.html',
})
export class PointtransferremarkPage {
  karigar_id:any;
  data:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, public service:DbserviceProvider,public alertCtrl:AlertController) {
    this.karigar_id = this.navParams.get('id');
    console.log(this.karigar_id);
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PointtransferremarkPage');
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
          // this.navCtrl.push(PlumberlistPage);
          
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
 
  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }
  loading:Loading;
  saveFlag:any = false;
  submit(){
     if(!this.data.points){
      this.showAlert( 'Please enter points');
      return
     }
    this.saveFlag = true;
    this.service.post_rqst({'karigar_id':this.karigar_id,'dealer_id':this.service.karigar_id,'points':this.data.points,'remark':this.data.remark},'app_karigar/plumber_points_transfer').subscribe(r=>
      {
        console.log(r);
        if(r['status']=='SUCCESS'){
          this.showSuccess( 'Plumber Point Transfer Successfully');

        this.navCtrl.popTo(PlumberlistPage);
        

        //   this.showSuccess( 'Plumber Point Transfer Successfully');
        // this.navCtrl.setRoot(PlumberlistPage);
        return;

        }

        if(r['status']=='INSUFFICIENTBALANCE'){
          this.showAlert( 'Insufficient Balance');
            return;
  
          }
          
       
      });
  }

}
