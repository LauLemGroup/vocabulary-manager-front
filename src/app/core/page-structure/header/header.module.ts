import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralHeaderComponent } from './general-header/general-header.component';



@NgModule({
  declarations: [
    GeneralHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GeneralHeaderComponent
  ]
})
export class HeaderModule { }
