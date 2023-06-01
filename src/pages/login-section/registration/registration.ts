import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, LoadingController, Loading, ModalController, ToastController  } from 'ionic-angular';
// import { FileTransfer, } from '@ionic-native/file-transfer';
// import { TabsPage } from './../../../pages/tabs/tabs';
import { DbserviceProvider } from '../../../providers/dbservice/dbservice';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {AboutusModalPage} from '../../aboutus-modal/aboutus-modal'
import { Storage } from '@ionic/storage';
import { Content } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from '../../home/home';
import { ConstantProvider } from '../../../providers/constant/constant';


@IonicPage()
@Component({
    selector: 'page-registration',
    templateUrl: 'registration.html',
})
export class RegistrationPage {
    @ViewChild(Content) content: Content;
    data:any={};
    state_list:any=[];
    distributor_list:any=[];
    district_list:any=[];
    city_list:any=[];
    pincode_list:any=[];
    selectedFile:any=[];
    file_name:any=[];
    karigar_id:any='';
    formData= new FormData();
    myphoto:any;
    profile_data:any='';
    loading:Loading;
    lang:any='en';
    today_date:any;
    whatsapp_mobile_no:any='';
    uploadurl: any = "";
    filter: any={};
    state: any='';
    conData1: any;
    contractorData:any =[];
    // defaultSelectedRadio = "data.user_type=1";
    
    
    constructor(public navCtrl: NavController, public constant:ConstantProvider, public toastCtrl: ToastController,public navParams: NavParams, public service:DbserviceProvider,public alertCtrl:AlertController ,public actionSheetController: ActionSheetController,private camera: Camera,private loadingCtrl:LoadingController,public modalCtrl: ModalController,private storage:Storage,public translate:TranslateService) {
        this.uploadurl = this.constant.upload_url;
        this.data.mobile_no = this.navParams.get('mobile_no');
        this.lang = this.navParams.get('lang');
        console.log(this.data.mobile_no);
        this.data.profile='';
        this.data.document_image='';
        console.log(this.data.profile);
        this.data.document_type='Aadharcard';
        this.today_date = new Date().toISOString().slice(0,10);
        this.data.user_type=1;
        console.log(this.data.user_type);
        
        this.getstatelist();
        if(navParams.data.data){
            this.data = navParams.data.data;

            


            this.image_data=this.data.shop_image;
            console.log(this.image_data)
            for(let i=0; i<this.image_data.length; i++){
            this.data.doc_id=this.image_data[i].id
            console.log(this.data.doc_id)

            }
            // this.data.doc_id=this.image_data.id


            this.data.karigar_edit_id = this.data.id;
            this.data.profile_edit_id = this.data.id;
            this.data.doc_edit_id = this.data.id;
            console.log(this.data.status);

            this.getdistributorlist(this.data.state)
            // this.data.profile= this.data.profile;
            // this.data.document_image = this.data.document_image
            // this.data.document_image_back = this.data.document_image_back
            // this.data.cheque_image = this.data.cheque_image
        }
        console.log(this.data.karigar_edit_id);
        
    }
    
    cam:any="";
    gal:any="";
    cancl:any="";
    ok:any="";
    upl_file:any="";
    save_succ:any="";
    ionViewDidLoad() {
        console.log('ionViewDidLoad RegistrationPage');
       
        
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
        if (this.data.state) {
            console.log(this.data.state)
            this.getDistrictList(this.data.state);
            this.getdistributorlist(this.data.state)
        }
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
        
        this.translate.get("Registered Successfully")
        .subscribe(resp=>{
            this.save_succ = resp
        });
    }
    
       getdistributorlist(state){
        console.log(state);
        this.filter.state = state;
        console.log();
        
        if(this.data.user_type == '2'){
            console.log(this.data.user_type)

        this.service.post_rqst( {'filter':this.filter}, 'app_karigar/distributorList').subscribe( r =>
          {
            this.distributor_list = r.karigars;
            console.log(this.distributor_list);
            
         
          
          });
            // this.loading.dismiss();
        }
    
          
        }

   
    getstatelist(){
        this.service.get_rqst('app_master/getStates').subscribe( r =>
            {
                console.log(r);
                this.state_list=r['states'];
                this.karigar_id=r['id'];
                console.log(this.state_list);
                this.getdistributorlist(this.data.state)
            });
        }
        getDistrictList(state_name)
        {
            console.log(state_name);
            this.service.post_rqst({'state_name':state_name},'app_master/getDistrict')
            .subscribe( (r) =>
            {
                console.log(r);
                this.district_list=r['districts'];
                console.log(this.state_list);
            });
            this.getdistributorlist(state_name);
        }
        
        getCityList(district_name)
        {
            console.log(district_name);
            this.service.post_rqst({'district_name':district_name},'app_master/getCity')
            .subscribe( (r) =>
            {
                console.log(r);
                this.city_list=r['cities'];
                this.pincode_list=r['pins'];
                console.log(this.pincode_list);
            });
        }
        
