import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProdPage } from './edit-prod';

@NgModule({
  declarations: [
    EditProdPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProdPage),
  ],
})
export class EditProdPageModule {}
