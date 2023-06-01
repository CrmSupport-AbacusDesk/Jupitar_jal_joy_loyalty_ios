import { PlumberlistPage } from './../plumberlist/plumberlist';
import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TranslateService } from '@ngx-translate/core';
import { ActionSheetController, AlertController, IonicPage, Loading, LoadingController, ModalController, NavController, NavParams } from 'ionic-angular';
import { DbserviceProvider } from '../../providers/dbservice/dbservice';
import { HomePage } from '../home/home';

/**
 * Generated class for the PlumberaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plumberadd',
  templateUrl: 'plumberadd.html',
})
export class PlumberaddPage {
 data:any={};
 saveFlag:any = false;
 district_list:any=[];
    city_list:any=[];
    pincode_list:any=[];
 cam:any="";
 gal:any="";
 cancl:any="";
 ok:any="";
 today_date:any;
 save_succ:any="";


 upl_file:any="";
  karigar_id: any;
    user_type: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController ,public dbService:DbserviceProvider, public actionSheetController: ActionSheetController,private camera: Camera,private loadingCtrl:LoadingController,public modalCtrl: ModalController,public translate:TranslateService) {
    this.getstatelist();

    this.data.document_image='';
    console.log(this.data.profile);
    this.data.document_type='Aadharcard';
    this.today_date = new Date().toISOString().slice(0,10);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlumberaddPage');

    if (this.data.state) {
      this.getDistrictList(this.data.state);
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


flag:boolean=true;  

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
    console.log(this.data.document_image);
}, (err) => {
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

caps_add(add:any)
{
    this.data.address = add.replace(/\b\w/g, l => l.toUpperCase());
}

MobileNumber(event: any) {
  const pattern = /[0-9]/;
  let inputChar = String.fromCharCode(event.charCode);
  if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
  }
}

loading:Loading;

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



     submit()
        {
            console.log('data');
            console.log(this.data);
            // if(!this.data.whatsapp_mobile_no){
            //     this.data.whatsapp_mobile_no="";
            // }

           
            
            // if(!this.data.document_image){
            //     this.presentToast();
            //     return
            // }

           
         
            this.saveFlag = true;

            this.presentLoading();
           
            console.log(this.data);
            this.data.user_type =1
            
            this.dbService.post_rqst( {'karigar': this.data ,'dealer_id':this.dbService.karigar_id},'app_karigar/addplumber')
            .subscribe( (r) =>
            {
              this.loading.dismiss();
                console.log(r);
                 if(r['status']=="SUCCESS")
                {                       
                        this.navCtrl.push(PlumberlistPage);
                        return;

                    }  else if(r['status']=="EXIST")
                    {
                        this.translate.get("Already Registered")
                        .subscribe(resp=>{
                            this.showAlert(resp+"!");
                        })
                        this.navCtrl.push(PlumberlistPage);

                    }
                       
                
            });
        }
        state_list:any=[];

        getDistrictList(state_name)
        {
            console.log(state_name);
            this.dbService.post_rqst({'state_name':state_name},'app_master/getDistrict')
            .subscribe( (r) =>
            {
                console.log(r);
                this.district_list=r['districts'];
                console.log(this.district_list);
            });
        }
        
        getCityList(district_name)
        {
            console.log(district_name);
            this.dbService.post_rqst({'district_name':district_name},'app_master/getCity')
            .subscribe( (r) =>
            {
                console.log(r);
                this.city_list=r['cities'];
                this.pincode_list=r['pins'];
                console.log(this.pincode_list);
            });
        }

        getstatelist(){
          this.dbService.get_rqst('app_master/getStates').subscribe( r =>
              {
                  console.log(r);
                  this.state_list=r['states'];
                  this.karigar_id=r['id'];
                  console.log(this.state_list);
              });
          }
        
        getaddress(pincode)
        {
            if(this.data.pincode.length=='6')
            {
                this.dbService.post_rqst({'pincode':pincode},'app_karigar/getAddress')
                .subscribe( (result) =>
                {
                    console.log(result);
                    var address = result.address;
                    if(address!= null)
                    {
                        this.data.state = result.address.state_name;
                        console.log(this.data.state);
                        
                        this.getDistrictList(this.data.state)
                        this.data.district = result.address.district_name;
                        this.data.city = result.address.city;
                        console.log(this.data);
                    }
                });
            }
            
        }




}
