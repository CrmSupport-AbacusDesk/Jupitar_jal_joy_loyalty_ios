import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';
import { ContractorListPage } from '../contractor-list/contractor-list';

/**
* Generated class for the ContractorAddPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-contractor-add',
  templateUrl: 'contractor-add.html',
})
export class ContractorAddPage {
  
  conData:any={};
  conData1:any={};
  today_date:any ={};
  todayDate:any
  contractorData:any =[];
  loading:Loading;
  flag:any='';
  pointValue:any ={};
  saveFlag : boolean = false;
  cam:any="";
    gal:any="";
    cancl:any="";
    ok:any="";
    upl_file:any="";
    save_succ:any="";
  dialog: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera, public actionSheetController: ActionSheetController, public toastCtrl: ToastController, public dbService:DbserviceProvider, public loadingCtrl:LoadingController, public translate:TranslateService) {
    // this.dbService.karigar_id;

    this.today_date = new Date().toISOString().slice(0,10);
  }
  
  ionViewDidLoad() {
    this.getData()
    this.getCategory();
    this.getProduct();
    this.translate.get("Camera")
    .subscribe(resp=>{
        this.cam = resp
    });
    
    this.translate.get("Gallery")
    .subscribe(resp=>{
        this.gal = resp
    });
    
    this.translate.get("Cancel")
    .subscribe(resp=>{
        this.cancl = resp
    });
    
    this.translate.get("OK")
    .subscribe(resp=>{
        this.ok = resp
    });
    
    this.translate.get("Upload File")
    .subscribe(resp=>{
        this.upl_file = resp
    });
    
  }
  
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Delete successfully',
      duration: 3000
    });
    toast.present();
  }
  karigar_detail:any={};
  state:any;
  getData()
    {
        console.log("Check");
        this.dbService.post_rqst({'karigar_id':this.dbService.karigar_id},'app_karigar/karigarHome')
        .subscribe((r:any)=>
        {
            console.log(r);
            this.karigar_detail=r['karigar'];
            this.state=this.karigar_detail.state
            console.log(this.state)
            this.distributorList();

            console.log(this.karigar_detail.state)
            
            
           
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
  
  category:any=[];
  getCategory()
  {
    this.dbService.get_rqst('app_karigar/getCategory')
    .subscribe(d => {
      console.log(d);
      this.category = d.category;
      console.log(this.category);
    });
  }
  
  product_code:any =[]
  
  getProduct(){
    // let id
    // id = val.id
    // console.log(id);
    
    // this.conData1.product_point_group = val.product_point_group;
    this.dbService.post_rqst( {}, 'app_karigar/get_product?page=').subscribe(r=>{
      console.log(r);
      this.product_code=r['productData'];
      console.log(this.product_code);
    })
  }
  
  
  product_size:any =[]
  
  getSize(val){
    let id
    id = val.id;
    this.conData1.product_name = val.product_name;
    this.dbService.post_rqst( {'product_id':id}, 'app_karigar/coupon_product_size?page=').subscribe(r=>{
      console.log(r);
      this.product_size=r['product_sizes'];
    })
  }
  
  
   // let getData
    // getData = this.product_code.filter( x => x.id==event.value)[0];
  
  getpoint(point){
    console.log(point);
   
    this.pointValue  = point;
    
    console.log(this.pointValue);
    
    
  }
  
  
  
  
  addItem()
  {
    let val=JSON.parse(JSON.stringify(this.conData1));
    console.log(val);
    if(this.conData1.product_point_group!='' && this.conData1.qty!=''  ){
      this.contractorData.push(val);
    }
    console.log(this.contractorData);
  
    this.conData1.product_point_group='';
  
    this.conData1.qty='';
    // this.conData1.bill_no='';
    // this.conData1.bill_date='';
    // this.conData1.bill_amount='';
    
  }
  
  totalPoint(event){
    console.log(event);
    this.conData1.totalPoint =  event * this.pointValue;
    console.log( this.conData1.totalPoint);
    
  }
  
  
  deleteItem(i)
  {
    this.contractorData.splice(i,1);
    this.presentToast();
  }
  
  
  
  onUploadChange(evt: any) {
    // this.flag=false;
    // const file = evt.target.files[0];
    
    // if (file) {
    //   const reader = new FileReader();
    
    //   reader.onload = this.handleReaderLoaded.bind(this);
    //   reader.readAsBinaryString(file);
    // }
    let actionsheet = this.actionSheetController.create({
      title:" Upload File",
      cssClass: 'cs-actionsheet',
      
      buttons:[{
        cssClass: 'sheet-m',
        text: 'Camera',
        icon:'camera',
        handler: () => {
          console.log("Camera Clicked");
          this.takeDocPhoto();
        }
      },
      {
        cssClass: 'sheet-m1',
        text: 'Gallery',
        icon:'image',
        handler: () => {
          console.log("Gallery Clicked");
          this.getDocImage();
        }
      },
      {
        cssClass: 'cs-cancel',
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionsheet.present();
}


takeDocPhoto()
{
  console.log("i am in camera function");
  const options: CameraOptions = {
    quality: 90,
    destinationType: this.camera.DestinationType.DATA_URL,
    // allowEdit:true,
    targetWidth : 1050,
    targetHeight : 1000,
    cameraDirection: 1,
    correctOrientation:true,
  }
  
  console.log(options);
  this.camera.getPicture(options).then((imageData) => {
    this.flag=false;
    this.conData1.image = 'data:image/jpeg;base64,' + imageData;
    console.log(this.conData1.image, 'line number 236');
  }, (err) => {
  });
}
getDocImage()
{
  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    saveToPhotoAlbum:false
  }
  console.log(options);
  this.camera.getPicture(options).then((imageData) => {
    this.flag=false;
    this.conData1.image = 'data:image/jpeg;base64,' + imageData;
    console.log(this.conData1.image, 'line number 252');
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





image_data:any=[];
                
                
fileChange(image)
{
  
  this.image_data.push({'image':image});
  // if(this.image_data.length >0){
  //   this.alertToast('Bill image required')
  //   return
  // }
  console.log(this.image_data);
  this.image = '';
}

remove_image(i:any)
{
  this.image_data.splice(i,1);
}


captureImage()
{
  let actionsheet = this.actionSheetController.create({
    title:"Bill Upload Media",
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



submit(){
 
 
  // if(this.contractorData < 1){
  //     this.alertToast('Please add one item at least!')
  //     return
  //    }

  //    if (!this.conData1.image) {
  //     this.alertToast("Please fill the Image")
  //     return
  // }
    

  console.log(this.image_data.length <= 0);

  if(this.image_data.length <= 0){
    this.alertToast('Please add one image at least!')
    return
   }

  this.presentLoading();
  this.saveFlag = true;
 

  this.conData1.part = this.contractorData;
  this.conData1.contractor_id = this.dbService.karigar_id;



  this.conData1.image = this.image_data?this.image_data:[];

  // if(this.conData1.image=='' || this.conData1.image == undefined){
  //   this.alertToast('Bill image required')
  //   return
  // }
 

  console.log(this.image_data);
  console.log(this.conData1.image);
  


 
  this.dbService.post_rqst( this.conData1,'app_karigar/add_contractor_request ').subscribe( r =>
    {
      console.log(r);

     

      if(r['status'] == 'SUCCESS'){
        this.loading.dismiss();
        this.navCtrl.popTo(ContractorListPage);
      }


   




    });
  }
  // filter:any={};
  distributor_list:any=[];
  distributorList(){
  
    this.dbService.post_rqst( {'filter':{'state':this.state}},'app_karigar/distributorList').subscribe( r =>
      {
        console.log(r);
        this.distributor_list=r['karigars'];
  
      });
    }
  
  MobileNumber(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  
}
