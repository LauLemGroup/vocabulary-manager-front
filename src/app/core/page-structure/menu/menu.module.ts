import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralMenuComponent } from './general-menu/general-menu.component';



@NgModule({
  declarations: [
    GeneralMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GeneralMenuComponent
  ]
})
export class MenuModule { }
