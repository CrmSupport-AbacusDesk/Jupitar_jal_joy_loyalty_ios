import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { createTranslateLoader } from '../redeem-type/redeem-type.module';
import { PlumberaddPage } from './plumberadd';

@NgModule({
  declarations: [
    PlumberaddPage,
  ],
  imports: [
    IonicPageModule.forChild(PlumberaddPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
})
export class PlumberaddPageModule {}
