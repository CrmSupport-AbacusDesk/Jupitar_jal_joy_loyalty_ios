import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';

/**
 * Generated class for the PlumberdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plumberdetail',
  templateUrl: 'plumberdetail.html',
})
export class PlumberdetailPage {
  id:any;
  loading:Loading;
  karigar_detail:any = {};
  point_received:any = {};

  information :string  ="Basic_Details"


  constructor(public navCtrl: NavController, public navParams: NavParams,public dbService:DbserviceProvider, public loadingCtrl:LoadingController,public translate:TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlumberdetailPage');
    this.id = this.navParams.get('id');
    this.presentLoading();
    this.PlumberDetail();
  }

  presentLoading() 
  {
    this.translate.get("Please wait...")
    .subscribe(resp=>{
      this.loading = this.loadingCtrl.create({
        content: resp,
        dismissOnPageChange: false
      });
      this.loading.present();
    })
  }
  
  
  PlumberDetail(){
    this.dbService.post_rqst( {'karigar_id':this.id}, 'app_karigar/karigarDetail').subscribe( r =>
      {
        this.loading.dismiss();
        this.karigar_detail = r['karigar'];
        this.point_received = r['point_received'];


      });
    }

}
