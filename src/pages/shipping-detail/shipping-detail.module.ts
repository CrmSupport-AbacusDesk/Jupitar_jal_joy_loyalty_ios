import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShippingDetailPage } from './shipping-detail';
import { createTranslateLoader } from '../offers/offers.module';

@NgModule({
  declarations: [
    ShippingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ShippingDetailPage),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
})
export class ShippingDetailPageModule {}
