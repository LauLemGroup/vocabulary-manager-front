import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BodyModule } from '../core/page-structure/body/body.module';
import { PageStructureModule } from '../core/page-structure/page-structure/page-structure.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageStructureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