        RequiredAlert(text) {
            let alert = this.alertCtrl.create({
                title: 'Alert!',
                cssClass: 'action-close',
                subTitle: text,
                buttons: ['OK']
            });
            alert.present();
        }

        getaddress(pincode)
        {
            if(this.data.pincode.length=='6')
            {
                this.service.post_rqst({'pincode':pincode},'app_karigar/getAddress')
                .subscribe( (result) =>
                {
                    console.log(result);
                    var address = result.address;
                    if(address!= null)
                    {
                        this.data.state = result.address.state_name;
                        this.getDistrictList(this.data.state);
                        this.getdistributorlist(this.data.state);

                        this.data.district = result.address.district_name;
                        this.data.city = result.address.city;
                        console.log(this.data);
                    }
                    else if (address == null) {
                       
                        this.RequiredAlert("Please Enter Valid Pincode");
                        this.data.state = '';
                        this.data.district = '';
                        this.data.city = '';
                        return;
                    }
                });
            }
            
        }
        
        scrollUp()
        {
            this.content.scrollToTop();
        } 
        
        presentToast() {
            const toast = this.toastCtrl.create({
                message: 'Document image required',
                duration: 3000
            });
            toast.present();
        }
    saveFlag:any = false;
        
        submit()
        {
            console.log('data');
            console.log(this.data);
            if(!this.data.whatsapp_mobile_no){
                this.data.whatsapp_mobile_no="";
            }

           
            
            // if(!this.data.document_image){
            //     this.presentToast();
            //     return
            // }

           
            this.data.lang = this.lang;
         
            this.data.created_by='0';
            this.saveFlag = true;

            this.presentLoading();
           
            console.log(this.data);
         
            


            // if(this.contractorData < 1){
            //     this.alertToast('Please add one item at least!')
            //     return
            //    }
            // this.presentLoading();
            // this.saveFlag = true;
            // this.conData1.part = this.contractorData;
            // this.conData1.contractor_id = this.service.karigar_id;
            // this.conData1.image = this.image_data?this.image_data:[];

            this.data.shop_image = this.image_data?this.image_data:[];
            console.log(this.image_data);
            

            this.service.post_rqst( {'karigar': this.data },'app_karigar/addKarigar')
            .subscribe( (r) =>
            {
                console.log(r);
                this.loading.dismiss();
                this.karigar_id=r['id'];
                console.log(this.karigar_id);
                
                if(r['status']=="SUCCESS")
                {
                    this.showSuccess(this.save_succ+"!");
                    this.service.post_rqst({'mobile_no': this.data.mobile_no ,'mode' :'App'},'auth/login')
                    .subscribe( (r) =>
                    {
                        console.log(r);
                        if(r['status'] == 'NOT FOUND')
                        {
                            return;
                        } 
                        else if(r['status'] == 'ACCOUNT SUSPENDED')
                        {
                            this.translate.get("Your account has been suspended")
                            .subscribe(resp=>{
                                this.showAlert(resp);
                            })
                            return;
                        }
                        else if(r['status'] == 'SUCCESS')
                        {
                            this.storage.set('token',r['token']); 
                            this.service.karigar_id=r['user'].id;
                            this.service.karigar_status=r['user'].status;
                            console.log(this.service.karigar_id);
                            
                            if(r['user'].status !='Verified' && r['user'].user_type!=3)
                            {
                                // let contactModal = this.modalCtrl.create(AboutusModalPage);
                                // contactModal.present();
                                this.navCtrl.push(AboutusModalPage)
                                return;
                            }
                        }
                        
                        // this.navCtrl.push(TabsPage);
                        this.navCtrl.push(HomePage);
                    });
                }
                else if(r['status']=="EXIST")
                {
                    this.translate.get("Already Registered")
                    .subscribe(resp=>{
                        this.showAlert(resp+"!");
                    })
                }
            });
        }
        namecheck(event: any) 
        {
            console.log("called");
            
            const pattern = /[A-Z\+\-\a-z ]/;
            let inputChar = String.fromCharCode(event.charCode);
            if (event.keyCode != 8 && !pattern.test(inputChar)) 
            {event.preventDefault(); }
        }
        
        
        
        
        MobileNumber(event: any) {
            const pattern = /[0-9]/;
            let inputChar = String.fromCharCode(event.charCode);
            if (event.keyCode != 8 && !pattern.test(inputChar)) {
                event.preventDefault();
            }
        }
        
        caps_add(add:any)
        {
            this.data.address = add.replace(/\b\w/g, l => l.toUpperCase());
        }
        
