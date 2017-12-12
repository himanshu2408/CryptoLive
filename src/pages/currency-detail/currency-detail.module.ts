import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrencyDetailPage } from './currency-detail';

@NgModule({
  declarations: [
    CurrencyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrencyDetailPage),
  ],
})
export class CurrencyDetailPageModule {}
