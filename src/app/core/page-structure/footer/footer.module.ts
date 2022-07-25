import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralFooterComponent } from './general-footer/general-footer.component';



@NgModule({
  declarations: [
    GeneralFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GeneralFooterComponent
  ]
})
export class FooterModule { }
