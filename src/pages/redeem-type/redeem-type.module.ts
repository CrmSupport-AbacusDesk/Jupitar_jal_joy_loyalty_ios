import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedeemTypePage } from './redeem-type';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    RedeemTypePage,
  ],
  imports: [
    IonicPageModule.forChild(RedeemTypePage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
})
export class RedeemTypePageModule {}
