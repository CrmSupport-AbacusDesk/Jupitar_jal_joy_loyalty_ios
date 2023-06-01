import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessModalPage } from './success-modal';

@NgModule({
  declarations: [
    SuccessModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SuccessModalPage),
  ],
})
export class SuccessModalPageModule {}
