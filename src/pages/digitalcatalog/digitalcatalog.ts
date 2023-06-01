import { DbserviceProvider } from './../../providers/dbservice/dbservice';
import { ConstantProvider } from './../../providers/constant/constant';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DigitalcatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-digitalcatalog',
  templateUrl: 'digitalcatalog.html',
})
export class DigitalcatalogPage {
  pdf:any=[];
  uploadUrl:string='';
  tokenInfo: any;
  db: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public con:ConstantProvider, public dbService:DbserviceProvider) {
    this.uploadUrl = con.upload_url;
    this.getpdflist();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DigitalcatalogPage');
  }

  getpdflist()
  {
    this.filter.limit=0;
   this.dbService.post_rqst({"login_id":this.dbService.karigar_id,"filter":this.filter },"app_karigar/product_catalogue_list")
   .subscribe( r =>
     {
       console.log(r);
       this.pdf = r['pdf']
       }); 
     }

     filter: any={};
     flag:any='';
     loadData(infiniteScroll)
     {
         this.filter.limit=this.pdf.length;
         this.dbService.post_rqst({'filter' : this.filter,'login_id':this.dbService.karigar_id},'app_karigar/product_catalogue_list')
         .subscribe( (r) =>
         {
             console.log(r);
             if(r=='')
             {
                 this.flag=1;
             }
             else
             {
                 setTimeout(()=>{
                     this.pdf=this.pdf.concat(r['pdf']);
                     console.log('Asyn operation has stop')
                     infiniteScroll.complete();
                 },1000);
             }
         });
     }
}
