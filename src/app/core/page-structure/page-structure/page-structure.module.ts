import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../menu/menu.module';
import { HeaderModule } from '../header/header.module';
import { BodyModule } from '../body/body.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderModule,
    MenuModule,
    BodyModule,
    FooterModule
  ]
})
export class PageStructureModule { }
