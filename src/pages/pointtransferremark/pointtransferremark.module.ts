import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { createTranslateLoader } from '../redeem-type/redeem-type.module';
import { PointtransferremarkPage } from './pointtransferremark';

@NgModule({
  declarations: [
    PointtransferremarkPage,
  ],
  imports: [
    IonicPageModule.forChild(PointtransferremarkPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
})
export class PointtransferremarkPageModule {}
