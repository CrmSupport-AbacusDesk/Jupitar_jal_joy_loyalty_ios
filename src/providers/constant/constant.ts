import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantProvider {

  constructor(public http: Http) {
    console.log('Hello ConstantProvider Provider');
  }

  // live url
  public rootUrl: string = 'https://jaluphaar.in/dd_api/';  
  public server_url: string = this.rootUrl + 'index.php/app/';
  public upload_url: string ='https://jaluphaar.in/dd_api/app/uploads/';

// Testing url

  // public rootUrl: string = 'https://devcrm.abacusdesk.com/jupiteraqualines/dd_api/';  
  // public server_url: string = this.rootUrl + 'index.php/app/';
  // public upload_url: string ='https://devcrm.abacusdesk.com/jupiteraqualines/dd_api/app/uploads/';


  // clonned url
  // public rootUrl: string = 'http://phpstack-83335-1175063.cloudwaysapps.com/dd_api/';  
  // public server_url: string = this.rootUrl + 'index.php/app/';
  // public upload_url: string ='http://phpstack-83335-1175063.cloudwaysapps.com/dd_api/app/uploads/';

  public backButton = 0;

}
