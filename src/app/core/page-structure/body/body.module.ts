import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBodyComponent } from './home-body/home-body.component';



@NgModule({
  declarations: [
    HomeBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeBodyComponent
  ]
})
export class BodyModule { }