        showSuccess(text)
        {
            this.translate.get("Success")
            .subscribe(resp=>{
                let alert = this.alertCtrl.create({
                    title:resp+'!',
                    cssClass:'action-close',
                    subTitle: text,
                    buttons: [this.ok]
                });
                alert.present();
            })
        }
        showAlert(text) 
        {
            this.translate.get("Alert")
            .subscribe(resp=>{
                let alert = this.alertCtrl.create({
                    title:resp+'!',
                    cssClass:'action-close',
                    subTitle: text,
                    buttons: [this.ok]
                });
                alert.present();
            })
        }
        openeditprofile()
        {
            let actionsheet = this.actionSheetController.create({
                title:"Profile photo",
                cssClass: 'cs-actionsheet',
                
                buttons:[{
                    cssClass: 'sheet-m',
                    text: this.cam,
                    icon:'camera',
                    handler: () => {
                        console.log("Camera Clicked");
                        this.takePhoto();
                    }
                },
                {
                    cssClass: 'sheet-m1',
                    text: this.gal,
                    icon:'image',
                    handler: () => {
                        console.log("Gallery Clicked");
                        this.getImage();
                    }
                },
                {
                    cssClass: 'cs-cancel',
                    text: this.cancl,
                    role: 'cancel',
                    handler: () => {
                        this.data.profile_edit_id = this.data.id;
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    }
    takePhoto()
    {
        console.log("i am in camera function");
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth : 500,
            targetHeight : 400,
            cameraDirection: 1,
            correctOrientation: true
        }
        
        console.log(options);
        this.camera.getPicture(options).then((imageData) => {
            this.data.profile_edit_id = '';
            this.data.profile = 'data:image/jpeg;base64,' + imageData;
            console.log(this.data.profile);
        }, (err) => {
        });
    }
    getImage() 
    {
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum:false
        }
        console.log(options);
        this.camera.getPicture(options).then((imageData) => {
            this.data.profile_edit_id = '';
            this.data.profile = 'data:image/jpeg;base64,' + imageData;
            console.log(this.data.profile);
        }, (err) => {
        });
    }
    
    flag:boolean=true;  
    
    onUploadChange(evt: any) {
        let actionsheet = this.actionSheetController.create({
            title:this.upl_file,
            cssClass: 'cs-actionsheet',
            
            buttons:[{
                cssClass: 'sheet-m',
                text: this.cam,
                icon:'camera',
                handler: () => {
                    console.log("Camera Clicked");
                    this.takeDocPhoto();
                }
            },
            {
                cssClass: 'sheet-m1',
                text: this.gal,
                icon:'image',
                handler: () => {
                    console.log("Gallery Clicked");
                    this.getDocImage();
                }
            },
            {
                cssClass: 'cs-cancel',
                text: this.cancl,
                role: 'cancel',
                handler: () => {
                    this.data.doc_edit_id = this.data.id;
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
        targetWidth : 800,
        targetHeight : 600
    }
    
    console.log(options);
    this.camera.getPicture(options).then((imageData) => {
        this.flag=false;
        this.data.doc_edit_id='',
        this.data.document_image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.data.document_image);
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
        this.data.doc_edit_id='';
        this.data.document_image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.data.document_image,'add image');
        console.log(this.data.doc_edit_id,'previuos  image');

    }, (err) => {
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












onUploadBackChange(evt: any) {
    let actionsheet = this.actionSheetController.create({
        title:this.upl_file,
        cssClass: 'cs-actionsheet',
        buttons:[{
            cssClass: 'sheet-m',
            text: this.cam,
            icon:'camera',
            handler: () => {
                this.backDocPhoto();
            }
        },
        {
            cssClass: 'sheet-m1',
            text: this.gal,
            icon:'image',
            handler: () => {
                this.backDocImage();
            }
        },
        {
            cssClass: 'cs-cancel',
            text: this.cancl,
            role: 'cancel',
            handler: () => {
            }
        }
    ]
});
actionsheet.present();
}
backDocPhoto()
{
    const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth : 500,
        targetHeight : 400
    }
    
    console.log(options);
    this.camera.getPicture(options).then((imageData) => {
        this.flag=false;
        this.data.document_image_back = 'data:image/jpeg;base64,' + imageData;
        console.log(this.data.document_image_back);
    }, (err) => {
    });
}
backDocImage()
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
        this.data.document_image_back = 'data:image/jpeg;base64,' + imageData;
        console.log(this.data.document_image_back);
    }, (err) => {
    });
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
    this.data.doc_id ='';
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
    this.data.doc_id ='';
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
  















  


onUploadPancard(evt: any) {
    let actionsheet = this.actionSheetController.create({
        title:this.upl_file,
        cssClass: 'cs-actionsheet',
        buttons:[{
            cssClass: 'sheet-m',
            text: this.cam,
            icon:'camera',
            handler: () => {
                this.backDocPan();
            }
        },
        {
            cssClass: 'sheet-m1',
            text: this.gal,
            icon:'image',
            handler: () => {
                this.backDocPanimage();
            }
        },
        {
            cssClass: 'cs-cancel',
            text: this.cancl,
            role: 'cancel',
            handler: () => {
            }
        }
    ]
});
actionsheet.present();
}
backDocPan()
{
    const options: CameraOptions = {
        quality: 70,
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth : 500,
        targetHeight : 400
    }
    
    console.log(options);
    this.camera.getPicture(options).then((imageData) => {
        this.flag=false;
        this.data.pan_image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.data.pan_image);
    }, (err) => {
    });
}
backDocPanimage()
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
        this.data.pan_image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.data.pan_image);
    }, (err) => {
    });
}



}
