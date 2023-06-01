import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, ToastController, ActionSheetController, Content, AlertController } from 'ionic-angular';
import { FurnitureIdeasdetailPage } from '../furniture-ideasdetail/furniture-ideasdetail';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { TranslateService } from '@ngx-translate/core';
import { ConstantProvider } from '../../providers/constant/constant';
import * as jwt_decode from "jwt-decode";
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
    selector: 'page-furniture-ideas',
    templateUrl: 'furniture-ideas.html',
})
export class FurnitureIdeasPage {
  @ViewChild(Content) content: Content;
    upload_url:any='';
    loading:Loading;
    tokenInfo:any={};
    lang:any='';
    filter:any={};
    flag:any='';
    data:any={};
    karigar_id:any='';
    
    constructor(public navCtrl: NavController, public navParams: NavParams,public db:DbserviceProvider,public actionSheetController: ActionSheetController,public alertCtrl:AlertController, private camera: Camera,public toastCtrl: ToastController,public loadingCtrl:LoadingController,public translate:TranslateService,public constn:ConstantProvider,public storage:Storage) {
        this.presentLoading();

      this.data=this.navParams.get('data')
      console.log(this.data)
        



        if(this.navParams.get('data')){
            this.data = navParams.data.data;

            

            this.image_data=this.data;
            console.log(this.image_data)
            for(let i=0; i<this.image_data.length; i++){
            this.data.doc_id=this.image_data[i].id
            console.log(this.data.doc_id)

            }
            this.data.doc_id=this.image_data.id


            this.data.karigar_edit_id = this.data.id;
            this.data.profile_edit_id = this.data.id;
            this.data.doc_edit_id = this.data.id;
            console.log(this.data.status);

           
        }
    }
    
    ionViewDidLoad()
    {
        this.get_user_lang();
        console.log('ionViewDidLoad FurnitureIdeasPage');
        this.upload_url = this.constn.upload_url;
        this.get_category();
    }
    
    goOnfurnituredetailPage(data)
    {
        this.navCtrl.push(FurnitureIdeasdetailPage,{data:data});
    }

    scrollUp()
    {
        this.content.scrollToTop();
    } 
    
    category_list:any=[];
    get_category()
    {
        this.filter.limit = 0;
        this.db.post_rqst({'filter' : this.filter},"app_karigar/get_furniture_cat")
        .subscribe(resp=>{
            console.log(resp);
            this.category_list = resp['category_list'];
            this.loading.dismiss();
        })
    }
    
    loadData(infiniteScroll)
    {
        console.log('loading');
        this.filter.limit=this.category_list.length;
        this.db.post_rqst({'filter' : this.filter},'app_karigar/get_furniture_cat')
        .subscribe( (r) =>
        {
            console.log(r);
            if(r['category_list']=='')
            {
                this.flag=1;
            }
            else
            {
                setTimeout(()=>{
                    this.category_list=this.category_list.concat(r['category_list']);
                    console.log('Asyn operation has stop')
                    infiniteScroll.complete();
                },1000);
            }
        });
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
    
    get_user_lang()
    {
        this.storage.get("token")
        .then(resp=>{
            this.tokenInfo = this.getDecodedAccessToken(resp );
            
            this.db.post_rqst({"login_id":this.tokenInfo.sub},"app_karigar/get_user_lang")
            .subscribe(resp=>{
                console.log(resp);
                this.lang = resp['language'];
                if(this.lang == "")
                {
                    this.lang = "en";
                }
                this.translate.use(this.lang);
            })
        })
    }
    getDecodedAccessToken(token: string): any {
        try{
            return jwt_decode(token);
        }
        catch(Error){
            return null;
        }
    }
    productDataImg:any=[];
    getShopDetail()
    {
        console.log('karigar');
        
        this.db.post_rqst( {'karigar_id': this.db.karigar_id },'app_karigar/shop_image')
        .subscribe((r) =>
        {
            console.log(r);
            this.loading.dismiss();
            // this.karigar_detail=r['karigar'];
            this.productDataImg=r['shop_image'];
            // this.language=r['language'];
        });
    }















    



image_data:any=[];
                
                
fileChange(image)
{
  console.log('all image', image);
  
  this.image_data.push({'image':image});
  // if(this.image_data.length >0){
  //   this.alertToast('Bill image required')
  //   return
  // }
  console.log('Image array ',this.image_data);
  this.image = '';
}

remove_image(i:any)
{
  this.image_data.splice(i,1);
}






captureImage()
{
  let actionsheet = this.actionSheetController.create({
    title:"Shop Upload Media",
    cssClass: 'cs-actionsheet',
    
    buttons:[{
      cssClass: 'sheet-m',
      text: 'Camera',
      icon:'camera',
      handler: () => {
        console.log("Camera Clicked");
        
        this.takePhoto1();
      }
    },
    {
      cssClass: 'sheet-m1',
      text: 'Gallery',
      icon:'image',
      handler: () => {
        console.log("Gallery Clicked");
        this.getImage1();
      }
    },
    {
      cssClass: 'cs-cancel',
      text: 'Cancel',
      role: 'cancel',
      icon:'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }
  ]
});
actionsheet.present();
}



image:any;
takePhoto1()
{
console.log("i am in camera function");
const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  targetWidth : 1000,
  targetHeight : 1000
}

console.log(options);
this.camera.getPicture(options).then((imageData) => {
    // this.data.doc_id ='';
  this.image = 'data:image/jpeg;base64,' + imageData;
//   this.image=  imageData;
  console.log(this.image);
  if(this.image)
  {
    this.fileChange(this.image);
  }
}, (err) => {
});
}
getImage1()
{
const options: CameraOptions = {
  quality: 70,
  destinationType: this.camera.DestinationType.DATA_URL,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  saveToPhotoAlbum:false
}
console.log(options);
this.camera.getPicture(options).then((imageData) => {
    // this.data.doc_id ='';
  this.image= 'data:image/jpeg;base64,' + imageData;
//   this.image=  imageData;
//   this.image= imageData.substr(imageData.lastIndexOf('/') + 1);
  console.log(this.image);
  if(this.image)
  {
    this.fileChange(this.image);
  }
}, (err) => {
});
}



alertToast(msg){
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
  

  save_succ:any="";
  ok:any="";
  showSuccess(text)
  {
      this.translate.get("Image Save Successfully")
      .subscribe(resp=>{
          let alert = this.alertCtrl.create({
              title:resp+'!',
              cssClass:'action-close',
              subTitle: text,
              buttons: ['OK']
          });
          alert.present();
      })
  }


 

  saveFlag:any = false;

  submit()
        {

          if(this.image_data.length <= 0){
            this.alertToast('Please add one image at least!')
            return
           }

           
            // if(!this.data.document_image){
            //     this.presentToast();
            //     return
            // }

           
            this.saveFlag = true;

            this.presentLoading();
    

            this.data.shop_image = this.image_data?this.image_data:[];
          
                this.karigar_id = this.db.karigar_id;


            this.db.post_rqst( {'karigar_id':this.db.karigar_id,'data':this.data.shop_image},'app_karigar/add_shop_image')
            .subscribe( (r) =>
            {
                console.log(r);
                this.loading.dismiss();
                this.karigar_id=r['id'];
                console.log(this.karigar_id);
                
                if(r['status']=="SUCCESS")
                {
                    this.showSuccess(this.save_succ);

                }
                this.navCtrl.push(HomePage);
              
            });
        }


}