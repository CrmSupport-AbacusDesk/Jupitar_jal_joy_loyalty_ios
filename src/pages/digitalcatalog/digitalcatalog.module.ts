import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DigitalcatalogPage } from './digitalcatalog';
import { createTranslateLoader } from '../offers/offers.module';

@NgModule({
  declarations: [
    DigitalcatalogPage,
  ],
  imports: [
    IonicPageModule.forChild(DigitalcatalogPage),
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    })
  ],
})
export class DigitalcatalogPageModule {}
