import { PointtransferremarkPage } from './../pointtransferremark/pointtransferremark';
import { PlumberaddPage } from './../plumberadd/plumberadd';
import { PlumberdetailPage } from './../plumberdetail/plumberdetail';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, ModalController, AlertController } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';

/**
 * Generated class for the PlumberlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plumberlist',
  templateUrl: 'plumberlist.html',
})
export class PlumberlistPage {

  employee_id:any;
  filter:any = {};
  filterType:any ={};

  all_count:any =0;
  pending_count : any = 0;
  approved_count : any = 0;
  reject_count : any = 0;
  loading:Loading;

  details: string = "Assign_Plumber";
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController, public modalCtrl: ModalController, public dbService:DbserviceProvider, public loadingCtrl:LoadingController,  public translate:TranslateService) {
    this.PlumberList(this.details)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlumberlistPage');
    this.PlumberList(this.details)
  }

  goOnPlumberDetail(id){
    this.navCtrl.push(PlumberdetailPage, {'id':id});
  }
  
  

  goOnPlumberAdd(){
    this.navCtrl.push(PlumberaddPage);

  }

  doRefresh (refresher)
  {
      this.PlumberList(this.details);
      setTimeout(() => {
          refresher.complete();
      }, 1000);
  }
  plumber_List:any=[]; 
  
  PlumberList(status){
    console.log(status);
    
    this.filter.mode = 0;
    this.filter.status =  status;
    this.dbService.post_rqst( {'contractor_id':this.dbService.karigar_id, 'filter': this.filter}, 'app_karigar/karigarList').subscribe( r =>
      {
        this.plumber_List = r.karigars;
        console.log(this.plumber_List);
        this.loading.dismiss();
        
     
        this.filter.mode = 1;
        this.all_count = r.all_count;
        this.pending_count = r.pending_count;
        this.approved_count = r.approved_count;
        this.reject_count = r.reject_count;
        // console.log(this.meetData);
      });

      
    }

    PlumberList1(search){
      console.log(search);
      
      this.filter.mode = 0;
      this.filter.search =  search;
      this.dbService.post_rqst( {'contractor_id':this.dbService.karigar_id, 'filter': this.filter}, 'app_karigar/karigarList').subscribe( r =>
        {
          this.plumber_List = r.karigars;
          console.log(this.plumber_List);
          this.loading.dismiss();
          
       
          this.filter.mode = 1;
          // this.all_count = r.all_count;
          // this.pending_count = r.pending_count;
          // this.approved_count = r.approved_count;
          // this.reject_count = r.reject_count;
          // console.log(this.meetData);
        });
  
        
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
    AssignPlumber(id){
      console.log(id);
      

      this.dbService.post_rqst( {'dealer_id':this.dbService.karigar_id, 'karigar_id': id}, 'app_karigar/plumber_assign').subscribe( r =>
        {

          console.log(r);
          if(r['status']=="SUCCESS")
          {
            this.showSuccess("Assign Plumber Successfully to this Channel Partner");
              this.navCtrl.push(PlumberlistPage);
          }else if(r['status']=="Already Assigned"){

            this.showSuccess("Already Assigned this Plumber ");


          }
          
      });

    }

    PlumberPointTrans(id,status)
    {
      if(status !='Verified'){
        this.showAlert( 'Plumber status is not Verified');

      }
      else{

        let ReceiveModal = this.modalCtrl.create(PointtransferremarkPage,{'id':id});
        ReceiveModal.present();
      }
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

}
