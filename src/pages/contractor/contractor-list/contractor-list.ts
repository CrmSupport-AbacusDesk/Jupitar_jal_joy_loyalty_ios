import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';
import { ContractorAddPage } from '../contractor-add/contractor-add';
import { ContractorDetailPage } from '../contractor-detail/contractor-detail';

/**
* Generated class for the ContractorListPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-contractor-list',
  templateUrl: 'contractor-list.html',
})
export class ContractorListPage {
  data:any =[]; 
  employee_id:any;
  filter:any = {};
  filterType:any ={};

  all_count:any =0;
  pending_count : any = 0;
  approved_count : any = 0;
  reject_count : any = 0;
  loading:Loading;

  details: string = "Pending";


  constructor(public navCtrl: NavController, public navParams: NavParams,public dbService:DbserviceProvider, public loadingCtrl:LoadingController,  public translate:TranslateService) {
    this.filter = this.dbService.get_filters();
    if(this.filter.status == undefined)
    {
      this.filter.status = 'All';
    }
    this.contractorList(this.details);

  }
  
  

  ionViewDidLoad() {
    this.presentLoading();
    this.contractorList(this.details);
  }
  
  doRefresh (refresher)
  {
      this.contractorList(this.details);
      setTimeout(() => {
          refresher.complete();
      }, 1000);
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


  goOnContractorAdd(){
    this.navCtrl.push(ContractorAddPage);
  }

  goOnContractorDetail(id){
    this.navCtrl.push(ContractorDetailPage, {'id':id});
  }
  
  
  contractorList(status){
    this.filter.mode = 0;
    this.filter.status =  status;
    this.dbService.post_rqst( {'contractor_id':this.dbService.karigar_id, 'filter': this.filter}, 'app_karigar/get_contractor_request').subscribe( r =>
      {
        this.loading.dismiss();
        console.log(r.request_list.data);
        this.data = r.request_list.data;
        this.filter.mode = 1;
        this.all_count = r.all_count;
        this.pending_count = r.pending_count;
        this.approved_count = r.approved_count;
        this.reject_count = r.reject_count;
        // console.log(this.meetData);
      });
      
    }
    
  }
  