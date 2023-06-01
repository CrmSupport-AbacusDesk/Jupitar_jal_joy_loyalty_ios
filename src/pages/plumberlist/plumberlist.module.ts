import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { createTranslateLoader } from '../redeem-type/redeem-type.module';
import { PlumberlistPage } from './plumberlist';

@NgModule({
  declarations: [
    PlumberlistPage,
  ],
  imports: [
    IonicPageModule.forChild(PlumberlistPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
})
export class PlumberlistPageModule {}
