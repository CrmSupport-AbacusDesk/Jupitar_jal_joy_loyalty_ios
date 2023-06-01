import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContractorAddPage } from './contractor-add';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    ContractorAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ContractorAddPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
})
export class ContractorAddPageModule {}
